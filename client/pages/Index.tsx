import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEOHead from "@/components/layout/SEOHead";
import {
  Search,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Users,
  Award,
  ExternalLink,
  TrendingUp,
  Brain,
  Sparkles,
  Star,
  Globe,
  Zap,
} from "lucide-react";

const heroSlides = [
  {
    id: 1,
    title: "Discover Nigeria's Hidden Talents",
    description:
      "AI-powered platform to find professionals who share your passions",
    cta: "Start Discovering",
    highlight: "🔍 AI-Powered Search",
    backgroundImage: "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
  },
  {
    id: 2,
    title: "Where Professional Meets Creative",
    description:
      "Find UX Designers who paint, Bankers who make music, Engineers who write",
    cta: "Explore Talents",
    highlight: "🎨 Creative + Professional",
    backgroundImage: "https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
  },
  {
    id: 3,
    title: "Verified Nigerian Excellence",
    description:
      "Connect with talents validated through social profiles and community",
    cta: "Join Network",
    highlight: "✅ Social Verified",
    backgroundImage: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
  },
];

const quickSearches = [
  "UX Designer + Photographer",
  "Financial Analyst + Musician",
  "Software Engineer + Artist",
  "Marketing Manager + Writer",
  "Data Scientist + Chef",
  "Lawyer + Fashion Designer",
  "Doctor + Content Creator",
  "Teacher + Entrepreneur",
];

const featuredIndustries = [
  {
    id: "banking",
    name: "Banking & Finance",
    icon: "💰",
    path: "/industry/banking-finance",
    count: "2,450+ professionals",
  },
  {
    id: "technology",
    name: "Technology",
    icon: "💻",
    path: "/industry/technology",
    count: "3,200+ professionals",
  },
  {
    id: "entertainment",
    name: "Entertainment",
    icon: "🎭",
    path: "/industry/entertainment",
    count: "1,800+ professionals",
  },
  {
    id: "oil-gas",
    name: "Oil & Gas",
    icon: "⛽",
    path: "/industry/oil-gas",
    count: "1,650+ professionals",
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
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    verified: true,
    connections: "10M+",
    expertise: ["Investment Banking", "Entrepreneurship", "Philanthropy"],
    description:
      "Leading African entrepreneur and philanthropist driving economic transformation across Africa through UBA Group and Tony Elumelu Foundation.",
  },
  {
    id: 2,
    name: "Aliko Dangote",
    title: "President, Dangote Group",
    industry: "Oil & Gas",
    location: "Lagos, Nigeria",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    verified: true,
    connections: "5M+",
    expertise: ["Oil & Gas", "Manufacturing", "Infrastructure"],
    description:
      "Africa's richest man and industrial giant transforming Nigeria's economy through Dangote Group's diversified business empire.",
  },
  {
    id: 3,
    name: "Davido",
    title: "International Music Artist",
    industry: "Entertainment",
    location: "Lagos, Nigeria",
    image:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop&crop=face",
    verified: true,
    connections: "30M+",
    expertise: ["Music Production", "Entertainment", "Brand Management"],
    description:
      "Global Afrobeats superstar and cultural ambassador putting Nigerian music on the world map with international collaborations.",
  },
];

