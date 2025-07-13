import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { WalletConnectionButton } from "@/components/blockchain/WalletAuth";
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
    icon: "���",
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

const professionals = [
  {
    id: 1,
    name: "Tony Elumelu",
    title: "Chairman, UBA Group",
    industry: "Banking & Finance",
    location: "Lagos, Nigeria",
    image:
      "https://res.cloudinary.com/demo/image/upload/w_400,h_400,c_fill,g_face/v1/samples/people/boy-snow-hoodie.jpg",
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
      "https://res.cloudinary.com/demo/image/upload/w_400,h_400,c_fill,g_face/v1/samples/people/kitchen-bar.jpg",
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
      "https://res.cloudinary.com/demo/image/upload/w_400,h_400,c_fill,g_face/v1/samples/people/jazz.jpg",
    verified: true,
    connections: "30M+",
    expertise: ["Music Production", "Entertainment", "Brand Management"],
    description:
      "Global Afrobeats superstar putting Nigerian music on the world map.",
  },
];

export default function Index() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % showreelImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + showreelImages.length) % showreelImages.length,
    );
  };

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
              <a href="/discovery" className="text-gray-600 hover:text-primary">
                🔍 Discover Talents
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
            Discover Nigeria's Unique Talents
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-6">
            Find professionals and gifted individuals who share your interests
            across any industry. Discover real people with real
            talents—validated through their social profiles, work references,
            and digital footprints.
          </p>
          <p className="text-lg text-gray-500 max-w-3xl mx-auto mb-8">
            Search by name, industry, location, social network, or specialty
            using our AI-powered discovery engine.
          </p>

          <div className="flex justify-center mb-8">
            <a href="/discovery">
              <Button
                size="lg"
                className="bg-naija-green hover:bg-naija-green-dark text-lg px-8 py-4"
              >
                🚀 Discover Talents with AI
              </Button>
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Badge variant="secondary" className="text-sm px-4 py-2">
              🧠 AI-Powered Search
            </Badge>
            <Badge variant="secondary" className="text-sm px-4 py-2">
              🔍 Skill + Interest Matching
            </Badge>
            <Badge variant="secondary" className="text-sm px-4 py-2">
              ✅ Social Verification
            </Badge>
            <Badge variant="secondary" className="text-sm px-4 py-2">
              🌟 Creative + Professional Talents
            </Badge>
            <Badge variant="secondary" className="text-sm px-4 py-2">
              🔗 Blockchain Verified
            </Badge>
          </div>
        </section>

        {/* Industry Navigation */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Browse by Industry
          </h3>
          <div className="grid w-full grid-cols-4 lg:grid-cols-7 gap-2 mb-8">
            {industries.map((industry) => (
              <a
                key={industry.id}
                href={industry.path}
                className="inline-flex items-center justify-center gap-1 px-3 py-2 text-xs sm:text-sm font-medium rounded-md transition-colors bg-gray-100 text-gray-900 hover:bg-naija-green hover:text-white"
              >
                <span>{industry.icon}</span>
                <span className="hidden sm:inline">{industry.name}</span>
              </a>
            ))}
          </div>

          {/* Featured Professionals */}
          <div className="mb-6">
            <h4 className="text-xl font-semibold text-gray-900 mb-4">
              Featured Professionals
            </h4>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {professionals.map((professional) => (
                <Card
                  key={professional.id}
                  className="overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-center space-x-4">
                      <div className="relative">
                        <div className="relative w-16 h-16">
                          <img
                            src={professional.image}
                            alt={professional.name}
                            className="w-16 h-16 rounded-full object-cover border-2 border-gray-200"
                            onError={(e) => {
                              console.warn(
                                `Image failed to load for ${professional.name}, showing fallback`,
                              );
                              e.currentTarget.style.display = "none";
                              const fallback = e.currentTarget
                                .nextElementSibling as HTMLElement;
                              if (fallback) fallback.style.display = "flex";
                            }}
                          />
                          <div
                            style={{ display: "none" }}
                            className="absolute inset-0 w-16 h-16 rounded-full bg-gradient-to-br from-naija-green to-naija-green-light flex items-center justify-center text-white font-bold text-lg shadow-lg"
                          >
                            {professional.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </div>
                        </div>
                        {professional.verified && (
                          <div className="absolute -top-1 -right-1 w-6 h-6 bg-naija-green rounded-full flex items-center justify-center">
                            <Award className="w-3 h-3 text-white" />
                          </div>
                        )}
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-lg">
                          <a
                            href={`/profile/${professional.name.toLowerCase().replace(/ /g, "-")}`}
                            className="hover:text-naija-green transition-colors cursor-pointer"
                          >
                            {professional.name}
                          </a>
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
                      <p className="text-sm text-gray-700 line-clamp-3">
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
          </div>
        </section>

        {/* Case Study Section */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Real Stories, Real Talents
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover how our platform connects professionals with their
              creative passions, validated by community and AI discovery.
            </p>
          </div>

          <Card className="border-2 border-purple-200 bg-gradient-to-r from-purple-50 to-pink-50 p-6">
            <div className="grid md:grid-cols-2 gap-6 items-center">
              <div>
                <Badge className="bg-purple-100 text-purple-800 mb-4">
                  🌟 Featured Mashup Profile
                </Badge>
                <h4 className="text-xl font-bold text-gray-900 mb-3">
                  Meet Adunni: Digital UX Designer × Interior Decorator
                </h4>
                <p className="text-gray-700 mb-4">
                  A Digital Product Designer by profession and an Interior
                  Decorator by passion. Her creative skills are certified by her
                  LinkedIn peers and visually confirmed via Instagram. Explore
                  her mashup profile to see where art meets digital
                  transformation—powered by community validation and AI
                  discovery.
                </p>
                <div className="flex gap-2 mb-4">
                  <Badge variant="outline">UX Design @ Paystack</Badge>
                  <Badge variant="outline">Interior Design</Badge>
                  <Badge variant="outline">Digital Art</Badge>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-sm text-gray-600">Verified on:</span>
                  <div className="flex gap-2">
                    <Badge className="bg-blue-100 text-blue-800">
                      🔗 LinkedIn
                    </Badge>
                    <Badge className="bg-pink-100 text-pink-800">
                      📸 Instagram
                    </Badge>
                    <Badge className="bg-green-100 text-green-800">
                      💼 Portfolio
                    </Badge>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="bg-white rounded-lg p-4 shadow-lg">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold">
                      AS
                    </div>
                    <div>
                      <h5 className="font-semibold">Adunni Soyinka</h5>
                      <p className="text-sm text-gray-600">@creativedeco</p>
                    </div>
                    <Badge className="bg-purple-500 text-white text-xs">
                      🌟 Gifted
                    </Badge>
                  </div>
                  <div className="text-sm text-gray-700 mb-3">
                    "Blending user experience design with interior aesthetics to
                    create beautiful, functional spaces both digital and
                    physical."
                  </div>
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>87% AI Match</span>
                    <span>Lagos, Nigeria</span>
                    <span>Available</span>
                  </div>
                </div>
                <div className="absolute -top-2 -right-2 bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full text-xs font-bold">
                  AI Suggested
                </div>
              </div>
            </div>
          </Card>
        </section>

        {/* Call to Action */}
        <section className="bg-gradient-to-r from-naija-green to-naija-green-light rounded-lg p-8 text-center text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Discover Your Perfect Match?
          </h3>
          <p className="text-lg mb-6 opacity-90">
            Join thousands of professionals using AI-powered talent discovery to
            connect, collaborate, and grow across Nigeria.
          </p>
          <div className="flex justify-center gap-4">
            <a href="/discovery">
              <Button
                size="lg"
                className="bg-white text-naija-green hover:bg-gray-100"
              >
                🚀 Start Discovering
              </Button>
            </a>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-naija-green"
            >
              Create Your Profile
            </Button>
          </div>
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
