import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

type MetricCardProps = {
  title: string;
  value: number | string;
};

export default function MetricCard({ title, value }: MetricCardProps) {
  return (
    <Card className="w-50">
      <CardHeader className="pb-2">
        <CardTitle className="text-sm text-muted-foreground">{title}</CardTitle>
      </CardHeader>

      <CardContent>
        <p className="text-3xl font-bold">{value}</p>
      </CardContent>
    </Card>
  );
}
