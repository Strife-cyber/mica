import React, { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import {
  Upload,
  X,
  MapPin,
  Clock,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Globe,
  Phone,
  Mail,
  Plus,
} from "lucide-react";
import useBusinessHook from "@/hooks/business-hook";
import usePlanHook from "@/hooks/plan-hook";
import { useNavigate } from "react-router-dom";

export default function BusinessProfileSetup() {
  const navigate = useNavigate();
  const { create: createPlan } = usePlanHook();
  const { createBusiness } = useBusinessHook();

  const [formData, setFormData] = useState({
    businessName: "",
    products: [] as string[],
    location: "",
    description: "",
    businessImage: null as File | null,
    socialMedia: {
      website: "",
      facebook: "",
      instagram: "",
      twitter: "",
      linkedin: "",
    },
    hoursPerDay: "8",
    contactInfo: {
      phone: "",
      email: "",
    },
    selectedPlan: "free" as "free" | "premium" | "company",
    paymentInfo: {
      cardNumber: "",
      expiryDate: "",
      cvv: "",
      cardholderName: "",
    },
  });

  const [currentProduct, setCurrentProduct] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPayment, setShowPayment] = useState(false);
  const [paymentProcessing, setPaymentProcessing] = useState(false);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSocialMediaChange = (platform: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      socialMedia: {
        ...prev.socialMedia,
        [platform]: value,
      },
    }));
  };

  const handleContactChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      contactInfo: {
        ...prev.contactInfo,
        [field]: value,
      },
    }));
  };

  const handlePaymentChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      paymentInfo: {
        ...prev.paymentInfo,
        [field]: value,
      },
    }));
  };

  const handlePlanSelect = (plan: "free" | "premium" | "company") => {
    setFormData((prev) => ({ ...prev, selectedPlan: plan }));
    setShowPayment(plan !== "free");
  };

  const processPayment = async () => {
    setPaymentProcessing(true);
    await new Promise((resolve) => setTimeout(resolve, 3000));
    setPaymentProcessing(false);
    alert("Payment processed successfully! (This is a simulation)");
  };

  const addProduct = () => {
    if (currentProduct.trim() && !formData.products.includes(currentProduct.trim())) {
      setFormData((prev) => ({
        ...prev,
        products: [...prev.products, currentProduct.trim()],
      }));
      setCurrentProduct("");
    }
  };

  const removeProduct = (product: string) => {
    setFormData((prev) => ({
      ...prev,
      products: prev.products.filter((p) => p !== product),
    }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Validate file type
      if (!["image/jpeg", "image/png"].includes(file.type)) {
        alert("Please upload a JPEG or PNG image.");
        return;
      }
      // Validate file size (5MB limit, matching backend)
      if (file.size > 5 * 1024 * 1024) {
        alert("Image size must be less than 5MB.");
        return;
      }
      setFormData((prev) => ({ ...prev, businessImage: file }));
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const clearImage = () => {
    setFormData((prev) => ({ ...prev, businessImage: null }));
    setImagePreview(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Create FormData for business
      const businessFormData = new FormData();
      businessFormData.append("name", formData.businessName);
      businessFormData.append("products", JSON.stringify(formData.products));
      businessFormData.append("location", formData.location);
      businessFormData.append("description", formData.description);
      businessFormData.append("socialMedia", JSON.stringify(formData.socialMedia));
      businessFormData.append("hoursPerDay", formData.hoursPerDay);
      if (formData.businessImage) {
        businessFormData.append("image", formData.businessImage);
      }

      // Submit business data
      await createBusiness(businessFormData);

      // Map 'company' to 'enterprise' for plan
      const planType = formData.selectedPlan === "company" ? "enterprise" : formData.selectedPlan;
      await createPlan({ plan: planType });
      navigate('/dashboard');
    } catch (error) {
      console.error("Error submitting profile:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialPlatforms = [
    { key: "website", label: "Website", icon: Globe, placeholder: "https://yourbusiness.com" },
    { key: "facebook", label: "Facebook", icon: Facebook, placeholder: "https://facebook.com/yourbusiness" },
    { key: "instagram", label: "Instagram", icon: Instagram, placeholder: "https://instagram.com/yourbusiness" },
    { key: "twitter", label: "Twitter", icon: Twitter, placeholder: "https://twitter.com/yourbusiness" },
    { key: "linkedin", label: "LinkedIn", icon: Linkedin, placeholder: "https://linkedin.com/company/yourbusiness" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Complete Your Business Profile</h1>
          <p className="text-lg text-gray-600">Help customers discover and connect with your business</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Profile Pictures Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Upload className="h-5 w-5" />
                Business Image
              </CardTitle>
              <CardDescription>Upload your business photo</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <Label>Business Photo</Label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  {imagePreview ? (
                    <div className="relative mx-auto h-32 w-48">
                      <img
                        src={imagePreview}
                        alt="Business Preview"
                        className="h-32 w-48 object-cover rounded-lg"
                      />
                      <button
                        type="button"
                        title="button"
                        onClick={clearImage}
                        className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  ) : (
                    <div className="h-32 w-48 mx-auto bg-gray-100 rounded-lg flex items-center justify-center">
                      <Upload className="h-8 w-8 text-gray-400" />
                    </div>
                  )}
                </div>
                <div className="flex gap-2">
                  <Input
                    type="file"
                    accept="image/jpeg,image/png"
                    onChange={handleImageChange}
                    ref={fileInputRef}
                    className="hidden"
                    id="businessImageInput"
                  />
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => fileInputRef.current?.click()}
                    className="w-full"
                  >
                    <Upload className="h-4 w-4 mr-2" />
                    {imagePreview ? "Change Business Photo" : "Upload Business Photo"}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Basic Information */}
          <Card>
            <CardHeader>
              <CardTitle>Business Information</CardTitle>
              <CardDescription>Tell us about your business</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="businessName">Business Name *</Label>
                <Input
                  id="businessName"
                  value={formData.businessName}
                  onChange={(e) => handleInputChange("businessName", e.target.value)}
                  placeholder="Enter your business name"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="location">
                  <MapPin className="h-4 w-4 inline mr-1" />
                  Business Location *
                </Label>
                <Input
                  id="location"
                  value={formData.location}
                  onChange={(e) => handleInputChange("location", e.target.value)}
                  placeholder="City, State, Country"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Business Description *</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => handleInputChange("description", e.target.value)}
                  placeholder="Describe your business, what makes it unique, and what customers can expect..."
                  className="min-h-[120px]"
                  required
                />
              </div>
            </CardContent>
          </Card>

          {/* Products Section */}
          <Card>
            <CardHeader>
              <CardTitle>Products & Services</CardTitle>
              <CardDescription>What do you sell or offer?</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-2">
                <Input
                  value={currentProduct}
                  onChange={(e) => setCurrentProduct(e.target.value)}
                  placeholder="Enter a product or service"
                  onKeyPress={(e) => e.key === "Enter" && (e.preventDefault(), addProduct())}
                />
                <Button type="button" onClick={addProduct} variant="outline">
                  <Plus className="h-4 w-4" />
                </Button>
              </div>

              {formData.products.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {formData.products.map((product, index) => (
                    <Badge key={index} variant="secondary" className="text-sm">
                      {product}
                      <button title="button" type="button" onClick={() => removeProduct(product)} className="ml-2 hover:text-red-500">
                        <X className="h-3 w-3" />
                      </button>
                    </Badge>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
              <CardDescription>How can customers reach you?</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="phone">
                    <Phone className="h-4 w-4 inline mr-1" />
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    value={formData.contactInfo.phone}
                    onChange={(e) => handleContactChange("phone", e.target.value)}
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">
                    <Mail className="h-4 w-4 inline mr-1" />
                    Business Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.contactInfo.email}
                    onChange={(e) => handleContactChange("email", e.target.value)}
                    placeholder="business@example.com"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Operating Hours */}
          <Card>
            <CardHeader>
              <CardTitle>
                <Clock className="h-5 w-5 inline mr-2" />
                Operating Hours
              </CardTitle>
              <CardDescription>How many hours per day do you operate?</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Label htmlFor="hoursPerDay">Hours per Day</Label>
                <Select value={formData.hoursPerDay} onValueChange={(value) => handleInputChange("hoursPerDay", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select hours per day" />
                  </SelectTrigger>
                  <SelectContent>
                    {Array.from({ length: 24 }, (_, i) => i + 1).map((hour) => (
                      <SelectItem key={hour} value={hour.toString()}>
                        {hour} {hour === 1 ? "hour" : "hours"} per day
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Social Media Links */}
          <Card>
            <CardHeader>
              <CardTitle>Social Media & Online Presence</CardTitle>
              <CardDescription>Connect your social media accounts</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {socialPlatforms.map((platform) => {
                const Icon = platform.icon;
                return (
                  <div key={platform.key} className="space-y-2">
                    <Label htmlFor={platform.key}>
                      <Icon className="h-4 w-4 inline mr-2" />
                      {platform.label}
                    </Label>
                    <Input
                      id={platform.key}
                      value={formData.socialMedia[platform.key as keyof typeof formData.socialMedia]}
                      onChange={(e) => handleSocialMediaChange(platform.key, e.target.value)}
                      placeholder={platform.placeholder}
                    />
                  </div>
                );
              })}
            </CardContent>
          </Card>

          {/* Business Plan Selection */}
          <Card>
            <CardHeader>
              <CardTitle>Choose Your Business Plan</CardTitle>
              <CardDescription>Select the plan that best fits your business needs</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                {/* Free Plan */}
                <div
                  className={`border-2 rounded-lg p-6 cursor-pointer transition-all ${
                    formData.selectedPlan === "free"
                      ? "border-blue-500 bg-blue-50"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                  onClick={() => handlePlanSelect("free")}
                >
                  <div className="text-center">
                    <h3 className="text-xl font-bold mb-2">Free</h3>
                    <div className="text-3xl font-bold text-green-600 mb-4">0 francs</div>
                    <ul className="text-sm space-y-2 text-left">
                      <li>✓ Basic profile setup</li>
                      <li>✓ Up to 5 products</li>
                      <li>✓ Basic analytics</li>
                      <li>✓ 30 days access</li>
                    </ul>
                  </div>
                </div>

                {/* Premium Plan */}
                <div
                  className={`border-2 rounded-lg p-6 cursor-pointer transition-all relative ${
                    formData.selectedPlan === "premium"
                      ? "border-blue-500 bg-blue-50"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                  onClick={() => handlePlanSelect("premium")}
                >
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-orange-500">Popular</Badge>
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-bold mb-2">Premium</h3>
                    <div className="text-3xl font-bold text-blue-600 mb-4">2900 francs</div>
                    <ul className="text-sm space-y-2 text-left">
                      <li>✓ Everything in Free</li>
                      <li>✓ Unlimited products</li>
                      <li>✓ Advanced analytics</li>
                      <li>✓ Priority support</li>
                      <li>✓ 365 days access</li>
                    </ul>
                  </div>
                </div>

                {/* Company Plan */}
                <div
                  className={`border-2 rounded-lg p-6 cursor-pointer transition-all ${
                    formData.selectedPlan === "company"
                      ? "border-blue-500 bg-blue-50"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                  onClick={() => handlePlanSelect("company")}
                >
                  <div className="text-center">
                    <h3 className="text-xl font-bold mb-2">Company</h3>
                    <div className="text-3xl font-bold text-purple-600 mb-4">9900 francs</div>
                    <ul className="text-sm space-y-2 text-left">
                      <li>✓ Everything in Premium</li>
                      <li>✓ Multi-location support</li>
                      <li>✓ Team management</li>
                      <li>✓ Custom integrations</li>
                      <li>✓ Unlimited access</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Payment Section */}
              {showPayment && (
                <div className="mt-8 p-6 bg-gray-50 rounded-lg">
                  <h4 className="text-lg font-semibold mb-4">Payment Information</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="cardholderName">Cardholder Name</Label>
                      <Input
                        id="cardholderName"
                        value={formData.paymentInfo.cardholderName}
                        onChange={(e) => handlePaymentChange("cardholderName", e.target.value)}
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="cardNumber">Card Number</Label>
                      <Input
                        id="cardNumber"
                        value={formData.paymentInfo.cardNumber}
                        onChange={(e) => handlePaymentChange("cardNumber", e.target.value)}
                        placeholder="1234 5678 9012 3456"
                        maxLength={19}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="expiryDate">Expiry Date</Label>
                      <Input
                        id="expiryDate"
                        value={formData.paymentInfo.expiryDate}
                        onChange={(e) => handlePaymentChange("expiryDate", e.target.value)}
                        placeholder="MM/YY"
                        maxLength={5}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="cvv">CVV</Label>
                      <Input
                        id="cvv"
                        value={formData.paymentInfo.cvv}
                        onChange={(e) => handlePaymentChange("cvv", e.target.value)}
                        placeholder="123"
                        maxLength={4}
                      />
                    </div>
                  </div>

                  <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <p className="text-sm text-yellow-800">
                      <strong>Note:</strong> This is a simulated payment process. No real charges will be made.
                    </p>
                  </div>

                  {formData.selectedPlan !== "free" && (
                    <Button
                      type="button"
                      onClick={processPayment}
                      disabled={paymentProcessing}
                      className="w-full mt-4"
                      variant="outline"
                    >
                      {paymentProcessing
                        ? "Processing Payment..."
                        : `Process Payment (${formData.selectedPlan === "premium" ? "2900" : "9900"}) francs`}
                    </Button>
                  )}
                </div>
              )}
            </CardContent>
          </Card>

          {/* Submit Button */}
          <Card>
            <CardContent className="pt-6">
              <Button
                type="submit"
                className="w-full h-12 text-lg"
                disabled={
                  isSubmitting ||
                  !formData.businessName ||
                  !formData.location ||
                  !formData.description ||
                  formData.products.length === 0 ||
                  !formData.businessImage ||
                  (showPayment &&
                    (!formData.paymentInfo.cardholderName ||
                      !formData.paymentInfo.cardNumber ||
                      !formData.paymentInfo.expiryDate ||
                      !formData.paymentInfo.cvv))
                }
              >
                {isSubmitting
                  ? "Creating Profile..."
                  : `Complete Profile & Start ${formData.selectedPlan.charAt(0).toUpperCase() + formData.selectedPlan.slice(1)} Plan`}
              </Button>
              <p className="text-sm text-gray-500 text-center mt-4">* Required fields must be completed</p>
            </CardContent>
          </Card>
        </form>
      </div>
    </div>
  );
}
