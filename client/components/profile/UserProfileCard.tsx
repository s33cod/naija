import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  MapPin,
  Users,
  Award,
  Star,
  ExternalLink,
  MessageCircle,
  Linkedin,
  Instagram,
  Facebook,
  Globe,
  Verified,
} from "lucide-react";

interface UserProfileCardProps {
  user: {
    id: string;
    firstName: string;
    lastName: string;
    professionalTitle: string;
    company?: string;
    industry: string;
    location: string;
    profileImage?: string;
    bio: string;
    professionalSkills: string[];
    creativeSkills: string[];
    verifiedProfiles: {
      linkedin?: string;
      instagram?: string;
      facebook?: string;
      portfolio?: string;
    };
    reputationScore: number;
    connections: number;
    status: "available" | "busy" | "offline";
    joinedDate: string;
    achievements?: string[];
  };
  compact?: boolean;
}

export default function UserProfileCard({
  user,
  compact = false,
}: UserProfileCardProps) {
  const getInitials = () => {
    return `${user.firstName[0]}${user.lastName[0]}`.toUpperCase();
  };

  const getStatusColor = () => {
    switch (user.status) {
      case "available":
        return "bg-green-500";
      case "busy":
        return "bg-yellow-500";
      case "offline":
        return "bg-gray-400";
      default:
        return "bg-gray-400";
    }
  };

  const getReputationBadge = () => {
    if (user.reputationScore >= 90)
      return { label: "Expert", color: "bg-purple-500" };
    if (user.reputationScore >= 80)
      return { label: "Pro", color: "bg-blue-500" };
    if (user.reputationScore >= 70)
      return { label: "Skilled", color: "bg-green-500" };
    if (user.reputationScore >= 60)
      return { label: "Rising", color: "bg-yellow-500" };
    return { label: "New", color: "bg-gray-500" };
  };

  const getSocialIcon = (platform: string) => {
    switch (platform) {
      case "linkedin":
        return <Linkedin className="w-4 h-4 text-blue-600" />;
      case "instagram":
        return <Instagram className="w-4 h-4 text-pink-500" />;
      case "facebook":
        return <Facebook className="w-4 h-4 text-blue-700" />;
      case "portfolio":
        return <Globe className="w-4 h-4 text-gray-600" />;
      default:
        return <ExternalLink className="w-4 h-4 text-gray-500" />;
    }
  };

  const reputationBadge = getReputationBadge();

  if (compact) {
    return (
      <Card className="hover:shadow-lg transition-shadow cursor-pointer border-l-4 border-l-naija-green">
        <CardContent className="p-4">
          <div className="flex items-center gap-3">
            <div className="relative">
              {user.profileImage ? (
                <img
                  src={user.profileImage}
                  alt={`${user.firstName} ${user.lastName}`}
                  className="w-12 h-12 rounded-full object-cover"
                />
              ) : (
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-naija-green to-naija-green-light flex items-center justify-center text-white font-bold">
                  {getInitials()}
                </div>
              )}
              <div
                className={`absolute -bottom-1 -right-1 w-4 h-4 ${getStatusColor()} rounded-full border-2 border-white`}
              ></div>
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <h4 className="font-semibold text-gray-900 truncate">
                  {user.firstName} {user.lastName}
                </h4>
                <Verified className="w-4 h-4 text-naija-green" />
              </div>
              <p className="text-sm text-gray-600 truncate">
                {user.professionalTitle}
              </p>
              <div className="flex items-center gap-1 mt-1">
                <Badge
                  className={`text-xs ${reputationBadge.color} text-white`}
                >
                  {reputationBadge.label}
                </Badge>
                {user.creativeSkills.length > 0 && (
                  <Badge variant="outline" className="text-xs text-purple-600">
                    +{user.creativeSkills.length} creative
                  </Badge>
                )}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 border-2 hover:border-naija-green">
      <CardContent className="p-6">
        {/* Header */}
        <div className="flex items-start gap-4 mb-4">
          <div className="relative">
            {user.profileImage ? (
              <img
                src={user.profileImage}
                alt={`${user.firstName} ${user.lastName}`}
                className="w-20 h-20 rounded-full object-cover border-2 border-gray-200"
              />
            ) : (
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-naija-green to-naija-green-light flex items-center justify-center text-white font-bold text-xl">
                {getInitials()}
              </div>
            )}
            <div
              className={`absolute -bottom-1 -right-1 w-6 h-6 ${getStatusColor()} rounded-full border-3 border-white flex items-center justify-center`}
            >
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
          </div>

          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <h3 className="text-xl font-bold text-gray-900">
                {user.firstName} {user.lastName}
              </h3>
              <Verified className="w-5 h-5 text-naija-green" />
              <Badge className={`text-xs ${reputationBadge.color} text-white`}>
                {reputationBadge.label}
              </Badge>
            </div>
            <p className="text-lg text-gray-700 mb-1">
              {user.professionalTitle}
            </p>
            {user.company && (
              <p className="text-sm text-gray-600 mb-2">@ {user.company}</p>
            )}
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3" />
                {user.location}
              </span>
              <span className="flex items-center gap-1">
                <Users className="w-3 h-3" />
                {user.connections.toLocaleString()} connections
              </span>
              <span className="flex items-center gap-1">
                <Star className="w-3 h-3" />
                {user.reputationScore}/100
              </span>
            </div>
          </div>
        </div>

        {/* Bio */}
        <p className="text-sm text-gray-700 mb-4 line-clamp-3">{user.bio}</p>

        {/* Skills */}
        <div className="space-y-3 mb-4">
          {/* Professional Skills */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Award className="w-4 h-4 text-naija-green" />
              <span className="text-sm font-medium text-gray-700">
                Professional Skills
              </span>
            </div>
            <div className="flex flex-wrap gap-1">
              {user.professionalSkills.slice(0, 4).map((skill) => (
                <Badge
                  key={skill}
                  className="text-xs bg-naija-green text-white"
                >
                  {skill}
                </Badge>
              ))}
              {user.professionalSkills.length > 4 && (
                <Badge variant="outline" className="text-xs">
                  +{user.professionalSkills.length - 4} more
                </Badge>
              )}
            </div>
          </div>

          {/* Creative Skills */}
          {user.creativeSkills.length > 0 && (
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Star className="w-4 h-4 text-purple-500" />
                <span className="text-sm font-medium text-gray-700">
                  Creative Talents
                </span>
              </div>
              <div className="flex flex-wrap gap-1">
                {user.creativeSkills.slice(0, 3).map((skill) => (
                  <Badge
                    key={skill}
                    variant="outline"
                    className="text-xs border-purple-300 text-purple-700"
                  >
                    ✨ {skill}
                  </Badge>
                ))}
                {user.creativeSkills.length > 3 && (
                  <Badge variant="outline" className="text-xs text-purple-700">
                    +{user.creativeSkills.length - 3} more
                  </Badge>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Social Verification */}
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-2">
            <Verified className="w-4 h-4 text-green-500" />
            <span className="text-sm font-medium text-gray-700">
              Verified Profiles
            </span>
          </div>
          <div className="flex items-center gap-2">
            {Object.entries(user.verifiedProfiles)
              .filter(([, url]) => url)
              .map(([platform, url]) => (
                <a
                  key={platform}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition-transform"
                >
                  {getSocialIcon(platform)}
                </a>
              ))}
          </div>
        </div>

        {/* Achievements */}
        {user.achievements && user.achievements.length > 0 && (
          <div className="mb-4">
            <div className="flex items-center gap-2 mb-2">
              <Award className="w-4 h-4 text-yellow-500" />
              <span className="text-sm font-medium text-gray-700">
                Recent Achievements
              </span>
            </div>
            <div className="flex flex-wrap gap-1">
              {user.achievements.slice(0, 2).map((achievement, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="text-xs border-yellow-300 text-yellow-700"
                >
                  🏆 {achievement}
                </Badge>
              ))}
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex gap-2 pt-2">
          <Button className="flex-1 bg-naija-green hover:bg-naija-green-dark">
            <MessageCircle className="w-4 h-4 mr-2" />
            Connect
          </Button>
          <Button variant="outline" size="icon">
            <ExternalLink className="w-4 h-4" />
          </Button>
        </div>

        {/* Footer Info */}
        <div className="mt-4 pt-3 border-t text-xs text-gray-500 flex justify-between">
          <span>Joined {new Date(user.joinedDate).toLocaleDateString()}</span>
          <span className="capitalize">{user.status}</span>
        </div>
      </CardContent>
    </Card>
  );
}
