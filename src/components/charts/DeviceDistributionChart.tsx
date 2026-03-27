import type { User } from "@/features/users/types/userType";
import { getDeviceDistribution } from "@/utils/analytics";

import { PieChart, Pie, Tooltip, ResponsiveContainer } from "recharts";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

type Props = {
  users: User[];
};

export default function DeviceDistributionChart({ users }: Props) {
  const data = getDeviceDistribution(users);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Device Distribution</CardTitle>
      </CardHeader>

      <CardContent className="h-75">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie data={data} dataKey="count" nameKey="device" />
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
