"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Mail, Lock, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("Admin/dashboard");
  };

  return (
    <div 
      className="min-h-screen flex items-center justify-center bg-cover bg-center bg-fixed"
      style={{ 
        backgroundImage: "url('http://abdirhman.com/wp-content/uploads/2025/03/astaan-.jpg')",
        backdropFilter: "blur(8px)"
      }}
    >
      {/* Login card */}
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
          
          <h2 className="text-3xl font-bold text-[#111827]">Sign in with email</h2>
          <p className="mt-2 text-sm text-[#6B7280] max-w-sm mx-auto">
            Make a new doc to bring your words, data, and teams together. For free
          </p>
        </div>

        <form onSubmit={handleLogin} className="mt-8 space-y-4">
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
              />
            </div>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#9CA3AF]" />
              <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="h-14 pl-12 rounded-xl border-[#E5E7EB] bg-[#F3F4F6] focus:border-[#ff4e00] focus:ring-[#ff4e00] placeholder:text-[#9CA3AF]"
              />
            </div>
          </div>

          <div className="flex justify-end">
            <Link
              href="/forgot-password"
              className="text-sm font-medium text-[#4B5563] hover:text-[#ff4e00]"
            >
              Forgot password?
            </Link>
          </div>

          <Button 
            type="submit" 
            className="w-full h-14 bg-[#ff4e00] hover:bg-[#e64600] text-white rounded-xl font-medium text-base mt-2"
          >
            Get Started
          </Button>

          <div className="relative py-4 mt-2">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-[#E5E7EB]"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-white px-4 text-[#6B7280]">
                Or sign in with
              </span>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3">
            <Button
              type="button"
              variant="outline"
              className="h-14 rounded-xl border-[#E5E7EB] hover:bg-[#F9FAFB]"
              onClick={() => {}}
            >
              <svg viewBox="0 0 48 48" width="24" height="24">
                <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path>
                <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path>
                <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path>
                <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
              </svg>
            </Button>
            <Button
              type="button"
              variant="outline"
              className="h-14 rounded-xl border-[#E5E7EB] hover:bg-[#F9FAFB]"
              onClick={() => {}}
            >
              <svg viewBox="0 0 48 48" width="24" height="24">
                <path fill="#3F51B5" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"></path>
                <path fill="#FFF" d="M34.368,25H31v13h-5V25h-3v-4h3v-2.41c0.002-3.508,1.459-5.59,5.592-5.59H35v4h-2.287C31.104,17,31,17.6,31,18.723V21h4L34.368,25z"></path>
              </svg>
            </Button>
            <Button
              type="button"
              variant="outline"
              className="h-14 rounded-xl border-[#E5E7EB] hover:bg-[#F9FAFB]"
              onClick={() => {}}
            >
              <svg viewBox="0 0 48 48" width="24" height="24">
                <path fill="#000000" d="M30.66,44c1.56,0,3.07-0.8,4.06-2.2c1.1-1.56,1.66-3.42,1.56-5.23c-0.13-1.17-0.68-2.34-1.36-3.23c-0.63-0.83-1.63-1.56-2.49-1.56 c-0.8,0-1.46,0.39-2.27,0.39c-0.87,0-1.8-0.39-2.73-0.39c-1.36,0-2.63,0.8-3.39,2.04c-1.46,2.34-0.39,5.57,1.07,7.41 c0.68,0.87,1.56,1.95,2.73,1.95C28.69,43.17,29.56,44,30.66,44z M26.2,12.78c-0.1-4.11,3.32-6.19,3.46-6.29 c-1.9-2.73-4.83-3.13-5.86-3.13c-2.44-0.29-4.83,1.46-6.05,1.46c-1.27,0-3.13-1.46-5.18-1.37c-2.63,0.1-5.08,1.56-6.44,3.91 c-2.83,4.83-0.73,11.99,1.95,15.92c1.37,1.95,2.93,4.11,4.98,4.01c2.05-0.1,2.83-1.27,5.27-1.27c2.44,0,3.13,1.27,5.27,1.27 c2.15,0,3.52-1.95,4.83-3.9c1.56-2.15,2.15-4.3,2.15-4.4C30.66,19.06,26.39,17.7,26.2,12.78z"></path>
              </svg>
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}