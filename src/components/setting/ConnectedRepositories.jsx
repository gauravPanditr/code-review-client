import React, { useState } from "react";
import {
  useQuery,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";

import {
  deleteConnectedRepository,
  getConnectedRepository,
} from "../../api/repositories";
import { Trash2 } from "lucide-react";

const ConnectedRepositories = () => {
const [disconnectingRepo, setDisconnectingRepo] = useState(null);
  const queryClient = useQueryClient();

  const { data, isLoading } = useQuery({
    queryKey: ["connected-repositories"],
    queryFn: getConnectedRepository,
  });

  const { mutate, isPending } = useMutation({
    mutationFn: deleteConnectedRepository,
    
    onMutate: (repoId) => {
    setDisconnectingRepo(repoId);
  },

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["connected-repositories"],
      });
    },

    onSettled:()=>{
        setDisconnectingRepo(null);
    }
  });

  if (isLoading) {
    return (
      <div className="bg-[#111] rounded-xl p-6">
        Loading repositories...
      </div>
    );
  }

  return (
    <div className="bg-[#111] border border-zinc-800 rounded-xl p-6 ">
      <h2 className="text-2xl font-semibold mb-2">
        Connected Repositories
      </h2>

      <p className="text-gray-400 mb-6">
        Manage your connected GitHub repositories
      </p>
       <button className="flex items-center  gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition"
  >
    <Trash2 size={16} />
    Disconnect All
  </button>

      <div className="space-y-4">
        {data?.repositories?.length === 0 ? (
          <p className="text-gray-400">
            No repositories connected
          </p>
         
        ) : (
          data?.repositories?.map((repo) => (
            <div
              key={repo.id}
              className="flex items-center justify-between bg-[#1a1a1a] border border-zinc-700 rounded-lg p-4"
            >
              <div>
                <h3 className="font-semibold">
                  {repo.name}
                </h3>

                <p className="text-sm text-gray-400">
                  {repo.fullName}
                </p>
              </div>
        <button
  onClick={() => mutate(repo.id)}
  disabled={disconnectingRepo === repo.id}
  className="px-4 py-2 rounded-lg bg-red-500/10 text-red-400 border border-red-500/20"
>
  {disconnectingRepo === repo.id
    ? "Disconnecting..."
    : "Disconnect"}
</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ConnectedRepositories;