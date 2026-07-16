import React, { useState } from "react";
import { signIn } from "../lib/auth-client";

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
console.log(window.location.origin);
  const handleGithubLogin = async () => {
    setIsLoading(true);

    try {
      await signIn.social({
        provider: "github",
         callbackURL: "/dashboard",
      });
    } catch (error) {
      console.error("Login Error:", error);
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-sm bg-white p-8 rounded-xl shadow-md">
        <h1 className="text-2xl font-bold text-center">
          Code Review
        </h1>

        <p className="text-gray-500 text-center mt-2 mb-6">
          Sign in with GitHub to continue
        </p>

        <button
          onClick={handleGithubLogin}
          disabled={isLoading}
          className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition disabled:opacity-50"
        >
          {isLoading ? "Signing In..." : "Continue with GitHub"}
        </button>
      </div>
    </div>
  );
};

export default Login;