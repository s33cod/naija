import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  Facebook,
  Linkedin,
  Instagram,
  Twitter,
  Mail,
  User,
  MapPin,
  Briefcase,
  Palette,
  Star,
  Shield,
} from "lucide-react";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMode?: "signin" | "join";
}

const industries = [
  "Banking & Finance",
  "Oil & Gas",
  "Technology",
  "Entertainment",
  "Healthcare",
  "Agriculture",
  "Education",
  "Construction",
  "Manufacturing",
  "Transportation",
  "Telecommunications",
  "Real Estate",
];

const professionalSkills = [
  "Software Development",
  "Data Analysis",
  "Marketing",
  "Sales",
  "Finance",
  "Project Management",
  "Human Resources",
  "Legal",
  "Consulting",
  "Research",
];

const creativeSkills = [
  "Photography",
  "Graphic Design",
  "Writing",
  "Music Production",
  "Video Editing",
  "Painting",
  "Fashion Design",
  "Content Creation",
  "Voice Acting",
  "Dancing",
];

const nigerianStates = [
  "Lagos",
  "Abuja (FCT)",
  "Kano",
  "Rivers",
  "Oyo",
  "Delta",
  "Edo",
  "Anambra",
  "Kaduna",
  "Ogun",
  "Cross River",
  "Imo",
  "Akwa Ibom",
  "Osun",
  "Ondo",
  "Enugu",
  "Abia",
  "Plateau",
  "Borno",
  "Bauchi",
  "Niger",
  "Kwara",
  "Adamawa",
  "Gombe",
  "Sokoto",
  "Kebbi",
  "Katsina",
  "Zamfara",
  "Jigawa",
  "Yobe",
  "Taraba",
  "Benue",
  "Kogi",
  "Nasarawa",
  "Ekiti",
  "Ebonyi",
];

