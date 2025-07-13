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
  HardHat,
  Building2,
  Award,
  MapPin,
  Building,
  Star,
  TrendingUp,
  Wrench,
  Home,
} from "lucide-react";

const constructionProfessionals = [
  {
    id: 1,
    name: "Engr. Julius Berger",
    title: "Civil Engineer & Infrastructure Development Expert",
    company: "Julius Berger Nigeria",
    location: "Abuja, FCT",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop",
    professionalSkills: [
      "Civil Engineering",
      "Project Management",
      "Infrastructure Development",
      "Construction Planning",
    ],
    creativeSkills: [
      "Architectural Design",
      "3D Modeling",
      "Construction Innovation",
    ],
    experience: "18+ years",
    rating: 4.9,
    verified: true,
    status: "Available for major projects",
    projects: [
      "Abuja-Kaduna Highway",
      "Lagos Island Bridge",
      "Commercial Complex Development",
    ],
    reputationScore: 93,
  },
  {
    id: 2,
    name: "Arc. Funmi Adeleke",
    title: "Architect & Sustainable Building Designer",
    company: "GreenBuild Architecture",
    location: "Lagos, Lagos",
    image:
      "https://images.unsplash.com/photo-1494790108755-2616b612b547?w=300&h=300&fit=crop",
    professionalSkills: [
      "Architecture",
      "Sustainable Design",
      "Building Information Modeling",
      "Urban Planning",
    ],
    creativeSkills: [
      "Interior Design",
      "Landscape Architecture",
      "Environmental Art",
    ],
    experience: "12+ years",
    rating: 4.8,
    verified: true,
    status: "Available for design consultation",
    projects: [
      "Eco-Friendly Housing Estate",
      "Green Office Complex",
      "Sustainable Community Center",
    ],
    reputationScore: 89,
  },
  {
    id: 3,
    name: "Engr. Mohammed Abdullahi",
    title: "Structural Engineer & Construction Technology Expert",
    company: "Nigerian Construction Group",
    location: "Kano, Kano",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop",
    professionalSkills: [
      "Structural Engineering",
      "Construction Technology",
      "Quality Control",
      "Safety Management",
    ],
    creativeSkills: [
      "Construction Photography",
      "Technical Documentation",
      "Innovation Design",
    ],
    experience: "15+ years",
    rating: 4.7,
    verified: true,
    status: "Available for structural projects",
    projects: [
      "High-Rise Building Design",
      "Bridge Construction",
      "Industrial Facility Development",
    ],
    reputationScore: 87,
  },
];

const constructionStats = [
  { label: "Construction Professionals", value: "2,800+", icon: Users },
  { label: "Construction Companies", value: "650+", icon: Building },
  { label: "Active Projects", value: "1,500+", icon: TrendingUp },
  { label: "Completed Projects", value: "5,200+", icon: Award },
];

export default function Construction() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead
        title="Construction Professionals - Nigerian Engineers & Architects | Talk About Nigeria"
        description="Connect with Nigeria's leading construction professionals, civil engineers, architects, and project managers building the nation's infrastructure."
        keywords="Nigerian construction, civil engineers, architects Nigeria, construction professionals, infrastructure development, building construction"
      />

      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <HardHat className="w-4 h-4" />
            Construction Professionals
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Nigerian Construction
            <span className="block text-orange-600">Excellence</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connect with Nigeria's leading construction professionals, from
            innovative engineers to skilled architects building the
            infrastructure that shapes our nation's future.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {constructionStats.map((stat, index) => (
            <Card key={index} className="text-center p-6 border-orange-200">
              <CardContent className="p-0">
                <stat.icon className="w-8 h-8 text-orange-600 mx-auto mb-3" />
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
            industry="Construction"
            placeholder="Search construction professionals: 'Civil Engineer + Architect' or 'Project Manager + Sustainable Design'"
          />
        </div>

        {/* Featured Professionals */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">
              Featured Construction Professionals
            </h2>
            <Button
              variant="outline"
              className="border-orange-600 text-orange-600"
            >
              View All Professionals
            </Button>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {constructionProfessionals.map((professional) => (
              <Card
                key={professional.id}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 border-l-4 border-l-orange-600"
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
                      <p className="text-orange-600 font-medium mb-1">
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
                      Construction Expertise:
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {professional.professionalSkills
                        .slice(0, 3)
                        .map((skill) => (
                          <Badge
                            key={skill}
                            className="bg-orange-100 text-orange-800 text-xs"
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
                      <Wrench className="w-4 h-4 text-orange-500" />
                      <span className="text-xs text-orange-600">
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
                      className="flex-1 bg-orange-600 hover:bg-orange-700"
                    >
                      Connect
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-orange-600 text-orange-600"
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
            Construction Industry in Nigeria
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Building2 className="w-5 h-5 text-orange-500" />
                Industry Overview
              </h3>
              <p className="text-gray-600 mb-4">
                Nigeria's construction industry is experiencing significant
                growth with major infrastructure projects, residential
                developments, and commercial construction driving economic
                development across the nation.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Major infrastructure development</li>
                <li>• Sustainable building practices</li>
                <li>• Modern construction technology</li>
                <li>• Smart building solutions</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Home className="w-5 h-5 text-blue-500" />
                Key Specializations
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  "Civil Engineering",
                  "Architecture",
                  "Project Management",
                  "Structural Engineering",
                  "Urban Planning",
                  "Construction Tech",
                  "Building Design",
                  "Infrastructure",
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
        <div className="bg-orange-600 text-white rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Join Nigeria's Construction Network
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Connect with engineers, architects, and construction professionals
            who are building the infrastructure that shapes Nigeria's future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-orange-600"
            >
              Join as Construction Professional
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-orange-600"
            >
              Find Construction Experts
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
