import React, { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Check,
  Users,
  Search,
  Award,
  Globe,
  Star,
  Shield,
  Zap,
  Heart,
  ArrowRight,
  Linkedin,
  Mail,
} from "lucide-react";

const membershipTiers = [
  {
    name: "Professional",
    price: "Free",
    description: "Perfect for individuals looking to showcase their expertise",
    features: [
      "Professional profile with verification",
      "Basic AI-powered search",
      "Industry hub access",
      "Success stories submission",
      "Basic networking tools",
      "Mobile app access",
    ],
    cta: "Get Started Free",
    popular: false,
    color: "border-gray-200",
  },
  {
    name: "Premium",
    price: "₦15,000/month",
    description: "Enhanced features for serious networkers and business growth",
    features: [
      "Everything in Professional",
      "Advanced AI search & filters",
      "Priority profile placement",
      "Verified social media integration",
      "Direct messaging unlimited",
      "Analytics dashboard",
      "Custom profile URL",
      "Premium badge",
    ],
    cta: "Start Premium Trial",
    popular: true,
    color: "border-naija-green",
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Tailored solutions for organizations and talent scouts",
    features: [
      "Everything in Premium",
      "Bulk talent search & outreach",
      "Organization profile & branding",
      "Advanced analytics & insights",
      "API access for integrations",
      "Dedicated account manager",
      "Custom verification processes",
      "White-label options",
    ],
    cta: "Contact Sales",
    popular: false,
    color: "border-purple-200",
  },
];

const benefits = [
  {
    icon: Search,
    title: "AI-Powered Discovery",
    description:
      "Our advanced AI helps you discover the perfect professional matches based on skills, experience, and compatibility.",
  },
  {
    icon: Shield,
    title: "Verified Profiles",
    description:
      "Every professional undergoes our comprehensive verification process ensuring authentic, credible connections.",
  },
  {
    icon: Globe,
    title: "Global Network",
    description:
      "Connect with Nigerian talent worldwide, from Lagos to London, New York to Dubai.",
  },
  {
    icon: Zap,
    title: "Real-Time Matching",
    description:
      "Get instant notifications when professionals matching your criteria join the platform.",
  },
  {
    icon: Award,
    title: "Industry Recognition",
    description:
      "Gain recognition through our industry hub features and success story spotlight.",
  },
  {
    icon: Heart,
    title: "Community Support",
    description:
      "Join a supportive community of ambitious Nigerian professionals celebrating each other's success.",
  },
];

const testimonials = [
  {
    name: "Adunni Soyinka",
    title: "UX Designer × Interior Decorator",
    image:
      "https://images.unsplash.com/photo-1494790108755-2616b612b547?w=80&h=80&fit=crop",
    quote:
      "This platform helped me showcase both my design skills and creative talents. I've connected with clients who appreciate my unique mashup approach.",
    rating: 5,
  },
  {
    name: "Tunde Bakare",
    title: "Fintech Product Manager",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop",
    quote:
      "The AI search feature is incredible. I found mentors in banking and connected with fellow fintech professionals across Nigeria.",
    rating: 5,
  },
  {
    name: "Kemi Adebayo",
    title: "Entertainment Lawyer × Photographer",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop",
    quote:
      "Being able to verify both my legal credentials and creative portfolio in one place has opened so many doors.",
    rating: 5,
  },
];

export default function Join() {
  const [selectedTier, setSelectedTier] = useState("Premium");

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Join Nigeria's Elite
            <span className="block text-naija-green">Professional Network</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Connect with 50,000+ verified Nigerian professionals, showcase your
            expertise, and discover opportunities that match your unique talents
            and ambitions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-naija-green hover:bg-naija-green-dark"
            >
              Get Started Free
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button size="lg" variant="outline">
              Watch Demo
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          <div className="bg-white rounded-lg p-6 text-center shadow-sm">
            <div className="text-3xl font-bold text-naija-green mb-2">
              50,000+
            </div>
            <div className="text-gray-600">Verified Professionals</div>
          </div>
          <div className="bg-white rounded-lg p-6 text-center shadow-sm">
            <div className="text-3xl font-bold text-naija-green mb-2">25+</div>
            <div className="text-gray-600">Industries Covered</div>
          </div>
          <div className="bg-white rounded-lg p-6 text-center shadow-sm">
            <div className="text-3xl font-bold text-naija-green mb-2">95%</div>
            <div className="text-gray-600">Success Rate</div>
          </div>
          <div className="bg-white rounded-lg p-6 text-center shadow-sm">
            <div className="text-3xl font-bold text-naija-green mb-2">36</div>
            <div className="text-gray-600">Nigerian States</div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Join Talk About Nigeria?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-0">
                  <benefit.icon className="w-12 h-12 text-naija-green mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Membership Tiers */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
            Choose Your Membership
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Select the plan that best fits your professional goals and
            networking needs.
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {membershipTiers.map((tier) => (
              <Card
                key={tier.name}
                className={`relative p-0 ${tier.color} ${
                  tier.popular ? "ring-2 ring-naija-green" : ""
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-naija-green text-white px-4 py-1">
                      Most Popular
                    </Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl font-bold">
                    {tier.name}
                  </CardTitle>
                  <div className="text-3xl font-bold text-naija-green">
                    {tier.price}
                  </div>
                  <p className="text-gray-600 text-sm">{tier.description}</p>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-3 mb-6">
                    {tier.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <Check className="w-5 h-5 text-naija-green flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full ${
                      tier.popular
                        ? "bg-naija-green hover:bg-naija-green-dark"
                        : ""
                    }`}
                    variant={tier.popular ? "default" : "outline"}
                  >
                    {tier.cta}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            What Our Members Say
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6">
                <CardContent className="p-0">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center gap-3">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-medium">{testimonial.name}</div>
                      <div className="text-sm text-gray-500">
                        {testimonial.title}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Quick Sign Up Options */}
        <div className="bg-white rounded-2xl p-8 md:p-12 mb-16 shadow-sm">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Quick Sign Up
            </h2>
            <p className="text-gray-600">
              Get started in less than 2 minutes with social sign-in
            </p>
          </div>

          <div className="max-w-md mx-auto space-y-4">
            <Button
              size="lg"
              variant="outline"
              className="w-full flex items-center gap-3"
            >
              <Linkedin className="w-5 h-5 text-blue-600" />
              Continue with LinkedIn
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full flex items-center gap-3"
            >
              <Mail className="w-5 h-5" />
              Sign up with Email
            </Button>
          </div>

          <div className="text-center mt-6 text-sm text-gray-500">
            By signing up, you agree to our{" "}
            <a href="/terms" className="text-naija-green hover:underline">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="/privacy" className="text-naija-green hover:underline">
              Privacy Policy
            </a>
          </div>
        </div>

        {/* Final CTA */}
        <div className="bg-naija-green text-white rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Connect with Excellence?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Join thousands of Nigerian professionals who are already building
            their careers and businesses through meaningful connections.
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="bg-white text-naija-green hover:bg-gray-100"
          >
            Get Started Free Today
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </main>

      <Footer />
    </div>
  );
}
