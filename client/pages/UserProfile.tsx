import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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
import UserProfileCard from "@/components/profile/UserProfileCard";
import {
  MapPin,
  Users,
  Award,
  ExternalLink,
  MessageCircle,
  Calendar,
  Building,
  Mail,
  Phone,
  Globe,
  Star,
  Share2,
  BookOpen,
  Briefcase,
  TrendingUp,
  Heart,
  MoreHorizontal,
  Linkedin,
  Instagram,
  Facebook,
  Verified,
  Palette,
} from "lucide-react";

// Professional data - in a real app, this would come from an API
const professionalData = {
  "tony-elumelu": {
    id: 1,
    firstName: "Tony",
    lastName: "Elumelu",
    name: "Tony Elumelu",
    title: "Chairman & CEO, UBA Group",
    company: "UBA Group",
    industry: "Banking & Finance",
    location: "Lagos, Nigeria",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    coverImage:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=400&fit=crop",
    verified: true,
    connections: "10M+",
    followers: "2.5M",
    following: "1.2K",
    professionalSkills: [
      "Investment Banking",
      "Entrepreneurship",
      "Philanthropy",
      "African Development",
      "Financial Inclusion",
      "Strategic Planning",
    ],
    creativeSkills: [
      "Public Speaking",
      "Motivational Writing",
      "Mentorship",
      "Community Building",
    ],
    verifiedProfiles: {
      linkedin: "https://linkedin.com/in/tonyelumelu",
      instagram: "https://instagram.com/tonyelumelu",
      facebook: "https://facebook.com/TonyElumeluFoundation",
      portfolio: "https://tonyelumelufoundation.org",
    },
    reputationScore: 98,
    status: "available" as const,
    description:
      "Leading African entrepreneur and philanthropist driving economic transformation across Africa through the Tony Elumelu Foundation.",
    longBio:
      "Tony O. Elumelu is a leading African investor, philanthropist, and advocate for economic empowerment across Africa. He is the Chairman of UBA Group, one of Africa's leading financial institutions, and Founder of the Tony Elumelu Foundation. Through his foundation, he has committed $100 million to identify, train, mentor and fund 10,000 African entrepreneurs over 10 years.",
    email: "contact@tonyelumelufoundation.org",
    website: "https://www.tonyelumelufoundation.org",
    joinedDate: "2019-03-15",
    achievements: [
      "TIME 100 Most Influential People (2020)",
      "Forbes Africa Person of the Year (2020)",
      "Champion of Entrepreneurship in Africa",
      "Order of the Federal Republic (OFR) - Nigeria's highest honor",
    ],
    experience: [
      {
        title: "Chairman & CEO",
        company: "UBA Group",
        period: "2010 - Present",
        description:
          "Leading one of Africa's largest financial institutions with operations in 20 countries.",
      },
      {
        title: "Founder",
        company: "Tony Elumelu Foundation",
        period: "2010 - Present",
        description:
          "Driving entrepreneurship across Africa through the largest privately-funded program.",
      },
      {
        title: "CEO",
        company: "Standard Trust Bank",
        period: "1997 - 2005",
        description:
          "Transformed a small Nigerian bank into one of the country's largest financial institutions.",
      },
    ],
    education: [
      {
        degree: "Master of Business Administration",
        school: "Harvard Business School",
        year: "1993",
      },
      {
        degree: "Bachelor of Economics",
        school: "Ambrose Alli University",
        year: "1987",
      },
    ],
    posts: [
      {
        id: 1,
        content:
          "Excited to announce the latest cohort of Tony Elumelu Foundation entrepreneurs! 🚀 #TEFEntrepreneurs",
        timestamp: "2024-01-10",
        likes: 1250,
        comments: 89,
        shares: 234,
      },
      {
        id: 2,
        content:
          "Africa's potential is limitless when we invest in our young entrepreneurs. The future is bright! 🌟",
        timestamp: "2024-01-08",
        likes: 2100,
        comments: 156,
        shares: 445,
      },
    ],
  },
  "aliko-dangote": {
    id: 2,
    name: "Aliko Dangote",
    title: "President & CEO, Dangote Group",
    industry: "Oil & Gas",
    location: "Lagos, Nigeria",
    image:
      "https://res.cloudinary.com/demo/image/upload/w_400,h_400,c_fill,g_face/v1/samples/people/kitchen-bar.jpg",
    coverImage:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200&h=400&fit=crop",
    verified: true,
    connections: "5M+",
    followers: "1.8M",
    following: "892",
    expertise: [
      "Oil & Gas",
      "Manufacturing",
      "Infrastructure",
      "Cement Production",
      "Sugar Refining",
    ],
    description:
      "Africa's richest man and industrial giant transforming Nigeria's economy through large-scale manufacturing and infrastructure development.",
    longBio:
      "Aliko Dangote is Africa's richest person and Nigeria's most prominent businessman. He is the founder and chairman of Dangote Group, which has interests in commodities, manufacturing, and real estate across Africa. His most ambitious project is the $20 billion Dangote Petroleum Refinery.",
    email: "info@dangote.com",
    website: "https://www.dangote.com",
    joinedDate: "2019-05-20",
    achievements: [
      "Africa's Richest Person (Forbes 2023)",
      "Commander of the Order of the Niger (CON)",
      "Most Valuable Brand in Nigeria",
      "African Business Leader of the Year",
    ],
    experience: [
      {
        title: "President & CEO",
        company: "Dangote Group",
        period: "1981 - Present",
        description:
          "Built one of Africa's largest conglomerates with operations across multiple sectors.",
      },
    ],
    education: [
      {
        degree: "Bachelor of Business Studies",
        school: "Al-Azhar University",
        year: "1977",
      },
    ],
    posts: [
      {
        id: 1,
        content:
          "The Dangote Refinery will transform Nigeria's energy landscape and reduce our dependence on imports. 🏭",
        timestamp: "2024-01-12",
        likes: 3200,
        comments: 278,
        shares: 567,
      },
    ],
  },
  davido: {
    id: 3,
    name: "Davido",
    title: "International Music Artist & CEO, DMW",
    industry: "Entertainment",
    location: "Lagos, Nigeria",
    image:
      "https://res.cloudinary.com/demo/image/upload/w_400,h_400,c_fill,g_face/v1/samples/people/jazz.jpg",
    coverImage:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1200&h=400&fit=crop",
    verified: true,
    connections: "30M+",
    followers: "25M",
    following: "2.1K",
    expertise: [
      "Music Production",
      "Entertainment",
      "Brand Management",
      "Afrobeats",
      "International Collaboration",
    ],
    description:
      "Global Afrobeats superstar putting Nigerian music on the world map with chart-topping hits and international collaborations.",
    longBio:
      "David Adedeji Adeleke, known professionally as Davido, is a Nigerian-American singer, songwriter, and record producer. He is one of the most influential artists in Africa and has been instrumental in the global rise of Afrobeats music.",
    email: "booking@davidomusic.com",
    website: "https://www.davidoofficial.com",
    joinedDate: "2020-01-10",
    achievements: [
      "BET Awards Winner",
      "MTV Europe Music Awards Winner",
      "MOBO Awards Winner",
      "Headspace MOBO Awards Winner",
    ],
    experience: [
      {
        title: "CEO & Founder",
        company: "Davido Music Worldwide (DMW)",
        period: "2016 - Present",
        description:
          "Leading record label promoting Afrobeats artists globally.",
      },
      {
        title: "Recording Artist",
        company: "Sony Music",
        period: "2019 - Present",
        description:
          "International recording contract bringing Afrobeats to global audiences.",
      },
    ],
    education: [
      {
        degree: "Bachelor of Music",
        school: "Babcock University",
        year: "2015",
      },
    ],
    posts: [
      {
        id: 1,
        content:
          "New album dropping soon! Afrobeats to the world 🌍🎵 #AfrotoTheWorld",
        timestamp: "2024-01-15",
        likes: 12500,
        comments: 1890,
        shares: 3456,
      },
    ],
  },
};

