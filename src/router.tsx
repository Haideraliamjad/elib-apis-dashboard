import { createBrowserRouter } from "react-router-dom";
import LoginPage from "@/pages/LoginPage";
import HomePage from "@/pages/HomePage";
import DashboardLayout from "./layouts/DashboardLayout";
import SignupPage from "@/pages/SignupPage";
import ResetPasswordPage from "./pages/ResetPasswordPage";
import AuthLayout from "./layouts/AuthLayout";
import BooksPage from "./pages/BooksPage";
export const router = createBrowserRouter([
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "home",
        element: <HomePage />,
      },
      {
        path: "books",
        element: <BooksPage />,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "sign-up",
        element: <SignupPage />,
      },
      {
        path: "reset-password",
        element: <ResetPasswordPage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
    ],
  },
]);
