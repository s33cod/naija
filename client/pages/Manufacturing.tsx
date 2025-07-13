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
  Factory,
  Cog,
  Award,
  MapPin,
  Building,
  Star,
  TrendingUp,
  Settings,
  Zap,
} from "lucide-react";

const manufacturingProfessionals = [
  {
    id: 1,
    name: "Engr. Rasheed Taiwo",
    title: "Manufacturing Engineer & Industry 4.0 Expert",
    company: "Dangote Manufacturing",
    location: "Lagos, Lagos",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop",
    professionalSkills: [
      "Manufacturing Engineering",
      "Process Optimization",
      "Quality Control",
      "Industrial Automation",
    ],
    creativeSkills: [
      "Process Innovation",
      "Technical Documentation",
      "System Design",
    ],
    experience: "16+ years",
    rating: 4.9,
    verified: true,
    status: "Available for consultation",
    projects: [
      "Automated Production Line",
      "Quality Management System",
      "Manufacturing Efficiency Program",
    ],
    reputationScore: 91,
  },
  {
    id: 2,
    name: "Dr. Amaka Okoye",
    title: "Production Manager & Lean Manufacturing Specialist",
    company: "Nigerian Breweries",
    location: "Lagos, Lagos",
    image:
      "https://images.unsplash.com/photo-1494790108755-2616b612b547?w=300&h=300&fit=crop",
    professionalSkills: [
      "Production Management",
      "Lean Manufacturing",
      "Supply Chain Management",
      "Operations Research",
    ],
    creativeSkills: [
      "Process Design",
      "Workflow Optimization",
      "Training Development",
    ],
    experience: "14+ years",
    rating: 4.8,
    verified: true,
    status: "Available for projects",
    projects: [
      "Lean Production Implementation",
      "Supply Chain Optimization",
      "Manufacturing Cost Reduction",
    ],
    reputationScore: 88,
  },
  {
    id: 3,
    name: "Engr. Ibrahim Mohammed",
    title: "Industrial Engineer & Manufacturing Technology Expert",
    company: "Flour Mills Nigeria",
    location: "Lagos, Lagos",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop",
    professionalSkills: [
      "Industrial Engineering",
      "Manufacturing Technology",
      "Equipment Management",
      "Safety Systems",
    ],
    creativeSkills: [
      "Equipment Design",
      "Safety Innovation",
      "Technical Training",
    ],
    experience: "12+ years",
    rating: 4.7,
    verified: true,
    status: "Available for collaboration",
    projects: [
      "Manufacturing Equipment Upgrade",
      "Safety System Implementation",
      "Production Line Optimization",
    ],
    reputationScore: 86,
  },
];

const manufacturingStats = [
  { label: "Manufacturing Professionals", value: "3,100+", icon: Users },
  { label: "Manufacturing Companies", value: "750+", icon: Building },
  { label: "Production Facilities", value: "2,200+", icon: Factory },
  { label: "Successful Projects", value: "4,800+", icon: Award },
];

export default function Manufacturing() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead
        title="Manufacturing Professionals - Nigerian Industrial Engineers | Talk About Nigeria"
        description="Connect with Nigeria's leading manufacturing professionals, industrial engineers, production managers, and manufacturing technology experts."
        keywords="Nigerian manufacturing, industrial engineers, production management, manufacturing technology, quality control, lean manufacturing"
      />

      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Factory className="w-4 h-4" />
            Manufacturing Professionals
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Nigerian Manufacturing
            <span className="block text-indigo-600">Excellence</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connect with Nigeria's leading manufacturing professionals, from
            industrial engineers to production managers driving innovation and
            efficiency in Nigeria's manufacturing sector.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {manufacturingStats.map((stat, index) => (
            <Card key={index} className="text-center p-6 border-indigo-200">
              <CardContent className="p-0">
                <stat.icon className="w-8 h-8 text-indigo-600 mx-auto mb-3" />
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
            industry="Manufacturing"
            placeholder="Search manufacturing professionals: 'Industrial Engineer + Process Optimization' or 'Production Manager + Lean Manufacturing'"
          />
        </div>

        {/* Featured Professionals */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">
              Featured Manufacturing Professionals
            </h2>
            <Button
              variant="outline"
              className="border-indigo-600 text-indigo-600"
            >
              View All Professionals
            </Button>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {manufacturingProfessionals.map((professional) => (
              <Card
                key={professional.id}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 border-l-4 border-l-indigo-600"
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
                      <p className="text-indigo-600 font-medium mb-1">
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
                      Manufacturing Expertise:
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {professional.professionalSkills
                        .slice(0, 3)
                        .map((skill) => (
                          <Badge
                            key={skill}
                            className="bg-indigo-100 text-indigo-800 text-xs"
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
                      <Cog className="w-4 h-4 text-indigo-500" />
                      <span className="text-xs text-indigo-600">
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
                      className="flex-1 bg-indigo-600 hover:bg-indigo-700"
                    >
                      Connect
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-indigo-600 text-indigo-600"
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
            Manufacturing Industry in Nigeria
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Settings className="w-5 h-5 text-indigo-500" />
                Industry Overview
              </h3>
              <p className="text-gray-600 mb-4">
                Nigeria's manufacturing sector is experiencing modernization
                with increased adoption of automation, quality control systems,
                and lean manufacturing principles to improve productivity and
                competitiveness.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Industrial automation adoption</li>
                <li>• Quality management systems</li>
                <li>• Lean manufacturing implementation</li>
                <li>• Local content development</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Zap className="w-5 h-5 text-yellow-500" />
                Key Specializations
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  "Food Manufacturing",
                  "Textile Production",
                  "Automotive Assembly",
                  "Chemical Processing",
                  "Electronics Manufacturing",
                  "Steel Production",
                  "Pharmaceutical Manufacturing",
                  "Consumer Goods",
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
        <div className="bg-indigo-600 text-white rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Join Nigeria's Manufacturing Network
          </h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
            Connect with manufacturing engineers, production managers, and
            industry experts who are driving innovation and efficiency in
            Nigeria's manufacturing sector.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-indigo-600"
            >
              Join as Manufacturing Professional
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-indigo-600"
            >
              Find Manufacturing Experts
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
