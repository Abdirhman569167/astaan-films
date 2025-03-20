"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Lock } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function NewPasswordPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Validate passwords
    if (password.length < 8) {
      setError("Password must be at least 8 characters long");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setIsLoading(true);
    
    // Here you would typically call your API to update the password
    
    // Simulate API call with timeout
    setTimeout(() => {
      setIsLoading(false);
      // Show success message or redirect
      alert("Password updated successfully");
      // Redirect to login
      router.push('/login');
    }, 1500);
  };

  return (
    <div 
      className="min-h-screen flex items-center justify-center bg-cover bg-center bg-fixed"
      style={{ 
        backgroundImage: "url('http://abdirhman.com/wp-content/uploads/2025/03/astaan-.jpg')",
        backdropFilter: "blur(8px)"
      }}
    >
      {/* New Password card */}
      <div className="w-full max-w-md p-8 bg-white rounded-3xl shadow-sm">
        <div className="flex flex-col items-center text-center">
          <div className="mb-6">
            <Image 
              src="http://abdirhman.com/wp-content/uploads/2025/03/logo.png" 
              alt="Astaan Logo" 
              width={120} 
              height={40} 
              className="h-auto"
            />
          </div>
          
          <h2 className="text-3xl font-bold text-[#111827]">Create new password</h2>
          <p className="mt-2 text-sm text-[#6B7280] max-w-sm mx-auto">
            Your new password must be different from previously used passwords.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          {error && (
            <div className="p-3 bg-red-50 border border-red-200 text-red-600 rounded-lg text-sm">
              {error}
            </div>
          )}
          
          <div className="space-y-4">
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#9CA3AF]" />
              <Input
                type="password"
                placeholder="New Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="h-14 pl-12 rounded-xl border-[#E5E7EB] bg-[#F3F4F6] focus:border-[#ff4e00] focus:ring-[#ff4e00] placeholder:text-[#9CA3AF]"
                disabled={isLoading}
              />
            </div>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#9CA3AF]" />
              <Input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="h-14 pl-12 rounded-xl border-[#E5E7EB] bg-[#F3F4F6] focus:border-[#ff4e00] focus:ring-[#ff4e00] placeholder:text-[#9CA3AF]"
                disabled={isLoading}
              />
            </div>
          </div>

          <div className="mt-2 text-xs text-[#6B7280]">
            <p>Password must contain:</p>
            <ul className="list-disc pl-5 mt-1 space-y-1">
              <li>At least 8 characters</li>
              <li>At least one uppercase letter</li>
              <li>At least one number</li>
              <li>At least one special character</li>
            </ul>
          </div>

          <Button 
            type="submit" 
            className="w-full h-14 bg-[#ff4e00] hover:bg-[#e64600] text-white rounded-xl font-medium text-base mt-6"
            disabled={isLoading}
          >
            {isLoading ? "Updating..." : "Reset Password"}
          </Button>

          <div className="mt-6 text-center text-sm">
            <Link
              href="/login"
              className="text-sm font-medium text-[#4B5563] hover:text-[#ff4e00]"
            >
              Back to login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
