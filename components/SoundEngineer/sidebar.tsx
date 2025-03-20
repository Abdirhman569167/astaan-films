"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  Home,
  Music,
  Film,
  Mic,
  MessageCircle,
  Calendar,
  Bell,
  BarChart,
  UserCircle,
  LogOut,
  Settings,
  File,
  Sliders,
  Clock,
} from "lucide-react";

const mainMenu = [
  { name: "Home", icon: Home, href: "/SoundEngineer/dashboard" },
  { name: "Projects", icon: Film, href: "/SoundEngineer/dashboard/projects" },
  { name: "Audio Library", icon: Music, href: "/SoundEngineer/dashboard/audio" },
];

const workMenu = [
  { name: "Tasks", icon: Clock, href: "/SoundEngineer/dashboard/tasks" },
  { name: "Mixing Console", icon: Sliders, href: "/SoundEngineer/dashboard/mixing" },
  { name: "Sound Effects", icon: Music, href: "/SoundEngineer/dashboard/effects" },
  { name: "Recording", icon: Mic, href: "/SoundEngineer/dashboard/recording" },
  { name: "Messages", icon: MessageCircle, href: "/SoundEngineer/dashboard/chat" },
  { name: "Schedule", icon: Calendar, href: "/SoundEngineer/dashboard/schedule" },
  { name: "Notifications", icon: Bell, href: "/SoundEngineer/dashboard/notifications" },
  { name: "Performance", icon: BarChart, href: "/SoundEngineer/dashboard/performance" },
  { name: "Profile", icon: UserCircle, href: "/SoundEngineer/dashboard/profile" },
];

interface SidebarProps {
  open: boolean;
}

export default function DashboardSidebar({ open }: SidebarProps) {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = () => {
    router.push("/login");
  };

  const MenuSection = ({ title, items }: { title?: string; items: typeof mainMenu }) => (
    <div className="space-y-1">
      {title && (
        <h2 className="px-4 text-sm font-medium text-[#ff4e00] uppercase tracking-wider mb-2">{title}</h2>
      )}
      {items.map((item) => {
        const isActive = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200",
              isActive 
                ? "bg-[#ff4e00] text-white" 
                : "text-gray-700 hover:bg-[#fff1ec]"
            )}
          >
            <div className={cn(
              "flex items-center justify-center w-8 h-8 rounded-full",
              isActive 
                ? "bg-white/20" 
                : "bg-[#fff1ec]"
            )}>
              <item.icon className={cn(
                "h-5 w-5",
                isActive ? "text-white" : "text-[#ff4e00]"
              )} />
            </div>
            <span>{item.name}</span>
          </Link>
        );
      })}
    </div>
  );

  return (
    <aside className={`w-64 bg-white border-r border-gray-100 h-full flex flex-col ${!open ? 'hidden' : 'flex'} md:flex`}>
      <div className="p-4 flex items-center justify-center border-b border-gray-100 mb-4">
        <div className="bg-[#fff1ec] p-5 rounded-xl flex items-center">
          <img 
            src="https://astaantv.com/wp-content/uploads/2025/01/cropped-Astaan-1.png" 
            alt="Astaan Films" 
            className="h-9 w-auto object-contain" 
          />
          <span className="ml-3 font-bold text-lg text-[#ff4e00]">Sound Engineer</span>
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto px-3 py-2 space-y-6">
        <MenuSection items={mainMenu} />
        <MenuSection title="AUDIO TOOLS" items={workMenu} />
      </div>
      
      <div className="px-3 py-4 border-t border-gray-100">
        <button
          onClick={handleLogout}
          className="flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200 w-full text-gray-700 hover:bg-[#fff1ec]"
        >
          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#fff1ec]">
            <LogOut className="h-5 w-5 text-[#ff4e00]" />
          </div>
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
}