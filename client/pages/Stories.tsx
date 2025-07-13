import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Heart, MessageCircle, Share2, Eye } from "lucide-react";

const successStories = [
  {
    id: 1,
    title:
      "From Engineer to Fintech Pioneer: Shola Akinlade's Paystack Journey",
    excerpt:
      "How a software engineer transformed Nigeria's payment landscape and got acquired for $200M",
    category: "Technology",
    readTime: "5 min read",
    views: "12.3k",
    likes: 847,
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
    author: "Shola Akinlade",
    authorTitle: "Co-founder & CEO, Paystack",
    publishedDate: "Dec 15, 2024",
    tags: ["Fintech", "Startup", "Acquisition"],
  },
  {
    id: 2,
    title: "Building Africa's Entertainment Empire: Mo Abudu's Media Success",
    excerpt:
      "The journey from HR executive to Africa's most influential media mogul and Netflix partner",
    category: "Entertainment",
    readTime: "7 min read",
    views: "18.7k",
    likes: 1203,
    image:
      "https://images.unsplash.com/photo-1494790108755-2616b612b547?w=400&h=300&fit=crop",
    author: "Mo Abudu",
    authorTitle: "CEO, EbonyLife Media",
    publishedDate: "Dec 10, 2024",
    tags: ["Media", "Entertainment", "Netflix"],
  },
  {
    id: 3,
    title: "From Campus to Billions: Aliko Dangote's Industrial Revolution",
    excerpt:
      "How a small trading business grew into Africa's largest industrial conglomerate",
    category: "Manufacturing",
    readTime: "8 min read",
    views: "25.1k",
    likes: 1567,
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=300&fit=crop",
    author: "Aliko Dangote",
    authorTitle: "Chairman, Dangote Group",
    publishedDate: "Dec 5, 2024",
    tags: ["Manufacturing", "Business", "Industry"],
  },
  {
    id: 4,
    title: "Digital Banking Revolution: Tosin Eniolorunda's TeamApt Success",
    excerpt:
      "Transforming financial inclusion across Nigeria through innovative banking solutions",
    category: "Fintech",
    readTime: "6 min read",
    views: "9.8k",
    likes: 623,
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=300&fit=crop",
    author: "Tosin Eniolorunda",
    authorTitle: "CEO, TeamApt",
    publishedDate: "Nov 28, 2024",
    tags: ["Banking", "Fintech", "Digital"],
  },
  {
    id: 5,
    title: "Music to Global Recognition: Davido's International Success",
    excerpt:
      "From Lagos to the world stage - building a global Afrobeats brand",
    category: "Music",
    readTime: "4 min read",
    views: "31.2k",
    likes: 2104,
    image:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop",
    author: "Davido",
    authorTitle: "International Recording Artist",
    publishedDate: "Nov 20, 2024",
    tags: ["Music", "International", "Brand"],
  },
  {
    id: 6,
    title: "Agricultural Innovation: Akinwumi Adesina's Development Impact",
    excerpt:
      "Leading Africa's agricultural transformation as President of African Development Bank",
    category: "Agriculture",
    readTime: "6 min read",
    views: "7.4k",
    likes: 445,
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=300&fit=crop",
    author: "Akinwumi Adesina",
    authorTitle: "President, African Development Bank",
    publishedDate: "Nov 15, 2024",
    tags: ["Agriculture", "Development", "Policy"],
  },
];

const featuredCategories = [
  { name: "Technology", count: 45, color: "bg-blue-100 text-blue-800" },
  { name: "Entertainment", count: 32, color: "bg-purple-100 text-purple-800" },
  { name: "Finance", count: 28, color: "bg-green-100 text-green-800" },
  { name: "Manufacturing", count: 19, color: "bg-orange-100 text-orange-800" },
  { name: "Healthcare", count: 15, color: "bg-red-100 text-red-800" },
  { name: "Agriculture", count: 12, color: "bg-yellow-100 text-yellow-800" },
];

