import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
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
import AISearchWidget from "@/components/search/AISearchWidget";
import { MapPin, Users, Award, ExternalLink, Search, Star } from "lucide-react";

const professionals = [
  {
    id: 1,
    name: "Shola Akinlade",
    title: "Co-founder & CEO, Paystack",
    industry: "Technology",
    location: "Lagos, Nigeria",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    verified: true,
    connections: "500K+",
    expertise: [
      "Fintech",
      "Software Engineering",
      "Startup Leadership",
      "Product Development",
    ],
    description:
      "Co-founder of Paystack, Africa's leading payment infrastructure company acquired by Stripe for $200M+, revolutionizing digital payments across Africa.",
    rating: 4.9,
    mentees: "300+",
    type: "entrepreneur",
  },
  {
    id: 2,
    name: "Iyinoluwa Aboyeji",
    title: "Co-founder, Future Africa",
    industry: "Technology",
    location: "Lagos, Nigeria",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    verified: true,
    connections: "800K+",
    expertise: [
      "Venture Capital",
      "Tech Ecosystem",
      "Product Strategy",
      "Startup Funding",
    ],
    description:
      "Serial entrepreneur and venture capitalist, co-founded Flutterwave and Andela, now leading Future Africa to fund and support mission-driven startups.",
    rating: 4.8,
    mentees: "250+",
    type: "entrepreneur",
  },
  {
    id: 3,
    name: "Adebayo Alonge",
    title: "Co-founder & CEO, RxAll",
    industry: "Technology",
    location: "Lagos, Nigeria",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face",
    verified: true,
    connections: "200K+",
    expertise: [
      "HealthTech",
      "Artificial Intelligence",
      "Drug Authentication",
      "Social Impact",
    ],
    description:
      "Pioneering AI-powered drug authentication technology to combat counterfeit medications, protecting millions across Africa with innovative healthtech solutions.",
    rating: 4.7,
    mentees: "150+",
    type: "entrepreneur",
  },
  {
    id: 4,
    name: "Tayo Oviosu",
    title: "Founder & CEO, Paga",
    industry: "Technology",
    location: "Lagos, Nigeria",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=face",
    verified: true,
    connections: "400K+",
    expertise: [
      "Mobile Payments",
      "Financial Inclusion",
      "Digital Banking",
      "Fintech Innovation",
    ],
    description:
      "Founder of Paga, one of Nigeria's first mobile money platforms, driving financial inclusion and digital payment adoption across Nigeria and beyond.",
    rating: 4.6,
    mentees: "200+",
    type: "entrepreneur",
  },
  {
    id: 5,
    name: "Kemi Adetu",
    title: "Data Science Lead, Google",
    industry: "Technology",
    location: "Lagos, Nigeria",
    image:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
    verified: true,
    connections: "300K+",
    expertise: [
      "Machine Learning",
      "Data Science",
      "AI Research",
      "Technical Leadership",
    ],
    description:
      "Leading data science initiatives at Google, specializing in machine learning applications for emerging markets and AI-driven solutions for African challenges.",
    rating: 4.8,
    mentees: "180+",
    type: "professional",
  },
];

