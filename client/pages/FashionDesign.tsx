import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Palette,
  Users,
  MapPin,
  Building2,
  Star,
  ExternalLink,
  Calendar,
  TrendingUp,
  Award,
  Camera,
  Scissors,
  User,
} from "lucide-react";

const professionals = [
  {
    id: 1,
    name: "Mai Atafo",
    specialty: "Luxury Fashion Designer",
    location: "Lagos",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Ff84bf105d9db46e28537df3ccb1c17d3%2Faf0f5eea0650465e86f0e73fc42195b8?format=webp&width=400",
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
  {
    id: 2,
    name: "Deola Sagoe",
    specialty: "High Fashion Designer",
    location: "Lagos",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Ff84bf105d9db46e28537df3ccb1c17d3%2Faf0f5eea0650465e86f0e73fc42195b8?format=webp&width=400",
    verified: true,
    rating: 4.8,
    company: "Deola Sagoe",
    description:
      "International fashion designer showcasing African heritage through contemporary high fashion.",
    experience: "20+ years",
    specialties: ["High Fashion", "African Textiles", "International Shows"],
  },
  {
    id: 3,
    name: "Lisa Folawiyo",
    specialty: "Contemporary Designer",
    location: "Lagos",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Ff84bf105d9db46e28537df3ccb1c17d3%2Faf0f5eea0650465e86f0e73fc42195b8?format=webp&width=400",
    verified: true,
    rating: 4.9,
    company: "Jewel by Lisa",
    description:
      "Contemporary fashion designer known for modern interpretations of traditional African prints.",
    experience: "12+ years",
    specialties: ["Contemporary Fashion", "African Prints", "Ready-to-Wear"],
  },
  {
    id: 4,
    name: "Folake Folarin-Coker",
    specialty: "Fashion Designer & Stylist",
    location: "Lagos",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Ff84bf105d9db46e28537df3ccb1c17d3%2Faf0f5eea0650465e86f0e73fc42195b8?format=webp&width=400",
    verified: true,
    rating: 4.7,
    company: "Tiffany Amber",
    description:
      "Fashion designer and stylist pioneering modern African fashion with global appeal.",
    experience: "18+ years",
    specialties: ["Fashion Design", "Styling", "Brand Development"],
  },
  {
    id: 5,
    name: "Lanre Da Silva Ajayi",
    specialty: "Luxury Fashion Designer",
    location: "Lagos",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Ff84bf105d9db46e28537df3ccb1c17d3%2Faf0f5eea0650465e86f0e73fc42195b8?format=webp&width=400",
    verified: true,
    rating: 4.8,
    company: "Lanre Da Silva Ajayi",
    description:
      "Luxury fashion designer creating elegant pieces for the modern African woman.",
    experience: "14+ years",
    specialties: ["Luxury Fashion", "Bridal Wear", "Evening Gowns"],
  },
  {
    id: 6,
    name: "Adebayo Oke-Lawal",
    specialty: "Gender-Fluid Fashion Designer",
    location: "Lagos",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Ff84bf105d9db46e28537df3ccb1c17d3%2Faf0f5eea0650465e86f0e73fc42195b8?format=webp&width=400",
    verified: true,
    rating: 4.6,
    company: "Orange Culture",
    description:
      "Innovative designer pushing boundaries with gender-fluid fashion and contemporary designs.",
    experience: "8+ years",
    specialties: ["Gender-Fluid Fashion", "Contemporary Design", "Innovation"],
  },
  {
    id: 7,
    name: "Omoyemi Akerele",
    specialty: "Fashion Consultant & Designer",
    location: "Lagos",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Ff84bf105d9db46e28537df3ccb1c17d3%2Faf0f5eea0650465e86f0e73fc42195b8?format=webp&width=400",
    verified: true,
    rating: 4.7,
    company: "Style House Files",
    description:
      "Fashion consultant and designer driving the Nigerian fashion industry forward.",
    experience: "10+ years",
    specialties: [
      "Fashion Consulting",
      "Industry Development",
      "Fashion Shows",
    ],
  },
  {
    id: 8,
    name: "Kenneth Ize",
    specialty: "International Fashion Designer",
    location: "Lagos/Vienna",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Ff84bf105d9db46e28537df3ccb1c17d3%2Faf0f5eea0650465e86f0e73fc42195b8?format=webp&width=400",
    verified: true,
    rating: 4.9,
    company: "Kenneth Ize",
    description:
      "International fashion designer showcasing Nigerian craftsmanship on global runways.",
    experience: "9+ years",
    specialties: [
      "International Fashion",
      "Artisan Collaboration",
      "Sustainable Fashion",
    ],
  },
  {
    id: 9,
    name: "Ituen Basi",
    specialty: "Bridal Fashion Designer",
    location: "Lagos",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Ff84bf105d9db46e28537df3ccb1c17d3%2Faf0f5eea0650465e86f0e73fc42195b8?format=webp&width=400",
    verified: true,
    rating: 4.8,
    company: "Ituen Basi",
    description:
      "Luxury bridal fashion designer creating stunning wedding gowns and formal wear.",
    experience: "11+ years",
    specialties: ["Bridal Fashion", "Luxury Gowns", "Formal Wear"],
  },
  {
    id: 10,
    name: "Tokyo James",
    specialty: "Menswear Designer",
    location: "Lagos",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Ff84bf105d9db46e28537df3ccb1c17d3%2Faf0f5eea0650465e86f0e73fc42195b8?format=webp&width=400",
    verified: true,
    rating: 4.7,
    company: "Tokyo James",
    description:
      "Contemporary menswear designer blending African heritage with modern tailoring.",
    experience: "7+ years",
    specialties: ["Menswear", "Contemporary Tailoring", "African Heritage"],
  },
];

const businesses = [
  {
    id: 1,
    name: "Lagos Fashion Week",
    type: "Fashion Event Platform",
    location: "Lagos",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Ff84bf105d9db46e28537df3ccb1c17d3%2Faf0f5eea0650465e86f0e73fc42195b8?format=webp&width=400",
    verified: true,
    rating: 4.9,
    description:
      "Premier fashion week showcasing African designers and promoting the continent's fashion industry.",
    founded: "2011",
    services: ["Fashion Shows", "Designer Promotion", "Industry Development"],
  },
  {
    id: 2,
    name: "Temple Muse",
    type: "Fashion Brand",
    location: "Lagos",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Ff84bf105d9db46e28537df3ccb1c17d3%2Faf0f5eea0650465e86f0e73fc42195b8?format=webp&width=400",
    verified: true,
    rating: 4.7,
    description:
      "Contemporary fashion brand creating modern interpretations of traditional African aesthetics.",
    founded: "2016",
    services: ["Contemporary Fashion", "African Aesthetics", "Modern Design"],
  },
  {
    id: 3,
    name: "Fruché",
    type: "Luxury Fashion Brand",
    location: "Lagos",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Ff84bf105d9db46e28537df3ccb1c17d3%2Faf0f5eea0650465e86f0e73fc42195b8?format=webp&width=400",
    verified: true,
    rating: 4.8,
    description:
      "Luxury fashion brand known for bold, colorful designs and high-quality craftsmanship.",
    founded: "2009",
    services: ["Luxury Fashion", "Custom Design", "High-End Retail"],
  },
  {
    id: 4,
    name: "House of Nwocha",
    type: "Fashion Design Studio",
    location: "Lagos",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Ff84bf105d9db46e28537df3ccb1c17d3%2Faf0f5eea0650465e86f0e73fc42195b8?format=webp&width=400",
    verified: true,
    rating: 4.6,
    description:
      "Fashion design studio specializing in avant-garde and contemporary African fashion.",
    founded: "2014",
    services: [
      "Avant-garde Design",
      "Contemporary Fashion",
      "Creative Direction",
    ],
  },
  {
    id: 5,
    name: "Maxivive",
    type: "Fashion Technology Platform",
    location: "Lagos",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Ff84bf105d9db46e28537df3ccb1c17d3%2Faf0f5eea0650465e86f0e73fc42195b8?format=webp&width=400",
    verified: true,
    rating: 4.5,
    description:
      "Fashion technology platform connecting designers with manufacturers and buyers.",
    founded: "2018",
    services: [
      "Fashion Technology",
      "Designer Marketplace",
      "Manufacturing Connect",
    ],
  },
  {
    id: 6,
    name: "Style House Files",
    type: "Fashion Consulting",
    location: "Lagos",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Ff84bf105d9db46e28537df3ccb1c17d3%2Faf0f5eea0650465e86f0e73fc42195b8?format=webp&width=400",
    verified: true,
    rating: 4.8,
    description:
      "Leading fashion consulting firm driving growth in Nigeria's fashion industry.",
    founded: "2012",
    services: [
      "Fashion Consulting",
      "Industry Analysis",
      "Business Development",
    ],
  },
  {
    id: 7,
    name: "Kujee",
    type: "Fashion Design House",
    location: "Lagos",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Ff84bf105d9db46e28537df3ccb1c17d3%2Faf0f5eea0650465e86f0e73fc42195b8?format=webp&width=400",
    verified: true,
    rating: 4.7,
    description:
      "Fashion design house creating bespoke pieces with African-inspired aesthetics.",
    founded: "2015",
    services: ["Bespoke Design", "African Aesthetics", "Custom Tailoring"],
  },
  {
    id: 8,
    name: "Fashion Designers Association of Nigeria",
    type: "Professional Association",
    location: "Lagos",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Ff84bf105d9db46e28537df3ccb1c17d3%2Faf0f5eea0650465e86f0e73fc42195b8?format=webp&width=400",
    verified: true,
    rating: 4.6,
    description:
      "Professional association supporting and promoting Nigerian fashion designers.",
    founded: "2001",
    services: [
      "Professional Development",
      "Industry Advocacy",
      "Designer Support",
    ],
  },
  {
    id: 9,
    name: "Zizi Cardow",
    type: "Fashion Brand",
    location: "Lagos",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Ff84bf105d9db46e28537df3ccb1c17d3%2Faf0f5eea0650465e86f0e73fc42195b8?format=webp&width=400",
    verified: true,
    rating: 4.7,
    description:
      "Established fashion brand known for elegant and sophisticated designs.",
    founded: "1995",
    services: ["Fashion Design", "Elegant Wear", "Luxury Fashion"],
  },
  {
    id: 10,
    name: "Emmy Kasbit",
    type: "Fashion Design Studio",
    location: "Lagos",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Ff84bf105d9db46e28537df3ccb1c17d3%2Faf0f5eea0650465e86f0e73fc42195b8?format=webp&width=400",
    verified: true,
    rating: 4.6,
    description:
      "Fashion design studio creating contemporary African fashion with global appeal.",
    founded: "2017",
    services: ["Contemporary Design", "African Fashion", "Global Appeal"],
  },
];

export default function FashionDesign() {
  const [activeTab, setActiveTab] = useState("professionals");

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
                className="w-12 h-12 rounded-full object-cover border-2 border-pink-100"
              />
              {professional.verified && (
                <div className="absolute -bottom-1 -right-1 bg-pink-500 rounded-full p-1">
                  <Star className="w-3 h-3 text-white fill-white" />
                </div>
              )}
            </div>
            <div>
              <CardTitle className="text-lg font-semibold text-gray-900 group-hover:text-pink-600 transition-colors">
                {professional.name}
              </CardTitle>
              <p className="text-sm text-pink-600 font-medium">
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
              <MapPin className="w-4 h-4 text-pink-500" />
              <span className="text-gray-600">{professional.location}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Building2 className="w-4 h-4 text-pink-500" />
              <span className="text-gray-600">{professional.company}</span>
            </div>
          </div>

          <div className="flex items-center space-x-2 text-sm">
            <Calendar className="w-4 h-4 text-pink-500" />
            <span className="text-gray-600">
              {professional.experience} experience
            </span>
          </div>

          <div className="flex flex-wrap gap-1">
            {professional.specialties.map((specialty, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="text-xs bg-pink-50 text-pink-700 hover:bg-pink-100"
              >
                {specialty}
              </Badge>
            ))}
          </div>
        </div>

        <div className="flex space-x-2 pt-4">
          <Button
            size="sm"
            className="flex-1 bg-pink-600 hover:bg-pink-700 text-white"
          >
            <User className="w-4 h-4 mr-2" />
            View Profile
          </Button>
          <Button
            size="sm"
            variant="outline"
            className="border-pink-200 text-pink-600 hover:bg-pink-50"
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
                className="w-12 h-12 rounded-lg object-cover border-2 border-pink-100"
              />
              {business.verified && (
                <div className="absolute -bottom-1 -right-1 bg-pink-500 rounded-full p-1">
                  <Star className="w-3 h-3 text-white fill-white" />
                </div>
              )}
            </div>
            <div>
              <CardTitle className="text-lg font-semibold text-gray-900 group-hover:text-pink-600 transition-colors">
                {business.name}
              </CardTitle>
              <p className="text-sm text-pink-600 font-medium">
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
              <MapPin className="w-4 h-4 text-pink-500" />
              <span className="text-gray-600">{business.location}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="w-4 h-4 text-pink-500" />
              <span className="text-gray-600">Founded {business.founded}</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-1">
            {business.services.map((service, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="text-xs bg-pink-50 text-pink-700 hover:bg-pink-100"
              >
                {service}
              </Badge>
            ))}
          </div>
        </div>

        <div className="flex space-x-2 pt-4">
          <Button
            size="sm"
            className="flex-1 bg-pink-600 hover:bg-pink-700 text-white"
          >
            <Building2 className="w-4 h-4 mr-2" />
            View Business
          </Button>
          <Button
            size="sm"
            variant="outline"
            className="border-pink-200 text-pink-600 hover:bg-pink-50"
          >
            <ExternalLink className="w-4 h-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50">
      {/* Hero Section */}
      <div
        className="relative h-[400px] bg-cover bg-center bg-fixed"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/1148499/pexels-photo-1148499.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-pink-900/80 via-purple-900/70 to-indigo-900/80"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white max-w-3xl">
            <div className="flex items-center space-x-3 mb-4">
              <Badge className="bg-white/20 text-white backdrop-blur-sm px-3 py-1">
                <Palette className="w-4 h-4 mr-2" />
                Fashion & Design Industry
              </Badge>
            </div>
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              Nigerian Fashion & Design
              <span className="block text-3xl text-pink-300 mt-2">
                Showcasing African Creativity Globally
              </span>
            </h1>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Connect with Nigeria's most talented fashion designers, stylists,
              and creative professionals who are putting African fashion on the
              global map.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-pink-600 hover:bg-pink-700 text-white shadow-lg"
              >
                <Users className="w-5 h-5 mr-2" />
                Explore Designers
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-gray-900 backdrop-blur-sm"
              >
                <TrendingUp className="w-5 h-5 mr-2" />
                Industry Insights
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Industry Stats */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Scissors className="w-8 h-8 text-pink-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">500+</h3>
              <p className="text-gray-600">Active Designers</p>
            </div>
            <div className="text-center">
              <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="w-8 h-8 text-pink-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">200+</h3>
              <p className="text-gray-600">Fashion Businesses</p>
            </div>
            <div className="text-center">
              <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-pink-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">50+</h3>
              <p className="text-gray-600">International Awards</p>
            </div>
            <div className="text-center">
              <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Camera className="w-8 h-8 text-pink-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">25+</h3>
              <p className="text-gray-600">Fashion Shows Annually</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Discover Nigerian Fashion Excellence
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Connect with leading fashion designers, creative professionals,
              and innovative businesses shaping Africa's fashion landscape.
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
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {professionals.map((professional) => (
                  <ProfessionalCard
                    key={professional.id}
                    professional={professional}
                  />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="businesses">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {businesses.map((business) => (
                  <BusinessCard key={business.id} business={business} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-16 bg-gradient-to-r from-pink-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">
            Join Nigeria's Fashion Revolution
          </h2>
          <p className="text-xl text-pink-100 mb-8">
            Connect with the creative minds shaping African fashion on the
            global stage.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-pink-600 hover:bg-gray-100"
            >
              <Users className="w-5 h-5 mr-2" />
              Join as Designer
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-pink-600"
            >
              <Building2 className="w-5 h-5 mr-2" />
              List Your Business
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
