import DashboardMetrics from "@/components/cards/DashboardMetrics";
import { useUsers } from "../features/users/hooks/useUser";
import ChartsSection from "@/components/charts/ChartsSection";

const DashboardPage = () => {
  const { data, isLoading, error } = useUsers();

  if (isLoading) return <div>Loading users...</div>;

  if (error) return <div>Error loading users</div>;

  if (!data) return null;

  return (
    <>
      <div className="p-8 space-y-8">
        <h1 className="text-3xl font-bold">Analytics Dashboard</h1>

        <DashboardMetrics users={data} />
        <ChartsSection users={data} topCount={5} />
      </div>

      <div>Filters Table</div>
      <div>Table</div>
    </>
  );
};

export default DashboardPage;
