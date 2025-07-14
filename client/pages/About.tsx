import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Users,
  Globe,
  Award,
  Zap,
  Heart,
  Target,
  MapPin,
  TrendingUp,
} from "lucide-react";

const teamMembers = [
  {
    name: "Charles O. Darling",
    role: "Founder & CEO",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
    bio: "Visionary entrepreneur and tech leader dedicated to showcasing Nigerian excellence and connecting talent globally. Leading the mission to celebrate and empower Nigerian professionals worldwide.",
  },
  {
    name: "Toks Banjoko",
    role: "Lead Collaborator & Strategy",
    image:
      "https://images.unsplash.com/photo-1494790108755-2616b612b547?w=200&h=200&fit=crop",
    bio: "Strategic advisor and business development expert with extensive experience in Nigerian market dynamics and professional networking.",
  },
  {
    name: "Daniel Idowu",
    role: "Technical Collaborator",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop",
    bio: "Full-stack developer and technology innovator specializing in scalable platforms and AI-powered talent discovery systems.",
  },
  {
    name: "Demola Adesina",
    role: "Content & Community Collaborator",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop",
    bio: "Content strategist and community engagement specialist focused on amplifying Nigerian stories and building meaningful professional connections.",
  },
];

const achievements = [
  {
    icon: Users,
    number: "50,000+",
    label: "Verified Professionals",
    description: "Across 25+ industries",
  },
  {
    icon: Globe,
    number: "36",
    label: "Nigerian States",
    description: "Complete national coverage",
  },
  {
    icon: Award,
    number: "95%",
    label: "Success Rate",
    description: "In professional matching",
  },
  {
    icon: TrendingUp,
    number: "200%",
    label: "Growth YoY",
    description: "Platform expansion",
  },
];

const values = [
  {
    icon: Target,
    title: "Excellence",
    description:
      "We celebrate and promote the highest standards of professional achievement across all Nigerian industries.",
  },
  {
    icon: Heart,
    title: "Authenticity",
    description:
      "We believe in showcasing genuine talent and real stories that inspire and connect our community.",
  },
  {
    icon: Zap,
    title: "Innovation",
    description:
      "We leverage cutting-edge AI and technology to revolutionize how Nigerian talent is discovered and connected.",
  },
  {
    icon: Globe,
    title: "Unity",
    description:
      "We bring together the diversity of Nigerian talent, celebrating our rich cultural and professional heritage.",
  },
];

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section
        className="relative bg-gradient-to-r from-naija-green/90 to-naija-green-light/90 text-white py-20 overflow-hidden"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/3228766/pexels-photo-3228766.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-naija-green/85 to-naija-green-light/85"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            🇳🇬 About Talk About Nigeria
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">
            Celebrating Nigerian
            <span className="block text-yellow-300">Excellence</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-95 max-w-4xl mx-auto leading-relaxed drop-shadow-md">
            We are Nigeria's premier platform connecting exceptional
            professionals, creatives, and innovators. Our mission is to showcase
            the incredible talent that defines modern Nigeria and foster
            meaningful connections that drive success across all industries.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Badge
              variant="secondary"
              className="text-lg px-6 py-3 bg-white/90 text-naija-green backdrop-blur-sm"
            >
              🌟 Premier Platform
            </Badge>
            <Badge
              variant="outline"
              className="text-lg px-6 py-3 border-white text-white backdrop-blur-sm"
            >
              🇳🇬 Proudly Nigerian
            </Badge>
          </div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Mission Statement */}
        <div className="bg-white rounded-2xl p-8 md:p-12 mb-16 shadow-sm">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                To create the most comprehensive and trusted platform for
                discovering, connecting, and celebrating Nigerian talent across
                all industries and creative fields.
              </p>
              <p className="text-gray-600 mb-6">
                We believe that Nigeria is home to some of the world's most
                talented individuals - from fintech pioneers revolutionizing
                African banking to entertainment moguls taking Afrobeats global,
                from oil industry leaders driving energy innovation to tech
                entrepreneurs building the future of African commerce.
              </p>
              <Button
                size="lg"
                className="bg-naija-green hover:bg-naija-green-dark"
              >
                Join Our Mission
              </Button>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop"
                alt="Nigerian professionals collaborating"
                className="rounded-xl shadow-lg"
              />
              <div className="absolute inset-0 bg-naija-green bg-opacity-10 rounded-xl"></div>
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Our Impact
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="text-center p-6">
                <CardContent className="p-0">
                  <achievement.icon className="w-12 h-12 text-naija-green mx-auto mb-4" />
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    {achievement.number}
                  </div>
                  <div className="font-semibold text-gray-700 mb-1">
                    {achievement.label}
                  </div>
                  <div className="text-sm text-gray-500">
                    {achievement.description}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Our Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Our Values
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="p-6 text-center">
                <CardContent className="p-0">
                  <value.icon className="w-12 h-12 text-naija-green mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Meet Our Team
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center p-6">
                <CardContent className="p-0">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <div className="text-naija-green font-medium mb-3">
                    {member.role}
                  </div>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Story Section */}
        <div className="bg-white rounded-2xl p-8 md:p-12 mb-16 shadow-sm">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <div className="text-lg text-gray-600 space-y-6 text-left">
              <p>
                Talk About Nigeria was born from a simple observation: Nigeria
                is home to extraordinary talent that often goes unrecognized on
                the global stage. While we celebrate individual success stories,
                we recognized the need for a comprehensive platform that could
                showcase the full spectrum of Nigerian excellence.
              </p>
              <p>
                Founded in 2024, our platform emerged during a pivotal moment
                when Nigerian professionals were making unprecedented impacts
                globally - from Paystack's acquisition to Dangote's industrial
                expansion, from Afrobeats' international recognition to
                Nigeria's growing tech ecosystem.
              </p>
              <p>
                Today, we serve as the definitive platform for discovering,
                connecting, and celebrating Nigerian talent. Our AI-powered
                search capabilities, comprehensive verification systems, and
                industry-specific hubs make it easier than ever to find and
                connect with the right professionals across all sectors.
              </p>
              <p>
                We're more than a networking platform - we're a movement
                dedicated to ensuring that Nigerian talent gets the recognition,
                connections, and opportunities it deserves on the global stage.
              </p>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="bg-naija-green text-white rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Join Us?</h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Whether you're a professional looking to expand your network or an
            organization seeking Nigerian talent, we're here to connect you with
            excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-naija-green hover:bg-gray-100"
            >
              Join Platform
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-naija-green"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
