import { getUserGrowth } from "@/utils/analytics";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import type { User } from "@/features/users/types/userType";

type Props = {
  users: User[];
};

export default function UserGrowthChart({ users }: Props) {
  const data = getUserGrowth(users);

  return (
    <Card>
      <CardHeader>
        <CardTitle>User Growth</CardTitle>
      </CardHeader>

      <CardContent className="h-75">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="users" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
