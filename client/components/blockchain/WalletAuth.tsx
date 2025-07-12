import React, { useState, useEffect, createContext, useContext } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  Wallet,
  Shield,
  CheckCircle,
  AlertCircle,
  Copy,
  ExternalLink,
} from "lucide-react";
import { useBlockchain, BlockchainProfile } from "@/lib/blockchain";

interface WalletContextType {
  isConnected: boolean;
  walletAddress: string | null;
  profile: BlockchainProfile | null;
  connectWallet: () => Promise<void>;
  disconnectWallet: () => void;
  createProfile: (data: Partial<BlockchainProfile>) => Promise<void>;
}

const WalletContext = createContext<WalletContextType | null>(null);

export const useWallet = () => {
  const context = useContext(WalletContext);
  if (!context) {
    throw new Error("useWallet must be used within WalletProvider");
  }
  return context;
};

export function WalletProvider({ children }: { children: React.ReactNode }) {
  const [isConnected, setIsConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState<string | null>(null);
  const [profile, setProfile] = useState<BlockchainProfile | null>(null);
  const { blockchain } = useBlockchain();

  useEffect(() => {
    // Check if wallet was previously connected
    const savedAddress = localStorage.getItem("naijapro_wallet_address");
    if (savedAddress) {
      setWalletAddress(savedAddress);
      setIsConnected(true);
      const savedProfile = blockchain.getProfile(savedAddress);
      setProfile(savedProfile);
    }
  }, [blockchain]);

  const connectWallet = async () => {
    try {
      const connection = await blockchain.connectWallet();
      if (connection) {
        setWalletAddress(connection.address);
        setIsConnected(true);
        localStorage.setItem("naijapro_wallet_address", connection.address);

        // Check if profile exists
        const existingProfile = blockchain.getProfile(connection.address);
        setProfile(existingProfile);
      }
    } catch (error) {
      console.error("Failed to connect wallet:", error);
    }
  };

  const disconnectWallet = () => {
    setIsConnected(false);
    setWalletAddress(null);
    setProfile(null);
    localStorage.removeItem("naijapro_wallet_address");
  };

  const createProfile = async (data: Partial<BlockchainProfile>) => {
    if (!walletAddress) return;

    try {
      const newProfile = await blockchain.createProfile(walletAddress, data);
      setProfile(newProfile);
    } catch (error) {
      console.error("Failed to create profile:", error);
    }
  };

  return (
    <WalletContext.Provider
      value={{
        isConnected,
        walletAddress,
        profile,
        connectWallet,
        disconnectWallet,
        createProfile,
      }}
    >
      {children}
    </WalletContext.Provider>
  );
}

export function WalletConnectionButton() {
  const { isConnected, walletAddress, connectWallet, disconnectWallet } =
    useWallet();
  const [showDialog, setShowDialog] = useState(false);

  const copyAddress = () => {
    if (walletAddress) {
      navigator.clipboard.writeText(walletAddress);
    }
  };

  const formatAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  if (isConnected && walletAddress) {
    return (
      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogTrigger asChild>
          <Button
            variant="outline"
            className="flex items-center gap-2 bg-naija-green text-white hover:bg-naija-green-dark"
          >
            <Wallet className="w-4 h-4" />
            {formatAddress(walletAddress)}
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-naija-green" />
              Wallet Connected
            </DialogTitle>
            <DialogDescription>
              Your blockchain wallet is connected to NaijaPro Connect
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <span className="text-sm font-mono">{walletAddress}</span>
              <Button variant="ghost" size="sm" onClick={copyAddress}>
                <Copy className="w-4 h-4" />
              </Button>
            </div>
            <div className="flex gap-2">
              <Button
                variant="outline"
                onClick={() => setShowDialog(false)}
                className="flex-1"
              >
                Close
              </Button>
              <Button
                variant="destructive"
                onClick={disconnectWallet}
                className="flex-1"
              >
                Disconnect
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={showDialog} onOpenChange={setShowDialog}>
      <DialogTrigger asChild>
        <Button className="flex items-center gap-2 bg-naija-green hover:bg-naija-green-dark">
          <Wallet className="w-4 h-4" />
          Connect Wallet
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Connect Your Blockchain Wallet</DialogTitle>
          <DialogDescription>
            Connect your Web3 wallet to access blockchain-powered professional
            networking features
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4">
          <Alert>
            <Shield className="h-4 w-4" />
            <AlertDescription>
              Your wallet connection is secure and enables decentralized
              professional verification, P2P networking, and credential
              management.
            </AlertDescription>
          </Alert>

          <div className="grid gap-3">
            <Button
              onClick={connectWallet}
              className="flex items-center justify-between p-4 h-auto bg-naija-green hover:bg-naija-green-dark"
            >
              <div className="flex items-center gap-3">
                <Wallet className="w-6 h-6" />
                <div className="text-left">
                  <div className="font-medium">Connect Wallet</div>
                  <div className="text-sm opacity-90">
                    MetaMask, WalletConnect, and more
                  </div>
                </div>
              </div>
              <ExternalLink className="w-4 h-4" />
            </Button>
          </div>

          <div className="text-sm text-gray-600 space-y-2">
            <p className="font-medium">Benefits of connecting your wallet:</p>
            <ul className="space-y-1 ml-4">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-3 h-3 text-naija-green" />
                Decentralized professional verification
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-3 h-3 text-naija-green" />
                Secure peer-to-peer connections
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-3 h-3 text-naija-green" />
                Blockchain-verified credentials
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-3 h-3 text-naija-green" />
                Reputation-based networking
              </li>
            </ul>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export function BlockchainProfileSetup() {
  const { profile, createProfile, walletAddress } = useWallet();
  const [isCreating, setIsCreating] = useState(false);
  const [showDialog, setShowDialog] = useState(false);

  const handleCreateProfile = async () => {
    if (!walletAddress) return;

    setIsCreating(true);
    try {
      await createProfile({
        verificationLevel: "basic",
        reputation: 100,
      });
      setShowDialog(false);
    } catch (error) {
      console.error("Failed to create profile:", error);
    } finally {
      setIsCreating(false);
    }
  };

  if (profile) {
    return (
      <Card className="border-naija-green">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-naija-green" />
            Blockchain Profile Active
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Verification Level:</span>
              <Badge
                variant={
                  profile.verificationLevel === "premium"
                    ? "default"
                    : "secondary"
                }
              >
                {profile.verificationLevel}
              </Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Reputation Score:</span>
              <Badge className="bg-naija-green">{profile.reputation}</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Connections:</span>
              <span className="text-sm font-medium">
                {profile.connections.length}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Credentials:</span>
              <span className="text-sm font-medium">
                {profile.credentials.length}
              </span>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Dialog open={showDialog} onOpenChange={setShowDialog}>
      <DialogTrigger asChild>
        <Card className="border-dashed border-2 hover:border-naija-green cursor-pointer transition-colors">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-orange-500" />
              Create Blockchain Profile
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600">
              Set up your decentralized professional profile to access
              blockchain networking features.
            </p>
          </CardContent>
        </Card>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create Your Blockchain Profile</DialogTitle>
          <DialogDescription>
            Initialize your decentralized professional profile on the NaijaPro
            Connect blockchain network.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4">
          <Alert>
            <Shield className="h-4 w-4" />
            <AlertDescription>
              Your blockchain profile will be linked to your wallet address and
              enable secure, verifiable professional networking.
            </AlertDescription>
          </Alert>

          <div className="space-y-3">
            <div className="p-3 bg-gray-50 rounded-lg">
              <h4 className="font-medium text-sm mb-2">Profile Features:</h4>
              <ul className="text-xs space-y-1 text-gray-600">
                <li>• Decentralized identity verification</li>
                <li>• Cryptographic credential storage</li>
                <li>• Reputation-based networking</li>
                <li>• Secure peer-to-peer messaging</li>
              </ul>
            </div>
          </div>

          <div className="flex gap-2">
            <Button
              variant="outline"
              onClick={() => setShowDialog(false)}
              className="flex-1"
            >
              Cancel
            </Button>
            <Button
              onClick={handleCreateProfile}
              disabled={isCreating}
              className="flex-1 bg-naija-green hover:bg-naija-green-dark"
            >
              {isCreating ? "Creating..." : "Create Profile"}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
