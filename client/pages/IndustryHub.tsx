import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEOHead from "@/components/layout/SEOHead";
import { ArrowRight, Users, TrendingUp } from "lucide-react";

const industries = [
  {
    id: "banking-finance",
    name: "Banking & Finance",
    icon: "🏦",
    description:
      "Connect with financial leaders, economists, and banking executives",
    mentorCount: 3,
    path: "/industry/banking-finance",
    featured: ["Tony Elumelu", "Ngozi Okonjo-Iweala", "Aig Imoukhuede"],
    color: "from-green-500 to-green-600",
  },
  {
    id: "oil-gas",
    name: "Oil & Gas",
    icon: "⛽",
    description:
      "Energy sector leaders, petroleum engineers, and industry innovators",
    mentorCount: 3,
    path: "/industry/oil-gas",
    featured: ["Aliko Dangote", "Kachikwu Ibe", "Roger Brown"],
    color: "from-blue-500 to-blue-600",
  },
  {
    id: "entertainment",
    name: "Entertainment",
    icon: "🎭",
    description: "Creative leaders, artists, producers, and media moguls",
    mentorCount: 3,
    path: "/industry/entertainment",
    featured: ["Davido", "Genevieve Nnaji", "Mo Abudu"],
    color: "from-purple-500 to-purple-600",
  },
  {
    id: "technology",
    name: "Technology",
    icon: "💻",
    description:
      "Tech entrepreneurs, software engineers, and digital innovators",
    mentorCount: 0,
    path: "/industry/technology",
    featured: [],
    color: "from-cyan-500 to-cyan-600",
  },
  {
    id: "healthcare",
    name: "Healthcare",
    icon: "🏥",
    description: "Medical professionals, researchers, and health innovators",
    mentorCount: 0,
    path: "/industry/healthcare",
    featured: [],
    color: "from-red-500 to-red-600",
  },
  {
    id: "agriculture",
    name: "Agriculture",
    icon: "🌾",
    description: "Agricultural leaders, farmers, and agribusiness experts",
    mentorCount: 0,
    path: "/industry/agriculture",
    featured: [],
    color: "from-yellow-500 to-yellow-600",
  },
  {
    id: "education",
    name: "Education",
    icon: "📚",
    description: "Educators, researchers, and academic leaders",
    mentorCount: 0,
    path: "/industry/education",
    featured: [],
    color: "from-indigo-500 to-indigo-600",
  },
  {
    id: "construction",
    name: "Construction",
    icon: "🏗️",
    description: "Construction leaders, architects, and infrastructure experts",
    mentorCount: 0,
    path: "/industry/construction",
    featured: [],
    color: "from-orange-500 to-orange-600",
  },
];

export default function IndustryHub() {
  const activeIndustries = industries.filter(
    (industry) => industry.mentorCount > 0,
  );
  const comingSoonIndustries = industries.filter(
    (industry) => industry.mentorCount === 0,
  );

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Nigerian Industries Hub - Explore Professional Sectors"
        description="Discover professionals across Nigeria's key industries including Banking, Technology, Oil & Gas, Entertainment, and more."
        keywords="Nigerian industries, professional sectors Nigeria, banking professionals Nigeria, technology sector Nigeria"
      />

      <Header />

      {/* Hero Section */}
      <section
        className="relative bg-gradient-to-r from-naija-green/90 to-naija-green-light/90 text-white py-20 overflow-hidden"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-naija-green/85 to-naija-green-light/85"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            🏢 Nigerian Industries Hub
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">
            Nigerian Industries
            <span className="block text-yellow-300">Excellence</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-95 drop-shadow-md">
            Explore Nigeria's leading professionals across all industries
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Badge
              variant="secondary"
              className="text-lg px-6 py-3 bg-white/90 text-naija-green backdrop-blur-sm"
            >
              {activeIndustries.length} Active Industries
            </Badge>
            <Badge
              variant="outline"
              className="text-lg px-6 py-3 border-white text-white backdrop-blur-sm"
            >
              {industries.reduce(
                (sum, industry) => sum + industry.mentorCount,
                0,
              )}{" "}
              Professionals
            </Badge>
          </div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Statistics */}
        <section className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Nigeria's Economic Powerhouse
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Discover top talent across the sectors that drive Nigeria's economy.
            Connect with industry leaders, experienced professionals, and rising
            stars.
          </p>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-naija-green mb-2">
                ₦206T
              </div>
              <div className="text-gray-600">GDP (2023)</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-naija-green mb-2">
                200M+
              </div>
              <div className="text-gray-600">Population</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-naija-green mb-2">36</div>
              <div className="text-gray-600">States</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-naija-green mb-2">
                25+
              </div>
              <div className="text-gray-600">Industry Sectors</div>
            </div>
          </div>
        </section>

        {/* Active Industries */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Active Industry Hubs
              </h3>
              <p className="text-gray-600">
                Industries with verified professionals and mentors
              </p>
            </div>
            <Button
              variant="outline"
              onClick={() => (window.location.href = "/discovery")}
            >
              🔍 Search All Talents
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activeIndustries.map((industry) => (
              <Card
                key={industry.id}
                className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-naija-green cursor-pointer"
                onClick={() => (window.location.href = industry.path)}
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="text-4xl mb-2">{industry.icon}</div>
                      <CardTitle className="text-xl group-hover:text-naija-green transition-colors">
                        {industry.name}
                      </CardTitle>
                    </div>
                    <Badge className="bg-naija-green">
                      {industry.mentorCount} Mentors
                    </Badge>
                  </div>
                  <CardDescription className="text-gray-600">
                    {industry.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm font-medium text-gray-700 mb-2">
                        Featured Professionals:
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {industry.featured.slice(0, 2).map((name, index) => (
                          <Badge
                            key={index}
                            variant="outline"
                            className="text-xs"
                          >
                            {name}
                          </Badge>
                        ))}
                        {industry.featured.length > 2 && (
                          <Badge variant="outline" className="text-xs">
                            +{industry.featured.length - 2} more
                          </Badge>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center justify-between pt-2">
                      <div className="flex items-center text-sm text-gray-500">
                        <Users className="w-4 h-4 mr-1" />
                        Active professionals
                      </div>
                      <div className="flex items-center text-naija-green">
                        <span className="text-sm font-medium mr-2">
                          Explore
                        </span>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Coming Soon Industries */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Coming Soon
            </h3>
            <p className="text-gray-600">
              More industry hubs launching soon with verified professionals
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {comingSoonIndustries.map((industry) => (
              <Card
                key={industry.id}
                className="opacity-75 hover:opacity-100 transition-opacity"
              >
                <CardContent className="p-6 text-center">
                  <div className="text-3xl mb-3">{industry.icon}</div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    {industry.name}
                  </h4>
                  <p className="text-sm text-gray-600 mb-3">
                    {industry.description}
                  </p>
                  <Badge variant="outline" className="text-xs">
                    Coming Soon
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-gradient-to-r from-naija-green to-naija-green-light rounded-lg p-8 text-center text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Join Your Industry Community
          </h3>
          <p className="text-lg mb-6 opacity-90">
            Connect with professionals in your field and discover new
            opportunities across Nigeria's diverse economy.
          </p>
          <div className="flex justify-center gap-4">
            <Button
              size="lg"
              className="bg-white text-naija-green hover:bg-gray-100"
              onClick={() => (window.location.href = "/discovery")}
            >
              🔍 Find Professionals
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-naija-green"
            >
              Join as Professional
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
