import type { User } from "@/features/users/types/userType";
import UserGrowthChart from "./UserGrowthChart";
import DeviceDistributionChart from "./DeviceDistributionChart";
import CountryChart from "./CountryChart";
import FeatureUsageChart from "./FeatureUsageChart";
type Props = {
  users: User[];
  topCount: number;
};

export default function ChartsSection({ users, topCount }: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <UserGrowthChart users={users} />
      <DeviceDistributionChart users={users} />
      <CountryChart users={users} topCount={topCount} />
      <FeatureUsageChart users={users} />
    </div>
  );
}
