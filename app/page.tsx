import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Film } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center space-y-6">
        <div className="flex justify-center">
          <div className="bg-primary rounded-full p-4">
            <Film className="w-12 h-12 text-primary-foreground" />
          </div>
        </div>
        <h1 className="text-4xl font-bold">Welcome to DubFlix</h1>
        <p className="text-muted-foreground">Your professional dubbing management platform</p>
        <Link href="/login">
          <Button size="lg">Get Started</Button>
        </Link>
      </div>
    </div>
  );
}