export default function Stories() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section
        className="relative bg-gradient-to-r from-yellow-600/90 to-orange-600/90 text-white py-20 overflow-hidden"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/1181290/pexels-photo-1181290.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-600/85 to-orange-600/85"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            📖 Nigerian Success Stories
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">
            Success Stories
            <span className="block text-white">of Excellence</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-95 max-w-3xl mx-auto drop-shadow-md">
            Discover inspiring journeys of Nigerian professionals who are making
            waves across industries. Learn from their experiences, challenges,
            and triumphs as they build world-class businesses and careers.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Badge
              variant="secondary"
              className="text-lg px-6 py-3 bg-white/90 text-orange-600 backdrop-blur-sm"
            >
              📚 Inspiring Journeys
            </Badge>
            <Badge
              variant="outline"
              className="text-lg px-6 py-3 border-white text-white backdrop-blur-sm"
            >
              🌟 World-Class Achievements
            </Badge>
          </div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Stats Section */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          <div className="bg-white rounded-lg p-6 text-center shadow-sm">
            <div className="text-3xl font-bold text-naija-green mb-2">150+</div>
            <div className="text-gray-600">Success Stories</div>
          </div>
          <div className="bg-white rounded-lg p-6 text-center shadow-sm">
            <div className="text-3xl font-bold text-naija-green mb-2">25+</div>
            <div className="text-gray-600">Industries Covered</div>
          </div>
          <div className="bg-white rounded-lg p-6 text-center shadow-sm">
            <div className="text-3xl font-bold text-naija-green mb-2">
              500k+
            </div>
            <div className="text-gray-600">Readers Monthly</div>
          </div>
          <div className="bg-white rounded-lg p-6 text-center shadow-sm">
            <div className="text-3xl font-bold text-naija-green mb-2">36</div>
            <div className="text-gray-600">States Represented</div>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Filter Categories */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4">Browse by Category</h3>
              <div className="flex flex-wrap gap-2">
                <Badge
                  variant="default"
                  className="bg-naija-green hover:bg-naija-green-dark"
                >
                  All Stories
                </Badge>
                {featuredCategories.map((category) => (
                  <Badge
                    key={category.name}
                    variant="secondary"
                    className={category.color}
                  >
                    {category.name} ({category.count})
                  </Badge>
                ))}
              </div>
            </div>

            {/* Success Stories Grid */}
            <div className="space-y-8">
              {successStories.map((story) => (
                <Card
                  key={story.id}
                  className="overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <img
                        src={story.image}
                        alt={story.title}
                        className="w-full h-48 md:h-full object-cover"
                      />
                    </div>
                    <CardContent className="md:w-2/3 p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Badge variant="secondary" className="text-xs">
                          {story.category}
                        </Badge>
                        <span className="text-gray-500 text-sm">•</span>
                        <span className="text-gray-500 text-sm">
                          {story.readTime}
                        </span>
                        <span className="text-gray-500 text-sm">•</span>
                        <span className="text-gray-500 text-sm">
                          {story.publishedDate}
                        </span>
                      </div>

                      <h2 className="text-xl font-bold text-gray-900 mb-3 hover:text-naija-green cursor-pointer">
                        {story.title}
                      </h2>

                      <p className="text-gray-600 mb-4 line-clamp-2">
                        {story.excerpt}
                      </p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div>
                            <div className="font-medium text-sm">
                              {story.author}
                            </div>
                            <div className="text-gray-500 text-xs">
                              {story.authorTitle}
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center gap-4 text-gray-500 text-sm">
                          <div className="flex items-center gap-1">
                            <Eye className="w-4 h-4" />
                            {story.views}
                          </div>
                          <div className="flex items-center gap-1">
                            <Heart className="w-4 h-4" />
                            {story.likes}
                          </div>
                          <Button variant="ghost" size="sm">
                            <Share2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-1 mt-4">
                        {story.tags.map((tag) => (
                          <Badge
                            key={tag}
                            variant="outline"
                            className="text-xs"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <Button
                size="lg"
                className="bg-naija-green hover:bg-naija-green-dark"
              >
                Load More Stories
              </Button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Newsletter Signup */}
            <Card className="p-6">
              <h3 className="font-bold text-lg mb-3">Never Miss a Story</h3>
              <p className="text-gray-600 text-sm mb-4">
                Get weekly updates on new success stories and industry insights.
              </p>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-naija-green"
                />
                <Button className="w-full bg-naija-green hover:bg-naija-green-dark">
                  Subscribe
                </Button>
              </div>
            </Card>

            {/* Trending Stories */}
            <Card className="p-6">
              <h3 className="font-bold text-lg mb-4">Trending This Week</h3>
              <div className="space-y-4">
                {successStories.slice(0, 3).map((story) => (
                  <div key={story.id} className="flex gap-3">
                    <img
                      src={story.image}
                      alt={story.title}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h4 className="font-medium text-sm line-clamp-2 hover:text-naija-green cursor-pointer">
                        {story.title}
                      </h4>
                      <div className="text-xs text-gray-500 mt-1">
                        {story.views} views
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Share Your Story CTA */}
            <Card className="p-6 bg-naija-green text-white">
              <h3 className="font-bold text-lg mb-3">
                Share Your Success Story
              </h3>
              <p className="text-sm mb-4 text-green-100">
                Inspire others with your journey and become part of our success
                stories collection.
              </p>
              <Button variant="secondary" className="w-full">
                Submit Your Story
              </Button>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
