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
  Stethoscope,
  Heart,
  Award,
  MapPin,
  Building,
  Star,
  TrendingUp,
  Activity,
  Brain,
} from "lucide-react";

const healthcareProfessionals = [
  {
    id: 1,
    name: "Dr. Ibrahim Yusuf",
    title: "Chief Medical Officer & Health Tech Innovator",
    company: "Federal Medical Centre, Abuja",
    location: "Abuja, FCT",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&h=300&fit=crop",
    professionalSkills: [
      "Medicine",
      "Healthcare Technology",
      "Medical Research",
      "Public Health",
    ],
    creativeSkills: [
      "Medical Writing",
      "Health Communication",
      "Technology Innovation",
    ],
    experience: "15+ years",
    rating: 4.9,
    verified: true,
    status: "Available for consultation",
    projects: [
      "Health Tech Innovation",
      "Medical Education Platform",
      "Public Health Initiative",
    ],
    reputationScore: 92,
  },
  {
    id: 2,
    name: "Dr. Aisha Mohammed",
    title: "Pediatric Surgeon & Medical Educator",
    company: "Lagos University Teaching Hospital",
    location: "Lagos, Lagos",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop",
    professionalSkills: [
      "Pediatric Surgery",
      "Medical Education",
      "Healthcare Management",
      "Telemedicine",
    ],
    creativeSkills: [
      "Medical Illustration",
      "Educational Content Creation",
      "Health Advocacy",
    ],
    experience: "12+ years",
    rating: 4.8,
    verified: true,
    status: "Available for mentoring",
    projects: [
      "Children's Health Initiative",
      "Medical Education App",
      "Healthcare Accessibility Program",
    ],
    reputationScore: 89,
  },
  {
    id: 3,
    name: "Dr. Emeka Okafor",
    title: "Cardiologist & Digital Health Entrepreneur",
    company: "Heart Care Nigeria",
    location: "Port Harcourt, Rivers",
    image:
      "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=300&h=300&fit=crop",
    professionalSkills: [
      "Cardiology",
      "Digital Health",
      "Healthcare Analytics",
      "Medical Research",
    ],
    creativeSkills: [
      "Health App Development",
      "Medical Photography",
      "Patient Education",
    ],
    experience: "10+ years",
    rating: 4.7,
    verified: true,
    status: "Available for collaboration",
    projects: [
      "Heart Health Monitoring App",
      "Cardiovascular Research",
      "Digital Health Platform",
    ],
    reputationScore: 86,
  },
];

const healthcareStats = [
  { label: "Healthcare Professionals", value: "2,500+", icon: Users },
  { label: "Medical Institutions", value: "450+", icon: Building },
  { label: "Health Tech Startups", value: "75+", icon: TrendingUp },
  { label: "Successful Projects", value: "1,200+", icon: Award },
];

export default function Healthcare() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead
        title="Healthcare Professionals - Nigerian Medical Experts | Talk About Nigeria"
        description="Connect with Nigeria's leading healthcare professionals, doctors, surgeons, and health tech innovators. Find medical experts across all specialties."
        keywords="Nigerian healthcare, medical professionals, doctors Nigeria, health tech, medical experts, Nigerian surgeons, healthcare innovation"
      />

      <Header />

      {/* Hero Section */}
      <section
        className="relative bg-gradient-to-r from-blue-600/90 to-blue-800/90 text-white py-20 overflow-hidden"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/3786126/pexels-photo-3786126.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/85 to-blue-800/85"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Stethoscope className="w-4 h-4" />
            Healthcare Professionals
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">
            Nigerian Healthcare
            <span className="block text-green-300">Excellence</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-95 max-w-3xl mx-auto drop-shadow-md">
            Connect with Nigeria's leading healthcare professionals, from
            world-class surgeons to innovative health tech entrepreneurs driving
            medical advancement across Africa.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Badge
              variant="secondary"
              className="text-lg px-6 py-3 bg-white/90 text-blue-600 backdrop-blur-sm"
            >
              🏥 Leading Medical Excellence
            </Badge>
            <Badge
              variant="outline"
              className="text-lg px-6 py-3 border-white text-white backdrop-blur-sm"
            >
              🌍 Global Recognition
            </Badge>
          </div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Stats Section */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {healthcareStats.map((stat, index) => (
            <Card key={index} className="text-center p-6 border-blue-200">
              <CardContent className="p-0">
                <stat.icon className="w-8 h-8 text-blue-600 mx-auto mb-3" />
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
            industry="Healthcare"
            placeholder="Search healthcare professionals: 'Cardiologist + Health Tech' or 'Pediatrician + Medical Education'"
          />
        </div>

        {/* Featured Professionals */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">
              Featured Healthcare Professionals
            </h2>
            <Button variant="outline" className="border-blue-600 text-blue-600">
              View All Professionals
            </Button>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {healthcareProfessionals.map((professional) => (
              <Card
                key={professional.id}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 border-l-4 border-l-blue-600"
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
                      <p className="text-blue-600 font-medium mb-1">
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
                      Medical Expertise:
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {professional.professionalSkills
                        .slice(0, 3)
                        .map((skill) => (
                          <Badge
                            key={skill}
                            className="bg-blue-100 text-blue-800 text-xs"
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
                      <Activity className="w-4 h-4 text-green-500" />
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
                      className="flex-1 bg-blue-600 hover:bg-blue-700"
                    >
                      Connect
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-blue-600 text-blue-600"
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
            Healthcare Industry in Nigeria
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Heart className="w-5 h-5 text-red-500" />
                Industry Overview
              </h3>
              <p className="text-gray-600 mb-4">
                Nigeria's healthcare sector is experiencing rapid transformation
                with increased investment in health technology, telemedicine,
                and digital health solutions. Our healthcare professionals are
                leading innovations in medical education, patient care, and
                health system improvement.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Growing health tech ecosystem</li>
                <li>• Advanced medical training programs</li>
                <li>• Increased healthcare accessibility initiatives</li>
                <li>• Strong focus on preventive medicine</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Brain className="w-5 h-5 text-blue-500" />
                Key Specializations
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  "Cardiology",
                  "Pediatrics",
                  "Surgery",
                  "Public Health",
                  "Health Tech",
                  "Medical Research",
                  "Telemedicine",
                  "Health Education",
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
        <div className="bg-blue-600 text-white rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Join Nigeria's Healthcare Network
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Connect with medical professionals, health tech innovators, and
            healthcare entrepreneurs who are transforming health outcomes across
            Nigeria.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-blue-600"
            >
              Join as Healthcare Professional
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600"
            >
              Find Healthcare Experts
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
