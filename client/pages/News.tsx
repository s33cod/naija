import React, { useState, useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEOHead from "@/components/layout/SEOHead";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Newspaper,
  Search,
  Calendar,
  MapPin,
  ExternalLink,
  TrendingUp,
  Globe,
  Clock,
  Eye,
  Share2,
  BookOpen,
  Filter,
  ChevronRight,
} from "lucide-react";

interface NewsArticle {
  id: string;
  title: string;
  summary: string;
  content: string;
  source: string;
  sourceUrl: string;
  author: string;
  publishedAt: string;
  category: string;
  location: string;
  imageUrl: string;
  tags: string[];
  views: number;
  isGlobal: boolean;
  isTrending: boolean;
  readTime: number;
}

// Mock news data representing aggregated Nigerian news
const nigerianNews: NewsArticle[] = [
  {
    id: "1",
    title:
      "Nigeria's Fintech Sector Attracts $2.4 Billion in Foreign Investment",
    summary:
      "International investors show strong confidence in Nigeria's rapidly growing financial technology sector, with Paystack and Flutterwave leading the charge.",
    content: `Nigeria's fintech ecosystem has reached unprecedented heights with a record $2.4 billion in foreign direct investment flowing into the sector over the past 18 months. This surge is primarily driven by the success stories of homegrown companies like Paystack, acquired by Stripe for $200 million, and Flutterwave's recent $250 million Series D funding round.

The investment wave reflects growing international confidence in Nigeria's digital payment infrastructure and the country's potential to lead Africa's financial inclusion revolution. Key areas attracting investment include digital banking, cryptocurrency platforms, and payment processing solutions.

Major global investors, including Tiger Global, Insight Partners, and Dragoneer Investment Group, have increased their Nigerian portfolio allocations significantly. The trend is expected to continue as more Nigerian fintech startups demonstrate scalable solutions for both local and pan-African markets.

Industry experts attribute this growth to Nigeria's large unbanked population, increasing smartphone penetration, and progressive regulatory frameworks that encourage innovation while maintaining financial stability.`,
    source: "TechCrunch Africa",
    sourceUrl: "https://techcrunch.com",
    author: "Adaobi Okwu",
    publishedAt: "2024-12-20T08:30:00Z",
    category: "Technology",
    location: "Lagos, Nigeria",
    imageUrl:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    tags: ["Fintech", "Investment", "Technology", "Economy"],
    views: 15420,
    isGlobal: true,
    isTrending: true,
    readTime: 4,
  },
  {
    id: "2",
    title:
      "Davido's Global Tour Generates $50 Million Revenue, Boosts Nigeria Tourism",
    summary:
      "The international music star's world tour not only breaks revenue records but also significantly impacts Nigeria's tourism sector and cultural exports.",
    content: `Davido's 'Timeless World Tour' has concluded with remarkable success, generating over $50 million in global revenue and significantly boosting Nigeria's cultural export profile. The tour, which spanned 45 cities across North America, Europe, and Africa, sold out venues including Madison Square Garden and London's O2 Arena.

Beyond the impressive financial figures, the tour has catalyzed a 35% increase in tourist inquiries about Nigeria, according to the Nigerian Tourism Development Corporation. Many international fans expressed interest in visiting Nigeria to experience the culture that inspires Davido's music.

The economic impact extends beyond tourism. Nigerian fashion designers who created custom outfits for the tour reported a 200% increase in international orders. Local food vendors at tour venues featuring Nigerian cuisine also saw unprecedented demand.

"This tour has shown the world that Nigerian entertainment is not just regional – it's truly global," commented Dr. Folashade Ogundimu, Professor of Cultural Studies at the University of Lagos. The success reinforces Nigeria's position as Africa's entertainment capital and demonstrates the soft power potential of Afrobeats music.`,
    source: "Billboard Nigeria",
    sourceUrl: "https://billboard.com",
    author: "Kemi Oyedepo",
    publishedAt: "2024-12-19T14:15:00Z",
    category: "Entertainment",
    location: "Global / Nigeria",
    imageUrl:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop",
    tags: ["Music", "Entertainment", "Tourism", "Culture", "Afrobeats"],
    views: 28340,
    isGlobal: true,
    isTrending: true,
    readTime: 3,
  },
  {
    id: "3",
    title:
      "Nigeria Launches Africa's Largest Solar Farm Project in Katsina State",
    summary:
      "The 200MW solar installation will power over 500,000 homes and represents a major step toward Nigeria's renewable energy goals.",
    content: `Nigeria has officially launched construction of Africa's largest solar farm in Katsina State, marking a significant milestone in the country's transition to renewable energy. The 200-megawatt facility, developed in partnership with international renewable energy firm SolarPower International, is expected to provide clean electricity to over 500,000 Nigerian homes.

The project represents a $400 million investment and is part of Nigeria's broader strategy to achieve 30% renewable energy mix by 2030. The solar farm will create approximately 2,000 direct jobs during construction and 500 permanent positions for operations and maintenance.

President Bola Tinubu, speaking at the groundbreaking ceremony, emphasized the project's importance for Nigeria's energy security and climate commitments. "This solar farm represents our commitment to sustainable development and energy independence," he stated.

The facility will incorporate cutting-edge solar panel technology and battery storage systems to ensure consistent power supply. The project is expected to reduce Nigeria's carbon emissions by approximately 300,000 tons annually while providing stable, affordable electricity to underserved communities in the northern region.`,
    source: "Reuters Nigeria",
    sourceUrl: "https://reuters.com",
    author: "Ahmed Hassan",
    publishedAt: "2024-12-19T10:45:00Z",
    category: "Energy",
    location: "Katsina, Nigeria",
    imageUrl:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&h=400&fit=crop",
    tags: ["Renewable Energy", "Solar Power", "Environment", "Infrastructure"],
    views: 12680,
    isGlobal: false,
    isTrending: true,
    readTime: 3,
  },
  {
    id: "4",
    title:
      "Nigerian Medical Team Achieves Breakthrough in Malaria Treatment Research",
    summary:
      "Researchers at the University College Hospital, Ibadan develop innovative treatment protocol that reduces malaria mortality by 40%.",
    content: `A team of Nigerian medical researchers has achieved a groundbreaking advancement in malaria treatment, developing a new therapeutic protocol that has shown a 40% reduction in mortality rates during clinical trials. The research, led by Dr. Adebayo Adeyemi at University College Hospital, Ibadan, represents a significant step forward in combating one of Africa's most persistent health challenges.

The innovative treatment combines traditional antimalarial drugs with a newly developed immune system booster derived from Nigerian medicinal plants. The protocol has been tested on over 1,200 patients across five Nigerian states, with remarkable success rates, particularly in treating severe malaria cases in children.

The World Health Organization has expressed strong interest in the research findings and has invited the Nigerian team to present their results at the upcoming Global Malaria Conference in Geneva. Dr. Adeyemi noted that the treatment protocol could potentially save thousands of lives across sub-Saharan Africa.

International pharmaceutical companies have already approached the research team about licensing the treatment for global distribution. The Nigerian government has committed to fast-tracking regulatory approval to ensure the treatment is available domestically before international rollout.

This breakthrough reinforces Nigeria's growing reputation as a leader in medical research and innovation across Africa.`,
    source: "The Lancet Global Health",
    sourceUrl: "https://thelancet.com",
    author: "Dr. Funmi Olopade",
    publishedAt: "2024-12-18T16:20:00Z",
    category: "Healthcare",
    location: "Ibadan, Nigeria",
    imageUrl:
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop",
    tags: ["Healthcare", "Medical Research", "Malaria", "Innovation"],
    views: 8950,
    isGlobal: true,
    isTrending: false,
    readTime: 4,
  },
  {
    id: "5",
    title: "Nigeria's Agricultural Export Revenue Hits Record $4.8 Billion",
    summary:
      "Strong international demand for Nigerian cocoa, cashews, and sesame seeds drives agricultural sector to unprecedented growth levels.",
    content: `Nigeria's agricultural export revenue has reached a historic high of $4.8 billion in 2024, representing a 65% increase from the previous year. The surge is primarily driven by strong international demand for Nigerian cocoa, cashews, sesame seeds, and palm oil.

The Nigerian Export Promotion Council attributes this success to improved agricultural practices, better supply chain management, and strategic partnerships with international buyers. Cocoa exports alone contributed $2.1 billion to the total revenue, benefiting from Nigeria's position as the world's fourth-largest cocoa producer.

Minister of Agriculture and Food Security, Dr. Akinwumi Adesina, highlighted the role of technology adoption in achieving these results. "Our farmers are embracing modern farming techniques, precision agriculture, and digital platforms for market access," he explained during a press conference in Abuja.

The agricultural boom has created employment opportunities for over 200,000 Nigerians and has encouraged more young people to venture into agribusiness. Several Nigerian agricultural cooperatives have secured long-term contracts with European and Asian buyers, ensuring stable income for farmers.

This achievement aligns with Nigeria's broader economic diversification goals and reduces the country's dependence on oil revenue.`,
    source: "Financial Times Nigeria",
    sourceUrl: "https://ft.com",
    author: "Blessing Akpan",
    publishedAt: "2024-12-18T12:00:00Z",
    category: "Agriculture",
    location: "Abuja, Nigeria",
    imageUrl:
      "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&h=400&fit=crop",
    tags: ["Agriculture", "Export", "Economy", "Trade"],
    views: 6780,
    isGlobal: false,
    isTrending: false,
    readTime: 3,
  },
  {
    id: "6",
    title:
      "Lagos-Ibadan Railway: Nigeria's High-Speed Rail Dreams Become Reality",
    summary:
      "The completed Lagos-Ibadan standard gauge railway line reduces travel time by 70% and sets the stage for national rail network expansion.",
    content: `The Lagos-Ibadan standard gauge railway line has officially commenced full commercial operations, marking a transformative moment for Nigeria's transportation infrastructure. The 157-kilometer rail line reduces travel time between Nigeria's commercial capital and the historic city of Ibadan from 4 hours by road to just 90 minutes by train.

The railway, constructed with Chinese technical assistance, features modern coaches with air conditioning, free Wi-Fi, and comfortable seating arrangements. The project represents a $1.2 billion investment in Nigeria's rail infrastructure modernization program.

Transportation Minister, Mu'azu Jaji Sambo, announced that the railway will operate 16 trips daily, with capacity to transport 6,000 passengers per trip. The service is expected to ease traffic congestion on the heavily traveled Lagos-Ibadan expressway while providing a safer, more reliable transportation alternative.

The success of this rail line paves the way for the next phase of Nigeria's railway development, including the proposed Lagos-Kano standard gauge line. Economic analysts project that the improved transportation network will boost inter-state commerce and reduce logistics costs for businesses.

Environmental benefits include significant reduction in carbon emissions as more travelers opt for rail transport over private vehicles and road-based public transportation.`,
    source: "Daily Trust Nigeria",
    sourceUrl: "https://dailytrust.com",
    author: "Ibrahim Suleiman",
    publishedAt: "2024-12-17T09:30:00Z",
    category: "Transportation",
    location: "Lagos-Ibadan, Nigeria",
    imageUrl:
      "https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=600&h=400&fit=crop",
    tags: ["Transportation", "Infrastructure", "Railway", "Development"],
    views: 11250,
    isGlobal: false,
    isTrending: false,
    readTime: 4,
  },
];

