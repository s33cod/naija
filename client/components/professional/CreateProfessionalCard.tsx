import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  ImageValidator,
  ImageValidationBadge,
  ImageRequirementNotice,
} from "./ImageValidator";
import {
  Plus,
  Save,
  AlertTriangle,
  CheckCircle,
  User,
  Building,
  MapPin,
  Award,
} from "lucide-react";
import { useMandatoryImageValidation } from "@/lib/image-validation";

interface ProfessionalData {
  name: string;
  title: string;
  industry: string;
  location: string;
  image: string;
  expertise: string[];
  description: string;
  connections: string;
  verified: boolean;
}

const INDUSTRIES = [
  "Banking & Finance",
  "Oil & Gas",
  "Entertainment",
  "Technology",
  "Construction",
  "Education",
  "Healthcare",
  "Agriculture",
  "Manufacturing",
  "Telecommunications",
];

const INITIAL_DATA: ProfessionalData = {
  name: "",
  title: "",
  industry: "",
  location: "",
  image: "",
  expertise: [],
  description: "",
  connections: "",
  verified: false,
};

export function CreateProfessionalCard({
  onSave,
  onCancel,
}: {
  onSave: (data: ProfessionalData) => void;
  onCancel: () => void;
}) {
  const [formData, setFormData] = useState<ProfessionalData>(INITIAL_DATA);
  const [currentExpertise, setCurrentExpertise] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const { validateImage } = useMandatoryImageValidation();

  // Validate entire form
  const validateForm = () => {
    const imageValidation = validateImage(formData.image, formData.name);
    const isFormComplete =
      formData.name.trim() !== "" &&
      formData.title.trim() !== "" &&
      formData.industry !== "" &&
      formData.location.trim() !== "" &&
      formData.image.trim() !== "" &&
      formData.description.trim() !== "" &&
      imageValidation.isValid;

    setIsValid(isFormComplete);
    return isFormComplete;
  };

  React.useEffect(() => {
    validateForm();
  }, [formData]);

  const handleInputChange = (field: keyof ProfessionalData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const addExpertise = () => {
    if (
      currentExpertise.trim() &&
      !formData.expertise.includes(currentExpertise.trim())
    ) {
      setFormData((prev) => ({
        ...prev,
        expertise: [...prev.expertise, currentExpertise.trim()],
      }));
      setCurrentExpertise("");
    }
  };

  const removeExpertise = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      expertise: prev.expertise.filter((_, i) => i !== index),
    }));
  };

  const handleSave = () => {
    if (validateForm()) {
      onSave(formData);
    }
  };

  const imageValidation = validateImage(formData.image, formData.name);

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Create Professional Card</h2>
          <p className="text-gray-600">
            Add a new verified professional to the network
          </p>
        </div>
        <div className="flex gap-2">
          <Dialog open={showPreview} onOpenChange={setShowPreview}>
            <DialogTrigger asChild>
              <Button variant="outline" disabled={!isValid}>
                Preview Card
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-md">
              <DialogHeader>
                <DialogTitle>Professional Card Preview</DialogTitle>
              </DialogHeader>
              <ProfessionalCardPreview data={formData} />
            </DialogContent>
          </Dialog>
          <Button onClick={onCancel} variant="outline">
            Cancel
          </Button>
          <Button
            onClick={handleSave}
            disabled={!isValid}
            className="bg-naija-green hover:bg-naija-green-dark"
          >
            <Save className="w-4 h-4 mr-2" />
            Save Professional
          </Button>
        </div>
      </div>

      {/* Image Requirement Notice */}
      <ImageRequirementNotice />

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Form Section */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="w-5 h-5" />
                Basic Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium">Full Name *</label>
                <Input
                  placeholder="e.g., Tony Elumelu"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                />
              </div>

              <div>
                <label className="text-sm font-medium">
                  Professional Title *
                </label>
                <Input
                  placeholder="e.g., Chairman & CEO, UBA Group"
                  value={formData.title}
                  onChange={(e) => handleInputChange("title", e.target.value)}
                />
              </div>

              <div>
                <label className="text-sm font-medium">Industry *</label>
                <Select
                  value={formData.industry}
                  onValueChange={(value) =>
                    handleInputChange("industry", value)
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select industry" />
                  </SelectTrigger>
                  <SelectContent>
                    {INDUSTRIES.map((industry) => (
                      <SelectItem key={industry} value={industry}>
                        {industry}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-medium">Location *</label>
                <Input
                  placeholder="e.g., Lagos, Nigeria"
                  value={formData.location}
                  onChange={(e) =>
                    handleInputChange("location", e.target.value)
                  }
                />
              </div>

              <div>
                <label className="text-sm font-medium">Connections</label>
                <Input
                  placeholder="e.g., 10M+"
                  value={formData.connections}
                  onChange={(e) =>
                    handleInputChange("connections", e.target.value)
                  }
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="w-5 h-5" />
                Expertise & Description
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium">
                  Areas of Expertise
                </label>
                <div className="flex gap-2">
                  <Input
                    placeholder="Add expertise area"
                    value={currentExpertise}
                    onChange={(e) => setCurrentExpertise(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && addExpertise()}
                  />
                  <Button onClick={addExpertise} size="sm" variant="outline">
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
                <div className="flex flex-wrap gap-2 mt-2">
                  {formData.expertise.map((skill, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="cursor-pointer hover:bg-red-100"
                      onClick={() => removeExpertise(index)}
                    >
                      {skill} ×
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-sm font-medium">
                  Professional Description *
                </label>
                <Textarea
                  placeholder="Brief professional background and achievements..."
                  value={formData.description}
                  onChange={(e) =>
                    handleInputChange("description", e.target.value)
                  }
                  rows={4}
                />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Image Section */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building className="w-5 h-5" />
                Professional Image
                <ImageValidationBadge
                  imageUrl={formData.image}
                  professionalName={formData.name}
                />
              </CardTitle>
              <CardDescription>
                Upload or provide URL for the professional's actual image
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ImageValidator
                imageUrl={formData.image}
                professionalName={formData.name}
                onImageChange={(url) => handleInputChange("image", url)}
                required={true}
                showPreview={true}
              />
            </CardContent>
          </Card>

          {/* Validation Status */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Validation Status</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-2">
                {formData.name ? (
                  <CheckCircle className="w-4 h-4 text-green-500" />
                ) : (
                  <AlertTriangle className="w-4 h-4 text-red-500" />
                )}
                <span className="text-sm">Name provided</span>
              </div>
              <div className="flex items-center gap-2">
                {formData.title ? (
                  <CheckCircle className="w-4 h-4 text-green-500" />
                ) : (
                  <AlertTriangle className="w-4 h-4 text-red-500" />
                )}
                <span className="text-sm">Professional title</span>
              </div>
              <div className="flex items-center gap-2">
                {formData.industry ? (
                  <CheckCircle className="w-4 h-4 text-green-500" />
                ) : (
                  <AlertTriangle className="w-4 h-4 text-red-500" />
                )}
                <span className="text-sm">Industry selected</span>
              </div>
              <div className="flex items-center gap-2">
                {imageValidation.isValid ? (
                  <CheckCircle className="w-4 h-4 text-green-500" />
                ) : (
                  <AlertTriangle className="w-4 h-4 text-red-500" />
                )}
                <span className="text-sm">Actual professional image</span>
              </div>
              <div className="flex items-center gap-2">
                {formData.description ? (
                  <CheckCircle className="w-4 h-4 text-green-500" />
                ) : (
                  <AlertTriangle className="w-4 h-4 text-red-500" />
                )}
                <span className="text-sm">Description provided</span>
              </div>

              {!isValid && (
                <Alert variant="destructive">
                  <AlertTriangle className="h-4 w-4" />
                  <AlertDescription>
                    Complete all required fields with valid information to save
                    the professional card.
                  </AlertDescription>
                </Alert>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

// Preview component
function ProfessionalCardPreview({ data }: { data: ProfessionalData }) {
  return (
    <Card className="w-full">
      <CardHeader className="pb-4">
        <div className="flex items-center space-x-4">
          <div className="relative">
            {data.image ? (
              <img
                src={data.image}
                alt={data.name}
                className="w-16 h-16 rounded-full object-cover"
              />
            ) : (
              <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center">
                <User className="w-8 h-8 text-gray-400" />
              </div>
            )}
            <div className="absolute -top-1 -right-1 w-6 h-6 bg-naija-green rounded-full flex items-center justify-center">
              <Award className="w-3 h-3 text-white" />
            </div>
          </div>
          <div className="flex-1">
            <CardTitle className="text-lg">{data.name || "Name"}</CardTitle>
            <CardDescription className="text-sm">
              {data.title || "Professional Title"}
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <div className="flex items-center text-sm text-gray-600">
            <MapPin className="w-4 h-4 mr-2" />
            {data.location || "Location"}
          </div>
          {data.connections && (
            <div className="flex items-center text-sm text-gray-600">
              <User className="w-4 h-4 mr-2" />
              {data.connections} connections
            </div>
          )}
          <p className="text-sm text-gray-700">
            {data.description || "Professional description..."}
          </p>
          <div className="flex flex-wrap gap-1">
            {data.expertise.slice(0, 3).map((skill, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                {skill}
              </Badge>
            ))}
            {data.expertise.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{data.expertise.length - 3} more
              </Badge>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

// Hook for creating professional cards with validation
export function useCreateProfessional() {
  const [isCreating, setIsCreating] = useState(false);

  const createProfessional = async (data: ProfessionalData) => {
    setIsCreating(true);
    try {
      // Validate image before saving
      const imageValidation = useMandatoryImageValidation().validateImage(
        data.image,
        data.name,
      );

      if (!imageValidation.isValid) {
        throw new Error(
          "Invalid professional image. Must use actual photo from verified source.",
        );
      }

      // Here you would typically save to database/API
      console.log("Creating professional:", data);

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      return { success: true, data };
    } catch (error) {
      console.error("Failed to create professional:", error);
      return { success: false, error: error.message };
    } finally {
      setIsCreating(false);
    }
  };

  return { createProfessional, isCreating };
}
