import React, { useState, useEffect } from "react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  AlertTriangle,
  CheckCircle,
  XCircle,
  ExternalLink,
  Copy,
  Image as ImageIcon,
} from "lucide-react";
import {
  validateProfessionalImage,
  validateImageRequirements,
  getVerifiedImage,
  getRecommendedImageSources,
  VERIFIED_PROFESSIONAL_IMAGES,
  useMandatoryImageValidation,
} from "@/lib/image-validation";

interface ImageValidatorProps {
  imageUrl: string;
  professionalName: string;
  onImageChange: (imageUrl: string) => void;
  required?: boolean;
  showPreview?: boolean;
}

export function ImageValidator({
  imageUrl,
  professionalName,
  onImageChange,
  required = true,
  showPreview = true,
}: ImageValidatorProps) {
  const [isValid, setIsValid] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const { validateImage } = useMandatoryImageValidation();

  useEffect(() => {
    if (imageUrl) {
      const validation = validateImage(imageUrl, professionalName);
      setIsValid(validation.isValid);
      setErrors(validation.errors || []);
    }
  }, [imageUrl, professionalName, validateImage]);

  const handleImageUrlChange = (newUrl: string) => {
    onImageChange(newUrl);
  };

  const useVerifiedImage = () => {
    const verifiedImage = getVerifiedImage(professionalName);
    if (verifiedImage) {
      handleImageUrlChange(verifiedImage);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const validation = validateProfessionalImage(imageUrl);
  const verifiedImage = getVerifiedImage(professionalName);
  const recommendations = getRecommendedImageSources(professionalName);

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <label className="text-sm font-medium flex items-center gap-2">
          <ImageIcon className="w-4 h-4" />
          Professional Image
          {required && <span className="text-red-500">*</span>}
          <Badge
            variant={isValid ? "default" : "destructive"}
            className="text-xs"
          >
            {isValid ? "✓ Verified" : "⚠ Required"}
          </Badge>
        </label>

        <Input
          type="url"
          placeholder="https://example.com/professional-image.jpg"
          value={imageUrl}
          onChange={(e) => handleImageUrlChange(e.target.value)}
          className={`${
            !isValid && imageUrl ? "border-red-500" : ""
          } ${isValid ? "border-green-500" : ""}`}
        />

        {/* Image Preview */}
        {showPreview && imageUrl && (
          <div className="flex items-center gap-4">
            <div className="relative">
              <img
                src={imageUrl}
                alt={professionalName}
                className="w-16 h-16 rounded-lg object-cover border-2"
                onError={() => setIsValid(false)}
              />
              {isValid && (
                <CheckCircle className="absolute -top-1 -right-1 w-5 h-5 text-green-500 bg-white rounded-full" />
              )}
              {!isValid && imageUrl && (
                <XCircle className="absolute -top-1 -right-1 w-5 h-5 text-red-500 bg-white rounded-full" />
              )}
            </div>

            <div className="flex-1">
              <div className="text-sm font-medium">{professionalName}</div>
              <div className="text-xs text-gray-600">
                {validation.quality === "high" && "High quality image ✓"}
                {validation.quality === "medium" && "Medium quality image"}
                {validation.quality === "low" && "Low quality image"}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Validation Messages */}
      {errors.length > 0 && (
        <Alert variant="destructive">
          <AlertTriangle className="h-4 w-4" />
          <AlertDescription>
            <div className="space-y-1">
              <div className="font-medium">Image validation failed:</div>
              <ul className="list-disc list-inside space-y-1">
                {errors.map((error, index) => (
                  <li key={index} className="text-sm">
                    {error}
                  </li>
                ))}
              </ul>
            </div>
          </AlertDescription>
        </Alert>
      )}

      {validation.isPlaceholder && (
        <Alert variant="destructive">
          <XCircle className="h-4 w-4" />
          <AlertDescription>
            <div className="space-y-2">
              <div className="font-medium">
                Placeholder images are not allowed!
              </div>
              <div className="text-sm">
                Professional profiles must use actual images of the person from
                verified sources like social media or official websites.
              </div>
            </div>
          </AlertDescription>
        </Alert>
      )}

      {/* Success Message */}
      {isValid && imageUrl && (
        <Alert className="border-green-500 bg-green-50">
          <CheckCircle className="h-4 w-4 text-green-600" />
          <AlertDescription className="text-green-700">
            ✓ Professional image verified from{" "}
            {validation.quality === "high" ? "trusted source" : "valid source"}
          </AlertDescription>
        </Alert>
      )}

      {/* Action Buttons */}
      <div className="flex gap-2">
        {verifiedImage && (
          <Button
            variant="outline"
            size="sm"
            onClick={useVerifiedImage}
            className="text-green-600 border-green-600 hover:bg-green-50"
          >
            <CheckCircle className="w-4 h-4 mr-2" />
            Use Verified Image
          </Button>
        )}

        <Dialog open={showSuggestions} onOpenChange={setShowSuggestions}>
          <DialogTrigger asChild>
            <Button variant="outline" size="sm">
              <ExternalLink className="w-4 h-4 mr-2" />
              Get Image Sources
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Image Sources for {professionalName}</DialogTitle>
              <DialogDescription>
                Find verified professional images from these trusted sources:
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-4">
              {verifiedImage && (
                <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                  <div className="flex items-center gap-3">
                    <img
                      src={verifiedImage}
                      alt={professionalName}
                      className="w-12 h-12 rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <div className="font-medium text-green-800">
                        ✓ Verified Image Available
                      </div>
                      <div className="text-sm text-green-600">
                        From:{" "}
                        {
                          VERIFIED_PROFESSIONAL_IMAGES[
                            professionalName.toLowerCase().replace(/\s+/g, "-")
                          ]?.source
                        }
                      </div>
                    </div>
                    <Button
                      size="sm"
                      onClick={useVerifiedImage}
                      className="bg-green-600 hover:bg-green-700"
                    >
                      Use This
                    </Button>
                  </div>
                </div>
              )}

              <div>
                <h4 className="font-medium mb-3">Recommended Sources:</h4>
                <div className="space-y-2">
                  {recommendations.map((source, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-2 bg-gray-50 rounded"
                    >
                      <span className="text-sm">{source}</span>
                      {source.startsWith("https://") && (
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => copyToClipboard(source)}
                        >
                          <Copy className="w-3 h-3" />
                        </Button>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <Alert>
                <AlertTriangle className="h-4 w-4" />
                <AlertDescription>
                  <strong>Image Requirements:</strong>
                  <ul className="list-disc list-inside mt-2 text-sm space-y-1">
                    <li>Must be actual photo of {professionalName}</li>
                    <li>Minimum 300x300 pixels</li>
                    <li>From verified social media or official website</li>
                    <li>Professional headshot or recent photo</li>
                    <li>HTTPS URL for security</li>
                  </ul>
                </AlertDescription>
              </Alert>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}

// Validation status badge component
export function ImageValidationBadge({
  imageUrl,
  professionalName,
}: {
  imageUrl: string;
  professionalName: string;
}) {
  const validation = validateProfessionalImage(imageUrl);
  const requirements = validateImageRequirements(imageUrl);

  if (validation.isPlaceholder) {
    return (
      <Badge variant="destructive" className="text-xs">
        <XCircle className="w-3 h-3 mr-1" />
        Placeholder
      </Badge>
    );
  }

  if (!requirements.isValid) {
    return (
      <Badge variant="destructive" className="text-xs">
        <AlertTriangle className="w-3 h-3 mr-1" />
        Invalid
      </Badge>
    );
  }

  if (validation.isActualImage) {
    return (
      <Badge variant="default" className="text-xs bg-green-600">
        <CheckCircle className="w-3 h-3 mr-1" />
        Verified
      </Badge>
    );
  }

  return (
    <Badge variant="outline" className="text-xs">
      <AlertTriangle className="w-3 h-3 mr-1" />
      Unverified
    </Badge>
  );
}

// Professional image requirement notice
export function ImageRequirementNotice() {
  return (
    <Alert className="border-blue-200 bg-blue-50">
      <ImageIcon className="h-4 w-4 text-blue-600" />
      <AlertDescription className="text-blue-800">
        <strong>Professional Image Policy:</strong> All professional profiles
        must use actual images of the individual. Placeholder images, generic
        avatars, or stock photos are not permitted. Images must be sourced from
        verified social media profiles, official websites, or professional
        headshots.
      </AlertDescription>
    </Alert>
  );
}
