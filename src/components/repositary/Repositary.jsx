import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getRepositories } from "../../api/repositories";
import { useConnectRepository } from "../../hooks/useConnectRepository";

const Repositary = () => {
  const [connectingRepo, setConnectingRepo] = useState(null);
  const [connectedRepos, setConnectedRepos] = useState([]);

  const { mutate } = useConnectRepository();

  const { data, isLoading } = useQuery({
    queryKey: ["repositories", 1, 10],
    queryFn: () => getRepositories(1, 10),
    
  });

  const handleConnect = (repo) => {
      

    setConnectingRepo(repo.id);

    mutate(
      {
        owner: repo.owner.login,
        repo: repo.name,
        githubId: repo.id,
      },
      {
        onSuccess: () => {
          setConnectedRepos((prev) => [...prev, repo.id]);
        },
        onSettled: () => {
          setConnectingRepo(null);
        },
      }
    );
  };

  if (isLoading) {
    return (
      <div className="text-white p-8">
        Loading repositories...
      </div>
    );
  }

  return (
    <div className="bg-black min-h-screen p-8">
      <h1 className="text-3xl font-bold text-white mb-8">
        Repositories
      </h1>

      <div className="bg-[#111] rounded-xl border border-gray-800">
        {data?.data?.map((repo) => {
          const isConnecting =
            connectingRepo === repo.id;

          const isConnected =
            connectedRepos.includes(repo.id);

          return (
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
                  <span>
                    {repo.stargazers_count}
                  </span>
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

                <button
                  onClick={() =>
                    handleConnect(repo)
                  }
                  disabled={
                    isConnecting || isConnected
                  }
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                    isConnected
                      ? "bg-green-500/20 text-green-400"
                      : "bg-yellow-300 text-black hover:bg-yellow-200"
                  }`}
                >
                  {isConnecting
                    ? "Connecting..."
                    : isConnected
                    ? "Connected"
                    : "Connect"}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Repositary;