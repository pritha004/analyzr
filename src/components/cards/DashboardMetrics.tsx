import type { User } from "@/features/users/types/userType";
import MetricCard from "./MetricCard";
import { getActiveUsers } from "@/utils/analytics";

type Props = {
  users: User[];
};

export default function DashboardMetrics({ users }: Props) {
  const totalUsers = users.length;
  const activeUsers = getActiveUsers(users);

  const mobileUsers = users.filter((u) => u.device === "mobile").length;
  const desktopUsers = users.filter((u) => u.device === "desktop").length;

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      <MetricCard title="Total Users" value={totalUsers} />
      <MetricCard title="Active Users (24h)" value={activeUsers} />
      <MetricCard title="Mobile Users" value={mobileUsers} />
      <MetricCard title="Desktop Users" value={desktopUsers} />
    </div>
  );
}
