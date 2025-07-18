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

const mentors = [
  {
    id: 1,
    name: "Aliko Dangote",
    title: "President & CEO, Dangote Group",
    industry: "Oil & Gas",
    location: "Lagos, Nigeria",
    image:
      "https://res.cloudinary.com/demo/image/upload/w_400,h_400,c_fill,g_face/v1/samples/people/kitchen-bar.jpg",
    verified: true,
    connections: "5M+",
    expertise: [
      "Oil Refining",
      "Petrochemicals",
      "Industrial Manufacturing",
      "Strategic Planning",
    ],
    description:
      "Africa's richest man and industrial giant, building Africa's largest oil refinery and transforming Nigeria's oil and gas sector.",
    rating: 4.9,
    mentees: "400+",
    type: "entrepreneur",
  },
  {
    id: 2,
    name: "Kachikwu Ibe",
    title: "Former Minister of Petroleum",
    industry: "Oil & Gas",
    location: "Abuja, Nigeria",
    image:
      "https://res.cloudinary.com/demo/image/upload/w_400,h_400,c_fill,g_face/v1/samples/people/bike.jpg",
    verified: true,
    connections: "800K+",
    expertise: [
      "Energy Policy",
      "Petroleum Engineering",
      "Regulatory Affairs",
      "Government Relations",
    ],
    description:
      "Former Nigerian Minister of State for Petroleum Resources and Group Managing Director of NNPC, leading energy policy expert.",
    rating: 4.7,
    mentees: "150+",
    type: "scholar",
  },
  {
    id: 3,
    name: "Roger Brown",
    title: "CEO, Seplat Energy",
    industry: "Oil & Gas",
    location: "Lagos, Nigeria",
    image:
      "https://res.cloudinary.com/demo/image/upload/w_400,h_400,c_fill,g_face/v1/samples/people/mid-age-man.jpg",
    verified: true,
    connections: "600K+",
    expertise: [
      "Oil Production",
      "Gas Development",
      "Energy Transition",
      "Sustainable Energy",
    ],
    description:
      "Leading one of Nigeria's premier indigenous oil and gas companies, driving sustainable energy development across West Africa.",
    rating: 4.6,
    mentees: "200+",
    type: "entrepreneur",
  },
];

export default function OilGas() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("all");

  const filteredMentors = mentors.filter((mentor) => {
    const matchesSearch =
      mentor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      mentor.expertise.some((skill) =>
        skill.toLowerCase().includes(searchTerm.toLowerCase()),
      );
    const matchesFilter = filterType === "all" || mentor.type === filterType;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Oil & Gas Professionals - Nigerian Energy Sector Experts"
        description="Connect with Nigeria's leading oil & gas professionals including Aliko Dangote, energy sector leaders, and petroleum industry experts."
        keywords="Nigerian oil gas professionals, energy sector Nigeria, petroleum experts, oil industry mentors"
      />

      <Header />

      {/* Hero Section */}
      <section
        className="relative bg-gradient-to-r from-naija-green/90 to-naija-green-light/90 text-white py-20 overflow-hidden"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/2880507/pexels-photo-2880507.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-naija-green/85 to-naija-green-light/85"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            ⛽ Oil & Gas Professionals
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">
            Nigerian Energy
            <span className="block text-yellow-300">Leadership</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-95 max-w-3xl mx-auto drop-shadow-md">
            Connect with Nigeria's energy sector leaders, petroleum experts, and
            innovators driving Africa's oil & gas transformation
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Badge
              variant="secondary"
              className="text-lg px-6 py-3 bg-white/90 text-naija-green backdrop-blur-sm"
            >
              {mentors.length} Industry Leaders Available
            </Badge>
            <Badge
              variant="outline"
              className="text-lg px-6 py-3 border-white text-white backdrop-blur-sm"
            >
              🌍 Global Impact
            </Badge>
          </div>
        </div>
      </section>

      {/* AI Search Widget */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <AISearchWidget
            industry="Oil & Gas"
            placeholder="Search Oil & Gas professionals: 'Petroleum Engineer + Environmental Art' or 'Energy Consultant + Photography'"
          />
        </div>

        {/* Search and Filter */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                placeholder="Search energy experts, oil executives, gas specialists..."
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
                variant={filterType === "scholar" ? "default" : "outline"}
                onClick={() => setFilterType("scholar")}
                className={
                  filterType === "scholar"
                    ? "bg-naija-green hover:bg-naija-green-dark"
                    : ""
                }
              >
                Scholars
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mentors Grid */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMentors.map((mentor) => (
            <Card
              key={mentor.id}
              className="overflow-hidden hover:shadow-xl transition-all duration-300 border-2 hover:border-naija-green"
            >
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <img
                      src={mentor.image}
                      alt={mentor.name}
                      className="w-20 h-20 rounded-full object-cover"
                    />
                    {mentor.verified && (
                      <div className="absolute -top-1 -right-1 w-7 h-7 bg-naija-green rounded-full flex items-center justify-center">
                        <Award className="w-4 h-4 text-white" />
                      </div>
                    )}
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-lg">
                      <a
                        href={`/profile/${mentor.name.toLowerCase().replace(/ /g, "-")}`}
                        className="hover:text-naija-green transition-colors cursor-pointer"
                      >
                        {mentor.name}
                      </a>
                    </CardTitle>
                    <CardDescription className="text-sm">
                      {mentor.title}
                    </CardDescription>
                    <div className="flex items-center gap-2 mt-1">
                      <Badge
                        variant={
                          mentor.type === "entrepreneur"
                            ? "default"
                            : "secondary"
                        }
                        className="text-xs"
                      >
                        {mentor.type === "entrepreneur"
                          ? "⛽ Energy Leader"
                          : "🎓 Scholar"}
                      </Badge>
                      <div className="flex items-center gap-1">
                        <Star className="w-3 h-3 text-yellow-500 fill-current" />
                        <span className="text-xs text-gray-600">
                          {mentor.rating}
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
                    {mentor.location}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Users className="w-4 h-4 mr-2" />
                    {mentor.connections} connections • {mentor.mentees} mentees
                  </div>
                  <p className="text-sm text-gray-700 line-clamp-3">
                    {mentor.description}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {mentor.expertise.slice(0, 3).map((skill, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                    {mentor.expertise.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{mentor.expertise.length - 3} more
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
                          <DialogTitle>Connect with {mentor.name}</DialogTitle>
                          <DialogDescription>
                            Join our verified professional network to connect
                            with {mentor.name} and other energy sector leaders.
                          </DialogDescription>
                        </DialogHeader>
                        <div className="space-y-4 pt-4">
                          <Button className="w-full bg-naija-green hover:bg-naija-green-dark">
                            Sign in with Google
                          </Button>
                          <Button variant="outline" className="w-full">
                            Sign in with LinkedIn
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
      </main>

      <Footer />
    </div>
  );
}
