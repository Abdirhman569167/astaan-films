"use client";

import { Bell, Menu, Settings, LogOut, Search, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface HeaderProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

export default function DashboardHeader({ sidebarOpen, setSidebarOpen }: HeaderProps) {
  return (
    <header className="border-b border-gray-100 bg-white shadow-sm flex items-center justify-between px-6 py-3">
      <div className="flex items-center space-x-6">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="text-[#ff4e00] hover:bg-[#ff4e00]/10 rounded-lg"
        >
          <Menu className="h-6 w-6" />
        </Button>
        
        {/* Logo */}
        <div className="hidden md:flex items-center">
          <span className="text-xl font-bold text-[#ff4e00]">Astaan</span>
          <span className="text-xl font-bold ml-1">Translator</span>
        </div>
      </div>
      
      {/* Search Bar */}
      <div className="hidden md:flex relative max-w-md w-full mx-4">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
        <Input 
          placeholder="Search translations, projects, or tasks..." 
          className="pl-10 pr-4 py-2 w-full rounded-lg border-gray-200 focus:border-[#ff4e00] focus:ring-[#ff4e00]/20"
        />
      </div>
      
      <div className="flex items-center space-x-4">
        <Button 
          variant="ghost" 
          size="icon"
          className="relative text-[#ff4e00] hover:bg-[#ff4e00]/10 rounded-lg"
        >
          <Bell className="h-5 w-5" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-[#ff4e00] rounded-full"></span>
        </Button>
        {/* User profile dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="relative h-9 w-9 rounded-full p-0 border-2 border-[#ff4e00]/20 hover:border-[#ff4e00]/50 transition-all duration-200">
              <Avatar className="h-full w-full">
                <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face" alt="Translator" />
                <AvatarFallback className="bg-[#ff4e00]/10 text-[#ff4e00] font-medium">T</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56 p-2 border border-gray-100 shadow-lg rounded-xl">
            <div className="flex items-center gap-3 p-2 mb-1">
              <Avatar className="h-10 w-10 border-2 border-[#ff4e00]/20">
                <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face" alt="Translator" />
                <AvatarFallback className="bg-[#ff4e00]/10 text-[#ff4e00]">T</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-medium">Translator Name</p>
                <p className="text-xs text-gray-500">translator@astaanfilms.com</p>
              </div>
            </div>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="flex items-center gap-2 p-2 rounded-lg cursor-pointer hover:bg-[#ff4e00]/10 text-gray-700 hover:text-[#ff4e00] transition-colors">
              <Settings className="h-4 w-4" />
              <span>Settings</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="flex items-center gap-2 p-2 rounded-lg cursor-pointer hover:bg-[#ff4e00]/10 text-gray-700 hover:text-[#ff4e00] transition-colors">
              <LogOut className="h-4 w-4" />
              <span>Logout</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}