import React from "react";
import ProfileSetting from "./ProfileSetting";
import ConnectedRepositories from "./ConnectedRepositories";

const Setting = () => {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold">Settings</h1>
        <p className="text-gray-400 mt-2">
          Manage your account settings and connected repositories
        </p>
      </div>

      <ProfileSetting />
      <ConnectedRepositories />
    </div>
  );
};

export default Setting;