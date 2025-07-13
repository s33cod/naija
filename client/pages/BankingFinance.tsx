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
import {
  MapPin,
  Users,
  Award,
  ExternalLink,
  Search,
  Filter,
  Star,
} from "lucide-react";

const mentors = [
  {
    id: 1,
    name: "Tony Elumelu",
    title: "Chairman & CEO, UBA Group",
    industry: "Banking & Finance",
    location: "Lagos, Nigeria",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    verified: true,
    connections: "10M+",
    expertise: [
      "Investment Banking",
      "Entrepreneurship",
      "Philanthropy",
      "Private Equity",
    ],
    description:
      "Leading African entrepreneur and philanthropist driving economic transformation across Africa through the Tony Elumelu Foundation.",
    rating: 4.9,
    mentees: "500+",
    type: "entrepreneur",
  },
  {
    id: 2,
    name: "Ngozi Okonjo-Iweala",
    title: "Director-General, WTO",
    industry: "Banking & Finance",
    location: "Geneva, Switzerland",
    image:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
    verified: true,
    connections: "2M+",
    expertise: [
      "Economic Policy",
      "International Finance",
      "Development Economics",
      "Trade",
    ],
    description:
      "Former Finance Minister of Nigeria and current WTO Director-General, renowned economist and development expert.",
    rating: 4.8,
    mentees: "200+",
    type: "scholar",
  },
  {
    id: 3,
    name: "Aig Imoukhuede",
    title: "Former CEO, Access Bank",
    industry: "Banking & Finance",
    location: "Lagos, Nigeria",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    verified: true,
    connections: "1.5M+",
    expertise: [
      "Banking Operations",
      "Financial Services",
      "Leadership",
      "Corporate Governance",
    ],
    description:
      "Transformational banking leader who revolutionized Nigeria's financial sector and champion of economic development.",
    rating: 4.7,
    mentees: "300+",
    type: "entrepreneur",
  },
];

export default function BankingFinance() {
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
        title="Banking & Finance Professionals - Nigerian Talent Hub"
        description="Connect with Nigeria's leading banking and finance professionals including Tony Elumelu, Ngozi Okonjo-Iweala, and more expert mentors."
        keywords="Nigerian banking professionals, finance experts Nigeria, banking mentors Nigeria, financial advisors"
      />

      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-naija-green to-naija-green-light text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            🏦 Banking & Finance
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Connect with Nigeria's leading financial experts and entrepreneurs
          </p>
          <div className="flex justify-center">
            <Badge
              variant="secondary"
              className="text-lg px-6 py-2 bg-white text-naija-green"
            >
              {mentors.length} Expert Mentors Available
            </Badge>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                placeholder="Search by name, expertise, or specialty..."
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

      {/* AI Search Widget */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AISearchWidget
            industry="Banking & Finance"
            placeholder="Search Banking & Finance professionals: 'Investment Banker + Photographer' or 'Financial Analyst + Musician'"
          />
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
                    <div className="relative w-20 h-20">
                      <img
                        src={mentor.image}
                        alt={mentor.name}
                        className="w-20 h-20 rounded-full object-cover"
                        onError={(e) => {
                          console.warn(
                            `Image failed to load for ${mentor.name}, showing fallback`,
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
                        {mentor.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                    </div>
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
                          ? "💼 Entrepreneur"
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
                            with {mentor.name} and other industry leaders.
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

        {filteredMentors.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h4 className="text-xl font-semibold text-gray-900 mb-2">
              No mentors found
            </h4>
            <p className="text-gray-600">
              Try adjusting your search terms or filters.
            </p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
