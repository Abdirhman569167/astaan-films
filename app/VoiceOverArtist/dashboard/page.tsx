"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
  Users,
  CheckCircle,
  Clock,
  AlertCircle,
  Activity,
  Download,
  Upload,
  Mic,
  Bell,
  MessageSquare,
  Music,
  BarChart2,
  Calendar,
  FileText,
  Headphones,
  Volume2,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

const performanceData = [
  { name: "Mon", completed: 4, pending: 2, overdue: 1 },
  { name: "Tue", completed: 3, pending: 4, overdue: 2 },
  { name: "Wed", completed: 5, pending: 3, overdue: 0 },
  { name: "Thu", completed: 6, pending: 2, overdue: 1 },
  { name: "Fri", completed: 4, pending: 3, overdue: 2 },
];

// Updated stats for voice-over artists
const stats = [
  {
    title: "Total Projects",
    value: "24",
    icon: Headphones,
    change: "↑ 12% from last month",
    color: "text-blue-600",
    bgColor: "bg-blue-100",
  },
  {
    title: "Completed",
    value: "18",
    icon: CheckCircle,
    change: "↑ 8% from last month",
    color: "text-green-600",
    bgColor: "bg-green-100",
  },
  {
    title: "In Progress",
    value: "5",
    icon: Clock,
    change: "↓ 2% from last month",
    color: "text-yellow-600",
    bgColor: "bg-yellow-100",
  },
  {
    title: "Hours Recorded",
    value: "42",
    icon: Mic,
    change: "↑ 15% from last month",
    color: "text-purple-600",
    bgColor: "bg-purple-100",
  },
];

// Voice-over tasks with deadlines
const upcomingVoiceoverTasks = [
  {
    id: 1,
    title: "Character Voiceover - Main Protagonist",
    dueDate: "2024-04-10",
    priority: "high",
    status: "in-progress",
    project: "Adventure Quest Film"
  },
  {
    id: 2,
    title: "Narration - Documentary Segment",
    dueDate: "2024-04-12",
    priority: "medium",
    status: "todo",
    project: "Wildlife Documentary"
  },
  {
    id: 3,
    title: "Commercial Voice - Product Launch",
    dueDate: "2024-04-15",
    priority: "high",
    status: "in-progress",
    project: "Tech Product Campaign"
  }
];

// Recent audio uploads
const recentAudioUploads = [
  {
    id: 1,
    name: "Main_Character_Scene1.wav",
    size: "24 MB",
    progress: 100,
    date: "2 hours ago",
    duration: "4:32"
  },
  {
    id: 2,
    name: "Narration_Final_Take.wav",
    size: "18 MB",
    progress: 100,
    date: "Yesterday",
    duration: "3:15"
  },
  {
    id: 3,
    name: "Commercial_WIP.wav",
    size: "12 MB",
    progress: 45,
    date: "In progress",
    duration: "1:45"
  }
];

// Notifications for voice-over artists
const notifications = [
  {
    id: 1,
    type: "task",
    content: "New voice-over task assigned: Animated Character",
    time: "10 minutes ago"
  },
  {
    id: 2,
    type: "approval",
    content: "Your narration for Documentary Scene 3 was approved",
    time: "2 hours ago"
  },
  {
    id: 3,
    type: "deadline",
    content: "Deadline approaching: Character Voiceover - Main Protagonist",
    time: "1 day ago"
  }
];

// Recent messages for voice-over artists
const recentMessages = [
  {
    id: 1,
    sender: "Director",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    message: "Please add more emotion to the character's lines in Scene 5",
    time: "30 minutes ago"
  },
  {
    id: 2,
    sender: "Sound Engineer",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
    message: "Your audio files have been processed. Ready for review.",
    time: "2 hours ago"
  }
];

