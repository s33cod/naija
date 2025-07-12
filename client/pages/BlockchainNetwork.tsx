import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  WalletConnectionButton,
  BlockchainProfileSetup,
  useWallet,
} from "@/components/blockchain/WalletAuth";
import {
  Users,
  Send,
  CheckCircle,
  XCircle,
  Clock,
  Shield,
  Star,
  Link,
  MessageCircle,
  ArrowRight,
  Search,
  Filter,
} from "lucide-react";
import {
  useBlockchain,
  P2PConnection,
  BlockchainProfile,
} from "@/lib/blockchain";

export default function BlockchainNetwork() {
  const { isConnected, walletAddress, profile } = useWallet();
  const { blockchain } = useBlockchain();
  const [connections, setConnections] = useState<P2PConnection[]>([]);
  const [searchResults, setSearchResults] = useState<BlockchainProfile[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedConnection, setSelectedConnection] =
    useState<P2PConnection | null>(null);

  useEffect(() => {
    if (walletAddress) {
      const userConnections = blockchain.getUserConnections(walletAddress);
      setConnections(userConnections);
    }
  }, [walletAddress, blockchain]);

  useEffect(() => {
    if (searchTerm) {
      const results = blockchain.searchProfiles({
        minReputation: 50,
      });
      setSearchResults(
        results.filter((p) => p.walletAddress !== walletAddress),
      );
    } else {
      setSearchResults([]);
    }
  }, [searchTerm, blockchain, walletAddress]);

  const handleCreateConnection = async (
    toAddress: string,
    type: P2PConnection["connectionType"],
    message: string,
  ) => {
    if (!walletAddress) return;

    try {
      const connection = await blockchain.createConnection(
        walletAddress,
        toAddress,
        type,
        message,
      );
      setConnections([...connections, connection]);
    } catch (error) {
      console.error("Failed to create connection:", error);
    }
  };

  const handleUpdateConnection = async (
    connectionId: string,
    status: "accepted" | "rejected",
  ) => {
    if (!walletAddress) return;

    try {
      const updatedConnection = await blockchain.updateConnectionStatus(
        connectionId,
        status,
        walletAddress,
      );
      if (updatedConnection) {
        setConnections(
          connections.map((conn) =>
            conn.id === connectionId ? updatedConnection : conn,
          ),
        );
      }
    } catch (error) {
      console.error("Failed to update connection:", error);
    }
  };

  const formatAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  const getConnectionStatusIcon = (status: P2PConnection["status"]) => {
    switch (status) {
      case "accepted":
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case "rejected":
        return <XCircle className="w-4 h-4 text-red-500" />;
      default:
        return <Clock className="w-4 h-4 text-yellow-500" />;
    }
  };

  const getConnectionTypeIcon = (type: P2PConnection["connectionType"]) => {
    switch (type) {
      case "mentor":
        return "👨‍🏫";
      case "collaborator":
        return "🤝";
      default:
        return "🔗";
    }
  };

  if (!isConnected) {
    return (
      <div className="min-h-screen bg-background">
        {/* Header */}
        <header className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-r from-naija-green to-naija-green-light rounded-full"></div>
                  <span className="text-xl font-bold text-gray-900">
                    NaijaPro Connect
                  </span>
                </div>
              </div>
              <nav className="hidden md:flex space-x-8">
                <a href="/" className="text-gray-600 hover:text-primary">
                  Home
                </a>
                <a
                  href="/professionals"
                  className="text-gray-600 hover:text-primary"
                >
                  Professionals
                </a>
                <a
                  href="/industry"
                  className="text-gray-600 hover:text-primary"
                >
                  Industries
                </a>
                <a
                  href="/blockchain"
                  className="text-gray-900 hover:text-primary font-medium"
                >
                  Blockchain Network
                </a>
              </nav>
              <div className="flex items-center space-x-4">
                <WalletConnectionButton />
              </div>
            </div>
          </div>
        </header>

        {/* Connect Wallet CTA */}
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          <div className="space-y-6">
            <div className="w-24 h-24 bg-gradient-to-r from-naija-green to-naija-green-light rounded-full flex items-center justify-center mx-auto">
              <Shield className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900">
              Blockchain Professional Network
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Connect your Web3 wallet to access decentralized professional
              networking, verifiable credentials, and secure peer-to-peer
              connections.
            </p>
            <WalletConnectionButton />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-naija-green to-naija-green-light rounded-full"></div>
                <span className="text-xl font-bold text-gray-900">
                  NaijaPro Connect
                </span>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="/" className="text-gray-600 hover:text-primary">
                Home
              </a>
              <a
                href="/professionals"
                className="text-gray-600 hover:text-primary"
              >
                Professionals
              </a>
              <a href="/industry" className="text-gray-600 hover:text-primary">
                Industries
              </a>
              <a
                href="/blockchain"
                className="text-gray-900 hover:text-primary font-medium"
              >
                Blockchain Network
              </a>
            </nav>
            <div className="flex items-center space-x-4">
              <WalletConnectionButton />
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-naija-green to-naija-green-light text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">
                🔗 Blockchain Network
              </h1>
              <p className="text-lg opacity-90">
                Decentralized professional networking with Web3 technology
              </p>
            </div>
            <div className="text-right">
              <div className="text-sm opacity-75">Connected Wallet</div>
              <div className="font-mono text-lg">
                {formatAddress(walletAddress || "")}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Profile Setup */}
          <div className="lg:col-span-1">
            <BlockchainProfileSetup />
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="connections" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="connections">My Connections</TabsTrigger>
                <TabsTrigger value="discover">Discover</TabsTrigger>
                <TabsTrigger value="requests">Requests</TabsTrigger>
              </TabsList>

              <TabsContent value="connections" className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">Active Connections</h3>
                  <Badge className="bg-naija-green">
                    {connections.filter((c) => c.status === "accepted").length}{" "}
                    Connected
                  </Badge>
                </div>

                {connections
                  .filter((c) => c.status === "accepted")
                  .map((connection) => (
                    <Card
                      key={connection.id}
                      className="hover:shadow-md transition-shadow"
                    >
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="text-2xl">
                              {getConnectionTypeIcon(connection.connectionType)}
                            </div>
                            <div>
                              <div className="font-medium">
                                {formatAddress(
                                  connection.fromAddress === walletAddress
                                    ? connection.toAddress
                                    : connection.fromAddress,
                                )}
                              </div>
                              <div className="text-sm text-gray-600 capitalize">
                                {connection.connectionType} Connection
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            {getConnectionStatusIcon(connection.status)}
                            <Button variant="outline" size="sm">
                              <MessageCircle className="w-4 h-4 mr-2" />
                              Message
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}

                {connections.filter((c) => c.status === "accepted").length ===
                  0 && (
                  <div className="text-center py-8">
                    <Users className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <h4 className="text-lg font-medium text-gray-900 mb-2">
                      No connections yet
                    </h4>
                    <p className="text-gray-600">
                      Start discovering and connecting with professionals
                    </p>
                  </div>
                )}
              </TabsContent>

              <TabsContent value="discover" className="space-y-4">
                <div className="flex gap-4">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <Input
                      placeholder="Search blockchain professionals..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                  <Button variant="outline">
                    <Filter className="w-4 h-4 mr-2" />
                    Filter
                  </Button>
                </div>

                {searchResults.map((searchProfile) => (
                  <Card
                    key={searchProfile.walletAddress}
                    className="hover:shadow-md transition-shadow"
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-gradient-to-r from-naija-green to-naija-green-light rounded-full flex items-center justify-center text-white font-bold">
                            {searchProfile.walletAddress
                              .slice(2, 4)
                              .toUpperCase()}
                          </div>
                          <div>
                            <div className="font-medium">
                              {formatAddress(searchProfile.walletAddress)}
                            </div>
                            <div className="flex items-center gap-2 text-sm text-gray-600">
                              <Star className="w-3 h-3 text-yellow-500" />
                              {searchProfile.reputation} reputation
                              <Badge variant="outline" className="text-xs">
                                {searchProfile.verificationLevel}
                              </Badge>
                            </div>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <ConnectDialog
                            targetAddress={searchProfile.walletAddress}
                            onConnect={handleCreateConnection}
                          />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}

                {searchTerm && searchResults.length === 0 && (
                  <div className="text-center py-8">
                    <Search className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <h4 className="text-lg font-medium text-gray-900 mb-2">
                      No professionals found
                    </h4>
                    <p className="text-gray-600">
                      Try adjusting your search terms
                    </p>
                  </div>
                )}
              </TabsContent>

              <TabsContent value="requests" className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">Connection Requests</h3>
                  <Badge variant="outline">
                    {
                      connections.filter(
                        (c) =>
                          c.status === "pending" &&
                          c.toAddress === walletAddress,
                      ).length
                    }{" "}
                    Pending
                  </Badge>
                </div>

                {connections
                  .filter(
                    (c) =>
                      c.status === "pending" && c.toAddress === walletAddress,
                  )
                  .map((connection) => (
                    <Card
                      key={connection.id}
                      className="border-l-4 border-l-yellow-500"
                    >
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="text-2xl">
                              {getConnectionTypeIcon(connection.connectionType)}
                            </div>
                            <div>
                              <div className="font-medium">
                                Connection Request from{" "}
                                {formatAddress(connection.fromAddress)}
                              </div>
                              <div className="text-sm text-gray-600 capitalize">
                                {connection.connectionType} Connection
                              </div>
                              {connection.encryptedMessage && (
                                <div className="text-sm text-gray-600 mt-1">
                                  "Message included"
                                </div>
                              )}
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() =>
                                handleUpdateConnection(
                                  connection.id,
                                  "rejected",
                                )
                              }
                            >
                              <XCircle className="w-4 h-4 mr-2" />
                              Decline
                            </Button>
                            <Button
                              size="sm"
                              className="bg-naija-green hover:bg-naija-green-dark"
                              onClick={() =>
                                handleUpdateConnection(
                                  connection.id,
                                  "accepted",
                                )
                              }
                            >
                              <CheckCircle className="w-4 h-4 mr-2" />
                              Accept
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}

                {connections.filter(
                  (c) =>
                    c.status === "pending" && c.toAddress === walletAddress,
                ).length === 0 && (
                  <div className="text-center py-8">
                    <Clock className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <h4 className="text-lg font-medium text-gray-900 mb-2">
                      No pending requests
                    </h4>
                    <p className="text-gray-600">
                      New connection requests will appear here
                    </p>
                  </div>
                )}
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}

function ConnectDialog({
  targetAddress,
  onConnect,
}: {
  targetAddress: string;
  onConnect: (
    address: string,
    type: P2PConnection["connectionType"],
    message: string,
  ) => void;
}) {
  const [showDialog, setShowDialog] = useState(false);
  const [connectionType, setConnectionType] =
    useState<P2PConnection["connectionType"]>("professional");
  const [message, setMessage] = useState("");

  const handleConnect = () => {
    onConnect(targetAddress, connectionType, message);
    setShowDialog(false);
    setMessage("");
  };

  return (
    <Dialog open={showDialog} onOpenChange={setShowDialog}>
      <DialogTrigger asChild>
        <Button className="bg-naija-green hover:bg-naija-green-dark">
          <Link className="w-4 h-4 mr-2" />
          Connect
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Send Connection Request</DialogTitle>
          <DialogDescription>
            Send a blockchain-verified connection request to this professional.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium">Connection Type</label>
            <Select
              value={connectionType}
              onValueChange={(value: any) => setConnectionType(value)}
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="professional">
                  Professional Network
                </SelectItem>
                <SelectItem value="mentor">Mentorship</SelectItem>
                <SelectItem value="collaborator">Collaboration</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <label className="text-sm font-medium">Message (Optional)</label>
            <Textarea
              placeholder="Introduce yourself and explain why you'd like to connect..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={3}
            />
          </div>
          <Alert>
            <Shield className="h-4 w-4" />
            <AlertDescription>
              This connection request will be cryptographically signed and
              recorded on the blockchain.
            </AlertDescription>
          </Alert>
          <div className="flex gap-2">
            <Button
              variant="outline"
              onClick={() => setShowDialog(false)}
              className="flex-1"
            >
              Cancel
            </Button>
            <Button
              onClick={handleConnect}
              className="flex-1 bg-naija-green hover:bg-naija-green-dark"
            >
              <Send className="w-4 h-4 mr-2" />
              Send Request
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
