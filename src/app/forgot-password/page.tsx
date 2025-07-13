"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";
import ForgotPasswordForm from "@/components/auth/ForgotPasswordForm";

export default function ForgotPasswordPage() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    // If user is already authenticated and not loading, redirect to dashboard
    if (!loading && user) {
      router.push("/dashboard");
    }
  }, [user, loading, router]);

  // Show loading spinner while checking authentication status
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-base-200">
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body text-center">
            <span className="loading loading-spinner loading-lg"></span>
            <p className="mt-4">Checking authentication...</p>
          </div>
        </div>
      </div>
    );
  }

  // If user is authenticated, don't render the forgot password form (will redirect)
  if (user) {
    return null;
  }

  // Show forgot password form only if user is not authenticated
  return <ForgotPasswordForm />;
}
