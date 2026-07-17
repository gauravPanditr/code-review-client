import { useQuery } from "@tanstack/react-query";
import { getDashboard } from "../../api/dashboard";

import StatCard from "./StatCard";
import ContributionGraph from "./ContributionGraph";

export default function DashBoard() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["dashboard"],
    queryFn: getDashboard,
  });

  if (isLoading) {
    return (
      <main className="flex-1 bg-black p-8 text-white">
        Loading Dashboard...
      </main>
    );
  }

  if (error) {
    return (
      <main className="flex-1 bg-black p-8 text-red-500">
        Failed to load dashboard
      </main>
    );
  }

  const stats = data?.data?.stats;

  return (
    <main className="flex-1 bg-black p-8">
      <h1 className="text-4xl text-white font-bold">
        Dashboard
      </h1>

      <p className="text-gray-500">
        Overview of your coding activity and AI reviews
      </p>

      <div className="grid grid-cols-4 gap-6 mt-10">
        <StatCard
          title="Total Repository"
          value={stats?.totalRepos ?? 0}
          subtitle="Connected repositories"
          icon="⑂"
        />

        <StatCard
          title="Total Commits"
          value={stats?.totalCommits ?? 0}
          subtitle="In the last year"
          icon="⌁"
        />

        <StatCard
          title="Pull Requests"
          value={stats?.totalPRs ?? 0}
          subtitle="All time"
          icon="⑂"
        />

        <StatCard
          title="AI Reviews"
          value={stats?.totalReviews ?? 0}
          subtitle="Generated"
          icon="AI"
        />
      </div>

      <div className="mt-8">
        <ContributionGraph />
      </div>
    </main>
  );
}