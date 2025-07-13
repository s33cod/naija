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
  Truck,
  Ship,
  Award,
  MapPin,
  Building,
  Star,
  TrendingUp,
  Plane,
  Route,
} from "lucide-react";

const transportationProfessionals = [
  {
    id: 1,
    name: "Capt. Adebayo Sarumi",
    title: "Aviation Expert & Airport Operations Manager",
    company: "Murtala Muhammed International Airport",
    location: "Lagos, Lagos",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop",
    professionalSkills: [
      "Aviation Management",
      "Airport Operations",
      "Flight Safety",
      "Air Traffic Management",
    ],
    creativeSkills: [
      "Strategic Planning",
      "Safety Innovation",
      "Operational Excellence",
    ],
    experience: "20+ years",
    rating: 4.9,
    verified: true,
    status: "Available for aviation consultation",
    projects: [
      "Airport Modernization Project",
      "Safety Management System",
      "Aviation Training Program",
    ],
    reputationScore: 93,
  },
  {
    id: 2,
    name: "Engr. Fatima Hassan",
    title: "Transportation Engineer & Smart Mobility Expert",
    company: "Federal Ministry of Transportation",
    location: "Abuja, FCT",
    image:
      "https://images.unsplash.com/photo-1494790108755-2616b612b547?w=300&h=300&fit=crop",
    professionalSkills: [
      "Transportation Engineering",
      "Smart Mobility Solutions",
      "Traffic Management",
      "Infrastructure Planning",
    ],
    creativeSkills: [
      "Urban Mobility Design",
      "Transportation Innovation",
      "System Integration",
    ],
    experience: "14+ years",
    rating: 4.8,
    verified: true,
    status: "Available for projects",
    projects: [
      "Smart Traffic Management System",
      "Public Transportation Planning",
      "Mobility Infrastructure Development",
    ],
    reputationScore: 89,
  },
  {
    id: 3,
    name: "Capt. Chinedu Okafor",
    title: "Maritime Expert & Port Operations Manager",
    company: "Nigerian Ports Authority",
    location: "Lagos, Lagos",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop",
    professionalSkills: [
      "Maritime Operations",
      "Port Management",
      "Shipping Logistics",
      "Marine Safety",
    ],
    creativeSkills: [
      "Port Design",
      "Logistics Optimization",
      "Maritime Photography",
    ],
    experience: "18+ years",
    rating: 4.7,
    verified: true,
    status: "Available for maritime consultation",
    projects: [
      "Port Modernization Initiative",
      "Maritime Safety Program",
      "Shipping Efficiency Project",
    ],
    reputationScore: 87,
  },
];

const transportationStats = [
  { label: "Transportation Professionals", value: "2,400+", icon: Users },
  { label: "Transport Companies", value: "580+", icon: Building },
  { label: "Active Routes", value: "3,200+", icon: Route },
  { label: "Successful Projects", value: "1,800+", icon: Award },
];

export default function Transportation() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead
        title="Transportation Professionals - Nigerian Transport & Logistics Experts | Talk About Nigeria"
        description="Connect with Nigeria's leading transportation professionals, aviation experts, maritime specialists, and logistics managers."
        keywords="Nigerian transportation, aviation professionals, maritime experts, logistics management, transport engineering, shipping Nigeria"
      />

      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-cyan-100 text-cyan-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Truck className="w-4 h-4" />
            Transportation Professionals
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Nigerian Transportation
            <span className="block text-cyan-600">Excellence</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connect with Nigeria's leading transportation professionals, from
            aviation experts to maritime specialists driving connectivity and
            logistics excellence across Nigeria and beyond.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {transportationStats.map((stat, index) => (
            <Card key={index} className="text-center p-6 border-cyan-200">
              <CardContent className="p-0">
                <stat.icon className="w-8 h-8 text-cyan-600 mx-auto mb-3" />
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
            industry="Transportation"
            placeholder="Search transportation professionals: 'Aviation Expert + Safety Manager' or 'Maritime Captain + Port Operations'"
          />
        </div>

        {/* Featured Professionals */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">
              Featured Transportation Professionals
            </h2>
            <Button variant="outline" className="border-cyan-600 text-cyan-600">
              View All Professionals
            </Button>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {transportationProfessionals.map((professional) => (
              <Card
                key={professional.id}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 border-l-4 border-l-cyan-600"
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
                      <p className="text-cyan-600 font-medium mb-1">
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
                      Transportation Expertise:
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {professional.professionalSkills
                        .slice(0, 3)
                        .map((skill) => (
                          <Badge
                            key={skill}
                            className="bg-cyan-100 text-cyan-800 text-xs"
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
                      <Route className="w-4 h-4 text-cyan-500" />
                      <span className="text-xs text-cyan-600">
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
                      className="flex-1 bg-cyan-600 hover:bg-cyan-700"
                    >
                      Connect
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-cyan-600 text-cyan-600"
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
            Transportation Industry in Nigeria
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Ship className="w-5 h-5 text-cyan-500" />
                Industry Overview
              </h3>
              <p className="text-gray-600 mb-4">
                Nigeria's transportation sector is crucial for economic
                development, with significant investments in aviation, maritime,
                rail, and road transport infrastructure to improve connectivity
                and logistics efficiency.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Aviation infrastructure development</li>
                <li>• Maritime port modernization</li>
                <li>• Smart transportation systems</li>
                <li>• Logistics technology adoption</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Plane className="w-5 h-5 text-blue-500" />
                Key Specializations
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  "Aviation Management",
                  "Maritime Operations",
                  "Rail Transportation",
                  "Road Transport",
                  "Logistics Management",
                  "Port Operations",
                  "Traffic Engineering",
                  "Transport Planning",
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
        <div className="bg-cyan-600 text-white rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Join Nigeria's Transportation Network
          </h2>
          <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
            Connect with aviation experts, maritime specialists, and
            transportation professionals who are driving connectivity and
            logistics excellence across Nigeria.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-cyan-600"
            >
              Join as Transportation Professional
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-cyan-600"
            >
              Find Transportation Experts
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
