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
import { MapPin, Users, Award, ExternalLink, Search, Star } from "lucide-react";

const mentors = [
  {
    id: 1,
    name: "Davido",
    title: "International Music Artist & CEO, DMW",
    industry: "Entertainment",
    location: "Lagos, Nigeria",
    image:
      "https://res.cloudinary.com/demo/image/upload/w_400,h_400,c_fill,g_face/v1/samples/people/jazz.jpg",
    verified: true,
    connections: "30M+",
    expertise: [
      "Music Production",
      "Artist Management",
      "Brand Partnerships",
      "International Markets",
    ],
    description:
      "Global Afrobeats superstar and entrepreneur, putting Nigerian music on the world map with multiple Grammy nominations and international collaborations.",
    rating: 4.9,
    mentees: "800+",
    type: "entrepreneur",
  },
  {
    id: 2,
    name: "Genevieve Nnaji",
    title: "Actress, Producer & Director",
    industry: "Entertainment",
    location: "Lagos, Nigeria",
    image:
      "https://res.cloudinary.com/demo/image/upload/w_400,h_400,c_fill,g_face/v1/samples/people/woman-on-bike.jpg",
    verified: true,
    connections: "15M+",
    expertise: ["Film Production", "Acting", "Directing", "Content Creation"],
    description:
      "Award-winning actress and filmmaker, pioneering Nollywood's global expansion with Netflix and international film festivals.",
    rating: 4.8,
    mentees: "300+",
    type: "entrepreneur",
  },
  {
    id: 3,
    name: "Mo Abudu",
    title: "CEO, EbonyLife Media",
    industry: "Entertainment",
    location: "Lagos, Nigeria",
    image:
      "https://res.cloudinary.com/demo/image/upload/w_400,h_400,c_fill,g_face/v1/samples/people/smile.jpg",
    verified: true,
    connections: "5M+",
    expertise: [
      "Media Production",
      "Television Broadcasting",
      "Content Strategy",
      "Business Development",
    ],
    description:
      "Media mogul and founder of EbonyLife Media, transforming African storytelling and building bridges between African and global entertainment.",
    rating: 4.7,
    mentees: "400+",
    type: "scholar",
  },
];

export default function Entertainment() {
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
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-naija-green to-naija-green-light rounded-full"></div>
                <span className="text-xl font-bold text-gray-900">
                  NaijaPro Connect
                </span>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="/" className="text-gray-600 hover:text-primary">
                Home
              </a>
              <a
                href="/professionals"
                className="text-gray-600 hover:text-primary"
              >
                Professionals
              </a>
              <a
                href="/industry"
                className="text-gray-900 hover:text-primary font-medium"
              >
                Industries
              </a>
              <a href="/news" className="text-gray-600 hover:text-primary">
                News
              </a>
              <a href="/community" className="text-gray-600 hover:text-primary">
                Community
              </a>
            </nav>
            <div className="flex items-center space-x-4">
              <Button variant="outline">Sign In</Button>
              <Button className="bg-naija-green hover:bg-naija-green-dark">
                Join Network
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-naija-green to-naija-green-light text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            🎭 Entertainment
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Connect with Nigeria's creative leaders and entertainment moguls
          </p>
          <div className="flex justify-center">
            <Badge
              variant="secondary"
              className="text-lg px-6 py-2 bg-white text-naija-green"
            >
              {mentors.length} Creative Leaders Available
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
                placeholder="Search artists, producers, directors, media executives..."
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
                    <CardTitle className="text-lg">{mentor.name}</CardTitle>
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
                          ? "🎬 Creator"
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
                            with {mentor.name} and other entertainment leaders.
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

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-naija-green to-naija-green-light rounded-full"></div>
              <span className="text-xl font-bold">NaijaPro Connect</span>
            </div>
            <p className="text-gray-400">
              Entertainment Hub - Connecting Nigeria's Creative Leaders
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
