import { useQuery } from "@tanstack/react-query";
import { getContribution } from "../../api/dashboard"; // adjust path

export default function ContributionGraph() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["contributions"],
    queryFn: getContribution,
  });

  const contributions = data?.data?.contributions ?? [];

  const levelColors = [
    "bg-gray-800",  // level 0
    "bg-green-900", // level 1
    "bg-green-700", // level 2
    "bg-green-500", // level 3
    "bg-green-400", // level 4
  ];

  return (
    <div className="bg-[#151515] border border-gray-800 rounded-xl p-6 text-white">
      <h2 className="text-xl font-semibold">Contribution Activity</h2>
      <p className="text-gray-500">
        Visualizing your coding frequency over the last year
      </p>

      {isLoading ? (
        <p className="text-gray-600 mt-10">Loading...</p>
      ) : isError ? (
        <p className="text-red-500 mt-10">Failed to load contributions.</p>
      ) : (
        <div
          className="grid gap-1 mt-10"
          style={{
            gridTemplateColumns: `repeat(${Math.ceil(
              contributions.length / 7
            )}, minmax(0, 1fr))`,
            gridAutoFlow: "column",
            gridTemplateRows: "repeat(7, minmax(0, 1fr))",
          }}
        >
          {contributions.map((day, i) => (
            <div
              key={i}
              title={`${day.date}: ${day.count} contributions`}
              className={`w-4 h-4 rounded-sm ${
                levelColors[day.level] ?? levelColors[0]
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}