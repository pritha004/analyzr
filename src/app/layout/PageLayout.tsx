import { Outlet } from "react-router-dom";

export default function PageLayout() {
  return (
    <div>
      <header>Header</header>

      <main>
        <Outlet />
      </main>
    </div>
  );
}
