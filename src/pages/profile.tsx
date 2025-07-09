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
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog"
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
  Plus,
  Crown,
  Building,
  User,
  Star,
} from "lucide-react";
import { Business, Plan } from "@/lib"
import useBusinessHook from "@/hooks/business-hook"
import usePlanHook from "@/hooks/plan-hook"
import { defaultBusiness, defaultPlan } from "@/lib/utils"
import axios from "axios"

export default function ProfilePage() {
    const { getAll: getAllPlans, update: updatePlan } = usePlanHook();
    const { getAll: getAlllBusinesses, update: updateBusiness } = useBusinessHook();

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
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [plan, setPlan] = useState("");
    const [showPayment, setShowPayment] = useState(false);
    const [paymentProcessing, setPaymentProcessing] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            const plans = await getAllPlans();
            const businesses = await getAlllBusinesses();

            setPlanData(plans[0]);
            setBusinessData(businesses[0]);
            setPlan(plans[0].plan);

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
        setIsLoading(true);
        await updateBusiness(businessData.id, businessData);
        setEditMode((prev) => ({ ...prev, [section]: false }));
        setIsLoading(false);
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

    const handlePlanSelect = (plan: string) => {
        setShowPayment(plan !== "free");
        setPlan("free");
    }

    const handlePaymentChange = (field: string, value: string) => {
        console.log(field, value);
    }

    const processPayment = async () => {
        setPaymentProcessing(true);
        setPlanData((prev) => ({ ...prev, plan }));
        setPaymentProcessing(false);
        setIsModalOpen(false);
        setShowPayment(false);
        await updatePlan(planData.id, {
            plan
        });
    }

    return (
        <div className="min-h-screen bg-gradient-to-br p-4">
            <div className="max-w-6xl mx-auto space-y-6">
                {/* Header Section */}
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">Business Profile</h1>
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
                                <Button variant="outline" size="sm" onClick={() => setIsModalOpen(true)}>
                                    Upgrade Plan
                                </Button>
                            </div>
                            <p className="text-sm text-gray-500 mt-2">
                                Plan activated on {new Date(planData.createdAt).toLocaleDateString()}
                            </p>
                        </CardContent>
                    </Card>
                </div>

                {/* Plan Selection Modal */}
                <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
                    <DialogContent className="sm:max-w-[600px] max-h-[600px] overflow-y-auto">
                        <DialogHeader>
                            <DialogTitle>Choose Your Business Plan</DialogTitle>
                            <DialogDescription>Select the plan that best fits your business needs</DialogDescription>
                        </DialogHeader>
                        <div className="space-y-6">
                            <div className="grid md:grid-cols-3 gap-4">
                                {/* Free Plan */}
                                <div
                                    className={`border-2 rounded-lg p-6 cursor-pointer transition-all ${
                                        plan === "free"
                                            ? "border-green-500 bg-green-500"
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
                                        plan === "premium"
                                            ? "border-green-500 bg-green-500"
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
                                        plan === "company"
                                            ? "border-green-500 bg-green-500"
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
                                <div className="mt-8 p-6 bg-gray-50 dark:bg-gray-900 rounded-lg">
                                    <h4 className="text-lg font-semibold mb-4">Payment Information</h4>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="cardholderName">Cardholder Name</Label>
                                            <Input
                                                id="cardholderName"
                                                onChange={(e) => handlePaymentChange("cardholderName", e.target.value)}
                                                placeholder="John Doe"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="cardNumber">Card Number</Label>
                                            <Input
                                                id="cardNumber"
                                                onChange={(e) => handlePaymentChange("cardNumber", e.target.value)}
                                                placeholder="1234 5678 9012 3456"
                                                maxLength={19}
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="expiryDate">Expiry Date</Label>
                                            <Input
                                                id="expiryDate"
                                                onChange={(e) => handlePaymentChange("expiryDate", e.target.value)}
                                                placeholder="MM/YY"
                                                maxLength={5}
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="cvv">CVV</Label>
                                            <Input
                                                id="cvv"
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
                                </div>
                            )}
                        </div>
                        <DialogFooter>
                            <Button
                                variant="outline"
                                onClick={() => setIsModalOpen(false)}
                            >
                                Cancel
                            </Button>
                            {plan !== "free" ? (
                                <Button
                                    type="button"
                                    onClick={processPayment}
                                    disabled={paymentProcessing}
                                    variant="default"
                                >
                                    {paymentProcessing
                                        ? "Processing Payment..."
                                        : `Process Payment (${plan === "premium" ? "2900" : "9900"} francs)`}
                                </Button>
                            ) : (
                                <Button
                                    type="button"
                                    onClick={processPayment}
                                    disabled={paymentProcessing}
                                    variant="default"
                                >
                                    {paymentProcessing ? "Processing..." : "Select Free Plan"}
                                </Button>
                            )}
                        </DialogFooter>
                    </DialogContent>
                </Dialog>

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
                        <div className="grid md:grid-cols-2 gap-6 w-full">
                            <div className="space-y-4">
                                {editMode.basic ? (
                                    <>
                                        <div className="space-y-2 dark:text-gray-200">
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
                                            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-200">{businessData.name}</h3>
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
                                    className="min-h-[100px] dark:text-gray-200 dark:bg-gray-800"
                                />
                            ) : (
                                <p className="text-gray-700 bg-gray-50 dark:text-gray-200 dark:bg-gray-800 p-4 rounded-lg">{businessData.description}</p>
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
                                        <button title="button" type="button" onClick={() => removeProduct(product)} className="ml-2 hover:text-red-500">
                                            <X className="h-3 w-3" />
                                        </button>
                                    )}
                                </Badge>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                {/* Social Media & Contact */}
                <div>
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
                                    <div key={platform.key} className="space-y-2 ">
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
                                            <p className="text-sm text-gray-600 bg-gray-50 p-2 rounded dark:text-gray-200 dark:bg-gray-800">{value || "Not provided"}</p>
                                        )}
                                    </div>
                                )
                            })}
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}
