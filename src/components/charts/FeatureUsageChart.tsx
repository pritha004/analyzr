import type { User } from "@/features/users/types/userType";
import { getFeatureUsage } from "@/utils/analytics";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

type Props = {
  users: User[];
};

export default function FeatureUsageChart({ users }: Props) {
  const data = getFeatureUsage(users);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Feature Usage</CardTitle>
      </CardHeader>

      <CardContent className="h-75">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <XAxis dataKey="feature" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="count" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
