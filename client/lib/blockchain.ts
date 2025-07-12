// Blockchain utilities for NaijaPro Connect
// Simulated blockchain implementation for demonstration

export interface BlockchainProfile {
  walletAddress: string;
  publicKey: string;
  profileHash: string;
  verificationLevel: "basic" | "verified" | "premium";
  reputation: number;
  connections: string[];
  credentials: ProfessionalCredential[];
  lastActivity: Date;
}

export interface ProfessionalCredential {
  id: string;
  type: "education" | "certification" | "work_experience" | "skill";
  issuer: string;
  title: string;
  description: string;
  verificationHash: string;
  timestamp: Date;
  verified: boolean;
}

export interface P2PConnection {
  id: string;
  fromAddress: string;
  toAddress: string;
  connectionType: "professional" | "mentor" | "collaborator";
  status: "pending" | "accepted" | "rejected";
  encryptedMessage?: string;
  timestamp: Date;
  blockHash: string;
}

export interface BlockchainTransaction {
  id: string;
  type: "connection" | "verification" | "reputation" | "credential";
  from: string;
  to: string;
  data: any;
  hash: string;
  timestamp: Date;
  gasUsed: number;
  status: "pending" | "confirmed" | "failed";
}

class NaijaProBlockchain {
  private profiles: Map<string, BlockchainProfile> = new Map();
  private connections: Map<string, P2PConnection> = new Map();
  private transactions: BlockchainTransaction[] = [];
  private blocks: any[] = [];

  // Simulate wallet connection
  async connectWallet(): Promise<{
    address: string;
    publicKey: string;
  } | null> {
    try {
      // Simulate MetaMask or Web3 wallet connection
      const mockAddress = this.generateMockAddress();
      const mockPublicKey = this.generateMockPublicKey();

      console.log("Blockchain wallet connected:", mockAddress);
      return { address: mockAddress, publicKey: mockPublicKey };
    } catch (error) {
      console.error("Failed to connect wallet:", error);
      return null;
    }
  }

  // Create or update blockchain profile
  async createProfile(
    walletAddress: string,
    profileData: Partial<BlockchainProfile>,
  ): Promise<BlockchainProfile> {
    const profile: BlockchainProfile = {
      walletAddress,
      publicKey: profileData.publicKey || this.generateMockPublicKey(),
      profileHash: this.generateHash(walletAddress + Date.now()),
      verificationLevel: "basic",
      reputation: 100,
      connections: [],
      credentials: [],
      lastActivity: new Date(),
      ...profileData,
    };

    this.profiles.set(walletAddress, profile);

    // Record transaction
    await this.recordTransaction({
      type: "verification",
      from: walletAddress,
      to: "system",
      data: { action: "profile_created" },
    });

    return profile;
  }

  // Get profile by wallet address
  getProfile(walletAddress: string): BlockchainProfile | null {
    return this.profiles.get(walletAddress) || null;
  }

  // Create P2P connection request
  async createConnection(
    fromAddress: string,
    toAddress: string,
    connectionType: P2PConnection["connectionType"],
    message?: string,
  ): Promise<P2PConnection> {
    const connection: P2PConnection = {
      id: this.generateId(),
      fromAddress,
      toAddress,
      connectionType,
      status: "pending",
      encryptedMessage: message ? this.encryptMessage(message) : undefined,
      timestamp: new Date(),
      blockHash: this.generateHash(fromAddress + toAddress + Date.now()),
    };

    this.connections.set(connection.id, connection);

    // Record transaction
    await this.recordTransaction({
      type: "connection",
      from: fromAddress,
      to: toAddress,
      data: { connectionId: connection.id, type: connectionType },
    });

    return connection;
  }

  // Accept or reject connection
  async updateConnectionStatus(
    connectionId: string,
    status: "accepted" | "rejected",
    userAddress: string,
  ): Promise<P2PConnection | null> {
    const connection = this.connections.get(connectionId);
    if (!connection || connection.toAddress !== userAddress) {
      throw new Error("Connection not found or unauthorized");
    }

    connection.status = status;

    if (status === "accepted") {
      // Update both profiles
      const fromProfile = this.profiles.get(connection.fromAddress);
      const toProfile = this.profiles.get(connection.toAddress);

      if (fromProfile && toProfile) {
        fromProfile.connections.push(connection.toAddress);
        toProfile.connections.push(connection.fromAddress);

        // Increase reputation for successful connections
        fromProfile.reputation += 10;
        toProfile.reputation += 10;
      }
    }

    // Record transaction
    await this.recordTransaction({
      type: "connection",
      from: userAddress,
      to: connection.fromAddress,
      data: { connectionId, status },
    });

    return connection;
  }

