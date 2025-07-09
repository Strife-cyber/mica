"use client"

import type React from "react";
import { Lock, AlertTriangle, Clock, UserX } from "lucide-react";

// Variant 1: Minimal Access Denied
export const MinimalAccessDenied: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="text-center">
        <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Lock className="w-8 h-8 text-red-600" />
        </div>
        <h1 className="text-xl font-semibold text-gray-900 mb-2">Access Denied</h1>
        <p className="text-gray-600 mb-4">You don't have permission to view this page.</p>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
          Contact Support
        </button>
      </div>
    </div>
  )
}

// Variant 2: Pending Approval
export const PendingApproval: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-orange-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full text-center">
        <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <Clock className="w-10 h-10 text-yellow-600" />
        </div>
        <h1 className="text-2xl font-bold text-gray-900 mb-3">Account Pending</h1>
        <p className="text-gray-600 mb-6">
          Your account is currently under review. You'll receive an email notification once approved.
        </p>
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
          <p className="text-sm text-yellow-800">
            <strong>Estimated approval time:</strong> 1-2 business days
          </p>
        </div>
        <button className="w-full bg-yellow-600 hover:bg-yellow-700 text-white font-medium py-3 px-4 rounded-lg transition-colors">
          Check Status
        </button>
      </div>
    </div>
  )
}

// Variant 3: Account Suspended
export const AccountSuspended: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-pink-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full text-center">
        <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <UserX className="w-10 h-10 text-red-600" />
        </div>
        <h1 className="text-2xl font-bold text-gray-900 mb-3">Account Suspended</h1>
        <p className="text-gray-600 mb-6">
          Your account has been temporarily suspended. Please contact support for more information.
        </p>
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
          <div className="flex items-center text-sm text-red-800">
            <AlertTriangle className="w-4 h-4 mr-2" />
            <span>Violation of terms of service</span>
          </div>
        </div>
        <button className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-4 rounded-lg transition-colors">
          Appeal Suspension
        </button>
      </div>
    </div>
  )
}
