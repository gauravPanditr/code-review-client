import React from "react";
import { ExternalLink } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { getReviews } from "../../api/review";


const Review = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["reviews"],
    queryFn: getReviews,
  });

  if (isLoading) {
    return (
      <div className="p-6 text-white">
        Loading review...
      </div>
    );
  }

  if (isError) {
    return (
      <div className="p-6 text-red-500">
        Failed to load reviews
      </div>
    );
  }

  const reviews = data?.reviews || [];

  return (
    <div className="p-6 text-white">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold">
          Review History
        </h1>
        <p className="text-gray-400 mt-1">
          View all AI code reviews
        </p>
      </div>

      {/* Reviews */}
      <div className="mt-6 space-y-6">
        {reviews.length === 0 ? (
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
            No reviews found
          </div>
        ) : (
          reviews.map((review) => (
            <div
              key={review.id}
              className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden"
            >
              {/* Top Section */}
              <div className="p-5 flex justify-between items-start">
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="font-semibold text-lg">
                      {review.prTitle}
                    </h2>

                    <span
                      className={`px-2 py-1 text-xs rounded-full font-medium ${
                        review.status === "completed"
                          ? "bg-green-200 text-black"
                          : "bg-red-200 text-black"
                      }`}
                    >
                      {review.status}
                    </span>
                  </div>

                  <p className="text-gray-400 text-sm mt-1">
                    {review.repository?.fullName} • PR #
                    {review.prNumber}
                  </p>

                  <p className="text-gray-500 text-sm mt-4">
                    {new Date(
                      review.createdAt
                    ).toLocaleString()}
                  </p>
                </div>

                <a
                  href={review.prUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-400 hover:text-white"
                >
                  <ExternalLink size={18} />
                </a>
              </div>

              {/* Review Content */}
              <div className="bg-zinc-800 p-4 mx-5 rounded-lg text-sm text-gray-300">
                <p className="whitespace-pre-wrap">
                  {review.review?.slice(0, 500)}
                  {review.review?.length > 500
                    ? "..."
                    : ""}
                </p>
              </div>

              {/* Footer */}
              <div className="p-5">
                <a
                  href={review.prUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-zinc-700 hover:bg-zinc-600 text-white px-4 py-2 rounded-lg text-sm inline-block"
                >
                  View Full Review on GitHub
                </a>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Review;