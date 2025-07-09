import { Business } from "@/lib";
import { MapPin, Clock, UserIcon, Globe, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

const BusinessCard: React.FC<{
  business: Business
  isSelected: boolean
  onSelect: (business: Business) => void
}> = ({ business, isSelected, onSelect }) => {
  const getSocialIcon = (platform: string) => {
    switch (platform) {
      case "website":
        return <Globe className="w-4 h-4" />
      case "facebook":
        return <Facebook className="w-4 h-4" />
      case "instagram":
        return <Instagram className="w-4 h-4" />
      case "twitter":
        return <Twitter className="w-4 h-4" />
      case "linkedin":
        return <Linkedin className="w-4 h-4" />
      default:
        return null
    }
  }

  return (
    <div
      className={`bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer border-2 ${
        isSelected ? "border-blue-500 ring-2 ring-blue-200" : "border-gray-200 hover:border-gray-300"
      }`}
      onClick={() => onSelect(business)}
    >
      <div className="relative">
        <img
          src={business.imagePath || "/placeholder.svg?height=200&width=400"}
          alt={business.name}
          className="w-full h-48 object-cover rounded-t-lg"
          onError={(e) => {
            ;(e.target as HTMLImageElement).src = "/placeholder.svg?height=200&width=400"
          }}
        />
        {isSelected && (
          <div className="absolute top-2 right-2 bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center">
            ✓
          </div>
        )}
      </div>

      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold text-gray-900">{business.name}</h3>
          <div className="flex items-center text-gray-500 text-sm">
            <Clock className="w-4 h-4 mr-1" />
            {business.hoursPerDay}h/day
          </div>
        </div>

        <div className="flex items-center text-gray-600 mb-3">
          <MapPin className="w-4 h-4 mr-2" />
          <span className="text-sm">{business.location}</span>
        </div>

        <p className="text-gray-700 text-sm mb-4 line-clamp-3">{business.description}</p>

        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-900 mb-2">Products & Services:</h4>
          <div className="flex flex-wrap gap-2">
            {business.products.map((product, index) => (
              <span key={index} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                {product}
              </span>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center text-gray-600">
            <UserIcon className="w-4 h-4 mr-2" />
            <span className="text-sm">{business.user.name}</span>
          </div>

          <div className="flex space-x-2">
            {Object.entries(business.socialMedia).map(([platform, url]) => {
              if (!url) return null
              return (
                <a
                  key={platform}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  {getSocialIcon(platform)}
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default BusinessCard;
