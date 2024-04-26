import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
export default function ResetPasswordPage() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <Card className="mx-auto w-[346px]">
        <CardHeader>
          <CardTitle className="text-2xl">Reset Password</CardTitle>
          <CardDescription>Enter your email to reset password</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <Button type="submit" className="w-full">
              Send Email
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            Want Login...?{" "}
            <Link to="/login" className="underline">
              Click here
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
