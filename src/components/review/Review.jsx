import React from "react";
import { ExternalLink } from "lucide-react";

const Review = () => {
  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h1 className="text-3xl font-bold">Review History</h1>
        <p className="text-gray-400 mt-1">View all AI code reviews</p>

        {/* Review Card */}
        <div className="mt-6 bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden">
          {/* Top Section */}
          <div className="p-5 flex justify-between items-start">
            <div>
              <div className="flex items-center gap-2">
                <h2 className="font-semibold text-lg">03 suraj</h2>

                <span className="px-2 py-1 text-xs rounded-full bg-yellow-200 text-black font-medium">
                  Completed
                </span>
              </div>

              <p className="text-gray-400 text-sm mt-1">
                Aestheticsuraj234/testing-repo • PR #3
              </p>

              <p className="text-gray-500 text-sm mt-6">
                about 5 hours ago
              </p>
            </div>

            <button className="text-gray-400 hover:text-white">
              <ExternalLink size={18} />
            </button>
          </div>

          {/* Review Content */}
          <div className="bg-zinc-800 p-4 mx-5 rounded-lg text-sm text-gray-300">
            <p className="font-semibold mb-2">
              Here's a detailed code review for your pull request:
            </p>

            <p className="mb-2">## 1. Walkthrough</p>

            <p className="mb-2">
              This pull request introduces a single new file:
            </p>

            <ul className="list-disc pl-5 space-y-1">
              <li>
                <code>app/suraj/page.tsx</code>: This is a new Next.js page
                component. It's a very minimal React functional component that
                exports a default function named "page".
              </li>
            </ul>
          </div>

          {/* Footer */}
          <div className="p-5">
            <button className="bg-zinc-700 hover:bg-zinc-600 text-white px-4 py-2 rounded-lg text-sm">
              View Full Review on GitHub
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;