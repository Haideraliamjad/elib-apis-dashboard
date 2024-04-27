import { Outlet } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
export default function AuthLayout() {
  return (
    <>
      <Outlet />
      <Toaster />
    </>
  );
}
