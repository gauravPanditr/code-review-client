import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navbar */}
      <nav className="border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <h1 className="text-2xl font-bold">
         ReviewPilot AI
          </h1>

          <button
            onClick={() => navigate("/login")}
            className="px-5 py-2 rounded-lg bg-white text-black font-medium hover:bg-gray-200 transition"
          >
            Login with GitHub
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center">
          <div className="inline-flex items-center rounded-full border border-zinc-700 px-4 py-2 text-sm text-zinc-300">
            🚀 AI Powered Pull Request Reviews
          </div>

          <h1 className="mt-8 text-5xl md:text-7xl font-bold leading-tight">
            Review Pull Requests
            <br />
            <span className="text-zinc-400">
              With AI Agents
            </span>
          </h1>

          <p className="max-w-3xl mx-auto mt-8 text-lg text-zinc-400">
            Connect your GitHub repositories and
            automatically generate intelligent code
            reviews, repository-aware suggestions,
            README files, and contextual feedback
            powered by AI.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
            <button
              onClick={() => navigate("/login")}
              className="px-8 py-4 rounded-xl bg-white text-black font-semibold hover:bg-gray-200 transition"
            >
              Get Started Free
            </button>

            <button
              onClick={() =>
                window.open(
                  "https://github.com/gauravPanditr/code-review-ai",
                  "_blank"
                )
              }
              className="px-8 py-4 rounded-xl border border-zinc-700 hover:bg-zinc-900 transition"
            >
              View GitHub
            </button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <h2 className="text-4xl font-bold text-center mb-14">
          Everything Needed For AI Reviews
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl border border-zinc-800 bg-zinc-900">
            <div className="text-3xl mb-4">🤖</div>

            <h3 className="text-xl font-semibold mb-3">
              AI Code Reviews
            </h3>

            <p className="text-zinc-400">
              Analyze pull requests automatically and
              receive detailed feedback, bug detection,
              code quality suggestions, and best
              practices.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-zinc-800 bg-zinc-900">
            <div className="text-3xl mb-4">📚</div>

            <h3 className="text-xl font-semibold mb-3">
              README Generator
            </h3>

            <p className="text-zinc-400">
              Generate professional README files from
              repository structure, source code, and
              project context using AI.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-zinc-800 bg-zinc-900">
            <div className="text-3xl mb-4">⚡</div>

            <h3 className="text-xl font-semibold mb-3">
              GitHub Automation
            </h3>

            <p className="text-zinc-400">
              Connect repositories, receive webhook
              events, and trigger AI workflows
              automatically whenever a PR is opened.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="border border-zinc-800 rounded-xl p-6 text-center">
            <h3 className="text-3xl font-bold">AI</h3>
            <p className="text-zinc-400 mt-2">
              Agent Reviews
            </p>
          </div>

          <div className="border border-zinc-800 rounded-xl p-6 text-center">
            <h3 className="text-3xl font-bold">GitHub</h3>
            <p className="text-zinc-400 mt-2">
              Integration
            </p>
          </div>

          <div className="border border-zinc-800 rounded-xl p-6 text-center">
            <h3 className="text-3xl font-bold">RAG</h3>
            <p className="text-zinc-400 mt-2">
              Repository Context
            </p>
          </div>

          <div className="border border-zinc-800 rounded-xl p-6 text-center">
            <h3 className="text-3xl font-bold">
              README
            </h3>
            <p className="text-zinc-400 mt-2">
              Auto Generation
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-6 pb-24">
        <div className="border border-zinc-800 rounded-3xl p-12 text-center bg-zinc-900">
          <h2 className="text-4xl font-bold">
            Start Reviewing Smarter
          </h2>

          <p className="mt-4 text-zinc-400">
            Connect GitHub, index repositories, and
            generate AI-powered reviews in seconds.
          </p>

          <button
            onClick={() => navigate("/login")}
            className="mt-8 px-8 py-4 rounded-xl bg-white text-black font-semibold hover:bg-gray-200 transition"
          >
            Login With GitHub
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;