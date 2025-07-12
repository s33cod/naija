import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { WalletConnectionButton } from "@/components/blockchain/WalletAuth";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  ChevronLeft,
  ChevronRight,
  MapPin,
  Users,
  Award,
  ExternalLink,
  MessageCircle,
} from "lucide-react";

const showreelImages = [
  {
    id: 1,
    url: "/api/placeholder/1200/400",
    title: "Connect with Nigeria's Top Professionals",
    description: "Discover talent across industries",
  },
  {
    id: 2,
    url: "/api/placeholder/1200/400",
    title: "Share Skills & Build Networks",
    description: "Collaborate with industry leaders",
  },
  {
    id: 3,
    url: "/api/placeholder/1200/400",
    title: "Verified Professional Profiles",
    description: "Authentic connections through social validation",
  },
];

const industries = [
  { id: "all", name: "All Industries", icon: "🏢", path: "/" },
  {
    id: "banking",
    name: "Banking & Finance",
    icon: "🏦",
    path: "/industry/banking-finance",
  },
  { id: "oil-gas", name: "Oil & Gas", icon: "⛽", path: "/industry/oil-gas" },
  {
    id: "technology",
    name: "Technology",
    icon: "💻",
    path: "/industry/technology",
  },
  {
    id: "entertainment",
    name: "Entertainment",
    icon: "🎭",
    path: "/industry/entertainment",
  },
  {
    id: "construction",
    name: "Construction",
    icon: "🏗️",
    path: "/industry/construction",
  },
  {
    id: "education",
    name: "Education",
    icon: "📚",
    path: "/industry/education",
  },
];

const professionals = {
  all: [
    {
      id: 1,
      name: "Tony Elumelu",
      title: "Chairman, UBA Group",
      industry: "Banking & Finance",
      location: "Lagos, Nigeria",
      image:
        "https://pbs.twimg.com/profile_images/1604081652468523008/SzQFJOL0_400x400.jpg",
      verified: true,
      connections: "10M+",
      expertise: ["Investment Banking", "Entrepreneurship", "Philanthropy"],
      description:
        "Leading African entrepreneur and philanthropist driving economic transformation across Africa.",
    },
    {
      id: 2,
      name: "Aliko Dangote",
      title: "President, Dangote Group",
      industry: "Oil & Gas",
      location: "Lagos, Nigeria",
      image:
        "https://pbs.twimg.com/profile_images/1153616477684973569/x7wEPOEL_400x400.jpg",
      verified: true,
      connections: "5M+",
      expertise: ["Oil & Gas", "Manufacturing", "Infrastructure"],
      description:
        "Africa's richest man and industrial giant transforming Nigeria's economy.",
    },
    {
      id: 3,
      name: "Davido",
      title: "International Music Artist",
      industry: "Entertainment",
      location: "Lagos, Nigeria",
      image:
        "https://pbs.twimg.com/profile_images/1735413305191063552/fKYHAaYX_400x400.jpg",
      verified: true,
      connections: "30M+",
      expertise: ["Music Production", "Entertainment", "Brand Management"],
      description:
        "Global Afrobeats superstar putting Nigerian music on the world map.",
    },
  ],
  banking: [
    {
      id: 1,
      name: "Tony Elumelu",
      title: "Chairman, UBA Group",
      industry: "Banking & Finance",
      location: "Lagos, Nigeria",
      image:
        "https://pbs.twimg.com/profile_images/1604081652468523008/SzQFJOL0_400x400.jpg",
      verified: true,
      connections: "10M+",
      expertise: ["Investment Banking", "Entrepreneurship", "Philanthropy"],
      description:
        "Leading African entrepreneur and philanthropist driving economic transformation across Africa.",
    },
  ],
  "oil-gas": [
    {
      id: 2,
      name: "Aliko Dangote",
      title: "President, Dangote Group",
      industry: "Oil & Gas",
      location: "Lagos, Nigeria",
      image:
        "https://pbs.twimg.com/profile_images/1153616477684973569/x7wEPOEL_400x400.jpg",
      verified: true,
      connections: "5M+",
      expertise: ["Oil & Gas", "Manufacturing", "Infrastructure"],
      description:
        "Africa's richest man and industrial giant transforming Nigeria's economy.",
    },
  ],
  entertainment: [
    {
      id: 3,
      name: "Davido",
      title: "International Music Artist",
      industry: "Entertainment",
      location: "Lagos, Nigeria",
      image:
        "https://pbs.twimg.com/profile_images/1735413305191063552/fKYHAaYX_400x400.jpg",
      verified: true,
      connections: "30M+",
      expertise: ["Music Production", "Entertainment", "Brand Management"],
      description:
        "Global Afrobeats superstar putting Nigerian music on the world map.",
    },
  ],
  technology: [],
  construction: [],
  education: [],
};

