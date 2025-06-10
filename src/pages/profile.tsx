"use client"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Edit3,
  Save,
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
  Crown,
  Building,
  User,
  Calendar,
  Star,
} from "lucide-react";
import { Business, Plan } from "@/lib"
import useBusinessHook from "@/hooks/business-hook"
import usePlanHook from "@/hooks/plan-hook"
import { defaultBusiness, defaultPlan } from "@/lib/utils"
import axios from "axios"

export default function ProfilePage() {
    const { getAll: getAllPlans } = usePlanHook();
    const { getAll: getAlllBusinesses } = useBusinessHook();

    const [businessData, setBusinessData] = useState<Business>(defaultBusiness)
    const [planData, setPlanData] = useState<Plan>(defaultPlan)
    const [imageUrl, setImageUrl] = useState<string | null>(null);
    const [editMode, setEditMode] = useState({
        basic: false,
        products: false,
        social: false,
        contact: false,
    })
    const [currentProduct, setCurrentProduct] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {

            const plans = await getAllPlans();
            const businesses = await getAlllBusinesses();

            setPlanData(plans[0]);
            setBusinessData(businesses[0]);
            
            await axios.get(`http://localhost:3000${businesses[0].imagePath}`, {
                responseType: 'blob',
                withCredentials: true
            }).then((response) => {
                const url = URL.createObjectURL(response.data);
                setImageUrl(url);
            }).catch((error) => {
                console.error("Image fetch failed", error);
            });
        }

        fetchData();
    }, [])

    const handleEdit = (section: keyof typeof editMode) => {
        setEditMode((prev) => ({ ...prev, [section]: !prev[section] }))
    }

    const handleSave = async (section: keyof typeof editMode) => {
        setIsLoading(true)
        // Simulate API call - user will handle backend interaction
        await new Promise((resolve) => setTimeout(resolve, 1000))
        setEditMode((prev) => ({ ...prev, [section]: false }))
        setIsLoading(false)
    }

    const handleInputChange = (field: string, value: any) => {
        setBusinessData((prev) => ({ ...prev, [field]: value }))
    }

    const handleSocialMediaChange = (platform: string, value: string) => {
        setBusinessData((prev) => ({
        ...prev,
        socialMedia: { ...prev.socialMedia, [platform]: value },
        }))
    }

    const addProduct = () => {
        if (currentProduct.trim() && !businessData.products.includes(currentProduct.trim())) {
        setBusinessData((prev) => ({
            ...prev,
            products: [...prev.products, currentProduct.trim()],
        }))
        setCurrentProduct("")
        }
    }

    const removeProduct = (product: string) => {
        setBusinessData((prev) => ({
        ...prev,
        products: prev.products.filter((p) => p !== product),
        }))
    }

    const getPlanColor = (plan: string) => {
        switch (plan) {
        case "free":
            return "bg-gray-100 text-gray-800"
        case "premium":
            return "bg-gradient-to-r from-orange-400 to-orange-600 text-white"
        case "company":
            return "bg-gradient-to-r from-purple-400 to-purple-600 text-white"
        default:
            return "bg-gray-100 text-gray-800"
        }
    }

    const getPlanIcon = (plan: string) => {
        switch (plan) {
        case "premium":
            return <Crown className="h-4 w-4" />
        case "company":
            return <Building className="h-4 w-4" />
        default:
            return <User className="h-4 w-4" />
        }
    }

    return (
        <div className="min-h-screen bg-gradient-to-br p-4">
        <div className="max-w-6xl mx-auto space-y-6">
            {/* Header Section */}
            <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Business Profile</h1>
            <p className="text-lg text-gray-600">Manage your business information and settings</p>
            </div>

            {/* User & Plan Overview */}
            <div className="grid md:grid-cols-2 gap-6">
            <Card>
                <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <User className="h-5 w-5" />
                    Account Information
                </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                <div className="flex items-center gap-4">
                    <Avatar className="h-16 w-16">
                    <AvatarImage src="/placeholder.svg?height=64&width=64&text=CS" />
                    <AvatarFallback className="text-lg font-bold">CS</AvatarFallback>
                    </Avatar>
                    <div>
                    <p className="text-sm text-gray-500">
                        Member since {new Date(businessData.createdAt).toLocaleDateString()}
                    </p>
                    </div>
                </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <Star className="h-5 w-5" />
                    Current Plan
                </CardTitle>
                </CardHeader>
                <CardContent>
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                    <div className={`px-4 py-2 rounded-full flex items-center gap-2 ${getPlanColor(planData.plan)}`}>
                        {getPlanIcon(planData.plan)}
                        <span className="font-semibold capitalize">{planData.plan}</span>
                    </div>
                    </div>
                    <Button variant="outline" size="sm">
                    Upgrade Plan
                    </Button>
                </div>
                <p className="text-sm text-gray-500 mt-2">
                    Plan activated on {new Date(planData.createdAt).toLocaleDateString()}
                </p>
                </CardContent>
            </Card>
            </div>

            {/* Business Information */}
            <Card>
            <CardHeader>
                <div className="flex items-center justify-between">
                <div>
                    <CardTitle className="flex items-center gap-2">
                    <Building className="h-5 w-5" />
                    Business Information
                    </CardTitle>
                    <CardDescription>Your business details and description</CardDescription>
                </div>
                <Button
                    variant="outline"
                    size="sm"
                    onClick={() => (editMode.basic ? handleSave("basic") : handleEdit("basic"))}
                    disabled={isLoading}
                >
                    {editMode.basic ? (
                    <>
                        <Save className="h-4 w-4 mr-2" />
                        {isLoading ? "Saving..." : "Save"}
                    </>
                    ) : (
                    <>
                        <Edit3 className="h-4 w-4 mr-2" />
                        Edit
                    </>
                    )}
                </Button>
                </div>
            </CardHeader>
            <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                    {editMode.basic ? (
                    <>
                        <div className="space-y-2">
                        <Label>Business Name</Label>
                        <Input value={businessData.name} onChange={(e) => handleInputChange("name", e.target.value)} />
                        </div>
                        <div className="space-y-2">
                        <Label>Location</Label>
                        <Input
                            value={businessData.location}
                            onChange={(e) => handleInputChange("location", e.target.value)}
                        />
                        </div>
                        <div className="space-y-2">
                        <Label>Hours per Day</Label>
                        <Select
                            value={businessData.hoursPerDay.toString()}
                            onValueChange={(value) => handleInputChange("hoursPerDay", Number.parseInt(value))}
                        >
                            <SelectTrigger>
                            <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                            {Array.from({ length: 24 }, (_, i) => i + 1).map((hour) => (
                                <SelectItem key={hour} value={hour.toString()}>
                                {hour} {hour === 1 ? "hour" : "hours"}
                                </SelectItem>
                            ))}
                            </SelectContent>
                        </Select>
                        </div>
                    </>
                    ) : (
                    <>
                        <div>
                        <h3 className="text-2xl font-bold text-gray-900">{businessData.name}</h3>
                        <p className="text-gray-600 flex items-center gap-1 mt-1">
                            <MapPin className="h-4 w-4" />
                            {businessData.location}
                        </p>
                        <p className="text-gray-600 flex items-center gap-1 mt-1">
                            <Clock className="h-4 w-4" />
                            {businessData.hoursPerDay} hours per day
                        </p>
                        </div>
                    </>
                    )}
                </div>

                <div className="space-y-4">
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                    <img
                        src={imageUrl!}
                        alt="Business"
                        className="mx-auto h-32 w-48 object-cover rounded-lg"
                    />
                    <Button variant="outline" size="sm" className="mt-2">
                        Change Photo
                    </Button>
                    </div>
                </div>
                </div>

                <div className="space-y-2">
                <Label>Business Description</Label>
                {editMode.basic ? (
                    <Textarea
                    value={businessData.description}
                    onChange={(e) => handleInputChange("description", e.target.value)}
                    className="min-h-[100px]"
                    />
                ) : (
                    <p className="text-gray-700 bg-gray-50 p-4 rounded-lg">{businessData.description}</p>
                )}
                </div>
            </CardContent>
            </Card>

            {/* Products & Services */}
            <Card>
            <CardHeader>
                <div className="flex items-center justify-between">
                <div>
                    <CardTitle>Products & Services</CardTitle>
                    <CardDescription>What your business offers</CardDescription>
                </div>
                <Button
                    variant="outline"
                    size="sm"
                    onClick={() => (editMode.products ? handleSave("products") : handleEdit("products"))}
                    disabled={isLoading}
                >
                    {editMode.products ? (
                    <>
                        <Save className="h-4 w-4 mr-2" />
                        {isLoading ? "Saving..." : "Save"}
                    </>
                    ) : (
                    <>
                        <Edit3 className="h-4 w-4 mr-2" />
                        Edit
                    </>
                    )}
                </Button>
                </div>
            </CardHeader>
            <CardContent className="space-y-4">
                {editMode.products && (
                <div className="flex gap-2">
                    <Input
                    value={currentProduct}
                    onChange={(e) => setCurrentProduct(e.target.value)}
                    placeholder="Add a product or service"
                    onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), addProduct())}
                    />
                    <Button type="button" onClick={addProduct} variant="outline">
                    <Plus className="h-4 w-4" />
                    </Button>
                </div>
                )}

                <div className="flex flex-wrap gap-2">
                {businessData.products.map((product, index) => (
                    <Badge key={index} variant="secondary" className="text-sm px-3 py-1">
                    {product}
                    {editMode.products && (
                        <button type="button" onClick={() => removeProduct(product)} className="ml-2 hover:text-red-500">
                        <X className="h-3 w-3" />
                        </button>
                    )}
                    </Badge>
                ))}
                </div>
            </CardContent>
            </Card>

            {/* Social Media & Contact */}
            <div className="grid md:grid-cols-2 gap-6">
            <Card>
                <CardHeader>
                <div className="flex items-center justify-between">
                    <div>
                    <CardTitle>Social Media</CardTitle>
                    <CardDescription>Your online presence</CardDescription>
                    </div>
                    <Button
                    variant="outline"
                    size="sm"
                    onClick={() => (editMode.social ? handleSave("social") : handleEdit("social"))}
                    disabled={isLoading}
                    >
                    {editMode.social ? (
                        <>
                        <Save className="h-4 w-4 mr-2" />
                        {isLoading ? "Saving..." : "Save"}
                        </>
                    ) : (
                        <>
                        <Edit3 className="h-4 w-4 mr-2" />
                        Edit
                        </>
                    )}
                    </Button>
                </div>
                </CardHeader>
                <CardContent className="space-y-4">
                {[
                    { key: "website", label: "Website", icon: Globe },
                    { key: "facebook", label: "Facebook", icon: Facebook },
                    { key: "instagram", label: "Instagram", icon: Instagram },
                    { key: "twitter", label: "Twitter", icon: Twitter },
                    { key: "linkedin", label: "LinkedIn", icon: Linkedin },
                ].map((platform) => {
                    const Icon = platform.icon
                    const value = businessData.socialMedia[platform.key as keyof typeof businessData.socialMedia]

                    return (
                    <div key={platform.key} className="space-y-2">
                        <Label className="flex items-center gap-2">
                        <Icon className="h-4 w-4" />
                        {platform.label}
                        </Label>
                        {editMode.social ? (
                        <Input
                            value={value}
                            onChange={(e) => handleSocialMediaChange(platform.key, e.target.value)}
                            placeholder={`Your ${platform.label} URL`}
                        />
                        ) : (
                        <p className="text-sm text-gray-600 bg-gray-50 p-2 rounded">{value || "Not provided"}</p>
                        )}
                    </div>
                    )
                })}
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                <div>
                    <CardTitle>Contact Information</CardTitle>
                    <CardDescription>How customers can reach you</CardDescription>
                </div>
                </CardHeader>
                <CardContent className="space-y-4">
                <div className="space-y-4">
                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <Mail className="h-5 w-5 text-gray-500" />
                    <div>
                        <p className="font-medium">Email</p>
                        <p className="text-sm text-gray-600"></p>
                    </div>
                    </div>

                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <Phone className="h-5 w-5 text-gray-500" />
                    <div>
                        <p className="font-medium">Phone</p>
                        <p className="text-sm text-gray-600">Not provided</p>
                    </div>
                    </div>

                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <Calendar className="h-5 w-5 text-gray-500" />
                    <div>
                        <p className="font-medium">Last Updated</p>
                        <p className="text-sm text-gray-600">{new Date(businessData.updatedAt).toLocaleDateString()}</p>
                    </div>
                    </div>
                </div>
                </CardContent>
            </Card>
            </div>

            {/* Action Buttons */}
            <Card>
            <CardContent className="pt-6">
                <div className="flex gap-4 justify-center">
                <Button variant="outline" size="lg">
                    Export Profile
                </Button>
                <Button variant="outline" size="lg">
                    Share Profile
                </Button>
                <Button size="lg">View Public Profile</Button>
                </div>
            </CardContent>
            </Card>
        </div>
        </div>
    )
}
