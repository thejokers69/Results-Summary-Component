import { Routes as ReactRouterRoutes, Route } from "react-router-dom";
import ResultsSummary from "../pages/ResultsSummary/index";
import NextPage from "../pages/Nextpages";
import ErrorPage from "../pages/ErrorPage";

export default function Routes() {
  return (
    <ReactRouterRoutes>
      <Route path="/" element={<ResultsSummary />} />
      <Route path="/next" element={<NextPage />} />
      <Route path="/error" element={<ErrorPage />} />
      <Route path="*" element={<ErrorPage />} />
    </ReactRouterRoutes>
  );
}
