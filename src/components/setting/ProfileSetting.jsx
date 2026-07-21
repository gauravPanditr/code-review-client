import React, { useEffect, useState } from "react";
import {
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import toast from "react-hot-toast";

import {
  getUserProfile,
  updateUserProfile,
} from "../../api/user";

const ProfileSetting = () => {
  const queryClient = useQueryClient();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const { data, isLoading } = useQuery({
    queryKey: ["get-profile"],
    queryFn: getUserProfile,
  });

  useEffect(() => {
    if (data?.user) {
      setName(data.user.name || "");
      setEmail(data.user.email || "");
    }
  }, [data]);

  const mutation = useMutation({
    mutationFn: updateUserProfile,

    onSuccess: () => {
      toast.success("Profile Updated Successfully");

      queryClient.invalidateQueries({
        queryKey: ["get-profile"],
      });
    },

    onError: () => {
      toast.error("Failed to Update Profile");
    },
  });

  if (isLoading) {
    return (
      <div className="bg-[#111] rounded-xl p-6 mb-8">
        Loading...
      </div>
    );
  }

  return (
    <div className="bg-[#111] border border-zinc-800 rounded-xl p-6 mb-8">
      <h2 className="text-2xl font-semibold mb-2">
        Profile Settings
      </h2>

      <p className="text-gray-400 mb-6">
        Update your profile information
      </p>

      <div className="space-y-5">
        <div>
          <label className="block mb-2 font-medium">
            Full Name
          </label>

          <input
            type="text"
            value={name}
            onChange={(e) =>
              setName(e.target.value)
            }
            className="w-full bg-[#1a1a1a] border border-zinc-700 rounded-lg px-4 py-3"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">
            Email
          </label>

          <input
            type="email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            className="w-full bg-[#1a1a1a] border border-zinc-700 rounded-lg px-4 py-3"
          />
        </div>

        <button
          onClick={() =>
            mutation.mutate({
              name,
              email,
            })
          }
          className="bg-orange-200 text-black px-5 py-3 rounded-lg font-semibold"
        >
          {mutation.isPending
            ? "Saving..."
            : "Save Changes"}
        </button>
      </div>
    </div>
  );
};

export default ProfileSetting;