export default function DashboardPage() {
  return (
    <div className="pl-6 pr-4 py-8 space-y-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Voice-Over Artist Dashboard</h1>
        <Button className="bg-[#ff4e00] hover:bg-[#e04600] text-white rounded-md">
          <Download className="h-4 w-4 mr-2" /> Download Report
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {stats.map((stat, i) => (
          <Card key={i} className="border rounded-lg shadow-sm overflow-hidden">
            <CardContent className="p-5">
              <div>
                <p className="text-sm font-medium text-gray-500">
                  {stat.title}
                </p>
                <div className="flex items-center justify-between mt-3">
                  <h3 className="text-3xl font-bold">{stat.value}</h3>
                  <div className={`${stat.bgColor} p-2 rounded-full`}>
                    <stat.icon className={`h-5 w-5 ${stat.color}`} />
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-3">
                  {stat.change}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Task Overview Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
        <Card className="border rounded-lg shadow-sm overflow-hidden">
          <CardHeader className="pb-2 pt-5 px-5 border-b flex flex-row items-center justify-between">
            <CardTitle className="text-lg font-semibold">Voice-Over Task Performance</CardTitle>
            <Link href="/VoiceOverArtist/dashboard/tasks">
              <Button variant="ghost" size="sm" className="text-[#ff4e00] hover:text-[#e04600]">
                View All
              </Button>
            </Link>
          </CardHeader>
          <CardContent className="px-5 py-5">
            <div className="flex items-center justify-end gap-6 mb-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#22c55e]"></div>
                <span className="text-sm">Completed</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#eab308]"></div>
                <span className="text-sm">Pending</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#ef4444]"></div>
                <span className="text-sm">Overdue</span>
              </div>
            </div>
            <div className="h-[280px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={performanceData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} />
                  <YAxis axisLine={false} tickLine={false} />
                  <Tooltip 
                    contentStyle={{ 
                      borderRadius: '8px', 
                      border: 'none', 
                      boxShadow: '0 4px 12px rgba(0,0,0,0.1)' 
                    }} 
                  />
                  <Bar dataKey="completed" fill="#22c55e" name="Completed" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="pending" fill="#eab308" name="Pending" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="overdue" fill="#ef4444" name="Overdue" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Upcoming Voice-Over Tasks */}
        <Card className="border rounded-lg shadow-sm overflow-hidden">
          <CardHeader className="pb-2 pt-5 px-5 border-b flex flex-row items-center justify-between">
            <CardTitle className="text-lg font-semibold">Upcoming Voice-Over Tasks</CardTitle>
            <Link href="/VoiceOverArtist/dashboard/tasks">
              <Button variant="ghost" size="sm" className="text-[#ff4e00] hover:text-[#e04600]">
                View All
              </Button>
            </Link>
          </CardHeader>
          <CardContent className="px-5 py-5">
            <div className="space-y-4">
              {upcomingVoiceoverTasks.map((task) => {
                const dueDate = new Date(task.dueDate);
                const today = new Date();
                const diffTime = dueDate.getTime() - today.getTime();
                const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
                
                let urgencyClass = "text-gray-600";
                if (diffDays < 0) urgencyClass = "text-red-600";
                else if (diffDays <= 2) urgencyClass = "text-orange-600";
                else if (diffDays <= 5) urgencyClass = "text-yellow-600";
                
                return (
                  <div key={task.id} className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className={`h-10 w-10 rounded-full flex items-center justify-center ${
                        task.status === 'completed' ? 'bg-green-100' : 
                        task.status === 'in-progress' ? 'bg-yellow-100' : 'bg-blue-100'
                      }`}>
                        {task.status === 'completed' ? (
                          <CheckCircle className="h-5 w-5 text-green-600" />
                        ) : task.status === 'in-progress' ? (
                          <Clock className="h-5 w-5 text-yellow-600" />
                        ) : (
                          <Mic className="h-5 w-5 text-blue-600" />
                        )}
                      </div>
                      <div>
                        <h3 className="font-medium">{task.title}</h3>
                        <p className="text-xs text-gray-500">{task.project}</p>
                        <Badge className={`mt-1 ${
                          task.priority === 'high' ? 'bg-red-100 text-red-800' : 
                          task.priority === 'medium' ? 'bg-yellow-100 text-yellow-800' : 
                          'bg-green-100 text-green-800'
                        }`}>
                          {task.priority.charAt(0).toUpperCase() + task.priority.slice(1)} Priority
                        </Badge>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className={`font-medium ${urgencyClass}`}>
                        {diffDays < 0 
                          ? `Overdue by ${Math.abs(diffDays)} days` 
                          : diffDays === 0 
                            ? "Due today" 
                            : `Due in ${diffDays} days`}
                      </p>
                      <p className="text-sm text-gray-500">{task.dueDate}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Audio Uploads and Notifications Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
        {/* Recent Audio Uploads */}
        <Card className="border rounded-lg shadow-sm overflow-hidden">
          <CardHeader className="pb-2 pt-5 px-5 border-b flex flex-row items-center justify-between">
            <CardTitle className="text-lg font-semibold">Recent Audio Uploads</CardTitle>
            <Link href="/VoiceOverArtist/dashboard/uploads">
              <Button variant="ghost" size="sm" className="text-[#ff4e00] hover:text-[#e04600]">
                View All
              </Button>
            </Link>
          </CardHeader>
          <CardContent className="px-5 py-5">
            <div className="space-y-4">
              {recentAudioUploads.map((upload) => (
                <div key={upload.id} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center">
                      <Music className="h-5 w-5 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-medium">{upload.name}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <p className="text-xs text-gray-500">{upload.size}</p>
                        <span className="text-xs text-gray-400">•</span>
                        <p className="text-xs text-gray-500">{upload.duration}</p>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    {upload.progress < 100 ? (
                      <div className="w-24">
                        <Progress value={upload.progress} className="h-2" />
                        <p className="text-xs text-gray-500 mt-1">{upload.progress}% complete</p>
                      </div>
                    ) : (
                      <p className="text-sm text-gray-500">{upload.date}</p>
                    )}
                  </div>
                </div>
              ))}
              <Link href="/VoiceOverArtist/dashboard/uploads">
                <Button className="w-full mt-2 bg-[#ff4e00] hover:bg-[#e04600] text-white">
                  <Upload className="h-4 w-4 mr-2" /> Upload New Audio
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Notifications */}
        <Card className="border rounded-lg shadow-sm overflow-hidden">
          <CardHeader className="pb-2 pt-5 px-5 border-b flex flex-row items-center justify-between">
            <CardTitle className="text-lg font-semibold">Notifications</CardTitle>
            <Link href="/VoiceOverArtist/dashboard/notifications">
              <Button variant="ghost" size="sm" className="text-[#ff4e00] hover:text-[#e04600]">
                View All
              </Button>
            </Link>
          </CardHeader>
          <CardContent className="px-5 py-5">
            <div className="space-y-4">
              {notifications.map((notification) => (
                <div key={notification.id} className="flex items-start gap-3 p-3 border-b last:border-0">
                  <div className={`h-10 w-10 rounded-full flex items-center justify-center ${
                    notification.type === 'task' ? 'bg-blue-100' : 
                    notification.type === 'approval' ? 'bg-green-100' : 'bg-yellow-100'
                  }`}>
                    {notification.type === 'task' ? (
                      <FileText className="h-5 w-5 text-blue-600" />
                    ) : notification.type === 'approval' ? (
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    ) : (
                      <Bell className="h-5 w-5 text-yellow-600" />
                    )}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">{notification.content}</p>
                    <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
                  </div>
                </div>
              ))}
              <Link href="/VoiceOverArtist/dashboard/notifications">
                <Button variant="outline" className="w-full mt-2">
                  View All Notifications
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Chat and Reports Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
        {/* Recent Messages */}
        <Card className="border rounded-lg shadow-sm overflow-hidden">
          <CardHeader className="pb-2 pt-5 px-5 border-b flex flex-row items-center justify-between">
            <CardTitle className="text-lg font-semibold">Recent Messages</CardTitle>
            <Link href="/VoiceOverArtist/dashboard/chat">
              <Button variant="ghost" size="sm" className="text-[#ff4e00] hover:text-[#e04600]">
                View All
              </Button>
            </Link>
          </CardHeader>
          <CardContent className="px-5 py-5">
            <div className="space-y-4">
              {recentMessages.map((message) => (
                <div key={message.id} className="flex items-start gap-3 p-3 border-b last:border-0">
                  <Avatar className="h-10 w-10 border border-gray-200">
                    <AvatarImage src={message.avatar} alt={message.sender} />
                    <AvatarFallback>{message.sender.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium">{message.sender}</h3>
                      <p className="text-xs text-gray-500">{message.time}</p>
                    </div>
                    <p className="text-sm text-gray-700 mt-1">{message.message}</p>
                  </div>
                </div>
              ))}
              <Link href="/VoiceOverArtist/dashboard/chat">
                <Button className="w-full mt-2 bg-[#ff4e00] hover:bg-[#e04600] text-white">
                  <MessageSquare className="h-4 w-4 mr-2" /> Open Chat
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Performance Reports */}
        <Card className="border rounded-lg shadow-sm overflow-hidden">
          <CardHeader className="pb-2 pt-5 px-5 border-b flex flex-row items-center justify-between">
            <CardTitle className="text-lg font-semibold">Performance Reports</CardTitle>
            <Link href="/VoiceOverArtist/dashboard/reports">
              <Button variant="ghost" size="sm" className="text-[#ff4e00] hover:text-[#e04600]">
                View Detailed Reports
              </Button>
            </Link>
          </CardHeader>
          <CardContent className="px-5 py-5">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="border rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-medium">Approval Rate</h3>
                  <Badge className="bg-green-100 text-green-800">95%</Badge>
                </div>
                <div className="h-2 bg-gray-100 rounded-full mb-2">
                  <div className="h-2 bg-green-500 rounded-full" style={{ width: '95%' }}></div>
                </div>
                <p className="text-xs text-gray-500">19 of 20 recordings approved</p>
              </div>
              
              <div className="border rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-medium">On-time Delivery</h3>
                  <Badge className="bg-yellow-100 text-yellow-800">88%</Badge>
                </div>
                <div className="h-2 bg-gray-100 rounded-full mb-2">
                  <div className="h-2 bg-yellow-500 rounded-full" style={{ width: '88%' }}></div>
                </div>
                <p className="text-xs text-gray-500">22 of 25 tasks delivered on time</p>
              </div>
              
              <div className="border rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-medium">Quality Score</h3>
                  <Badge className="bg-blue-100 text-blue-800">4.7/5</Badge>
                </div>
                <div className="h-2 bg-gray-100 rounded-full mb-2">
                  <div className="h-2 bg-blue-500 rounded-full" style={{ width: '94%' }}></div>
                </div>
                <p className="text-xs text-gray-500">Based on director feedback</p>
              </div>
            </div>
            
            <div className="mt-6 border-t pt-4">
              <h3 className="font-medium mb-3">Recent Approvals</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Narration - Documentary Segment</p>
                      <p className="text-xs text-gray-500">Approved by Director</p>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500">Yesterday</p>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Character Voice - Supporting Role</p>
                      <p className="text-xs text-gray-500">Approved by Sound Director</p>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500">3 days ago</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Voice Recording Tools Section */}
      <div className="mt-8">
        <Card className="border rounded-lg shadow-sm overflow-hidden">
          <CardHeader className="pb-2 pt-5 px-5 border-b">
            <CardTitle className="text-lg font-semibold">Voice Recording Tools</CardTitle>
          </CardHeader>
          <CardContent className="px-5 py-5">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link href="/VoiceOverArtist/dashboard/recording">
                <div className="border rounded-lg p-4 text-center hover:border-[#ff4e00] hover:bg-[#ff4e00]/5 transition-colors cursor-pointer">
                  <div className="h-12 w-12 rounded-full bg-[#ff4e00]/10 flex items-center justify-center mx-auto mb-3">
                    <Mic className="h-6 w-6 text-[#ff4e00]" />
                  </div>
                  <h3 className="font-medium">Record Audio</h3>
                  <p className="text-xs text-gray-500 mt-1">Start a new recording session</p>
                </div>
              </Link>
              
              <Link href="/VoiceOverArtist/dashboard/scripts">
                <div className="border rounded-lg p-4 text-center hover:border-[#ff4e00] hover:bg-[#ff4e00]/5 transition-colors cursor-pointer">
                  <div className="h-12 w-12 rounded-full bg-[#ff4e00]/10 flex items-center justify-center mx-auto mb-3">
                    <FileText className="h-6 w-6 text-[#ff4e00]" />
                  </div>
                  <h3 className="font-medium">View Scripts</h3>
                  <p className="text-xs text-gray-500 mt-1">Access your assigned scripts</p>
                </div>
              </Link>
              
              <Link href="/VoiceOverArtist/dashboard/library">
                <div className="border rounded-lg p-4 text-center hover:border-[#ff4e00] hover:bg-[#ff4e00]/5 transition-colors cursor-pointer">
                  <div className="h-12 w-12 rounded-full bg-[#ff4e00]/10 flex items-center justify-center mx-auto mb-3">
                    <Volume2 className="h-6 w-6 text-[#ff4e00]" />
                  </div>
                  <h3 className="font-medium">Audio Library</h3>
                  <p className="text-xs text-gray-500 mt-1">Browse your recorded audio files</p>
                </div>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}