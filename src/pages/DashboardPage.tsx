import { useUsers } from "../features/users/hooks/useUser";

const DashboardPage = () => {
  const { data, isLoading, error } = useUsers();

  if (isLoading) return <div>Loading users...</div>;

  if (error) return <div>Error loading users</div>;

  return (
    <>
      <div className="text-center">Dashboard</div>
      <div>
        <h1>Dashboard</h1>
        <p>Total Users: {data?.length}</p>
      </div>
      <div>Metrics</div>
      <div>Charts</div>
      <div>Filters Table</div>
      <div>Table</div>
    </>
  );
};

export default DashboardPage;