export default function Index() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + heroSlides.length) % heroSlides.length,
    );
  };

  const handleSearch = () => {
    if (searchQuery.trim()) {
      window.location.href = `/discovery?q=${encodeURIComponent(searchQuery)}`;
    } else {
      window.location.href = "/discovery";
    }
  };

  const handleQuickSearch = (query: string) => {
    window.location.href = `/discovery?q=${encodeURIComponent(query)}`;
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Talk About Nigeria",
    description:
      "Discover Nigeria's brightest talents across all industries through AI-powered search",
    url: "https://talkaboutnigeria.com",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate:
          "https://talkaboutnigeria.com/discovery?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Talk About Nigeria - Discover Nigerian Talents & Professionals"
        description="Connect with Nigeria's brightest talents across all industries. Find professionals, artists, entrepreneurs through our AI-powered talent discovery platform."
        keywords="Nigeria, Nigerian professionals, talent discovery, AI search, networking, Lagos, Abuja, technology, entertainment, finance"
        structuredData={structuredData}
      />

      <Header />

            {/* Hero Section with Search */}
      <section className="relative h-[500px] overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out h-full"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {heroSlides.map((slide, index) => (
            <div
              key={slide.id}
              className="w-full h-full flex-shrink-0 relative"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('${slide.backgroundImage}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-naija-green/20 to-naija-green-dark/20"></div>
              <div className="relative z-10 h-full flex items-center justify-center text-center text-white px-4">
                <div className="max-w-4xl mx-auto">
              <div className="max-w-4xl mx-auto">
                <div className="mb-4">
                  <Badge className="bg-white bg-opacity-20 text-white border-white border-opacity-30 mb-4">
                    {slide.highlight}
                  </Badge>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                  {slide.title}
                </h1>
                <p className="text-xl md:text-2xl mb-8 opacity-95">
                  {slide.description}
                </p>

                {/* Main Search Bar */}
                <div className="max-w-2xl mx-auto mb-8">
                  <div className="flex gap-3">
                    <div className="relative flex-1">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <Input
                        placeholder="Search: 'UX Designer + Photographer' or 'Banker + Musician'"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onKeyPress={(e) => e.key === "Enter" && handleSearch()}
                        className="pl-10 h-12 text-lg bg-white text-gray-900"
                      />
                    </div>
                    <Button
                      onClick={handleSearch}
                      size="lg"
                      className="h-12 px-6 bg-white text-naija-green hover:bg-gray-100"
                    >
                      Search
                    </Button>
                  </div>
                </div>

                <div className="flex justify-center gap-4">
                  <Button
                    size="lg"
                    className="bg-white text-naija-green hover:bg-gray-100"
                    onClick={() => (window.location.href = "/discovery")}
                  >
                    🔍 {slide.cta}
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-naija-green"
                  >
                    How It Works
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
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
          {heroSlides.map((_, index) => (
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

      {/* Quick Search Suggestions */}
      <section className="bg-white py-8 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <p className="text-gray-600 mb-4">Popular talent combinations:</p>
            <div className="flex flex-wrap justify-center gap-2">
              {quickSearches.slice(0, 6).map((search, index) => (
                <button
                  key={index}
                  onClick={() => handleQuickSearch(search)}
                  className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-naija-green hover:text-white transition-colors"
                >
                  {search}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Stats Section */}
        <section className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nigeria's Largest Talent Discovery Platform
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
            Connect with verified professionals and creative talents across all
            industries. Our AI-powered platform helps you find the perfect
            collaborators, mentors, and team members.
          </p>

          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-naija-green mb-2">
                50,000+
              </div>
              <div className="text-gray-600">Verified Professionals</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-naija-green mb-2">
                25+
              </div>
              <div className="text-gray-600">Industry Sectors</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-naija-green mb-2">36</div>
              <div className="text-gray-600">Nigerian States</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-naija-green mb-2">
                95%
              </div>
              <div className="text-gray-600">Success Rate</div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Badge variant="secondary" className="text-sm px-4 py-2">
              🧠 AI-Powered Matching
            </Badge>
            <Badge variant="secondary" className="text-sm px-4 py-2">
              ✅ Social Media Verified
            </Badge>
            <Badge variant="secondary" className="text-sm px-4 py-2">
              🎨 Professional + Creative Skills
            </Badge>
            <Badge variant="secondary" className="text-sm px-4 py-2">
              🌍 All Nigerian States
            </Badge>
          </div>
        </section>

        {/* Featured Industries */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Explore Top Industries
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover talented professionals across Nigeria's most dynamic
              sectors
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {featuredIndustries.map((industry) => (
              <Card
                key={industry.id}
                className="hover:shadow-lg transition-shadow cursor-pointer group"
              >
                <a href={industry.path}>
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl mb-4">{industry.icon}</div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-naija-green transition-colors">
                      {industry.name}
                    </h4>
                    <p className="text-sm text-gray-600">{industry.count}</p>
                  </CardContent>
                </a>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button variant="outline" size="lg">
              <a href="/industry" className="flex items-center gap-2">
                View All Industries
                <ExternalLink className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </section>

        {/* Featured Professionals */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h4 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Featured Nigerian Professionals
            </h4>
            <p className="text-lg text-gray-600">
              Meet some of the amazing talents you can discover on our platform
            </p>
          </div>

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
                            View Profile
                          </Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>
                              Connect with {professional.name}
                            </DialogTitle>
                            <DialogDescription>
                              Join Talk About Nigeria to connect with verified
                              professionals.
                            </DialogDescription>
                          </DialogHeader>
                          <div className="space-y-4 pt-4">
                            <Button className="w-full bg-naija-green hover:bg-naija-green-dark">
                              Join with LinkedIn
                            </Button>
                            <Button variant="outline" className="w-full">
                              Join with Google
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
                  🌟 Perfect Match Example
                </Badge>
                <h4 className="text-xl font-bold text-gray-900 mb-3">
                  Adunni Soyinka: UX Designer × Interior Decorator
                </h4>
                <p className="text-gray-700 mb-4">
                  A perfect example of Nigerian talent diversity - professional
                  UX Designer at Paystack who's also a passionate Interior
                  Decorator. Our AI discovered her unique combination of skills
                  through LinkedIn validation and Instagram creativity showcase.
                  This is the future of talent discovery in Nigeria.
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

        {/* How It Works */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              How Talk About Nigeria Works
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our AI-powered platform makes it easy to discover and connect with
              Nigerian talents
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-naija-green bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-naija-green" />
              </div>
              <h4 className="text-xl font-semibold mb-3">1. Smart Search</h4>
              <p className="text-gray-600">
                Use our AI-powered search to find professionals by combining
                skills, industries, locations, or creative interests.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-naija-green bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-naija-green" />
              </div>
              <h4 className="text-xl font-semibold mb-3">
                2. Verified Profiles
              </h4>
              <p className="text-gray-600">
                All profiles are verified through LinkedIn, social media, and
                community validation for authentic connections.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-naija-green bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-naija-green" />
              </div>
              <h4 className="text-xl font-semibold mb-3">
                3. Connect & Collaborate
              </h4>
              <p className="text-gray-600">
                Send connection requests, start conversations, and build
                meaningful professional relationships.
              </p>
            </div>
          </div>
        </section>

        {/* Final Call to Action */}
        <section className="bg-gradient-to-r from-naija-green to-naija-green-light rounded-lg p-8 text-center text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Discover Nigerian Talent?
          </h3>
          <p className="text-lg mb-6 opacity-90">
            Join Nigeria's premier talent discovery platform and connect with
            verified professionals across all industries.
          </p>
          <div className="flex justify-center gap-4">
            <Button
              size="lg"
              className="bg-white text-naija-green hover:bg-gray-100"
              onClick={() => (window.location.href = "/discovery")}
            >
              🚀 Start Discovering Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-naija-green"
            >
              Join as Professional
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}