export default function AuthModal({
  isOpen,
  onClose,
  initialMode = "signin",
}: AuthModalProps) {
  const [mode, setMode] = useState<"signin" | "join" | "profile-setup">(
    initialMode,
  );
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    phone: "",
    location: "",
    industry: "",
    professionalTitle: "",
    company: "",
    bio: "",
    professionalSkills: [] as string[],
    creativeSkills: [] as string[],
    linkedinUrl: "",
    instagramUrl: "",
    facebookUrl: "",
    twitterUrl: "",
    portfolioUrl: "",
  });

  const handleSocialAuth = (platform: string) => {
    // Simulate social authentication
    console.log(`Authenticating with ${platform}...`);

    // For demo purposes, auto-fill some data based on platform
    if (platform === "linkedin") {
      setFormData({
        ...formData,
        firstName: "John",
        lastName: "Adebayo",
        email: "john.adebayo@example.com",
        professionalTitle: "Senior Software Engineer",
        company: "Paystack",
        industry: "Technology",
        location: "Lagos",
        linkedinUrl: "https://linkedin.com/in/johnadebayo",
      });
      setMode("profile-setup");
    } else if (platform === "google") {
      setFormData({
        ...formData,
        firstName: "Amara",
        lastName: "Okafor",
        email: "amara.okafor@gmail.com",
      });
      setMode("profile-setup");
    }
  };

  const handleSkillToggle = (
    skill: string,
    type: "professional" | "creative",
  ) => {
    const skillsKey =
      type === "professional" ? "professionalSkills" : "creativeSkills";
    const currentSkills = formData[skillsKey];

    if (currentSkills.includes(skill)) {
      setFormData({
        ...formData,
        [skillsKey]: currentSkills.filter((s) => s !== skill),
      });
    } else {
      setFormData({
        ...formData,
        [skillsKey]: [...currentSkills, skill],
      });
    }
  };

  const handleJoinSubmit = () => {
    console.log("Creating profile:", formData);
    // Here you would actually create the user profile
    alert("Profile created successfully! Welcome to Talk About Nigeria!");
    onClose();
  };

  const renderSignIn = () => (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-lg font-semibold mb-2">Welcome Back!</h3>
        <p className="text-gray-600">
          Connect with Nigeria's brightest talents
        </p>
      </div>

      {/* Social Sign In Options */}
      <div className="space-y-3">
        <Button
          onClick={() => handleSocialAuth("linkedin")}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white"
        >
          <Linkedin className="w-5 h-5 mr-2" />
          Continue with LinkedIn
        </Button>
        <Button
          onClick={() => handleSocialAuth("google")}
          variant="outline"
          className="w-full"
        >
          <Mail className="w-5 h-5 mr-2" />
          Continue with Google
        </Button>
        <Button
          onClick={() => handleSocialAuth("facebook")}
          className="w-full bg-blue-800 hover:bg-blue-900 text-white"
        >
          <Facebook className="w-5 h-5 mr-2" />
          Continue with Facebook
        </Button>
      </div>

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">Or</span>
        </div>
      </div>

      {/* Email/Password Form */}
      <div className="space-y-4">
        <Input
          type="email"
          placeholder="Email address"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <Input
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
        />
        <Button className="w-full bg-naija-green hover:bg-naija-green-dark">
          Sign In
        </Button>
      </div>

      <div className="text-center">
        <p className="text-sm text-gray-600">
          Don't have an account?{" "}
          <button
            onClick={() => setMode("join")}
            className="text-naija-green hover:underline font-medium"
          >
            Join the platform
          </button>
        </p>
      </div>
    </div>
  );

  const renderJoin = () => (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-lg font-semibold mb-2">Join Talk About Nigeria</h3>
        <p className="text-gray-600">
          Connect your professional and creative talents
        </p>
      </div>

      {/* Social Sign Up Options */}
      <div className="space-y-3">
        <Button
          onClick={() => handleSocialAuth("linkedin")}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white"
        >
          <Linkedin className="w-5 h-5 mr-2" />
          Join with LinkedIn Profile
          <Badge className="ml-2 bg-green-500">Recommended</Badge>
        </Button>
        <Button
          onClick={() => handleSocialAuth("google")}
          variant="outline"
          className="w-full"
        >
          <Mail className="w-5 h-5 mr-2" />
          Join with Google
        </Button>
        <Button
          onClick={() => handleSocialAuth("facebook")}
          className="w-full bg-blue-800 hover:bg-blue-900 text-white"
        >
          <Facebook className="w-5 h-5 mr-2" />
          Join with Facebook
        </Button>
      </div>

      <div className="bg-naija-green/10 p-4 rounded-lg">
        <div className="flex items-center gap-2 text-sm text-naija-green">
          <Shield className="w-4 h-4" />
          <span className="font-medium">Why LinkedIn?</span>
        </div>
        <p className="text-xs text-gray-600 mt-1">
          We use your LinkedIn profile to verify your professional experience
          and create a more authentic connection network.
        </p>
      </div>

      <div className="text-center">
        <p className="text-sm text-gray-600">
          Already have an account?{" "}
          <button
            onClick={() => setMode("signin")}
            className="text-naija-green hover:underline font-medium"
          >
            Sign in
          </button>
        </p>
      </div>
    </div>
  );

  const renderProfileSetup = () => (
    <div className="space-y-6 max-h-[80vh] overflow-y-auto">
      <div className="text-center">
        <h3 className="text-lg font-semibold mb-2">Complete Your Profile</h3>
        <p className="text-gray-600">
          Create your unique talent mashup profile
        </p>
      </div>

      {/* Basic Information */}
      <div className="space-y-4">
        <h4 className="font-medium flex items-center gap-2">
          <User className="w-4 h-4" />
          Basic Information
        </h4>
        <div className="grid grid-cols-2 gap-3">
          <Input
            placeholder="First Name"
            value={formData.firstName}
            onChange={(e) =>
              setFormData({ ...formData, firstName: e.target.value })
            }
          />
          <Input
            placeholder="Last Name"
            value={formData.lastName}
            onChange={(e) =>
              setFormData({ ...formData, lastName: e.target.value })
            }
          />
        </div>
        <Input
          type="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <Input
          placeholder="Phone Number"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        />
      </div>

      {/* Location & Industry */}
      <div className="space-y-4">
        <h4 className="font-medium flex items-center gap-2">
          <MapPin className="w-4 h-4" />
          Location & Industry
        </h4>
        <Select
          onValueChange={(value) =>
            setFormData({ ...formData, location: value })
          }
        >
          <SelectTrigger>
            <SelectValue placeholder="Select your state in Nigeria" />
          </SelectTrigger>
          <SelectContent>
            {nigerianStates.map((state) => (
              <SelectItem key={state} value={state}>
                {state}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select
          onValueChange={(value) =>
            setFormData({ ...formData, industry: value })
          }
        >
          <SelectTrigger>
            <SelectValue placeholder="Primary Industry" />
          </SelectTrigger>
          <SelectContent>
            {industries.map((industry) => (
              <SelectItem key={industry} value={industry}>
                {industry}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Professional Details */}
      <div className="space-y-4">
        <h4 className="font-medium flex items-center gap-2">
          <Briefcase className="w-4 h-4" />
          Professional Details
        </h4>
        <Input
          placeholder="Job Title"
          value={formData.professionalTitle}
          onChange={(e) =>
            setFormData({ ...formData, professionalTitle: e.target.value })
          }
        />
        <Input
          placeholder="Company/Organization"
          value={formData.company}
          onChange={(e) =>
            setFormData({ ...formData, company: e.target.value })
          }
        />
        <Textarea
          placeholder="Tell us about yourself and your professional journey..."
          value={formData.bio}
          onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
          rows={3}
        />
      </div>

      {/* Professional Skills */}
      <div className="space-y-4">
        <h4 className="font-medium flex items-center gap-2">
          <Star className="w-4 h-4" />
          Professional Skills
        </h4>
        <div className="flex flex-wrap gap-2">
          {professionalSkills.map((skill) => (
            <Badge
              key={skill}
              variant={
                formData.professionalSkills.includes(skill)
                  ? "default"
                  : "outline"
              }
              className={`cursor-pointer ${
                formData.professionalSkills.includes(skill)
                  ? "bg-naija-green hover:bg-naija-green-dark"
                  : "hover:bg-gray-100"
              }`}
              onClick={() => handleSkillToggle(skill, "professional")}
            >
              {skill}
            </Badge>
          ))}
        </div>
      </div>

      {/* Creative Skills */}
      <div className="space-y-4">
        <h4 className="font-medium flex items-center gap-2">
          <Palette className="w-4 h-4" />
          Creative Talents
        </h4>
        <p className="text-sm text-gray-600">
          What creative skills make you unique? This is what makes Talk About
          Nigeria special!
        </p>
        <div className="flex flex-wrap gap-2">
          {creativeSkills.map((skill) => (
            <Badge
              key={skill}
              variant={
                formData.creativeSkills.includes(skill) ? "default" : "outline"
              }
              className={`cursor-pointer ${
                formData.creativeSkills.includes(skill)
                  ? "bg-purple-500 hover:bg-purple-600 text-white"
                  : "hover:bg-gray-100"
              }`}
              onClick={() => handleSkillToggle(skill, "creative")}
            >
              {skill}
            </Badge>
          ))}
        </div>
      </div>

      {/* Social Media Links */}
      <div className="space-y-4">
        <h4 className="font-medium">Social Media Verification</h4>
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Linkedin className="w-5 h-5 text-blue-600" />
            <Input
              placeholder="LinkedIn Profile URL"
              value={formData.linkedinUrl}
              onChange={(e) =>
                setFormData({ ...formData, linkedinUrl: e.target.value })
              }
            />
          </div>
          <div className="flex items-center gap-2">
            <Instagram className="w-5 h-5 text-pink-500" />
            <Input
              placeholder="Instagram Profile URL"
              value={formData.instagramUrl}
              onChange={(e) =>
                setFormData({ ...formData, instagramUrl: e.target.value })
              }
            />
          </div>
          <div className="flex items-center gap-2">
            <Twitter className="w-5 h-5 text-blue-400" />
            <Input
              placeholder="Twitter Profile URL"
              value={formData.twitterUrl}
              onChange={(e) =>
                setFormData({ ...formData, twitterUrl: e.target.value })
              }
            />
          </div>
        </div>
      </div>

      <Button
        onClick={handleJoinSubmit}
        className="w-full bg-naija-green hover:bg-naija-green-dark text-lg py-3"
        disabled={
          !formData.firstName ||
          !formData.lastName ||
          !formData.email ||
          !formData.industry
        }
      >
        Create My Profile
      </Button>
    </div>
  );

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <div className="w-6 h-6 bg-gradient-to-r from-naija-green to-naija-green-light rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">🇳🇬</span>
            </div>
            Talk About Nigeria
          </DialogTitle>
          <DialogDescription>
            {mode === "signin" && "Sign in to your account"}
            {mode === "join" &&
              "Join Nigeria's premier talent discovery platform"}
            {mode === "profile-setup" &&
              "Set up your professional + creative profile"}
          </DialogDescription>
        </DialogHeader>

        {mode === "signin" && renderSignIn()}
        {mode === "join" && renderJoin()}
        {mode === "profile-setup" && renderProfileSetup()}
      </DialogContent>
    </Dialog>
  );
}
