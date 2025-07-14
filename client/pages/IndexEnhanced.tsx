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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
  Building2,
  User,
  Calendar,
} from "lucide-react";

const heroSlides = [
  {
    id: 1,
    title: "Discover Nigeria's Hidden Talents",
    description:
      "AI-powered platform to find professionals who share your passions",
    cta: "Start Discovering",
    highlight: "🔍 AI-Powered Search",
    backgroundImage:
      "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
  },
  {
    id: 2,
    title: "Connect Beyond Professional Boundaries",
    description:
      "Find engineers who paint, bankers who sing, doctors who design",
    cta: "Explore Network",
    highlight: "🤝 Multi-Talented Professionals",
    backgroundImage:
      "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
  },
  {
    id: 3,
    title: "AI Matches Your Perfect Collaborator",
    description:
      "Advanced algorithms to find professionals with complementary skills",
    cta: "Try AI Search",
    highlight: "🤖 Smart Matching",
    backgroundImage:
      "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
  },
];

const featuredIndustries = [
  {
    id: "banking-finance",
    name: "Banking & Finance",
    icon: "🏦",
    path: "/industry/banking-finance",
    count: "2,500+ professionals",
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
  // Finance
  {
    id: 1,
    name: "Tony Elumelu",
    specialty: "Chairman & CEO",
    industry: "Finance",
    location: "Lagos",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Ff84bf105d9db46e28537df3ccb1c17d3%2F0989f74a95e84e359c03143e8e2fe9e4?format=webp&width=800",
    verified: true,
    rating: 4.9,
    company: "UBA Group",
    description:
      "Leading African entrepreneur and philanthropist driving economic transformation across Africa through UBA Group and Tony Elumelu Foundation.",
    experience: "25+ years",
    specialties: ["Investment Banking", "Entrepreneurship", "Philanthropy"],
  },
  {
    id: 2,
    name: "Ngozi Okonjo-Iweala",
    specialty: "Director-General",
    industry: "Finance",
    location: "Geneva/Lagos",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Ff84bf105d9db46e28537df3ccb1c17d3%2F0989f74a95e84e359c03143e8e2fe9e4?format=webp&width=800",
    verified: true,
    rating: 4.9,
    company: "World Trade Organization",
    description:
      "Former Finance Minister of Nigeria and first African and female Director-General of the WTO.",
    experience: "30+ years",
    specialties: ["International Trade", "Economic Policy", "Development"],
  },
  // Energy
  {
    id: 3,
    name: "Aliko Dangote",
    specialty: "President & CEO",
    industry: "Energy",
    location: "Lagos",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Ff84bf105d9db46e28537df3ccb1c17d3%2F0989f74a95e84e359c03143e8e2fe9e4?format=webp&width=800",
    verified: true,
    rating: 4.8,
    company: "Dangote Group",
    description:
      "Africa's richest man and industrial giant transforming Nigeria's economy through Dangote Group's diversified business empire.",
    experience: "40+ years",
    specialties: ["Oil & Gas", "Manufacturing", "Infrastructure"],
  },
  {
    id: 4,
    name: "Mele Kyari",
    specialty: "Group Managing Director",
    industry: "Energy",
    location: "Abuja",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Ff84bf105d9db46e28537df3ccb1c17d3%2F0989f74a95e84e359c03143e8e2fe9e4?format=webp&width=800",
    verified: true,
    rating: 4.7,
    company: "NNPC Limited",
    description:
      "Leading Nigeria's national oil corporation with focus on operational excellence and strategic partnerships.",
    experience: "30+ years",
    specialties: [
      "Petroleum Engineering",
      "Strategic Management",
      "Operations",
    ],
  },
  // Technology
  {
    id: 5,
    name: "Shola Akinlade",
    specialty: "Co-founder & CEO",
    industry: "Tech",
    location: "Lagos",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Ff84bf105d9db46e28537df3ccb1c17d3%2F0989f74a95e84e359c03143e8e2fe9e4?format=webp&width=800",
    verified: true,
    rating: 4.9,
    company: "Paystack",
    description:
      "Co-founder and CEO of Paystack, revolutionizing digital payments across Africa with innovative fintech solutions.",
    experience: "12+ years",
    specialties: ["Fintech", "Software Engineering", "Startup Leadership"],
  },
  {
    id: 6,
    name: "Olugbenga Agboola",
    specialty: "CEO & Co-founder",
    industry: "Tech",
    location: "San Francisco/Lagos",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Ff84bf105d9db46e28537df3ccb1c17d3%2F0989f74a95e84e359c03143e8e2fe9e4?format=webp&width=800",
    verified: true,
    rating: 4.9,
    company: "Flutterwave",
    description:
      "CEO and Co-founder of Flutterwave, building payment infrastructure that connects Africa to the global economy.",
    experience: "15+ years",
    specialties: ["Fintech", "Global Payments", "Business Strategy"],
  },
  // Entertainment
  {
    id: 7,
    name: "Davido",
    specialty: "International Music Artist",
    industry: "Entertainment",
    location: "Lagos",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Ff84bf105d9db46e28537df3ccb1c17d3%2F0989f74a95e84e359c03143e8e2fe9e4?format=webp&width=800",
    verified: true,
    rating: 4.8,
    company: "DMW",
    description:
      "Global Afrobeats superstar and cultural ambassador putting Nigerian music on the world map with international collaborations.",
    experience: "12+ years",
    specialties: ["Music Production", "Entertainment", "Brand Management"],
  },
  {
    id: 8,
    name: "Genevieve Nnaji",
    specialty: "Actress & Producer",
    industry: "Entertainment",
    location: "Lagos",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Ff84bf105d9db46e28537df3ccb1c17d3%2F0989f74a95e84e359c03143e8e2fe9e4?format=webp&width=800",
    verified: true,
    rating: 4.8,
    company: "The Entertainment Network",
    description:
      "Award-winning actress, producer, and director pioneering Nollywood's global recognition and creative excellence.",
    experience: "25+ years",
    specialties: ["Acting", "Film Production", "Creative Direction"],
  },
  // Fashion
  {
    id: 9,
    name: "Mai Atafo",
    specialty: "Luxury Fashion Designer",
    industry: "Fashion",
    location: "Lagos",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Ff84bf105d9db46e28537df3ccb1c17d3%2F0989f74a95e84e359c03143e8e2fe9e4?format=webp&width=800",
    verified: true,
    rating: 4.9,
    company: "Mai Atafo Inspired",
    description:
      "Award-winning Nigerian fashion designer known for luxury menswear and contemporary African fashion.",
    experience: "15+ years",
    specialties: [
      "Luxury Menswear",
      "Bridal Fashion",
      "Contemporary African Wear",
    ],
  },
  // Healthcare
  {
    id: 10,
    name: "Dr. Stella Adadevoh",
    specialty: "Chief Medical Director",
    industry: "Healthcare",
    location: "Lagos",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Ff84bf105d9db46e28537df3ccb1c17d3%2F0989f74a95e84e359c03143e8e2fe9e4?format=webp&width=800",
    verified: true,
    rating: 4.9,
    company: "First Cardiology Consultants",
    description:
      "Leading physician and healthcare advocate advancing medical excellence and public health initiatives in Nigeria.",
    experience: "20+ years",
    specialties: ["Cardiology", "Public Health", "Medical Leadership"],
  },
];

const businesses = [
  // Finance
  {
    id: 1,
    name: "United Bank for Africa",
    type: "Commercial Bank",
    industry: "Finance",
    location: "Lagos",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Ff84bf105d9db46e28537df3ccb1c17d3%2F0989f74a95e84e359c03143e8e2fe9e4?format=webp&width=800",
    verified: true,
    rating: 4.8,
    description:
      "Leading African commercial bank with operations across 20 countries, driving financial inclusion and economic growth.",
    founded: "1961",
    services: ["Commercial Banking", "Investment Banking", "Digital Banking"],
  },
  {
    id: 2,
    name: "Access Bank",
    type: "Commercial Bank",
    industry: "Finance",
    location: "Lagos",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Ff84bf105d9db46e28537df3ccb1c17d3%2F0989f74a95e84e359c03143e8e2fe9e4?format=webp&width=800",
    verified: true,
    rating: 4.7,
    description:
      "Leading commercial bank in Nigeria providing comprehensive financial services to individuals and businesses.",
    founded: "1989",
    services: ["Retail Banking", "Corporate Banking", "Digital Solutions"],
  },
  // Energy
  {
    id: 3,
    name: "Dangote Refinery",
    type: "Oil Refinery",
    industry: "Energy",
    location: "Lagos",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Ff84bf105d9db46e28537df3ccb1c17d3%2F0989f74a95e84e359c03143e8e2fe9e4?format=webp&width=800",
    verified: true,
    rating: 4.9,
    description:
      "World's largest single-train petroleum refinery, transforming Nigeria's energy independence and economic landscape.",
    founded: "2021",
    services: ["Oil Refining", "Petrochemicals", "Energy Production"],
  },
  {
    id: 4,
    name: "NNPC Limited",
    type: "National Oil Company",
    industry: "Energy",
    location: "Abuja",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Ff84bf105d9db46e28537df3ccb1c17d3%2F0989f74a95e84e359c03143e8e2fe9e4?format=webp&width=800",
    verified: true,
    rating: 4.6,
    description:
      "Nigeria's national oil corporation leading upstream, midstream, and downstream operations across the energy value chain.",
    founded: "1977",
    services: ["Oil Exploration", "Production", "Refining"],
  },
  // Technology
  {
    id: 5,
    name: "Paystack",
    type: "Fintech Company",
    industry: "Tech",
    location: "Lagos",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Ff84bf105d9db46e28537df3ccb1c17d3%2F0989f74a95e84e359c03143e8e2fe9e4?format=webp&width=800",
    verified: true,
    rating: 4.9,
    description:
      "Leading payment infrastructure company in Africa, acquired by Stripe for $200M, processing billions in transactions.",
    founded: "2015",
    services: ["Payment Processing", "API Infrastructure", "Merchant Services"],
  },
  {
    id: 6,
    name: "Flutterwave",
    type: "Payment Technology",
    industry: "Tech",
    location: "Lagos",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Ff84bf105d9db46e28537df3ccb1c17d3%2F0989f74a95e84e359c03143e8e2fe9e4?format=webp&width=800",
    verified: true,
    rating: 4.8,
    description:
      "Global payment technology company connecting Africa to the global economy with innovative financial solutions.",
    founded: "2016",
    services: [
      "Global Payments",
      "Financial Infrastructure",
      "Cross-border Transfers",
    ],
  },
  // Entertainment
  {
    id: 7,
    name: "Mavin Records",
    type: "Music Label",
    industry: "Entertainment",
    location: "Lagos",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Ff84bf105d9db46e28537df3ccb1c17d3%2F0989f74a95e84e359c03143e8e2fe9e4?format=webp&width=800",
    verified: true,
    rating: 4.8,
    description:
      "Leading Nigerian record label home to top Afrobeats artists, driving the global expansion of Nigerian music.",
    founded: "2012",
    services: ["Music Production", "Artist Management", "Distribution"],
  },
  {
    id: 8,
    name: "EbonyLife Media",
    type: "Media Company",
    industry: "Entertainment",
    location: "Lagos",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Ff84bf105d9db46e28537df3ccb1c17d3%2F0989f74a95e84e359c03143e8e2fe9e4?format=webp&width=800",
    verified: true,
    rating: 4.7,
    description:
      "Premium African entertainment company producing world-class content for global audiences.",
    founded: "2013",
    services: ["Film Production", "Television", "Digital Content"],
  },
  // Fashion
  {
    id: 9,
    name: "Lagos Fashion Week",
    type: "Fashion Event Platform",
    industry: "Fashion",
    location: "Lagos",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Ff84bf105d9db46e28537df3ccb1c17d3%2F0989f74a95e84e359c03143e8e2fe9e4?format=webp&width=800",
    verified: true,
    rating: 4.9,
    description:
      "Premier fashion week showcasing African designers and promoting the continent's fashion industry.",
    founded: "2011",
    services: ["Fashion Shows", "Designer Promotion", "Industry Development"],
  },
  // Healthcare
  {
    id: 10,
    name: "Lagos University Teaching Hospital",
    type: "Teaching Hospital",
    industry: "Healthcare",
    location: "Lagos",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Ff84bf105d9db46e28537df3ccb1c17d3%2F0989f74a95e84e359c03143e8e2fe9e4?format=webp&width=800",
    verified: true,
    rating: 4.6,
    description:
      "Leading teaching hospital providing world-class healthcare services and medical education in Nigeria.",
    founded: "1962",
    services: ["Medical Care", "Medical Education", "Research"],
  },
];

export default function Index() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("professionals");

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

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "TalkAboutNigeria",
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

  const ProfessionalCard = ({
    professional,
  }: {
    professional: (typeof professionals)[0];
  }) => (
    <Card className="group hover:shadow-lg transition-all duration-300 bg-white border border-gray-100">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <img
                src={professional.image}
                alt={professional.name}
                className="w-12 h-12 rounded-full object-cover border-2 border-green-100"
              />
              {professional.verified && (
                <div className="absolute -bottom-1 -right-1 bg-green-500 rounded-full p-1">
                  <Star className="w-3 h-3 text-white fill-white" />
                </div>
              )}
            </div>
            <div>
              <CardTitle className="text-lg font-semibold text-gray-900 group-hover:text-green-600 transition-colors">
                {professional.name}
              </CardTitle>
              <p className="text-sm text-green-600 font-medium">
                {professional.specialty}
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-1 text-sm text-gray-500">
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            <span>{professional.rating}</span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <CardDescription className="text-gray-600 mb-4">
          {professional.description}
        </CardDescription>

        <div className="space-y-3">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4 text-green-500" />
              <span className="text-gray-600">{professional.location}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Building2 className="w-4 h-4 text-green-500" />
              <span className="text-gray-600">{professional.company}</span>
            </div>
          </div>

          <div className="flex items-center space-x-2 text-sm">
            <Badge
              variant="secondary"
              className="text-xs bg-blue-50 text-blue-700"
            >
              {professional.industry}
            </Badge>
            <Calendar className="w-4 h-4 text-green-500" />
            <span className="text-gray-600">{professional.experience}</span>
          </div>

          <div className="flex flex-wrap gap-1">
            {professional.specialties.slice(0, 2).map((specialty, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="text-xs bg-green-50 text-green-700 hover:bg-green-100"
              >
                {specialty}
              </Badge>
            ))}
          </div>
        </div>

        <div className="flex space-x-2 pt-4">
          <Button
            size="sm"
            className="flex-1 bg-green-600 hover:bg-green-700 text-white"
          >
            <User className="w-4 h-4 mr-2" />
            View Profile
          </Button>
          <Button
            size="sm"
            variant="outline"
            className="border-green-200 text-green-600 hover:bg-green-50"
          >
            <ExternalLink className="w-4 h-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );

  const BusinessCard = ({ business }: { business: (typeof businesses)[0] }) => (
    <Card className="group hover:shadow-lg transition-all duration-300 bg-white border border-gray-100">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <img
                src={business.image}
                alt={business.name}
                className="w-12 h-12 rounded-lg object-cover border-2 border-blue-100"
              />
              {business.verified && (
                <div className="absolute -bottom-1 -right-1 bg-blue-500 rounded-full p-1">
                  <Star className="w-3 h-3 text-white fill-white" />
                </div>
              )}
            </div>
            <div>
              <CardTitle className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                {business.name}
              </CardTitle>
              <p className="text-sm text-blue-600 font-medium">
                {business.type}
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-1 text-sm text-gray-500">
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            <span>{business.rating}</span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <CardDescription className="text-gray-600 mb-4">
          {business.description}
        </CardDescription>

        <div className="space-y-3">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4 text-blue-500" />
              <span className="text-gray-600">{business.location}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="w-4 h-4 text-blue-500" />
              <span className="text-gray-600">Founded {business.founded}</span>
            </div>
          </div>

          <div className="flex items-center space-x-2 text-sm">
            <Badge
              variant="secondary"
              className="text-xs bg-purple-50 text-purple-700"
            >
              {business.industry}
            </Badge>
          </div>

          <div className="flex flex-wrap gap-1">
            {business.services.slice(0, 2).map((service, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="text-xs bg-blue-50 text-blue-700 hover:bg-blue-100"
              >
                {service}
              </Badge>
            ))}
          </div>
        </div>

        <div className="flex space-x-2 pt-4">
          <Button
            size="sm"
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white"
          >
            <Building2 className="w-4 h-4 mr-2" />
            View Business
          </Button>
          <Button
            size="sm"
            variant="outline"
            className="border-blue-200 text-blue-600 hover:bg-blue-50"
          >
            <ExternalLink className="w-4 h-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="TalkAboutNigeria - Connect with Nigeria's Leading Professionals & Businesses"
        description="Discover and connect with Nigeria's leading professionals, entrepreneurs, and businesses across all industries. Showcase your skills, find mentors, build networks, and grow your career with verified Nigerian talent."
        keywords="Nigeria professionals, Nigerian businesses, professional networking, career development, industry experts, African talent, Lagos professionals, Abuja businesses, Nigerian entrepreneurs, tech professionals Nigeria, banking finance Nigeria, oil gas Nigeria, entertainment Nigeria, healthcare professionals, fashion designers Nigeria"
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
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-naija-green/20 to-naija-green-dark/20"></div>
              <div className="relative z-10 h-full flex items-center justify-center text-center text-white px-4">
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
                          onKeyPress={(e) =>
                            e.key === "Enter" && handleSearch()
                          }
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

        {/* Slide Indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Industries Section */}
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

        {/* Featured Professionals and Businesses */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h4 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Featured Nigerian Talent & Businesses
            </h4>
            <p className="text-lg text-gray-600">
              Meet some of the amazing professionals and businesses across
              Finance, Energy, Tech, Entertainment, Fashion, and Healthcare
            </p>
          </div>

          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="professionals" className="text-lg">
                <User className="w-5 h-5 mr-2" />
                Professionals ({professionals.length})
              </TabsTrigger>
              <TabsTrigger value="businesses" className="text-lg">
                <Building2 className="w-5 h-5 mr-2" />
                Businesses ({businesses.length})
              </TabsTrigger>
            </TabsList>

            <TabsContent value="professionals">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {professionals.map((professional) => (
                  <ProfessionalCard
                    key={professional.id}
                    professional={professional}
                  />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="businesses">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {businesses.map((business) => (
                  <BusinessCard key={business.id} business={business} />
                ))}
              </div>
            </TabsContent>
          </Tabs>

          <div className="text-center mt-8">
            <Button
              size="lg"
              className="bg-naija-green hover:bg-naija-green-dark"
            >
              <a href="/discovery" className="flex items-center gap-2">
                Discover More Talent
                <Users className="w-5 h-5" />
              </a>
            </Button>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
