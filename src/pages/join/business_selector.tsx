import axios from "axios";
import { Business } from "@/lib";
import { Search } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import useEmployeeHook from "@/hooks/employee-hook";
import useBusinessHook from "@/hooks/business-hook";
import BusinessCard from "@/components/business-card";
import React, { useState, useMemo, useEffect, useCallback } from "react";

const BusinessSelector: React.FC = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [productFilter, setProductFilter] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [businessData, setBusinessData] = useState<Business[]>([]);
  const [selectedBusiness, setSelectedBusiness] = useState<Business | null>(null);

  const { getAll } = useBusinessHook();
  const { create } = useEmployeeHook();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAll();

        const enhancedData = await Promise.all(
          data.map(async (item) => {
            try {
              const response = await axios.get(`http://localhost:3000${item.imagePath}`, {
                responseType: "blob",
                withCredentials: true,
              });
              const url = URL.createObjectURL(response.data);
              return { ...item, imagePath: url };
            } catch (err) {
              // console.error(`Image fetch failed for ${item.name}`, err);
              return { ...item, imagePath: "https://tse1.mm.bing.net/th/id/OIP.fLz_nyWcsH8YBnUzKD8eCAHaFl?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" };
            }
          })
        );

        setBusinessData(enhancedData);
      } catch (error) {
        console.error("Failed to fetch businesses", error);
      }
    };

    fetchData();
  }, []);

  const uniqueLocations = useMemo(() => {
    return Array.from(new Set(businessData.map((b) => b.location)));
  }, [businessData]);

  const uniqueProducts = useMemo(() => {
    return Array.from(new Set(businessData.flatMap((b) => b.products)));
  }, [businessData]);

  const filteredBusinesses = useMemo(() => {
    return businessData.filter((business) => {
      const matchesSearch =
        business.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        business.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        business.user.username.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesLocation = !locationFilter || business.location === locationFilter;
      const matchesProduct = !productFilter || business.products.includes(productFilter);

      return matchesSearch && matchesLocation && matchesProduct;
    });
  }, [searchTerm, locationFilter, productFilter, businessData]);

  const handleBusinessSelect = useCallback((business: Business) => {
    setSelectedBusiness((prev) => (prev?.id === business.id ? null : business));
  }, []);

  const clearFilters = useCallback(() => {
    setSearchTerm("");
    setLocationFilter("");
    setProductFilter("");
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Select Your Business</h1>
          <p className="text-gray-600">Choose from our available businesses below</p>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search businesses..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <select
              title="filter by location"
              value={locationFilter}
              onChange={(e) => setLocationFilter(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">All Locations</option>
              {uniqueLocations.map((location) => (
                <option key={location} value={location}>
                  {location}
                </option>
              ))}
            </select>

            <select
              title="filter by product"
              value={productFilter}
              onChange={(e) => setProductFilter(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">All Products</option>
              {uniqueProducts.map((product) => (
                <option key={product} value={product}>
                  {product}
                </option>
              ))}
            </select>

            <button
              onClick={clearFilters}
              className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        </div>

        <div className="mb-6 text-gray-600">
          Showing {filteredBusinesses.length} of {businessData.length} businesses
          {selectedBusiness && (
            <span className="ml-4 text-blue-600 font-medium">
              Selected: {selectedBusiness.name}
            </span>
          )}
        </div>

        {filteredBusinesses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredBusinesses.map((business) => (
              <BusinessCard
                key={business.id}
                business={business}
                isSelected={selectedBusiness?.id === business.id}
                onSelect={handleBusinessSelect}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No businesses found</h3>
            <p className="text-gray-600">Try adjusting your search criteria</p>
          </div>
        )}

        {selectedBusiness && (
          <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-blue-900 mb-2">Selected Business</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div><strong>Name:</strong> {selectedBusiness.name}</div>
              <div><strong>Owner:</strong> {selectedBusiness.user.username}</div>
              <div><strong>Location:</strong> {selectedBusiness.location}</div>
              <div><strong>Hours per day:</strong> {selectedBusiness.hoursPerDay}</div>
              <div className="md:col-span-2">
                <strong>Products:</strong> {selectedBusiness.products.join(", ")}
              </div>
              <div className="md:col-span-2">
                <strong>Description:</strong> {selectedBusiness.description}
              </div>
            </div>
            <Button className="mt-4 w-[120px]" onClick={() => { create({
                businessId: selectedBusiness.id
            }); navigate("/dashboard") }}>Confirm</Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BusinessSelector;
