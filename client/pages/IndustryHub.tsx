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
    featured: ["Coming Soon"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: "construction",
    name: "Construction",
    icon: "🏗️",
    description:
      "Civil engineers, architects, and construction industry leaders",
    mentorCount: 0,
    path: "/industry/construction",
    featured: ["Coming Soon"],
    color: "from-orange-500 to-red-500",
  },
  {
    id: "education",
    name: "Education",
    icon: "📚",
    description: "Educators, researchers, and academic institution leaders",
    mentorCount: 0,
    path: "/industry/education",
    featured: ["Coming Soon"],
    color: "from-indigo-500 to-purple-500",
  },
  {
    id: "healthcare",
    name: "Healthcare",
    icon: "🏥",
    description:
      "Medical professionals, researchers, and healthcare innovators",
    mentorCount: 0,
    path: "/industry/healthcare",
    featured: ["Coming Soon"],
    color: "from-red-500 to-pink-500",
  },
  {
    id: "agriculture",
    name: "Agriculture",
    icon: "🌾",
    description:
      "Agricultural experts, agtech innovators, and food industry leaders",
    mentorCount: 0,
    path: "/industry/agriculture",
    featured: ["Coming Soon"],
    color: "from-green-600 to-lime-500",
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
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-naija-green to-naija-green-light text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            🏢 Industry Hub
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Explore Nigeria's leading professionals across all industries
          </p>
          <div className="flex justify-center gap-4">
            <Badge
              variant="secondary"
              className="text-lg px-6 py-2 bg-white text-naija-green"
            >
              {activeIndustries.length} Active Industries
            </Badge>
            <Badge
              variant="secondary"
              className="text-lg px-6 py-2 bg-white text-naija-green"
            >
              {industries.reduce(
                (total, industry) => total + industry.mentorCount,
                0,
              )}{" "}
              Expert Mentors
            </Badge>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-naija-green rounded-full flex items-center justify-center mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">9</h3>
              <p className="text-gray-600">Professional Mentors</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-naija-green rounded-full flex items-center justify-center mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">8</h3>
              <p className="text-gray-600">Industry Sectors</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-naija-green rounded-full flex items-center justify-center mb-4">
                <ArrowRight className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">1500+</h3>
              <p className="text-gray-600">Total Mentees</p>
            </div>
          </div>
        </div>
      </section>

      {/* Active Industries */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Active Industries
          </h2>
          <p className="text-gray-600 mb-8">
            Connect with verified professionals in these thriving sectors
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activeIndustries.map((industry) => (
              <Card
                key={industry.id}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 border-2 hover:border-naija-green group"
              >
                <CardHeader className="pb-4">
                  <div
                    className={`w-full h-32 bg-gradient-to-r ${industry.color} rounded-lg flex items-center justify-center mb-4`}
                  >
                    <span className="text-6xl">{industry.icon}</span>
                  </div>
                  <CardTitle className="text-xl flex items-center gap-2">
                    {industry.name}
                    <Badge className="bg-naija-green">
                      {industry.mentorCount} mentors
                    </Badge>
                  </CardTitle>
                  <CardDescription className="text-sm">
                    {industry.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-sm text-gray-900 mb-2">
                        Featured Professionals:
                      </h4>
                      <div className="flex flex-wrap gap-1">
                        {industry.featured.map((name, index) => (
                          <Badge
                            key={index}
                            variant="outline"
                            className="text-xs"
                          >
                            {name}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <a href={industry.path} className="block">
                      <Button className="w-full bg-naija-green hover:bg-naija-green-dark group-hover:bg-naija-green-dark">
                        Explore {industry.name}
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Coming Soon Industries */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Coming Soon</h2>
          <p className="text-gray-600 mb-8">
            We're expanding to include more industries
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {comingSoonIndustries.map((industry) => (
              <Card key={industry.id} className="overflow-hidden opacity-75">
                <CardHeader className="pb-4">
                  <div
                    className={`w-full h-24 bg-gradient-to-r ${industry.color} rounded-lg flex items-center justify-center mb-4 opacity-60`}
                  >
                    <span className="text-4xl">{industry.icon}</span>
                  </div>
                  <CardTitle className="text-lg">{industry.name}</CardTitle>
                  <CardDescription className="text-sm">
                    {industry.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button disabled className="w-full">
                    Coming Soon
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
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
              Industry Hub - Connecting Nigeria's Professional Excellence
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}