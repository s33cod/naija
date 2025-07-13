import React, { useState } from "react";
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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  CreateProfessionalCard,
  useCreateProfessional,
} from "@/components/professional/CreateProfessionalCard";
import {
  ImageValidationBadge,
  ImageRequirementNotice,
} from "@/components/professional/ImageValidator";
import {
  Plus,
  Users,
  CheckCircle,
  AlertTriangle,
  XCircle,
  Shield,
  Image as ImageIcon,
  Edit,
  Trash2,
} from "lucide-react";
import {
  validateProfessionalImage,
  VERIFIED_PROFESSIONAL_IMAGES,
} from "@/lib/image-validation";

// Mock data for existing professionals (this would come from your API/database)
const existingProfessionals = [
  {
    id: 1,
    name: "Tony Elumelu",
    title: "Chairman & CEO, UBA Group",
    industry: "Banking & Finance",
    location: "Lagos, Nigeria",
    image:
      "https://pbs.twimg.com/profile_images/1604081652468523008/SzQFJOL0_400x400.jpg",
    expertise: ["Investment Banking", "Entrepreneurship", "Philanthropy"],
    description:
      "Leading African entrepreneur and philanthropist driving economic transformation across Africa.",
    verified: true,
    connections: "10M+",
  },
  {
    id: 2,
    name: "Aliko Dangote",
    title: "President & CEO, Dangote Group",
    industry: "Oil & Gas",
    location: "Lagos, Nigeria",
    image:
      "https://pbs.twimg.com/profile_images/1153616477684973569/x7wEPOEL_400x400.jpg",
    expertise: ["Oil & Gas", "Manufacturing", "Infrastructure"],
    description:
      "Africa's richest man and industrial giant transforming Nigeria's economy.",
    verified: true,
    connections: "5M+",
  },
  {
    id: 3,
    name: "Test User with Placeholder",
    title: "Example Professional",
    industry: "Technology",
    location: "Lagos, Nigeria",
    image: "/api/placeholder/300/300", // This should be flagged as invalid
    expertise: ["Software Development"],
    description: "This is a test user with placeholder image.",
    verified: false,
    connections: "1K+",
  },
];

