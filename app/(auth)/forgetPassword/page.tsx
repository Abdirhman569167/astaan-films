"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";
import Image from "next/image";

export default function ForgetPasswordPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Here you would typically call your API to send a password reset email
    
    // Simulate API call with timeout
    setTimeout(() => {
      setIsLoading(false);
      // Show success message or redirect
      alert("Password reset link sent to your email");
      // Optionally redirect to login
      // router.push('/login');
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
      {/* Forget Password card */}
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
          
          <h2 className="text-3xl font-bold text-[#111827]">Reset your password</h2>
          <p className="mt-2 text-sm text-[#6B7280] max-w-sm mx-auto">
            Enter your email address and we'll send you a link to reset your password.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          <div className="space-y-4">
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#9CA3AF]" />
              <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="h-14 pl-12 rounded-xl border-[#E5E7EB] bg-[#F3F4F6] focus:border-[#ff4e00] focus:ring-[#ff4e00] placeholder:text-[#9CA3AF]"
                disabled={isLoading}
              />
            </div>
          </div>

          <Button 
            type="submit" 
            className="w-full h-14 bg-[#ff4e00] hover:bg-[#e64600] text-white rounded-xl font-medium text-base mt-6"
            disabled={isLoading}
          >
            {isLoading ? "Sending..." : "Send reset link"}
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
