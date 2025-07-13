import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { WalletConnectionButton } from "@/components/blockchain/WalletAuth";
import {
  Search,
  Filter,
  MapPin,
  Users,
  Award,
  Star,
  TrendingUp,
  Zap,
  Globe,
  Instagram,
  Linkedin,
  Facebook,
  Youtube,
  ExternalLink,
  MessageCircle,
  Heart,
  Share2,
  Clock,
  Target,
  Sparkles,
  Brain,
  Lightbulb,
} from "lucide-react";
import {
  SearchFilters,
  useTalentSearch,
  TalentProfile,
  SearchResult,
} from "@/lib/ai-search";

export default function TalentDiscovery() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState<SearchFilters>({});
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTime, setSearchTime] = useState(0);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [relatedTags, setRelatedTags] = useState<string[]>([]);
  const [trendingProfiles, setTrendingProfiles] = useState<TalentProfile[]>([]);

  const { search, getAllIndustries, getAllSkillTags } = useTalentSearch();

  // Initialize with trending profiles
  useEffect(() => {
    performSearch({});
  }, []);

  const performSearch = async (customFilters?: SearchFilters) => {
    setIsLoading(true);
    try {
      const searchFilters = {
        ...filters,
        ...customFilters,
        query: searchQuery,
      };
      const response = await search(searchFilters);

      setSearchResults(response.results);
      setSearchTime(response.searchTime);
      setSuggestions(response.suggestions);
      setRelatedTags(response.relatedTags);
      setTrendingProfiles(response.trendingProfiles);
    } catch (error) {
      console.error("Search failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleQuickSearch = (query: string) => {
    setSearchQuery(query);
    performSearch({ query });
  };

  const handleFilterChange = (key: keyof SearchFilters, value: any) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    performSearch(newFilters);
  };

  const clearFilters = () => {
    setFilters({});
    setSearchQuery("");
    performSearch({});
  };

  const getProfileTypeIcon = (type: string) => {
    switch (type) {
      case "gifted":
        return <Sparkles className="w-4 h-4 text-purple-500" />;
      case "certified":
        return <Award className="w-4 h-4 text-blue-500" />;
      case "rising-star":
        return <TrendingUp className="w-4 h-4 text-yellow-500" />;
      case "mentor":
        return <Brain className="w-4 h-4 text-green-500" />;
      default:
        return <Users className="w-4 h-4 text-gray-500" />;
    }
  };

  const getSocialIcon = (platform: string) => {
    switch (platform) {
      case "linkedin":
        return <Linkedin className="w-4 h-4 text-blue-600" />;
      case "instagram":
        return <Instagram className="w-4 h-4 text-pink-500" />;
      case "facebook":
        return <Facebook className="w-4 h-4 text-blue-700" />;
      case "youtube":
        return <Youtube className="w-4 h-4 text-red-600" />;
      default:
        return <Globe className="w-4 h-4 text-gray-500" />;
    }
  };

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
                  Talk About Nigeria
                </span>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="/" className="text-gray-600 hover:text-primary">
                Home
              </a>
              <a
                href="/discovery"
                className="text-gray-900 hover:text-primary font-medium"
              >
                Discover Talents
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

      {/* Hero Search Section */}
      <section className="bg-gradient-to-r from-naija-green to-naija-green-light text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            🔍 Discover Nigerian Talents
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Find professionals and gifted individuals who share your interests
            across any industry
          </p>
          <p className="text-lg mb-8 opacity-80 max-w-4xl mx-auto">
            Discover real people with real talents—validated through their
            social profiles, work references, and digital footprints. Search by
            name, industry, location, social network, or specialty.
          </p>

          {/* Main Search Bar */}
          <div className="max-w-4xl mx-auto">
            <div className="flex gap-3 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  placeholder="Search for talents: 'UX Designer + Interior Decorator' or 'Music Producer + Entrepreneur'"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && performSearch()}
                  className="pl-10 h-14 text-lg bg-white text-gray-900"
                />
              </div>
              <Button
                onClick={() => performSearch()}
                size="lg"
                className="h-14 px-8 bg-white text-naija-green hover:bg-gray-100"
              >
                <Search className="w-5 h-5 mr-2" />
                Search
              </Button>
            </div>

            {/* Quick Search Suggestions */}
            <div className="flex flex-wrap justify-center gap-2 mb-4">
              <span className="text-sm opacity-75">Quick searches:</span>
              {[
                "UX Designer",
                "Music Producer",
                "Financial Analyst",
                "Interior Designer",
                "Content Creator",
              ].map((suggestion) => (
                <button
                  key={suggestion}
                  onClick={() => handleQuickSearch(suggestion)}
                  className="px-3 py-1 bg-white bg-opacity-20 rounded-full text-sm hover:bg-opacity-30 transition-colors"
                >
                  {suggestion}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Filter className="w-5 h-5" />
                  Search Filters
                </CardTitle>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={clearFilters}
                  className="text-xs"
                >
                  Clear All
                </Button>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Industry Filter */}
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Industry
                  </label>
                  <Select
                    onValueChange={(value) =>
                      handleFilterChange("industries", [value])
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select industry" />
                    </SelectTrigger>
                    <SelectContent>
                      {getAllIndustries().map((industry) => (
                        <SelectItem key={industry} value={industry}>
                          {industry}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Profile Type Filter */}
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Profile Type
                  </label>
                  <div className="space-y-2">
                    {[
                      { value: "gifted", label: "Gifted", icon: "🌟" },
                      { value: "certified", label: "Certified", icon: "🎓" },
                      {
                        value: "rising-star",
                        label: "Rising Star",
                        icon: "🚀",
                      },
                      { value: "mentor", label: "Mentor", icon: "👨‍🏫" },
                    ].map((type) => (
                      <div
                        key={type.value}
                        className="flex items-center space-x-2"
                      >
                        <Checkbox
                          id={type.value}
                          onCheckedChange={(checked) => {
                            const current = filters.profileTypes || [];
                            const updated = checked
                              ? [...current, type.value as any]
                              : current.filter((t) => t !== type.value);
                            handleFilterChange("profileTypes", updated);
                          }}
                        />
                        <label
                          htmlFor={type.value}
                          className="text-sm flex items-center gap-1"
                        >
                          <span>{type.icon}</span>
                          {type.label}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Location Filter */}
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Location
                  </label>
                  <Input
                    placeholder="City, State, Country"
                    onChange={(e) =>
                      handleFilterChange("location", { city: e.target.value })
                    }
                  />
                </div>

                {/* Social Verification */}
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Social Verification
                  </label>
                  <div className="space-y-2">
                    {[
                      {
                        key: "hasLinkedIn",
                        label: "LinkedIn",
                        icon: "linkedin",
                      },
                      {
                        key: "hasInstagram",
                        label: "Instagram",
                        icon: "instagram",
                      },
                      {
                        key: "hasFacebook",
                        label: "Facebook",
                        icon: "facebook",
                      },
                      {
                        key: "hasPortfolio",
                        label: "Portfolio",
                        icon: "portfolio",
                      },
                    ].map((social) => (
                      <div
                        key={social.key}
                        className="flex items-center space-x-2"
                      >
                        <Checkbox
                          id={social.key}
                          onCheckedChange={(checked) =>
                            handleFilterChange(social.key as any, checked)
                          }
                        />
                        <label
                          htmlFor={social.key}
                          className="text-sm flex items-center gap-2"
                        >
                          {getSocialIcon(social.icon)}
                          {social.label}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Blockchain Verification */}
                <div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="blockchain"
                      onCheckedChange={(checked) =>
                        handleFilterChange("blockchainVerified", checked)
                      }
                    />
                    <label htmlFor="blockchain" className="text-sm">
                      🔗 Blockchain Verified
                    </label>
                  </div>
                </div>

                {/* Content Creators */}
                <div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="content"
                      onCheckedChange={(checked) =>
                        handleFilterChange("hasContent", checked)
                      }
                    />
                    <label htmlFor="content" className="text-sm">
                      📚 Has Content/Courses
                    </label>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Results Section */}
          <div className="lg:col-span-3">
            {/* Search Stats */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <h2 className="text-xl font-semibold">
                  {searchResults.length} talents found
                </h2>
                {searchTime > 0 && (
                  <Badge variant="outline" className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {searchTime}ms
                  </Badge>
                )}
              </div>
              <Select>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Sort by relevance" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="relevance">Relevance</SelectItem>
                  <SelectItem value="reputation">Reputation Score</SelectItem>
                  <SelectItem value="recent">Recently Active</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* AI Suggestions */}
            {suggestions.length > 0 && (
              <Card className="mb-6 border-purple-200 bg-purple-50">
                <CardContent className="pt-4">
                  <div className="flex items-center gap-2 mb-3">
                    <Brain className="w-5 h-5 text-purple-600" />
                    <h3 className="font-medium text-purple-900">
                      AI Suggestions
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {suggestions.map((suggestion, index) => (
                      <button
                        key={index}
                        onClick={() => handleQuickSearch(suggestion)}
                        className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm hover:bg-purple-200 transition-colors"
                      >
                        {suggestion}
                      </button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Results Grid */}
            <div className="space-y-6">
              {isLoading ? (
                <div className="text-center py-12">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-naija-green mx-auto mb-4"></div>
                  <p className="text-gray-600">Searching talents...</p>
                </div>
              ) : (
                searchResults.map((result) => (
                  <TalentCard key={result.profile.id} result={result} />
                ))
              )}
            </div>

            {/* Related Tags */}
            {relatedTags.length > 0 && (
              <Card className="mt-8">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="w-5 h-5" />
                    Explore Related Skills
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {relatedTags.map((tag, index) => (
                      <button
                        key={index}
                        onClick={() => handleQuickSearch(tag)}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-naija-green hover:text-white transition-colors"
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// Enhanced Talent Card Component
function TalentCard({ result }: { result: SearchResult }) {
  const { profile, relevanceScore, matchReasons } = result;

  return (
    <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 border-l-4 border-l-naija-green">
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          {/* Avatar */}
          <div className="relative">
            <Avatar className="w-16 h-16">
              <AvatarImage
                src={`https://api.dicebear.com/7.x/personas/svg?seed=${profile.name}`}
                alt={profile.name}
              />
              <AvatarFallback className="bg-naija-green text-white text-lg">
                {profile.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <div className="absolute -bottom-1 -right-1">
              {getProfileTypeIcon(profile.profileType)}
            </div>
            {profile.blockchainVerified && (
              <div className="absolute -top-1 -right-1 w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                <Award className="w-3 h-3 text-white" />
              </div>
            )}
          </div>

          {/* Main Content */}
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-xl font-bold text-gray-900 truncate">
                    <a
                      href={`/profile/${profile.id}`}
                      className="hover:text-naija-green transition-colors"
                    >
                      {profile.name}
                    </a>
                  </h3>
                  <Badge
                    variant="secondary"
                    className="text-xs px-2 py-0.5 capitalize"
                  >
                    {profile.alias}
                  </Badge>
                </div>

                <p className="text-lg text-gray-700 mb-2">
                  {profile.professionalTitle}
                </p>

                {profile.company && (
                  <p className="text-sm text-gray-600 mb-2">
                    @ {profile.company}
                  </p>
                )}

                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {profile.location.city}, {profile.location.country}
                  </span>
                  <span className="flex items-center gap-1">
                    <Star className="w-3 h-3" />
                    {profile.reputationScore}/100
                  </span>
                  <Badge
                    variant={
                      profile.status === "available" ? "default" : "secondary"
                    }
                    className="text-xs"
                  >
                    {profile.status}
                  </Badge>
                </div>

                {/* Primary + Creative Skills */}
                <div className="mb-3">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge className="bg-naija-green">
                      {profile.primaryIndustry}
                    </Badge>
                    {profile.secondaryIndustries.slice(0, 2).map((industry) => (
                      <Badge key={industry} variant="outline">
                        {industry}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {profile.skillTags.slice(0, 4).map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="text-xs"
                      >
                        {skill}
                      </Badge>
                    ))}
                    {profile.skillTags.length > 4 && (
                      <Badge variant="secondary" className="text-xs">
                        +{profile.skillTags.length - 4} more
                      </Badge>
                    )}
                  </div>
                </div>

                {/* Creative Skills Highlight */}
                {profile.creativeSkills.length > 0 && (
                  <div className="mb-3">
                    <p className="text-xs text-gray-500 mb-1">
                      Creative Talents:
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {profile.creativeSkills.slice(0, 3).map((skill) => (
                        <Badge
                          key={skill}
                          variant="outline"
                          className="text-xs border-purple-300 text-purple-700"
                        >
                          ✨ {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}

                {/* Match Reasons */}
                {matchReasons.length > 0 && (
                  <div className="mb-3">
                    <p className="text-xs text-gray-500 mb-1">
                      Why this match:
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {matchReasons.slice(0, 2).map((reason, index) => (
                        <Badge
                          key={index}
                          variant="outline"
                          className="text-xs border-green-300 text-green-700"
                        >
                          ✓ {reason}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}

                {/* Social Verification */}
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs text-gray-500">Verified on:</span>
                  {Object.entries(profile.verifiedProfiles)
                    .filter(([, url]) => url)
                    .map(([platform]) => (
                      <div key={platform}>{getSocialIcon(platform)}</div>
                    ))}
                  {profile.blockchainVerified && (
                    <Badge className="bg-blue-500 text-xs">🔗 Blockchain</Badge>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col gap-2 ml-4">
                <Badge
                  className={`text-xs px-2 py-1 ${
                    relevanceScore >= 80
                      ? "bg-green-500"
                      : relevanceScore >= 60
                        ? "bg-yellow-500"
                        : "bg-gray-500"
                  }`}
                >
                  {relevanceScore}% match
                </Badge>

                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      size="sm"
                      className="bg-naija-green hover:bg-naija-green-dark"
                    >
                      Connect
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Connect with {profile.name}</DialogTitle>
                      <DialogDescription>
                        Send a connection request to {profile.name} through our
                        secure platform.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4 pt-4">
                      <textarea
                        placeholder="Write a personalized message..."
                        className="w-full p-3 border rounded-lg resize-none h-24"
                      />
                      <div className="flex justify-end space-x-2">
                        <Button variant="outline">Cancel</Button>
                        <Button className="bg-naija-green hover:bg-naija-green-dark">
                          Send Request
                        </Button>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>

                <div className="flex gap-1">
                  <Button variant="outline" size="sm">
                    <MessageCircle className="w-3 h-3" />
                  </Button>
                  <Button variant="outline" size="sm">
                    <Heart className="w-3 h-3" />
                  </Button>
                  <Button variant="outline" size="sm">
                    <Share2 className="w-3 h-3" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Content Preview */}
            {profile.content && profile.content.items.length > 0 && (
              <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Lightbulb className="w-4 h-4 text-yellow-500" />
                  <span className="text-sm font-medium">
                    Content Creator ({profile.content.type})
                  </span>
                </div>
                <p className="text-sm text-gray-600">
                  {profile.content.items[0].title} - ₦
                  {profile.content.items[0].price?.toLocaleString()}
                </p>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

// Helper function to get profile type icon
function getProfileTypeIcon(type: string) {
  switch (type) {
    case "gifted":
      return <Sparkles className="w-4 h-4 text-purple-500" />;
    case "certified":
      return <Award className="w-4 h-4 text-blue-500" />;
    case "rising-star":
      return <TrendingUp className="w-4 h-4 text-yellow-500" />;
    case "mentor":
      return <Brain className="w-4 h-4 text-green-500" />;
    default:
      return <Users className="w-4 h-4 text-gray-500" />;
  }
}

// Helper function to get social media icons
function getSocialIcon(platform: string) {
  switch (platform) {
    case "linkedin":
      return <Linkedin className="w-4 h-4 text-blue-600" />;
    case "instagram":
      return <Instagram className="w-4 h-4 text-pink-500" />;
    case "facebook":
      return <Facebook className="w-4 h-4 text-blue-700" />;
    case "youtube":
      return <Youtube className="w-4 h-4 text-red-600" />;
    default:
      return <Globe className="w-4 h-4 text-gray-500" />;
  }
}