export default function Index() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeIndustry, setActiveIndustry] = useState("all");
  const [showConnectModal, setShowConnectModal] = useState(false);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % showreelImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + showreelImages.length) % showreelImages.length,
    );
  };

  const currentProfessionals =
    professionals[activeIndustry as keyof typeof professionals] || [];

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
              <a href="/" className="text-gray-900 hover:text-primary">
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
                className="text-gray-600 hover:text-primary"
              >
                Blockchain
              </a>
              <a href="/news" className="text-gray-600 hover:text-primary">
                News
              </a>
              <a href="/community" className="text-gray-600 hover:text-primary">
                Community
              </a>
            </nav>
            <div className="flex items-center space-x-4">
              <Button variant="outline">Sign In</Button>
              <WalletConnectionButton />
              <Button className="bg-naija-green hover:bg-naija-green-dark">
                Join Network
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Showreel Carousel */}
      <section className="relative h-96 overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out h-full"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {showreelImages.map((image, index) => (
            <div
              key={image.id}
              className="w-full h-full flex-shrink-0 relative bg-gradient-to-r from-naija-green via-naija-green-light to-naija-white"
            >
              <div className="absolute inset-0 bg-black bg-opacity-40"></div>
              <div className="relative z-10 h-full flex items-center justify-center text-center text-white px-4">
                <div>
                  <h1 className="text-4xl md:text-6xl font-bold mb-4">
                    {image.title}
                  </h1>
                  <p className="text-xl md:text-2xl mb-8">
                    {image.description}
                  </p>
                  <Button
                    size="lg"
                    className="bg-white text-naija-green hover:bg-gray-100"
                  >
                    Get Started
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white bg-opacity-20 hover:bg-opacity-30 text-white"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white bg-opacity-20 hover:bg-opacity-30 text-white"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Carousel Indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {showreelImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? "bg-white" : "bg-white bg-opacity-50"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Connect with Nigeria's Top Professionals
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Discover talented professionals and gifted individuals across every
            industry. Validated through social profiles, work references, and
            digital footprints.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Badge variant="secondary" className="text-sm px-4 py-2">
              🔍 Search by Name
            </Badge>
            <Badge variant="secondary" className="text-sm px-4 py-2">
              🏭 Filter by Industry
            </Badge>
            <Badge variant="secondary" className="text-sm px-4 py-2">
              📍 Find by Location
            </Badge>
            <Badge variant="secondary" className="text-sm px-4 py-2">
              🌐 Connect via Social
            </Badge>
          </div>
        </section>

        {/* Industry Tabs */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Browse by Industry
          </h3>
          <Tabs
            value={activeIndustry}
            onValueChange={setActiveIndustry}
            className="w-full"
          >
            <div className="grid w-full grid-cols-4 lg:grid-cols-7 gap-2 mb-8">
              {industries.map((industry) => (
                <a
                  key={industry.id}
                  href={industry.path}
                  className={`inline-flex items-center justify-center gap-1 px-3 py-2 text-xs sm:text-sm font-medium rounded-md transition-colors
                    ${
                      activeIndustry === industry.id
                        ? "bg-naija-green text-white"
                        : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                    }`}
                >
                  <span>{industry.icon}</span>
                  <span className="hidden sm:inline">{industry.name}</span>
                </a>
              ))}
            </div>

            <TabsContent value={activeIndustry} className="mt-0">
              {currentProfessionals.length > 0 ? (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {currentProfessionals.map((professional) => (
                    <Card
                      key={professional.id}
                      className="overflow-hidden hover:shadow-lg transition-shadow"
                    >
                      <CardHeader className="pb-4">
                        <div className="flex items-center space-x-4">
                          <div className="relative">
                            <img
                              src={professional.image}
                              alt={professional.name}
                              className="w-16 h-16 rounded-full object-cover"
                            />
                            {professional.verified && (
                              <div className="absolute -top-1 -right-1 w-6 h-6 bg-nigerian-green rounded-full flex items-center justify-center">
                                <Award className="w-3 h-3 text-white" />
                              </div>
                            )}
                          </div>
                          <div className="flex-1">
                            <CardTitle className="text-lg">
                              {professional.name}
                            </CardTitle>
                            <CardDescription className="text-sm">
                              {professional.title}
                            </CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <div className="flex items-center text-sm text-gray-600">
                            <MapPin className="w-4 h-4 mr-2" />
                            {professional.location}
                          </div>
                          <div className="flex items-center text-sm text-gray-600">
                            <Users className="w-4 h-4 mr-2" />
                            {professional.connections} connections
                          </div>
                          <p className="text-sm text-gray-700 line-clamp-2">
                            {professional.description}
                          </p>
                          <div className="flex flex-wrap gap-1">
                            {professional.expertise
                              .slice(0, 2)
                              .map((skill, index) => (
                                <Badge
                                  key={index}
                                  variant="outline"
                                  className="text-xs"
                                >
                                  {skill}
                                </Badge>
                              ))}
                            {professional.expertise.length > 2 && (
                              <Badge variant="outline" className="text-xs">
                                +{professional.expertise.length - 2} more
                              </Badge>
                            )}
                          </div>
                          <div className="flex gap-2 pt-2">
                            <Dialog>
                              <DialogTrigger asChild>
                                <Button className="flex-1 bg-naija-green hover:bg-naija-green-dark">
                                  Connect
                                </Button>
                              </DialogTrigger>
                              <DialogContent>
                                <DialogHeader>
                                  <DialogTitle>
                                    Connect with {professional.name}
                                  </DialogTitle>
                                  <DialogDescription>
                                    Sign in or create an account to connect with
                                    verified professionals.
                                  </DialogDescription>
                                </DialogHeader>
                                <div className="space-y-4 pt-4">
                                  <Button className="w-full bg-naija-green hover:bg-naija-green-dark">
                                    Sign in with Google
                                  </Button>
                                  <Button variant="outline" className="w-full">
                                    Sign in with LinkedIn
                                  </Button>
                                  <Button variant="outline" className="w-full">
                                    Create Account
                                  </Button>
                                </div>
                              </DialogContent>
                            </Dialog>
                            <Button variant="outline" size="icon">
                              <ExternalLink className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <div className="text-6xl mb-4">🏗️</div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    Coming Soon
                  </h4>
                  <p className="text-gray-600">
                    We're building an amazing collection of professionals in
                    this industry.
                  </p>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </section>

        {/* Call to Action */}
        <section className="bg-gradient-to-r from-naija-green to-naija-green-light rounded-lg p-8 text-center text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Join Nigeria's Premier Professional Network
          </h3>
          <p className="text-lg mb-6 opacity-90">
            Connect, collaborate, and grow with verified professionals across
            all industries.
          </p>
          <Button
            size="lg"
            className="bg-white text-naija-green hover:bg-gray-100"
          >
            Get Started Today
          </Button>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-naija-green to-naija-green-light rounded-full"></div>
                <span className="text-xl font-bold">NaijaPro Connect</span>
              </div>
              <p className="text-gray-400">
                Connecting Nigeria's brightest minds across all industries.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Platform</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Browse Professionals
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Industries
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    News & Updates
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Community
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Newsletter
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 NaijaPro Connect. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Floating Chat Button */}
      <div className="fixed bottom-6 right-6">
        <Button
          size="lg"
          className="rounded-full w-14 h-14 bg-naija-green hover:bg-naija-green-dark shadow-lg"
        >
          <MessageCircle className="w-6 h-6" />
        </Button>
      </div>
    </div>
  );
}