export default function AdminProfessionals() {
  const [professionals, setProfessionals] = useState(existingProfessionals);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [selectedTab, setSelectedTab] = useState("overview");
  const { createProfessional, isCreating } = useCreateProfessional();

  const handleCreateProfessional = async (data: any) => {
    const result = await createProfessional(data);
    if (result.success) {
      setProfessionals([
        ...professionals,
        { ...data, id: Date.now(), verified: true },
      ]);
      setShowCreateForm(false);
    }
  };

  const handleDeleteProfessional = (id: number) => {
    setProfessionals(professionals.filter((p) => p.id !== id));
  };

  // Validation statistics
  const validProfessionals = professionals.filter((p) => {
    const validation = validateProfessionalImage(p.image);
    return validation.isActualImage && !validation.isPlaceholder;
  });

  const invalidProfessionals = professionals.filter((p) => {
    const validation = validateProfessionalImage(p.image);
    return validation.isPlaceholder || !validation.isActualImage;
  });

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
                  NaijaPro Connect Admin
                </span>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="/" className="text-gray-600 hover:text-primary">
                Home
              </a>
              <a
                href="/admin/professionals"
                className="text-gray-900 hover:text-primary font-medium"
              >
                Manage Professionals
              </a>
            </nav>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Professional Management
            </h1>
            <p className="text-gray-600">
              Manage professional profiles with mandatory image validation
            </p>
          </div>
          <Dialog open={showCreateForm} onOpenChange={setShowCreateForm}>
            <DialogTrigger asChild>
              <Button className="bg-naija-green hover:bg-naija-green-dark">
                <Plus className="w-4 h-4 mr-2" />
                Add Professional
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>Create New Professional Profile</DialogTitle>
                <DialogDescription>
                  Add a verified professional to the network with mandatory
                  actual image requirement.
                </DialogDescription>
              </DialogHeader>
              <CreateProfessionalCard
                onSave={handleCreateProfessional}
                onCancel={() => setShowCreateForm(false)}
              />
            </DialogContent>
          </Dialog>
        </div>

        {/* Statistics Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Users className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold">
                    {professionals.length}
                  </div>
                  <div className="text-sm text-gray-600">
                    Total Professionals
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-600">
                    {validProfessionals.length}
                  </div>
                  <div className="text-sm text-gray-600">Valid Images</div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                  <XCircle className="w-5 h-5 text-red-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-red-600">
                    {invalidProfessionals.length}
                  </div>
                  <div className="text-sm text-gray-600">Invalid Images</div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <Shield className="w-5 h-5 text-yellow-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold">
                    {professionals.filter((p) => p.verified).length}
                  </div>
                  <div className="text-sm text-gray-600">Verified Profiles</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Image Policy Notice */}
        <ImageRequirementNotice />

        {/* Main Content Tabs */}
        <Tabs
          value={selectedTab}
          onValueChange={setSelectedTab}
          className="mt-6"
        >
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="overview">All Professionals</TabsTrigger>
            <TabsTrigger value="valid">Valid Images</TabsTrigger>
            <TabsTrigger value="invalid">Needs Attention</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="mt-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {professionals.map((professional) => (
                <ProfessionalCard
                  key={professional.id}
                  professional={professional}
                  onDelete={handleDeleteProfessional}
                />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="valid" className="mt-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {validProfessionals.map((professional) => (
                <ProfessionalCard
                  key={professional.id}
                  professional={professional}
                  onDelete={handleDeleteProfessional}
                />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="invalid" className="mt-6">
            <div className="space-y-4">
              <Alert variant="destructive">
                <AlertTriangle className="h-4 w-4" />
                <AlertDescription>
                  The following professionals have invalid images that must be
                  replaced with actual professional photos.
                </AlertDescription>
              </Alert>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {invalidProfessionals.map((professional) => (
                  <ProfessionalCard
                    key={professional.id}
                    professional={professional}
                    onDelete={handleDeleteProfessional}
                    highlightIssues={true}
                  />
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

// Professional card component with validation
function ProfessionalCard({
  professional,
  onDelete,
  highlightIssues = false,
}: {
  professional: any;
  onDelete: (id: number) => void;
  highlightIssues?: boolean;
}) {
  const validation = validateProfessionalImage(professional.image);

  return (
    <Card
      className={`overflow-hidden hover:shadow-lg transition-shadow ${
        highlightIssues &&
        (validation.isPlaceholder || !validation.isActualImage)
          ? "border-red-500 border-2"
          : ""
      }`}
    >
      <CardHeader className="pb-4">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <img
              src={professional.image}
              alt={professional.name}
              className="w-16 h-16 rounded-full object-cover"
              onError={(e) => {
                e.currentTarget.src = "/api/placeholder/300/300";
              }}
            />
            {professional.verified && (
              <div className="absolute -top-1 -right-1 w-6 h-6 bg-naija-green rounded-full flex items-center justify-center">
                <CheckCircle className="w-3 h-3 text-white" />
              </div>
            )}
          </div>
          <div className="flex-1">
            <CardTitle className="text-lg flex items-center gap-2">
              {professional.name}
              <ImageValidationBadge
                imageUrl={professional.image}
                professionalName={professional.name}
              />
            </CardTitle>
            <CardDescription className="text-sm">
              {professional.title}
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600">Industry:</span>
            <Badge variant="outline">{professional.industry}</Badge>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600">Location:</span>
            <span>{professional.location}</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600">Connections:</span>
            <span>{professional.connections}</span>
          </div>

          {validation.isPlaceholder && (
            <Alert variant="destructive" className="mt-3">
              <AlertTriangle className="h-4 w-4" />
              <AlertDescription className="text-xs">
                <strong>Placeholder image detected!</strong> Replace with actual
                professional photo from verified source.
              </AlertDescription>
            </Alert>
          )}

          <div className="flex gap-2 pt-2">
            <Button variant="outline" size="sm" className="flex-1">
              <Edit className="w-3 h-3 mr-1" />
              Edit
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => onDelete(professional.id)}
              className="text-red-600 hover:text-red-700"
            >
              <Trash2 className="w-3 h-3" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
