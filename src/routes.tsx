import { Navigate, useLocation, useRoutes } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage";
import GeneralLayout from "./layouts/GeneralLayout/GeneralLayout";
import SearchResultsPage from "./pages/SearchResultsPage/SearchResultsPage";
import ProductDetailPage from "./pages/ProductDetailPage/ProductDetailPage";

import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

export default function AppRoutes() {
  const routes = useRoutes([
    {
      path: "/",
      element: <GeneralLayout />,
      children: [
        { element: <Navigate to="/" />, index: true },
        { path: "/", element: <HomePage /> },
        { path: "/items", element: <SearchResultsPage /> },
        { path: "/items/:id", element: <ProductDetailPage /> },
      ],
    },
    {
      element: <GeneralLayout />,
      children: [
        {
          element: <Navigate to="/app/controlPanel" />,
          index: true,
        },

        { path: "404", element: <NotFoundPage /> },
        { path: "*", element: <Navigate to="/404" /> },
      ],
    },
    {
      path: "*",
      element: <Navigate to="/404" replace />,
    },
  ]);

  return routes;
}