export default function UserProfile() {
  const { userId } = useParams<{ userId: string }>();
  const [activeTab, setActiveTab] = useState("overview");
  const [isFollowing, setIsFollowing] = useState(false);

  const professional = userId
    ? professionalData[userId as keyof typeof professionalData]
    : null;

  if (!professional) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Profile Not Found
          </h1>
          <p className="text-gray-600 mb-6">
            The professional profile you're looking for doesn't exist.
          </p>
          <Button>
            <a href="/">Return Home</a>
          </Button>
        </div>
      </div>
    );
  }

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
              <a href="/industry" className="text-gray-600 hover:text-primary">
                Industries
              </a>
              <a
                href="/blockchain"
                className="text-gray-600 hover:text-primary"
              >
                Blockchain
              </a>
            </nav>
            <div className="flex items-center space-x-4">
              <Button variant="outline">Sign In</Button>
              <WalletConnectionButton />
              <Button className="bg-naija-green hover:bg-naija-green-dark">
                Join Network
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Profile Hero Section */}
      <section className="relative">
        {/* Cover Image */}
        <div className="h-64 bg-gradient-to-r from-naija-green to-naija-green-light relative">
          <img
            src={professional.coverImage}
            alt="Cover"
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        </div>

        {/* Profile Info */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative -mt-16 pb-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-end space-y-4 sm:space-y-0 sm:space-x-6">
              {/* Avatar */}
              <div className="relative">
                <Avatar className="w-32 h-32 border-4 border-white shadow-lg">
                  <AvatarImage
                    src={professional.image}
                    alt={professional.name}
                  />
                  <AvatarFallback className="text-2xl bg-naija-green text-white">
                    {professional.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                {professional.verified && (
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-naija-green rounded-full flex items-center justify-center border-2 border-white">
                    <Award className="w-4 h-4 text-white" />
                  </div>
                )}
              </div>

              {/* Basic Info */}
              <div className="flex-1 min-w-0">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h1 className="text-3xl font-bold text-gray-900 truncate">
                      {professional.name}
                    </h1>
                    <p className="text-lg text-gray-600 mt-1">
                      {professional.title}
                    </p>
                    <div className="flex items-center mt-2 space-x-4 text-sm text-gray-500">
                      <span className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {professional.location}
                      </span>
                      <span className="flex items-center">
                        <Building className="w-4 h-4 mr-1" />
                        {professional.industry}
                      </span>
                      <span className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        Joined{" "}
                        {new Date(professional.joinedDate).toLocaleDateString()}
                      </span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3 mt-4 sm:mt-0">
                    <Button
                      variant={isFollowing ? "outline" : "default"}
                      className={
                        isFollowing
                          ? ""
                          : "bg-naija-green hover:bg-naija-green-dark"
                      }
                      onClick={() => setIsFollowing(!isFollowing)}
                    >
                      {isFollowing ? "Following" : "Follow"}
                    </Button>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline">
                          <MessageCircle className="w-4 h-4 mr-2" />
                          Message
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>
                            Send Message to {professional.name}
                          </DialogTitle>
                          <DialogDescription>
                            Connect with {professional.name} through our secure
                            messaging platform.
                          </DialogDescription>
                        </DialogHeader>
                        <div className="space-y-4 pt-4">
                          <textarea
                            placeholder="Write your message..."
                            className="w-full p-3 border rounded-lg resize-none h-32"
                          />
                          <div className="flex justify-end space-x-2">
                            <Button variant="outline">Cancel</Button>
                            <Button className="bg-naija-green hover:bg-naija-green-dark">
                              Send Message
                            </Button>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                    <Button variant="outline" size="icon">
                      <Share2 className="w-4 h-4" />
                    </Button>
                    <Button variant="outline" size="icon">
                      <MoreHorizontal className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                {/* Stats */}
                <div className="flex space-x-6 mt-4">
                  <div className="text-center">
                    <div className="text-xl font-bold text-gray-900">
                      {professional.connections}
                    </div>
                    <div className="text-sm text-gray-500">Connections</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold text-gray-900">
                      {professional.followers}
                    </div>
                    <div className="text-sm text-gray-500">Followers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold text-gray-900">
                      {professional.following}
                    </div>
                    <div className="text-sm text-gray-500">Following</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - About & Details */}
          <div className="lg:col-span-1 space-y-6">
            {/* About */}
            <Card>
              <CardHeader>
                <CardTitle>About</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">{professional.longBio}</p>
                <div className="space-y-3">
                  {professional.website && (
                    <div className="flex items-center">
                      <Globe className="w-4 h-4 mr-3 text-gray-400" />
                      <a
                        href={professional.website}
                        className="text-naija-green hover:underline"
                      >
                        Website
                      </a>
                    </div>
                  )}
                  {professional.email && (
                    <div className="flex items-center">
                      <Mail className="w-4 h-4 mr-3 text-gray-400" />
                      <span className="text-gray-600">
                        {professional.email}
                      </span>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Expertise */}
            <Card>
              <CardHeader>
                <CardTitle>Areas of Expertise</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {professional.expertise.map((skill, index) => (
                    <Badge key={index} variant="secondary" className="mb-1">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card>
              <CardHeader>
                <CardTitle>Achievements</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {professional.achievements.map((achievement, index) => (
                    <div key={index} className="flex items-start">
                      <Award className="w-4 h-4 mr-3 text-naija-green mt-0.5" />
                      <span className="text-sm text-gray-700">
                        {achievement}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Experience, Education, Activity */}
          <div className="lg:col-span-2">
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="experience">Experience</TabsTrigger>
                <TabsTrigger value="education">Education</TabsTrigger>
                <TabsTrigger value="activity">Activity</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="mt-6">
                <div className="space-y-6">
                  {/* Recent Experience */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Briefcase className="w-5 h-5 mr-2" />
                        Current Position
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      {professional.experience.slice(0, 1).map((exp, index) => (
                        <div
                          key={index}
                          className="border-l-2 border-naija-green pl-4"
                        >
                          <h4 className="font-semibold text-gray-900">
                            {exp.title}
                          </h4>
                          <p className="text-naija-green font-medium">
                            {exp.company}
                          </p>
                          <p className="text-sm text-gray-500 mb-2">
                            {exp.period}
                          </p>
                          <p className="text-gray-700">{exp.description}</p>
                        </div>
                      ))}
                    </CardContent>
                  </Card>

                  {/* Recent Education */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <BookOpen className="w-5 h-5 mr-2" />
                        Education
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      {professional.education.slice(0, 1).map((edu, index) => (
                        <div
                          key={index}
                          className="border-l-2 border-naija-green pl-4"
                        >
                          <h4 className="font-semibold text-gray-900">
                            {edu.degree}
                          </h4>
                          <p className="text-naija-green font-medium">
                            {edu.school}
                          </p>
                          <p className="text-sm text-gray-500">{edu.year}</p>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="experience" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Professional Experience</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {professional.experience.map((exp, index) => (
                        <div
                          key={index}
                          className="border-l-2 border-naija-green pl-4 pb-6 last:pb-0"
                        >
                          <h4 className="font-semibold text-gray-900 text-lg">
                            {exp.title}
                          </h4>
                          <p className="text-naija-green font-medium">
                            {exp.company}
                          </p>
                          <p className="text-sm text-gray-500 mb-3">
                            {exp.period}
                          </p>
                          <p className="text-gray-700">{exp.description}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="education" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Educational Background</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {professional.education.map((edu, index) => (
                        <div
                          key={index}
                          className="border-l-2 border-naija-green pl-4 pb-6 last:pb-0"
                        >
                          <h4 className="font-semibold text-gray-900 text-lg">
                            {edu.degree}
                          </h4>
                          <p className="text-naija-green font-medium">
                            {edu.school}
                          </p>
                          <p className="text-sm text-gray-500">{edu.year}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="activity" className="mt-6">
                <div className="space-y-4">
                  {professional.posts.map((post) => (
                    <Card key={post.id}>
                      <CardContent className="pt-6">
                        <div className="flex items-start space-x-3">
                          <Avatar className="w-10 h-10">
                            <AvatarImage
                              src={professional.image}
                              alt={professional.name}
                            />
                            <AvatarFallback>
                              {professional.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <div className="flex items-center space-x-2">
                              <h4 className="font-semibold">
                                {professional.name}
                              </h4>
                              {professional.verified && (
                                <Award className="w-4 h-4 text-naija-green" />
                              )}
                            </div>
                            <p className="text-sm text-gray-500 mb-3">
                              {new Date(post.timestamp).toLocaleDateString()}
                            </p>
                            <p className="text-gray-700 mb-4">{post.content}</p>
                            <div className="flex items-center space-x-6 text-sm text-gray-500">
                              <button className="flex items-center space-x-1 hover:text-red-500">
                                <Heart className="w-4 h-4" />
                                <span>{post.likes}</span>
                              </button>
                              <button className="flex items-center space-x-1 hover:text-blue-500">
                                <MessageCircle className="w-4 h-4" />
                                <span>{post.comments}</span>
                              </button>
                              <button className="flex items-center space-x-1 hover:text-green-500">
                                <Share2 className="w-4 h-4" />
                                <span>{post.shares}</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}
