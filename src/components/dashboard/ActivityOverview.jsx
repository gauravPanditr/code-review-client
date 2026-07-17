import { useQuery } from "@tanstack/react-query";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { getMonthlyActivity } from "../../api/dashboard";

function CustomTooltip({ active, payload, label }) {
  if (!active || !payload || !payload.length) return null;

  return (
    <div
      style={{
        background: "#000",
        border: "1px solid #333",
        borderRadius: 8,
        padding: "12px 16px",
        color: "#fff",
      }}
    >
      <p style={{ fontWeight: 600, marginBottom: 6 }}>{label}</p>
      {payload.map((entry) => (
        <p key={entry.dataKey} style={{ margin: "2px 0", fontSize: 13 }}>
          {entry.name} : {entry.value}
        </p>
      ))}
    </div>
  );
}

function CustomLegend() {
  return (
    <div className="flex justify-center gap-6 mt-2 text-sm">
      <span className="flex items-center gap-1 text-blue-400">
        <span className="w-2.5 h-2.5 rounded-sm bg-blue-500" /> Commits
      </span>
      <span className="flex items-center gap-1 text-purple-400">
        <span className="w-2.5 h-2.5 rounded-sm bg-purple-500" /> Pull Requests
      </span>
      <span className="flex items-center gap-1 text-green-400">
        <span className="w-2.5 h-2.5 rounded-sm bg-green-500" /> AI Reviews
      </span>
    </div>
  );
}

export default function ActivityOverview() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["monthly-activity"],
    queryFn: getMonthlyActivity,
  });

  const chartData = data?.data ?? [];

  return (
    <div className="bg-[#151515] border border-gray-800 rounded-xl p-6 text-white">
      <h2 className="text-xl font-semibold">Activity Overview</h2>
      <p className="text-gray-500 text-sm">
        Monthly breakdown of commits, PRs, and reviews (last 6 months)
      </p>

      {isLoading ? (
        <p className="text-gray-600 mt-10">Loading...</p>
      ) : isError ? (
        <p className="text-red-500 mt-10">Failed to load activity data.</p>
      ) : (
        <>
          <div style={{ width: "100%", height: 320, marginTop: 24 }}>
            <ResponsiveContainer>
              <BarChart data={chartData} barGap={4}>
                <CartesianGrid strokeDasharray="3 3" stroke="#333" vertical={true} />
                <XAxis
                  dataKey="name"
                  stroke="#888"
                  tick={{ fill: "#888", fontSize: 12 }}
                  axisLine={{ stroke: "#333" }}
                  tickLine={false}
                />
                <YAxis
                  stroke="#888"
                  tick={{ fill: "#888", fontSize: 12 }}
                  axisLine={{ stroke: "#333" }}
                  tickLine={false}
                />
                <Tooltip
                  content={<CustomTooltip />}
                  cursor={{ fill: "rgba(255,255,255,0.06)" }}
                />
                <Bar dataKey="commits" name="Commits" fill="#3b82f6" radius={[3, 3, 0, 0]} />
                <Bar dataKey="prs" name="Pull Requests" fill="#a855f7" radius={[3, 3, 0, 0]} />
                <Bar dataKey="reviews" name="AI Reviews" fill="#22c55e" radius={[3, 3, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <CustomLegend />
        </>
      )}
    </div>
  );
}