  // Get connections for a user
  getUserConnections(walletAddress: string): P2PConnection[] {
    return Array.from(this.connections.values()).filter(
      (conn) =>
        conn.fromAddress === walletAddress || conn.toAddress === walletAddress,
    );
  }

  // Add professional credential
  async addCredential(
    walletAddress: string,
    credential: Omit<
      ProfessionalCredential,
      "id" | "verificationHash" | "timestamp" | "verified"
    >,
  ): Promise<ProfessionalCredential> {
    const profile = this.profiles.get(walletAddress);
    if (!profile) {
      throw new Error("Profile not found");
    }

    const newCredential: ProfessionalCredential = {
      ...credential,
      id: this.generateId(),
      verificationHash: this.generateHash(
        credential.title + credential.issuer + Date.now(),
      ),
      timestamp: new Date(),
      verified: false, // Requires verification process
    };

    profile.credentials.push(newCredential);

    // Record transaction
    await this.recordTransaction({
      type: "credential",
      from: walletAddress,
      to: "system",
      data: { credentialId: newCredential.id, type: credential.type },
    });

    return newCredential;
  }

  // Verify credential (would typically involve external verification)
  async verifyCredential(
    credentialId: string,
    verifierAddress: string,
  ): Promise<boolean> {
    for (const profile of this.profiles.values()) {
      const credential = profile.credentials.find((c) => c.id === credentialId);
      if (credential) {
        credential.verified = true;

        // Increase reputation for verified credentials
        profile.reputation += 25;

        // Record transaction
        await this.recordTransaction({
          type: "verification",
          from: verifierAddress,
          to: profile.walletAddress,
          data: { credentialId, action: "verified" },
        });

        return true;
      }
    }
    return false;
  }

  // Search profiles by criteria
  searchProfiles(criteria: {
    industry?: string;
    skills?: string[];
    location?: string;
    minReputation?: number;
  }): BlockchainProfile[] {
    return Array.from(this.profiles.values()).filter((profile) => {
      if (
        criteria.minReputation &&
        profile.reputation < criteria.minReputation
      ) {
        return false;
      }
      // Add more filtering logic based on credentials and profile data
      return true;
    });
  }

  // Get transaction history
  getTransactionHistory(walletAddress: string): BlockchainTransaction[] {
    return this.transactions.filter(
      (tx) => tx.from === walletAddress || tx.to === walletAddress,
    );
  }

  // Private utility methods
  private async recordTransaction(data: {
    type: BlockchainTransaction["type"];
    from: string;
    to: string;
    data: any;
  }): Promise<BlockchainTransaction> {
    const transaction: BlockchainTransaction = {
      id: this.generateId(),
      ...data,
      hash: this.generateHash(data.from + data.to + Date.now()),
      timestamp: new Date(),
      gasUsed: Math.random() * 100000,
      status: "confirmed",
    };

    this.transactions.push(transaction);
    return transaction;
  }

  private generateMockAddress(): string {
    return (
      "0x" +
      Array.from({ length: 40 }, () =>
        Math.floor(Math.random() * 16).toString(16),
      ).join("")
    );
  }

  private generateMockPublicKey(): string {
    return Array.from({ length: 128 }, () =>
      Math.floor(Math.random() * 16).toString(16),
    ).join("");
  }

  private generateHash(input: string): string {
    // Simple hash simulation
    let hash = 0;
    for (let i = 0; i < input.length; i++) {
      const char = input.charCodeAt(i);
      hash = (hash << 5) - hash + char;
      hash = hash & hash; // Convert to 32bit integer
    }
    return Math.abs(hash).toString(16);
  }

  private generateId(): string {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  }

  private encryptMessage(message: string): string {
    // Simple encryption simulation
    return btoa(message.split("").reverse().join(""));
  }

  private decryptMessage(encryptedMessage: string): string {
    // Simple decryption simulation
    return atob(encryptedMessage).split("").reverse().join("");
  }
}

// Singleton instance
export const blockchain = new NaijaProBlockchain();

// Hook for React components
export const useBlockchain = () => {
  return {
    blockchain,
    connectWallet: () => blockchain.connectWallet(),
    createProfile: (address: string, data: Partial<BlockchainProfile>) =>
      blockchain.createProfile(address, data),
    getProfile: (address: string) => blockchain.getProfile(address),
    createConnection: (
      from: string,
      to: string,
      type: P2PConnection["connectionType"],
      message?: string,
    ) => blockchain.createConnection(from, to, type, message),
    getUserConnections: (address: string) =>
      blockchain.getUserConnections(address),
    addCredential: (address: string, credential: any) =>
      blockchain.addCredential(address, credential),
  };
};
