import { Outlet } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import useTokenStore from "@/store";
import { Navigate } from "react-router-dom";
export default function AuthLayout() {
  const token = useTokenStore((state) => state.token);

  if (token) {
    return <Navigate to={"/dashboard/home"} replace />;
  }

  return (
    <>
      <Outlet />
      <Toaster />
    </>
  );
}