const categories = [
  "All",
  "Technology",
  "Entertainment",
  "Healthcare",
  "Energy",
  "Agriculture",
  "Transportation",
  "Economy",
  "Politics",
];

export default function News() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showGlobalOnly, setShowGlobalOnly] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState<NewsArticle | null>(
    null,
  );
  const [filteredNews, setFilteredNews] = useState<NewsArticle[]>(nigerianNews);

  useEffect(() => {
    let filtered = nigerianNews;

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(
        (article) =>
          article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          article.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
          article.tags.some((tag) =>
            tag.toLowerCase().includes(searchQuery.toLowerCase()),
          ),
      );
    }

    // Filter by category
    if (selectedCategory !== "All") {
      filtered = filtered.filter(
        (article) => article.category === selectedCategory,
      );
    }

    // Filter by global news only
    if (showGlobalOnly) {
      filtered = filtered.filter((article) => article.isGlobal);
    }

    setFilteredNews(filtered);
  }, [searchQuery, selectedCategory, showGlobalOnly]);

  const trendingNews = nigerianNews.filter((article) => article.isTrending);
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const formatTimeAgo = (dateString: string) => {
    const now = new Date();
    const publishDate = new Date(dateString);
    const diffInHours = Math.floor(
      (now.getTime() - publishDate.getTime()) / (1000 * 60 * 60),
    );

    if (diffInHours < 1) return "Just now";
    if (diffInHours < 24) return `${diffInHours}h ago`;
    return `${Math.floor(diffInHours / 24)}d ago`;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead
        title="Nigeria News - Latest News from Nigeria & Global Nigerian Stories | Talk About Nigeria"
        description="Stay updated with the latest news from Nigeria and global stories about Nigerians. Get breaking news, politics, technology, entertainment, and business updates."
        keywords="Nigeria news, Nigerian news, latest Nigeria news, breaking news Nigeria, Nigerian politics, technology news, entertainment news Nigeria"
      />

      <Header />

      {/* Hero Section */}
      <section
        className="relative bg-gradient-to-r from-red-600/90 to-red-800/90 text-white py-20 overflow-hidden"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/518543/pexels-photo-518543.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/85 to-red-800/85"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Newspaper className="w-4 h-4" />
            Latest Nigerian News
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">
            Nigeria News
            <span className="block text-yellow-300">& Global Stories</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-95 max-w-3xl mx-auto drop-shadow-md">
            Stay informed with the latest news from Nigeria and global stories
            about Nigerian achievements, innovations, and cultural impact around
            the world.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Badge
              variant="secondary"
              className="text-lg px-6 py-3 bg-white/90 text-red-600 backdrop-blur-sm"
            >
              📰 Breaking News
            </Badge>
            <Badge
              variant="outline"
              className="text-lg px-6 py-3 border-white text-white backdrop-blur-sm"
            >
              🌍 Global Coverage
            </Badge>
          </div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search and Filters */}
        <div className="mb-12">
          <Card className="p-6">
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <Input
                    placeholder="Search news by title, content, or tags..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              <div className="flex gap-4">
                <Select
                  value={selectedCategory}
                  onValueChange={setSelectedCategory}
                >
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Button
                  variant={showGlobalOnly ? "default" : "outline"}
                  onClick={() => setShowGlobalOnly(!showGlobalOnly)}
                  className="flex items-center gap-2"
                >
                  <Globe className="w-4 h-4" />
                  Global News
                </Button>
              </div>
            </div>
          </Card>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main News Content */}
          <div className="lg:col-span-3">
            {/* Trending News */}
            {!searchQuery && selectedCategory === "All" && !showGlobalOnly && (
              <div className="mb-12">
                <div className="flex items-center gap-2 mb-6">
                  <TrendingUp className="w-5 h-5 text-red-600" />
                  <h2 className="text-2xl font-bold text-gray-900">
                    Trending News
                  </h2>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  {trendingNews.slice(0, 2).map((article) => (
                    <Card
                      key={article.id}
                      className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                      onClick={() => setSelectedArticle(article)}
                    >
                      <div className="relative">
                        <img
                          src={article.imageUrl}
                          alt={article.title}
                          className="w-full h-48 object-cover"
                        />
                        <div className="absolute top-4 left-4">
                          <Badge className="bg-red-600 text-white">
                            🔥 Trending
                          </Badge>
                        </div>
                        {article.isGlobal && (
                          <div className="absolute top-4 right-4">
                            <Badge
                              variant="secondary"
                              className="bg-blue-100 text-blue-800"
                            >
                              <Globe className="w-3 h-3 mr-1" />
                              Global
                            </Badge>
                          </div>
                        )}
                      </div>
                      <CardContent className="p-6">
                        <div className="flex items-center gap-2 mb-3">
                          <Badge variant="outline">{article.category}</Badge>
                          <span className="text-sm text-gray-500">
                            {formatTimeAgo(article.publishedAt)}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                          {article.title}
                        </h3>
                        <p className="text-gray-600 mb-4 line-clamp-3">
                          {article.summary}
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4 text-sm text-gray-500">
                            <span className="flex items-center gap-1">
                              <Eye className="w-4 h-4" />
                              {article.views.toLocaleString()}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              {article.readTime} min read
                            </span>
                          </div>
                          <Button variant="ghost" size="sm">
                            Read More
                            <ChevronRight className="w-4 h-4 ml-1" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {/* All News */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">
                  {selectedCategory === "All"
                    ? "Latest News"
                    : `${selectedCategory} News`}
                </h2>
                <span className="text-sm text-gray-500">
                  {filteredNews.length} articles found
                </span>
              </div>

              <div className="space-y-6">
                {filteredNews.map((article) => (
                  <Card
                    key={article.id}
                    className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                    onClick={() => setSelectedArticle(article)}
                  >
                    <div className="md:flex">
                      <div className="md:w-1/3">
                        <div className="relative">
                          <img
                            src={article.imageUrl}
                            alt={article.title}
                            className="w-full h-48 md:h-full object-cover"
                          />
                          {article.isTrending && (
                            <div className="absolute top-3 left-3">
                              <Badge className="bg-red-600 text-white text-xs">
                                🔥 Trending
                              </Badge>
                            </div>
                          )}
                          {article.isGlobal && (
                            <div className="absolute top-3 right-3">
                              <Badge
                                variant="secondary"
                                className="bg-blue-100 text-blue-800 text-xs"
                              >
                                <Globe className="w-3 h-3 mr-1" />
                                Global
                              </Badge>
                            </div>
                          )}
                        </div>
                      </div>
                      <CardContent className="md:w-2/3 p-6">
                        <div className="flex items-center gap-2 mb-3">
                          <Badge variant="outline" className="text-xs">
                            {article.category}
                          </Badge>
                          <span className="text-sm text-gray-500">•</span>
                          <span className="text-sm text-gray-500">
                            {formatTimeAgo(article.publishedAt)}
                          </span>
                          <span className="text-sm text-gray-500">•</span>
                          <span className="text-sm text-gray-500 flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            {article.location}
                          </span>
                        </div>

                        <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-red-600 transition-colors">
                          {article.title}
                        </h3>

                        <p className="text-gray-600 mb-4 line-clamp-2">
                          {article.summary}
                        </p>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3 text-sm text-gray-500">
                            <span>{article.source}</span>
                            <span>•</span>
                            <span className="flex items-center gap-1">
                              <Eye className="w-4 h-4" />
                              {article.views.toLocaleString()}
                            </span>
                            <span>•</span>
                            <span className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              {article.readTime} min read
                            </span>
                          </div>

                          <div className="flex items-center gap-2">
                            <Button variant="ghost" size="sm">
                              <Share2 className="w-4 h-4" />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <ExternalLink className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-1 mt-4">
                          {article.tags.slice(0, 3).map((tag) => (
                            <Badge
                              key={tag}
                              variant="secondary"
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

              {filteredNews.length === 0 && (
                <div className="text-center py-12">
                  <Newspaper className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-700 mb-2">
                    No news found
                  </h3>
                  <p className="text-gray-500">
                    Try adjusting your search criteria or browse all news.
                  </p>
                  <Button
                    variant="outline"
                    className="mt-4"
                    onClick={() => {
                      setSearchQuery("");
                      setSelectedCategory("All");
                      setShowGlobalOnly(false);
                    }}
                  >
                    Clear Filters
                  </Button>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* News Sources */}
            <Card className="p-6">
              <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                <Globe className="w-5 h-5" />
                News Sources
              </h3>
              <div className="space-y-3 text-sm">
                {[
                  "BBC Nigeria",
                  "Reuters Nigeria",
                  "Channels TV",
                  "TechCrunch Africa",
                  "Bloomberg Nigeria",
                  "Daily Trust",
                  "The Guardian Nigeria",
                  "Financial Times Nigeria",
                ].map((source) => (
                  <div
                    key={source}
                    className="flex items-center justify-between"
                  >
                    <span className="text-gray-600">{source}</span>
                    <Button variant="ghost" size="sm" className="text-xs">
                      Follow
                    </Button>
                  </div>
                ))}
              </div>
            </Card>

            {/* Quick Categories */}
            <Card className="p-6">
              <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                <Filter className="w-5 h-5" />
                Quick Filters
              </h3>
              <div className="space-y-2">
                {categories.slice(1).map((category) => (
                  <Button
                    key={category}
                    variant={
                      selectedCategory === category ? "default" : "ghost"
                    }
                    size="sm"
                    className="w-full justify-start"
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </Card>

            {/* Newsletter Signup */}
            <Card className="p-6 bg-red-50 border-red-200">
              <h3 className="font-bold text-lg mb-3 text-red-900">
                Daily News Digest
              </h3>
              <p className="text-red-700 text-sm mb-4">
                Get the most important Nigerian news delivered to your inbox
                every morning.
              </p>
              <div className="space-y-3">
                <Input placeholder="Enter your email" />
                <Button className="w-full bg-red-600 hover:bg-red-700">
                  Subscribe
                </Button>
              </div>
            </Card>
          </div>
        </div>

        {/* Article Reading Modal */}
        <Dialog
          open={!!selectedArticle}
          onOpenChange={() => setSelectedArticle(null)}
        >
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            {selectedArticle && (
              <>
                <div className="relative mb-6">
                  <img
                    src={selectedArticle.imageUrl}
                    alt={selectedArticle.title}
                    className="w-full h-64 object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30 rounded-lg flex items-end">
                    <div className="p-6 text-white">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge className="bg-white text-gray-900">
                          {selectedArticle.category}
                        </Badge>
                        {selectedArticle.isGlobal && (
                          <Badge variant="secondary" className="bg-blue-600">
                            <Globe className="w-3 h-3 mr-1" />
                            Global
                          </Badge>
                        )}
                      </div>
                      <h1 className="text-2xl font-bold mb-2">
                        {selectedArticle.title}
                      </h1>
                      <div className="flex items-center gap-4 text-sm">
                        <span>{selectedArticle.source}</span>
                        <span>•</span>
                        <span>{selectedArticle.author}</span>
                        <span>•</span>
                        <span>{formatDate(selectedArticle.publishedAt)}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="prose max-w-none">
                  <p className="text-lg text-gray-600 mb-6 font-medium">
                    {selectedArticle.summary}
                  </p>

                  <div className="whitespace-pre-line text-gray-800 leading-relaxed">
                    {selectedArticle.content}
                  </div>
                </div>

                <div className="border-t pt-6 mt-8">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <Eye className="w-4 h-4" />
                        {selectedArticle.views.toLocaleString()} views
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {selectedArticle.readTime} min read
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {selectedArticle.location}
                      </span>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() =>
                        window.open(selectedArticle.sourceUrl, "_blank")
                      }
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Original
                    </Button>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {selectedArticle.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </main>

      <Footer />
    </div>
  );
}
