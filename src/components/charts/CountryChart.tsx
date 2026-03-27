import type { User } from "@/features/users/types/userType";
import { getTopCountries } from "@/utils/analytics";

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
  topCount: number;
};

export default function CountryChart({ users, topCount }: Props) {
  const data = getTopCountries(users, topCount);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Top Countries</CardTitle>
      </CardHeader>

      <CardContent className="h-75">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <XAxis dataKey="country" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="count" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