export default function Technology() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("all");

  const filteredProfessionals = professionals.filter((professional) => {
    const matchesSearch =
      professional.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      professional.expertise.some((skill) =>
        skill.toLowerCase().includes(searchTerm.toLowerCase()),
      );
    const matchesFilter =
      filterType === "all" || professional.type === filterType;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Technology Professionals - Nigerian Tech Leaders & Innovators"
        description="Connect with Nigeria's leading technology professionals including Paystack founders, Flutterwave leaders, and innovative tech entrepreneurs shaping Africa's digital future."
        keywords="Nigerian tech professionals, fintech Nigeria, software engineers Nigeria, tech entrepreneurs, startup founders Nigeria"
      />

      <Header />

      {/* Hero Section */}
      <section
        className="relative bg-gradient-to-r from-naija-green/90 to-naija-green-light/90 text-white py-20 overflow-hidden"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-naija-green/85 to-naija-green-light/85"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            💻 Technology Professionals
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">
            Nigerian Tech
            <span className="block text-cyan-300">Innovation</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-95 max-w-3xl mx-auto drop-shadow-md">
            Connect with Nigeria's tech innovators, fintech pioneers, and
            digital entrepreneurs building Africa's digital future
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Badge
              variant="secondary"
              className="text-lg px-6 py-3 bg-white/90 text-naija-green backdrop-blur-sm"
            >
              {professionals.length} Tech Leaders Available
            </Badge>
            <Badge
              variant="outline"
              className="text-lg px-6 py-3 border-white text-white backdrop-blur-sm"
            >
              🚀 Fastest Growing Sector
            </Badge>
          </div>
        </div>
      </section>

      {/* AI Search Widget */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <AISearchWidget
            industry="Technology"
            placeholder="Search Tech professionals: 'Software Engineer + Music Production' or 'Data Scientist + Digital Art'"
          />
        </div>

        {/* Search and Filter */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                placeholder="Search software engineers, data scientists, fintech founders..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-2">
              <Button
                variant={filterType === "all" ? "default" : "outline"}
                onClick={() => setFilterType("all")}
                className={
                  filterType === "all"
                    ? "bg-naija-green hover:bg-naija-green-dark"
                    : ""
                }
              >
                All
              </Button>
              <Button
                variant={filterType === "entrepreneur" ? "default" : "outline"}
                onClick={() => setFilterType("entrepreneur")}
                className={
                  filterType === "entrepreneur"
                    ? "bg-naija-green hover:bg-naija-green-dark"
                    : ""
                }
              >
                Entrepreneurs
              </Button>
              <Button
                variant={filterType === "professional" ? "default" : "outline"}
                onClick={() => setFilterType("professional")}
                className={
                  filterType === "professional"
                    ? "bg-naija-green hover:bg-naija-green-dark"
                    : ""
                }
              >
                Professionals
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Professionals Grid */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Featured Technology Leaders
          </h2>
          <p className="text-gray-600 max-w-3xl">
            Nigeria's technology sector is booming with innovative startups,
            fintech solutions, and world-class software talent. Connect with the
            leaders shaping Africa's digital future.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProfessionals.map((professional) => (
            <Card
              key={professional.id}
              className="overflow-hidden hover:shadow-xl transition-all duration-300 border-2 hover:border-naija-green"
            >
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <div className="relative w-20 h-20">
                      <img
                        src={professional.image}
                        alt={professional.name}
                        className="w-20 h-20 rounded-full object-cover border-2 border-gray-200"
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
                        className="absolute inset-0 w-20 h-20 rounded-full bg-gradient-to-br from-naija-green to-naija-green-light flex items-center justify-center text-white font-bold text-lg shadow-lg"
                      >
                        {professional.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                    </div>
                    {professional.verified && (
                      <div className="absolute -top-1 -right-1 w-7 h-7 bg-naija-green rounded-full flex items-center justify-center">
                        <Award className="w-4 h-4 text-white" />
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
                    <div className="flex items-center gap-2 mt-1">
                      <Badge
                        variant={
                          professional.type === "entrepreneur"
                            ? "default"
                            : "secondary"
                        }
                        className="text-xs"
                      >
                        {professional.type === "entrepreneur"
                          ? "🚀 Founder"
                          : "💻 Professional"}
                      </Badge>
                      <div className="flex items-center gap-1">
                        <Star className="w-3 h-3 text-yellow-500 fill-current" />
                        <span className="text-xs text-gray-600">
                          {professional.rating}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="w-4 h-4 mr-2" />
                    {professional.location}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Users className="w-4 h-4 mr-2" />
                    {professional.connections} connections •{" "}
                    {professional.mentees} mentees
                  </div>
                  <p className="text-sm text-gray-700 line-clamp-3">
                    {professional.description}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {professional.expertise.slice(0, 3).map((skill, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                    {professional.expertise.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{professional.expertise.length - 3} more
                      </Badge>
                    )}
                  </div>
                  <div className="flex gap-2 pt-2">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button className="flex-1 bg-naija-green hover:bg-naija-green-dark">
                          Connect & Learn
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>
                            Connect with {professional.name}
                          </DialogTitle>
                          <DialogDescription>
                            Join Talk About Nigeria to connect with{" "}
                            {professional.name} and other tech innovators.
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

        {filteredProfessionals.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h4 className="text-xl font-semibold text-gray-900 mb-2">
              No professionals found
            </h4>
            <p className="text-gray-600">
              Try adjusting your search terms or filters.
            </p>
          </div>
        )}

        {/* Tech Ecosystem Stats */}
        <section className="mt-16 bg-gradient-to-r from-naija-green/10 to-naija-green-light/10 rounded-lg p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Nigeria's Tech Revolution
            </h3>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Nigeria is Africa's largest tech ecosystem, with innovative
              startups and solutions making global impact.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-naija-green mb-2">
                $2B+
              </div>
              <div className="text-gray-600">Startup Funding (2023)</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-naija-green mb-2">
                400+
              </div>
              <div className="text-gray-600">Active Startups</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-naija-green mb-2">5</div>
              <div className="text-gray-600">Unicorn Companies</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-naija-green mb-2">
                200K+
              </div>
              <div className="text-gray-600">Tech Professionals</div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
