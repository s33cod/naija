import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEOHead from "@/components/layout/SEOHead";
import AISearchWidget from "@/components/search/AISearchWidget";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Users,
  Sprout,
  Tractor,
  Award,
  MapPin,
  Building,
  Star,
  TrendingUp,
  Leaf,
  Globe,
} from "lucide-react";

const agricultureProfessionals = [
  {
    id: 1,
    name: "Dr. Akinwumi Adesina",
    title: "President, African Development Bank & Agriculture Expert",
    company: "African Development Bank",
    location: "Abidjan, Côte d'Ivoire / Nigeria",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop",
    professionalSkills: [
      "Agricultural Development",
      "Policy Making",
      "International Development",
      "Food Security",
    ],
    creativeSkills: [
      "Strategic Planning",
      "Public Speaking",
      "Innovation Leadership",
    ],
    experience: "25+ years",
    rating: 5.0,
    verified: true,
    status: "Available for policy consultation",
    projects: [
      "Feed Africa Strategy",
      "Agricultural Transformation",
      "Youth in Agriculture Initiative",
    ],
    reputationScore: 98,
  },
  {
    id: 2,
    name: "Amina Mohammed-Bello",
    title: "AgriTech Entrepreneur & Sustainable Farming Expert",
    company: "GreenHarvest Nigeria",
    location: "Kaduna, Kaduna",
    image:
      "https://images.unsplash.com/photo-1494790108755-2616b612b547?w=300&h=300&fit=crop",
    professionalSkills: [
      "Sustainable Agriculture",
      "AgriTech Innovation",
      "Crop Management",
      "Farm Operations",
    ],
    creativeSkills: [
      "Agricultural Photography",
      "Farm Design",
      "Educational Content Creation",
    ],
    experience: "12+ years",
    rating: 4.8,
    verified: true,
    status: "Available for mentoring",
    projects: [
      "Smart Irrigation Systems",
      "Organic Farming Initiative",
      "Youth Farmer Training Program",
    ],
    reputationScore: 87,
  },
  {
    id: 3,
    name: "Chidi Okonkwo",
    title: "Livestock Specialist & Agribusiness Consultant",
    company: "Nigerian Livestock Development",
    location: "Jos, Plateau",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop",
    professionalSkills: [
      "Livestock Management",
      "Agribusiness Development",
      "Animal Nutrition",
      "Farm Planning",
    ],
    creativeSkills: [
      "Farm Documentation",
      "Agricultural Marketing",
      "Community Engagement",
    ],
    experience: "15+ years",
    rating: 4.7,
    verified: true,
    status: "Available for consultation",
    projects: [
      "Modern Livestock Farming",
      "Cattle Ranch Development",
      "Agricultural Value Chain",
    ],
    reputationScore: 85,
  },
];

const agricultureStats = [
  { label: "Agriculture Professionals", value: "3,200+", icon: Users },
  { label: "Farming Communities", value: "850+", icon: Building },
  { label: "AgriTech Startups", value: "120+", icon: TrendingUp },
  { label: "Successful Projects", value: "2,100+", icon: Award },
];

