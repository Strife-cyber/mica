"use client"

import type React from "react";
import { Shield, Lock, Mail, ArrowLeft, HelpCircle, User } from "lucide-react";

interface AccessDeniedProps {
  userEmail?: string
  supportEmail?: string
  onGoBack?: () => void
  onRequestAccess?: () => void
}

const AccessDenied: React.FC<AccessDeniedProps> = ({
  userEmail,
  supportEmail = "support@company.com",
  onGoBack,
  onRequestAccess,
}) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        {/* Main Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
          {/* Icon */}
          <div className="relative mb-6">
            <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto">
              <Shield className="w-10 h-10 text-red-600" />
            </div>
            <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
              <Lock className="w-4 h-4 text-white" />
            </div>
          </div>

          {/* Title */}
          <h1 className="text-2xl font-bold text-gray-900 mb-3">Access Restricted</h1>

          {/* Description */}
          <p className="text-gray-600 mb-6 leading-relaxed">
            You don't have permission to access this application. Your account may be pending approval or you may need
            additional permissions.
          </p>

          {/* User Info */}
          {userEmail && (
            <div className="bg-gray-50 rounded-lg p-4 mb-6">
              <div className="flex items-center justify-center text-sm text-gray-600">
                <User className="w-4 h-4 mr-2" />
                <span>
                  Signed in as: <strong>{userEmail}</strong>
                </span>
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="space-y-3 mb-6">
            {onRequestAccess && (
              <button
                onClick={onRequestAccess}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center"
              >
                <Mail className="w-4 h-4 mr-2" />
                Request Access
              </button>
            )}

            {onGoBack && (
              <button
                onClick={onGoBack}
                className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Go Back
              </button>
            )}
          </div>

          {/* Help Section */}
          <div className="border-t border-gray-200 pt-6">
            <div className="flex items-center justify-center text-sm text-gray-500 mb-3">
              <HelpCircle className="w-4 h-4 mr-2" />
              <span>Need help?</span>
            </div>

            <div className="space-y-2 text-sm text-gray-600">
              <p>Contact your administrator or</p>
              <a
                href={`mailto:${supportEmail}`}
                className="text-blue-600 hover:text-blue-700 font-medium transition-colors"
              >
                {supportEmail}
              </a>
            </div>
          </div>
        </div>

        {/* Additional Info Card */}
        <div className="mt-6 bg-white rounded-xl shadow-sm p-6">
          <h3 className="font-semibold text-gray-900 mb-3">Common Reasons:</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="flex items-start">
              <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Your account is pending administrator approval
            </li>
            <li className="flex items-start">
              <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              You need additional permissions for this application
            </li>
            <li className="flex items-start">
              <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Your access may have been temporarily suspended
            </li>
            <li className="flex items-start">
              <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              You're not part of the required user group
            </li>
          </ul>
        </div>

        {/* Footer */}
        <div className="mt-6 text-center text-xs text-gray-500">
          <p>© 2025 Your Company. All rights reserved.</p>
        </div>
      </div>
    </div>
  )
}

export default AccessDenied
