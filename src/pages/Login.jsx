import React, { useState } from "react";
import { signIn } from "../lib/auth-client";

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleGithubLogin = async () => {
    setIsLoading(true);

    try {
      await signIn.social({
        provider: "github",
        callbackURL: `${window.location.origin}/dashboard`,
      });
    } catch (error) {
      console.error("Login Error:", error);
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-10">
          <div className="text-6xl mb-4">🤖</div>

          <h1 className="text-4xl font-bold">
            ReviewPilot AI
          </h1>

          <p className="text-zinc-400 mt-3">
            AI-Powered GitHub Code Reviews
          </p>
        </div>

        {/* Login Card */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
          <h2 className="text-2xl font-semibold text-center">
            Welcome Back
          </h2>

          <p className="text-zinc-400 text-center mt-3">
            Connect your GitHub account to start
            reviewing pull requests with AI.
          </p>

          <button
            onClick={handleGithubLogin}
            disabled={isLoading}
            className="w-full mt-8 bg-white text-black py-3 rounded-xl font-semibold hover:bg-gray-200 transition disabled:opacity-50"
          >
            {isLoading
              ? "Signing In..."
              : "Continue with GitHub"}
          </button>

          <div className="mt-8 border-t border-zinc-800 pt-6">
            <div className="space-y-3 text-sm text-zinc-400">
              <div className="flex items-center gap-2">
                <span>✓</span>
                <span>Automated AI Code Reviews</span>
              </div>

              <div className="flex items-center gap-2">
                <span>✓</span>
                <span>GitHub Pull Request Analysis</span>
              </div>

              <div className="flex items-center gap-2">
                <span>✓</span>
                <span>Repository-Aware Suggestions</span>
              </div>

              <div className="flex items-center gap-2">
                <span>✓</span>
                <span>AI README Generation</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <p className="text-center text-zinc-500 text-sm mt-8">
          Powered by LangGraph • Gemini AI • Pinecone
        </p>
      </div>
    </div>
  );
};

export default Login;