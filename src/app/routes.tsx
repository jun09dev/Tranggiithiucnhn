import { createBrowserRouter } from "react-router";
import { MainLayout } from "./components/MainLayout";
import { HomePage } from "./pages/HomePage";
import { SkillDetailPage } from "./pages/SkillDetailPage";
import { EducationDetailPage } from "./pages/EducationDetailPage";
import { ProjectDetailPage } from "./pages/ProjectDetailPage";
import { NotFound } from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      { index: true, Component: HomePage },
      { path: "skills/:category", Component: SkillDetailPage },
      { path: "education/:school", Component: EducationDetailPage },
      { path: "projects/:projectId", Component: ProjectDetailPage },
      { path: "*", Component: NotFound },
    ],
  },
]);
