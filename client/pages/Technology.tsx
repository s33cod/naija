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
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEOHead from "@/components/layout/SEOHead";
import {
  Laptop,
  Users,
  MapPin,
  Building2,
  Star,
  ExternalLink,
  Calendar,
  TrendingUp,
  Award,
  Code,
  Smartphone,
  User,
} from "lucide-react";

const professionals = [
  {
    id: 1,
    name: "Shola Akinlade",
    specialty: "Fintech CEO & Co-founder",
    location: "Lagos",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Ff84bf105d9db46e28537df3ccb1c17d3%2Faf0f5eea0650465e86f0e73fc42195b8?format=webp&width=400",
    verified: true,
    rating: 4.9,
    company: "Paystack",
    description:
      "Co-founder and CEO of Paystack, revolutionizing digital payments across Africa with innovative fintech solutions.",
    experience: "12+ years",
    specialties: ["Fintech", "Software Engineering", "Startup Leadership"],
  },
  {
    id: 2,
    name: "Ezra Olubi",
    specialty: "CTO & Co-founder",
    location: "Lagos",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Ff84bf105d9db46e28537df3ccb1c17d3%2Faf0f5eea0650465e86f0e73fc42195b8?format=webp&width=400",
    verified: true,
    rating: 4.8,
    company: "Paystack",
    description:
      "Co-founder and CTO of Paystack, leading technical innovation in African payment infrastructure.",
    experience: "11+ years",
    specialties: [
      "Software Architecture",
      "Payment Systems",
      "Tech Leadership",
    ],
  },
  {
    id: 3,
    name: "Olugbenga Agboola",
    specialty: "CEO & Co-founder",
    location: "San Francisco/Lagos",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Ff84bf105d9db46e28537df3ccb1c17d3%2Faf0f5eea0650465e86f0e73fc42195b8?format=webp&width=400",
    verified: true,
    rating: 4.9,
    company: "Flutterwave",
    description:
      "CEO and Co-founder of Flutterwave, building payment infrastructure that connects Africa to the global economy.",
    experience: "15+ years",
    specialties: ["Fintech", "Global Payments", "Business Strategy"],
  },
  {
    id: 4,
    name: "Iyinoluwa Aboyeji",
    specialty: "Serial Tech Entrepreneur",
    location: "Lagos",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Ff84bf105d9db46e28537df3ccb1c17d3%2Faf0f5eea0650465e86f0e73fc42195b8?format=webp&width=400",
    verified: true,
    rating: 4.7,
    company: "Future Africa",
    description:
      "Serial entrepreneur and investor, co-founded Andela and Flutterwave, now leading Future Africa.",
    experience: "13+ years",
    specialties: ["Entrepreneurship", "Venture Capital", "Tech Investment"],
  },
  {
    id: 5,
    name: "Kemi Adetu",
    specialty: "Data Science Lead",
    location: "Lagos",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Ff84bf105d9db46e28537df3ccb1c17d3%2Faf0f5eea0650465e86f0e73fc42195b8?format=webp&width=400",
    verified: true,
    rating: 4.8,
    company: "Google",
    description:
      "Leading data science initiatives at Google, specializing in machine learning applications for emerging markets.",
    experience: "9+ years",
    specialties: ["Machine Learning", "Data Science", "AI Research"],
  },
  {
    id: 6,
    name: "Tayo Oviosu",
    specialty: "CEO & Founder",
    location: "Lagos",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Ff84bf105d9db46e28537df3ccb1c17d3%2Faf0f5eea0650465e86f0e73fc42195b8?format=webp&width=400",
    verified: true,
    rating: 4.6,
    company: "Paga",
    description:
      "Founder of Paga, one of Nigeria's first mobile money platforms, driving financial inclusion across Africa.",
    experience: "14+ years",
    specialties: ["Mobile Payments", "Financial Inclusion", "Digital Banking"],
  },
  {
    id: 7,
    name: "Mitchell Elegbe",
    specialty: "CEO & Founder",
    location: "Lagos",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Ff84bf105d9db46e28537df3ccb1c17d3%2Faf0f5eea0650465e86f0e73fc42195b8?format=webp&width=400",
    verified: true,
    rating: 4.7,
    company: "Interswitch",
    description:
      "Founder and CEO of Interswitch, pioneering digital payment solutions and financial technology in Africa.",
    experience: "20+ years",
    specialties: [
      "Payment Processing",
      "Financial Technology",
      "Business Innovation",
    ],
  },
  {
    id: 8,
    name: "Seun Onigbinde",
    specialty: "CEO & Co-founder",
    location: "Lagos",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Ff84bf105d9db46e28537df3ccb1c17d3%2Faf0f5eea0650465e86f0e73fc42195b8?format=webp&width=400",
    verified: true,
    rating: 4.5,
    company: "BudgIT",
    description:
      "Co-founder of BudgIT, using technology to promote transparency and civic engagement in Nigeria.",
    experience: "10+ years",
    specialties: ["Civic Technology", "Data Transparency", "Social Impact"],
  },
  {
    id: 9,
    name: "Adaora Okeleke",
    specialty: "Technology Consultant",
    location: "Lagos",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Ff84bf105d9db46e28537df3ccb1c17d3%2Faf0f5eea0650465e86f0e73fc42195b8?format=webp&width=400",
    verified: true,
    rating: 4.6,
    company: "Freelance",
    description:
      "Independent technology consultant specializing in digital transformation and technology strategy for African businesses.",
    experience: "8+ years",
    specialties: ["Digital Transformation", "Tech Strategy", "Consulting"],
  },
  {
    id: 10,
    name: "Chinedu Echeruo",
    specialty: "Serial Tech Entrepreneur",
    location: "Lagos/New York",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Ff84bf105d9db46e28537df3ccb1c17d3%2Faf0f5eea0650465e86f0e73fc42195b8?format=webp&width=400",
    verified: true,
    rating: 4.8,
    company: "Giant Ventures",
    description:
      "Serial entrepreneur who founded HopStop (acquired by Apple) and now invests in African tech startups.",
    experience: "16+ years",
    specialties: ["Mobile Apps", "Tech Investment", "Global Markets"],
  },
];

