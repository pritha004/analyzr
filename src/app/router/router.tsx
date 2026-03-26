import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { NotFoundPage } from "../../pages";
import { PageLayout } from "../layout";
import App from "../../App";
import { lazy, Suspense } from "react";

const DashboardPage = lazy(() => import("../../pages/DashboardPage"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <PageLayout />,
    children: [
      {
        index: true,
        element: <App />,
      },
      {
        path: "/dashboard",
        element: <DashboardPage />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

export default function AppRouter() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={router} />
    </Suspense>
  );
}
