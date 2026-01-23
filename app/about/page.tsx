import React from "react";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gray-50">
      <div className="max-w-2xl w-full">
        <div className="bg-white border-l-4 border-primary rounded-lg shadow-md p-6 md:p-8">
          <div className="flex items-start gap-4">
            {/* Icon */}
            <div className="flex-shrink-0">
              <svg
                className="w-8 h-8 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>

            {/* Content */}
            <div className="flex-1">
              <h2 className="text-2xl font-semibold text-secondary mb-2">
                Page Under Development
              </h2>
              <p className="text-gray-600 leading-relaxed">
                This page is currently under construction. We're working hard to
                bring you the best experience. Please check back soon!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
