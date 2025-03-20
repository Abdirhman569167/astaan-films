"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function EditorRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.push("/Admin/dashboard");
  }, [router]);

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <h2 className="text-xl font-semibold text-gray-700">Redirecting to editor dashboard...</h2>
        <div className="mt-4 flex justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#ff4e00]"></div>
        </div>
      </div>
    </div>
  );
}