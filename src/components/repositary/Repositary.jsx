import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getRepositories } from "../../api/dashboard";

const Repositary = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["repositories", 1, 10],
    queryFn: () => getRepositories(1, 10),
  });

  if (isLoading) {
    return <div className="text-white p-8">Loading...</div>;
  }

  return (
    <div className="bg-black min-h-screen p-8">
      <h1 className="text-3xl font-bold text-white mb-8">
        Repositories
      </h1>

      <div className="bg-[#111] rounded-xl border border-gray-800">
        {data?.data?.map((repo) => (
          <div
            key={repo.id}
            className="border-b last:border-b-0 border-gray-800 px-6 py-6 flex items-center justify-between"
          >
            <div>
              <div className="flex items-center gap-3">
                <h3 className="text-white font-medium">
                  {repo.name}
                </h3>

                <span className="text-xs text-gray-500">
                  {repo.language || "Unknown"}
                </span>
              </div>

              <div className="flex items-center gap-1 mt-2 text-yellow-400 text-sm">
                <span>★</span>
                <span>{repo.stargazers_count}</span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white text-lg"
              >
                ↗
              </a>

              <button className="px-4 py-2 rounded-lg text-sm font-medium bg-yellow-300 text-black hover:bg-yellow-200">
                Connect
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Repositary;