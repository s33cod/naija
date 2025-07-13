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
  BookOpen,
  GraduationCap,
  Award,
  MapPin,
  Building,
  Star,
  TrendingUp,
  Brain,
  Lightbulb,
} from "lucide-react";

const educationProfessionals = [
  {
    id: 1,
    name: "Prof. Funmi Adebayo",
    title: "Vice-Chancellor & Educational Technology Expert",
    company: "University of Lagos",
    location: "Lagos, Lagos",
    image:
      "https://images.unsplash.com/photo-1494790108755-2616b612b547?w=300&h=300&fit=crop",
    professionalSkills: [
      "Educational Leadership",
      "Curriculum Development",
      "Higher Education",
      "EdTech Innovation",
    ],
    creativeSkills: [
      "Educational Content Creation",
      "Research Writing",
      "Policy Development",
    ],
    experience: "20+ years",
    rating: 4.9,
    verified: true,
    status: "Available for consultation",
    projects: [
      "Digital Learning Platform",
      "Educational Policy Reform",
      "Research Excellence Initiative",
    ],
    reputationScore: 94,
  },
  {
    id: 2,
    name: "Dr. Ahmed Musa",
    title: "EdTech Entrepreneur & Learning Designer",
    company: "EduNaija",
    location: "Abuja, FCT",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop",
    professionalSkills: [
      "Educational Technology",
      "Product Development",
      "Learning Design",
      "Digital Education",
    ],
    creativeSkills: [
      "App Development",
      "Interactive Design",
      "Educational Gaming",
    ],
    experience: "8+ years",
    rating: 4.8,
    verified: true,
    status: "Available for collaboration",
    projects: [
      "Learning Management System",
      "Mobile Education App",
      "Virtual Classroom Platform",
    ],
    reputationScore: 88,
  },
  {
    id: 3,
    name: "Mrs. Blessing Okoro",
    title: "Primary Education Specialist & Teacher Trainer",
    company: "Nigerian Education Foundation",
    location: "Enugu, Enugu",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop",
    professionalSkills: [
      "Primary Education",
      "Teacher Training",
      "Curriculum Design",
      "Child Development",
    ],
    creativeSkills: [
      "Educational Materials Design",
      "Storytelling",
      "Creative Teaching Methods",
    ],
    experience: "15+ years",
    rating: 4.7,
    verified: true,
    status: "Available for training",
    projects: [
      "Teacher Development Program",
      "Early Childhood Education",
      "Reading Literacy Initiative",
    ],
    reputationScore: 86,
  },
];

const educationStats = [
  { label: "Education Professionals", value: "4,500+", icon: Users },
  { label: "Educational Institutions", value: "1,200+", icon: Building },
  { label: "EdTech Startups", value: "85+", icon: TrendingUp },
  { label: "Successful Programs", value: "3,500+", icon: Award },
];

export default function Education() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead
        title="Education Professionals - Nigerian Educators & EdTech Experts | Talk About Nigeria"
        description="Connect with Nigeria's leading education professionals, teachers, EdTech innovators, and academic leaders transforming learning across Nigeria."
        keywords="Nigerian education, teachers Nigeria, EdTech professionals, educational technology, academic leaders, curriculum development"
      />

      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <BookOpen className="w-4 h-4" />
            Education Professionals
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Nigerian Education
            <span className="block text-purple-600">Excellence</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connect with Nigeria's leading education professionals, from
            innovative teachers to EdTech entrepreneurs transforming learning
            experiences across all educational levels.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {educationStats.map((stat, index) => (
            <Card key={index} className="text-center p-6 border-purple-200">
              <CardContent className="p-0">
                <stat.icon className="w-8 h-8 text-purple-600 mx-auto mb-3" />
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
            industry="Education"
            placeholder="Search education professionals: 'EdTech Developer + Teacher' or 'Curriculum Designer + Digital Learning'"
          />
        </div>

        {/* Featured Professionals */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">
              Featured Education Professionals
            </h2>
            <Button
              variant="outline"
              className="border-purple-600 text-purple-600"
            >
              View All Professionals
            </Button>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {educationProfessionals.map((professional) => (
              <Card
                key={professional.id}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 border-l-4 border-l-purple-600"
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
                      <p className="text-purple-600 font-medium mb-1">
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
                      Educational Expertise:
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {professional.professionalSkills
                        .slice(0, 3)
                        .map((skill) => (
                          <Badge
                            key={skill}
                            className="bg-purple-100 text-purple-800 text-xs"
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
                      <Brain className="w-4 h-4 text-purple-500" />
                      <span className="text-xs text-purple-600">
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
                      className="flex-1 bg-purple-600 hover:bg-purple-700"
                    >
                      Connect
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-purple-600 text-purple-600"
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
            Education Industry in Nigeria
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-purple-500" />
                Industry Overview
              </h3>
              <p className="text-gray-600 mb-4">
                Nigeria's education sector is experiencing digital
                transformation with increased adoption of educational
                technology, online learning platforms, and innovative teaching
                methodologies across all educational levels.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Growing EdTech ecosystem</li>
                <li>• Digital learning initiatives</li>
                <li>• Teacher professional development</li>
                <li>• Educational accessibility programs</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-yellow-500" />
                Key Specializations
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  "Early Childhood",
                  "Primary Education",
                  "Secondary Education",
                  "Higher Education",
                  "EdTech Development",
                  "Curriculum Design",
                  "Teacher Training",
                  "Educational Research",
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
        <div className="bg-purple-600 text-white rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Join Nigeria's Education Network
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Connect with educators, EdTech innovators, and academic leaders who
            are transforming learning experiences across Nigeria.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-purple-600"
            >
              Join as Education Professional
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-purple-600"
            >
              Find Educational Experts
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