export default function Agriculture() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead
        title="Agriculture Professionals - Nigerian Farming & AgriTech Experts | Talk About Nigeria"
        description="Connect with Nigeria's leading agriculture professionals, farmers, AgriTech innovators, and sustainable farming experts across all agricultural sectors."
        keywords="Nigerian agriculture, farming professionals, AgriTech Nigeria, sustainable farming, agricultural experts, livestock farming, crop management"
      />

      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Sprout className="w-4 h-4" />
            Agriculture Professionals
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Nigerian Agriculture
            <span className="block text-green-600">Innovation</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connect with Nigeria's leading agriculture professionals, from
            innovative farmers to AgriTech entrepreneurs driving food security
            and sustainable farming across Africa.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {agricultureStats.map((stat, index) => (
            <Card key={index} className="text-center p-6 border-green-200">
              <CardContent className="p-0">
                <stat.icon className="w-8 h-8 text-green-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-gray-900 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* AI Search Widget */}
        <div className="mb-16">
          <AISearchWidget
            industry="Agriculture"
            placeholder="Search agriculture professionals: 'Sustainable Farmer + AgriTech' or 'Livestock Expert + Farm Management'"
          />
        </div>

        {/* Featured Professionals */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">
              Featured Agriculture Professionals
            </h2>
            <Button
              variant="outline"
              className="border-green-600 text-green-600"
            >
              View All Professionals
            </Button>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {agricultureProfessionals.map((professional) => (
              <Card
                key={professional.id}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 border-l-4 border-l-green-600"
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <img
                      src={professional.image}
                      alt={professional.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-1">
                        {professional.name}
                      </h3>
                      <p className="text-green-600 font-medium mb-1">
                        {professional.title}
                      </p>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Building className="w-4 h-4" />
                        {professional.company}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600 mt-1">
                        <MapPin className="w-4 h-4" />
                        {professional.location}
                      </div>
                    </div>
                    {professional.verified && (
                      <Badge className="bg-green-100 text-green-800">
                        ✓ Verified
                      </Badge>
                    )}
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-sm text-gray-700 mb-2">
                      Agricultural Expertise:
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {professional.professionalSkills
                        .slice(0, 3)
                        .map((skill) => (
                          <Badge
                            key={skill}
                            className="bg-green-100 text-green-800 text-xs"
                          >
                            {skill}
                          </Badge>
                        ))}
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-sm text-gray-700 mb-2">
                      Additional Skills:
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {professional.creativeSkills.slice(0, 2).map((skill) => (
                        <Badge
                          key={skill}
                          variant="outline"
                          className="text-xs"
                        >
                          ✨ {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <Star className="w-4 h-4 text-yellow-500" />
                      <span className="text-sm font-medium">
                        {professional.rating}
                      </span>
                      <span className="text-xs text-gray-500">
                        ({professional.experience} experience)
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Leaf className="w-4 h-4 text-green-500" />
                      <span className="text-xs text-green-600">
                        {professional.reputationScore}/100
                      </span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-sm text-gray-600 mb-2">
                      Recent Projects:
                    </p>
                    <ul className="text-xs text-gray-500 space-y-1">
                      {professional.projects
                        .slice(0, 2)
                        .map((project, index) => (
                          <li key={index}>• {project}</li>
                        ))}
                    </ul>
                  </div>

                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      className="flex-1 bg-green-600 hover:bg-green-700"
                    >
                      Connect
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-green-600 text-green-600"
                    >
                      View Profile
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Industry Insights */}
        <div className="bg-white rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Agriculture Industry in Nigeria
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Tractor className="w-5 h-5 text-green-500" />
                Industry Overview
              </h3>
              <p className="text-gray-600 mb-4">
                Nigeria's agriculture sector is a cornerstone of the economy,
                employing over 70% of the rural population. The industry is
                experiencing modernization through technology adoption,
                sustainable practices, and innovative farming techniques.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Growing AgriTech ecosystem</li>
                <li>• Sustainable farming initiatives</li>
                <li>• Modern irrigation systems</li>
                <li>• Agricultural value chain development</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Globe className="w-5 h-5 text-blue-500" />
                Key Specializations
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  "Crop Production",
                  "Livestock Farming",
                  "AgriTech",
                  "Sustainable Farming",
                  "Food Security",
                  "Agricultural Policy",
                  "Farm Management",
                  "Agricultural Finance",
                ].map((specialty) => (
                  <Badge
                    key={specialty}
                    variant="outline"
                    className="justify-center py-2"
                  >
                    {specialty}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-green-600 text-white rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Join Nigeria's Agriculture Network
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Connect with farmers, AgriTech innovators, and agricultural experts
            who are transforming food production and sustainability across
            Nigeria.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-green-600"
            >
              Join as Agriculture Professional
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-green-600"
            >
              Find Agricultural Experts
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
