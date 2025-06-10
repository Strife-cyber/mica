import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { Business, Plan } from '.';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}


export const defaultBusiness: Business = {
  id: 0,
  userId: 0,
  name: "My Business",
  products: ["Sample Product"],
  location: "City, State, Country",
  description: "A sample business offering great products and services.",
  imagePath: '', // Set to actual path after upload, e.g., "/uploads/business-123.jpg"
  socialMedia: {
    website: "",
    facebook: "",
    instagram: "",
    twitter: "",
    linkedIn: "",
  },
  hoursPerDay: 8,
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const defaultPlan: Plan = {
  id: 0,
  userId: 0,
  plan: "free", // Options: "free", "premium", "enterprise"
  createdAt: new Date(),
  updatedAt: new Date(),
};
