import { useQuery } from "@tanstack/react-query";
import { getContribution } from "../../api/dashboard";

export default function ContributionGraph() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["contributions"],
    queryFn: getContribution,
  });

const contributions = data?.data?.contributions ?? [];

const totalContributions = contributions.reduce(
  (sum, day) => sum + day.count,
  0
);

console.log(totalContributions);

  const levelColors = [
    "bg-[#161b22]",
    "bg-[#0e4429]",
    "bg-[#006d32]",
    "bg-[#26a641]",
    "bg-[#39d353]",
  ];

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  if (isLoading) {
    return (
      <div className="bg-[#111] border border-zinc-800 rounded-xl p-6 text-white">
        Loading contribution activity...
      </div>
    );
  }

  if (isError) {
    return (
      <div className="bg-[#111] border border-zinc-800 rounded-xl p-6 text-red-500">
        Failed to load contributions.
      </div>
    );
  }

  return (
    <div className="bg-[#111] border border-zinc-800 rounded-xl p-6 text-white">
      {/* Header */}
      <h2 className="text-xl font-semibold">
        Contribution Activity
      </h2>

      <p className="text-gray-400 text-sm mt-1">
        Visualizing your coding frequency over the last year
      </p>

      {/* Total Contributions */}
      <div className="text-center text-gray-300 mt-8 mb-6">
        <span className="font-semibold">
          {totalContributions}
        </span>{" "}
        contributions in the last year
      </div>

      <div className="flex gap-4 overflow-x-auto">
        {/* Day Labels */}
        <div className="flex flex-col justify-start text-xs text-gray-500 mt-8">
          <span className="h-5">Mon</span>
          <span className="h-5 mt-8">Wed</span>
          <span className="h-5 mt-8">Fri</span>
        </div>

        {/* Graph Section */}
        <div className="flex-1 min-w-max">
          {/* Month Labels */}
          <div className="flex justify-between text-xs text-gray-500 mb-3">
            {months.map((month) => (
              <span key={month}>{month}</span>
            ))}
          </div>

          {/* Contribution Grid */}
          <div
            className="grid gap-1"
            style={{
              gridTemplateRows: "repeat(7, 1fr)",
              gridAutoFlow: "column",
            }}
          >
            {contributions.map((day, index) => (
              <div
                key={index}
                title={`${day.date}: ${day.count} contributions`}
                className={`w-3 h-3 rounded-sm ${
                  levelColors[day.level] ||
                  levelColors[0]
                }`}
              />
            ))}
          </div>

          {/* Footer */}
          <div className="flex justify-between items-center mt-6">
            <p className="text-xs text-gray-400">
              {totalContributions} activities this year
            </p>

            <div className="flex items-center gap-2 text-xs text-gray-400">
              <span>Less</span>

              {levelColors.map((color, index) => (
                <div
                  key={index}
                  className={`w-3 h-3 rounded-sm ${color}`}
                />
              ))}

              <span>More</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}