const businesses = [
  {
    id: 1,
    name: "Paystack",
    type: "Fintech Company",
    location: "Lagos",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Ff84bf105d9db46e28537df3ccb1c17d3%2Faf0f5eea0650465e86f0e73fc42195b8?format=webp&width=400",
    verified: true,
    rating: 4.9,
    description:
      "Leading payment infrastructure company in Africa, acquired by Stripe for $200M, processing billions in transactions.",
    founded: "2015",
    services: ["Payment Processing", "API Infrastructure", "Merchant Services"],
  },
  {
    id: 2,
    name: "Flutterwave",
    type: "Payment Technology",
    location: "Lagos",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Ff84bf105d9db46e28537df3ccb1c17d3%2Faf0f5eea0650465e86f0e73fc42195b8?format=webp&width=400",
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
  {
    id: 3,
    name: "Interswitch",
    type: "Financial Technology",
    location: "Lagos",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Ff84bf105d9db46e28537df3ccb1c17d3%2Faf0f5eea0650465e86f0e73fc42195b8?format=webp&width=400",
    verified: true,
    rating: 4.7,
    description:
      "Pioneer in digital payment solutions in Africa, providing secure electronic payment processing services.",
    founded: "2002",
    services: ["Payment Processing", "Financial Services", "Digital Banking"],
  },
  {
    id: 4,
    name: "Andela",
    type: "Technology Training",
    location: "Lagos/Remote",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Ff84bf105d9db46e28537df3ccb1c17d3%2Faf0f5eea0650465e86f0e73fc42195b8?format=webp&width=400",
    verified: true,
    rating: 4.6,
    description:
      "Global talent accelerator training software engineers and connecting them with international opportunities.",
    founded: "2014",
    services: [
      "Software Training",
      "Talent Development",
      "Remote Work Solutions",
    ],
  },
  {
    id: 5,
    name: "SystemSpecs",
    type: "Software Development",
    location: "Lagos",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Ff84bf105d9db46e28537df3ccb1c17d3%2Faf0f5eea0650465e86f0e73fc42195b8?format=webp&width=400",
    verified: true,
    rating: 4.5,
    description:
      "Leading software development company providing enterprise solutions and digital banking platforms.",
    founded: "1992",
    services: ["Enterprise Software", "Digital Banking", "System Integration"],
  },
  {
    id: 6,
    name: "Konga",
    type: "E-commerce Platform",
    location: "Lagos",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Ff84bf105d9db46e28537df3ccb1c17d3%2Faf0f5eea0650465e86f0e73fc42195b8?format=webp&width=400",
    verified: true,
    rating: 4.4,
    description:
      "Leading e-commerce platform in Nigeria, providing online retail and digital marketplace services.",
    founded: "2012",
    services: ["E-commerce", "Digital Marketplace", "Logistics"],
  },
  {
    id: 7,
    name: "Hotels.ng",
    type: "Travel Technology",
    location: "Lagos",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Ff84bf105d9db46e28537df3ccb1c17d3%2Faf0f5eea0650465e86f0e73fc42195b8?format=webp&width=400",
    verified: true,
    rating: 4.6,
    description:
      "Leading online hotel booking platform in Nigeria, revolutionizing the travel and hospitality industry.",
    founded: "2013",
    services: ["Hotel Booking", "Travel Technology", "Hospitality Solutions"],
  },
  {
    id: 8,
    name: "Piggyvest",
    type: "Fintech Savings",
    location: "Lagos",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Ff84bf105d9db46e28537df3ccb1c17d3%2Faf0f5eea0650465e86f0e73fc42195b8?format=webp&width=400",
    verified: true,
    rating: 4.7,
    description:
      "Digital savings and investment platform helping Nigerians save and invest money with ease.",
    founded: "2016",
    services: ["Digital Savings", "Investment Platform", "Financial Planning"],
  },
  {
    id: 9,
    name: "Cowrywise",
    type: "Investment Technology",
    location: "Lagos",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Ff84bf105d9db46e28537df3ccb1c17d3%2Faf0f5eea0650465e86f0e73fc42195b8?format=webp&width=400",
    verified: true,
    rating: 4.5,
    description:
      "Digital investment platform democratizing access to investment opportunities for African millennials.",
    founded: "2017",
    services: [
      "Investment Management",
      "Wealth Building",
      "Financial Education",
    ],
  },
  {
    id: 10,
    name: "Seamfix",
    type: "Identity Technology",
    location: "Lagos",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Ff84bf105d9db46e28537df3ccb1c17d3%2Faf0f5eea0650465e86f0e73fc42195b8?format=webp&width=400",
    verified: true,
    rating: 4.4,
    description:
      "Identity verification and customer onboarding platform powering digital transformation across Africa.",
    founded: "2014",
    services: ["Identity Verification", "KYC Solutions", "Digital Onboarding"],
  },
];

export default function Technology() {
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
            <Calendar className="w-4 h-4 text-green-500" />
            <span className="text-gray-600">
              {professional.experience} experience
            </span>
          </div>

          <div className="flex flex-wrap gap-1">
            {professional.specialties.map((specialty, index) => (
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
                className="w-12 h-12 rounded-lg object-cover border-2 border-green-100"
              />
              {business.verified && (
                <div className="absolute -bottom-1 -right-1 bg-green-500 rounded-full p-1">
                  <Star className="w-3 h-3 text-white fill-white" />
                </div>
              )}
            </div>
            <div>
              <CardTitle className="text-lg font-semibold text-gray-900 group-hover:text-green-600 transition-colors">
                {business.name}
              </CardTitle>
              <p className="text-sm text-green-600 font-medium">
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
              <MapPin className="w-4 h-4 text-green-500" />
              <span className="text-gray-600">{business.location}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="w-4 h-4 text-green-500" />
              <span className="text-gray-600">Founded {business.founded}</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-1">
            {business.services.map((service, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="text-xs bg-green-50 text-green-700 hover:bg-green-100"
              >
                {service}
              </Badge>
            ))}
          </div>
        </div>

        <div className="flex space-x-2 pt-4">
          <Button
            size="sm"
            className="flex-1 bg-green-600 hover:bg-green-700 text-white"
          >
            <Building2 className="w-4 h-4 mr-2" />
            View Business
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

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Technology Professionals - Nigerian Tech Leaders & Innovators"
        description="Connect with Nigeria's leading technology professionals including Paystack founders, Flutterwave leaders, and innovative tech entrepreneurs shaping Africa's digital future."
        keywords="Nigerian tech professionals, fintech Nigeria, software engineers Nigeria, tech entrepreneurs, startup founders Nigeria"
      />

      <Header />

      {/* Hero Section */}
      <div
        className="relative h-[400px] bg-cover bg-center bg-fixed"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 via-blue-900/70 to-cyan-900/80"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white max-w-3xl">
            <div className="flex items-center space-x-3 mb-4">
              <Badge className="bg-white/20 text-white backdrop-blur-sm px-3 py-1">
                <Laptop className="w-4 h-4 mr-2" />
                Technology Industry
              </Badge>
            </div>
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              Nigerian Tech Innovation
              <span className="block text-3xl text-cyan-300 mt-2">
                Powering Africa's Digital Future
              </span>
            </h1>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Connect with Nigeria's leading technology professionals,
              entrepreneurs, and innovative companies driving digital
              transformation across Africa.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white shadow-lg"
              >
                <Users className="w-5 h-5 mr-2" />
                Explore Tech Leaders
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
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">1000+</h3>
              <p className="text-gray-600">Tech Professionals</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">500+</h3>
              <p className="text-gray-600">Tech Companies</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">$2B+</h3>
              <p className="text-gray-600">Funding Raised</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Smartphone className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">10+</h3>
              <p className="text-gray-600">Unicorn Startups</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-16 bg-gradient-to-br from-green-50 via-blue-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Discover Nigerian Tech Excellence
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Connect with leading technology professionals and innovative
              companies driving digital transformation across Africa.
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
      <div className="py-16 bg-gradient-to-r from-green-600 to-cyan-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">
            Join Nigeria's Tech Revolution
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Connect with the innovators and companies building Africa's digital
            future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-green-600 hover:bg-gray-100"
            >
              <Users className="w-5 h-5 mr-2" />
              Join as Professional
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-green-600"
            >
              <Building2 className="w-5 h-5 mr-2" />
              List Your Company
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
