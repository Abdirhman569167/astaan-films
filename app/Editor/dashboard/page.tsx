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
  Video,
  Bell,
  MessageSquare,
  Scissors,
  BarChart2,
  Calendar,
  FileText,
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

const stats = [
  {
    title: "Total Users",
    value: "25",
    icon: Users,
    change: "+2 this week",
    color: "text-blue-600",
    bgColor: "bg-blue-100",
  },
  {
    title: "Completed Tasks",
    value: "156",
    icon: CheckCircle,
    change: "+23 this week",
    color: "text-green-600",
    bgColor: "bg-green-100",
  },
  {
    title: "Pending Tasks",
    value: "42",
    icon: Clock,
    change: "-5 this week",
    color: "text-yellow-600",
    bgColor: "bg-yellow-100",
  },
  {
    title: "Overdue Tasks",
    value: "8",
    icon: AlertCircle,
    change: "+3 this week",
    color: "text-red-600",
    bgColor: "bg-red-100",
  },
];

// New data for upcoming deadlines
const upcomingDeadlines = [
  {
    id: 1,
    title: "Scene 4 - Final Cut",
    dueDate: "2024-04-10",
    priority: "high",
    status: "in-progress"
  },
  {
    id: 2,
    title: "Audio Sync - Episode 2",
    dueDate: "2024-04-12",
    priority: "medium",
    status: "todo"
  },
  {
    id: 3,
    title: "Color Grading - Trailer",
    dueDate: "2024-04-15",
    priority: "high",
    status: "in-progress"
  }
];

// New data for recent uploads
const recentUploads = [
  {
    id: 1,
    name: "Final_Cut_Scene1.mp4",
    size: "1.2 GB",
    progress: 100,
    date: "2 hours ago"
  },
  {
    id: 2,
    name: "Audio_Track_Final.wav",
    size: "320 MB",
    progress: 100,
    date: "Yesterday"
  },
  {
    id: 3,
    name: "Scene3_WIP.mp4",
    size: "1.5 GB",
    progress: 45,
    date: "In progress"
  }
];

// New data for notifications
const notifications = [
  {
    id: 1,
    type: "task",
    content: "New task assigned: Scene 5 editing",
    time: "10 minutes ago"
  },
  {
    id: 2,
    type: "approval",
    content: "Your submission was approved",
    time: "2 hours ago"
  },
  {
    id: 3,
    type: "deadline",
    content: "Deadline approaching: Scene 4 - Final Cut",
    time: "1 day ago"
  }
];

// New data for recent messages
const recentMessages = [
  {
    id: 1,
    sender: "Director",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    message: "Please check the notes on Scene 3",
    time: "30 minutes ago"
  },
  {
    id: 2,
    sender: "Sound Engineer",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
    message: "Audio files for Scene 2 are ready",
    time: "2 hours ago"
  }
];

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="pl-6 pr-4 py-8 space-y-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Dashboard Overview</h1>
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
            <CardTitle className="text-lg font-semibold">Task Performance</CardTitle>
            <Link href="/Editor/dashboard/tasks">
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

        {/* Upcoming Deadlines */}
        <Card className="border rounded-lg shadow-sm overflow-hidden">
          <CardHeader className="pb-2 pt-5 px-5 border-b flex flex-row items-center justify-between">
            <CardTitle className="text-lg font-semibold">Upcoming Deadlines</CardTitle>
            <Link href="/Editor/dashboard/tasks">
              <Button variant="ghost" size="sm" className="text-[#ff4e00] hover:text-[#e04600]">
                View All
              </Button>
            </Link>
          </CardHeader>
          <CardContent className="px-5 py-5">
            <div className="space-y-4">
              {upcomingDeadlines.map((deadline) => {
                const dueDate = new Date(deadline.dueDate);
                const today = new Date();
                const diffTime = dueDate.getTime() - today.getTime();
                const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
                
                let urgencyClass = "text-gray-600";
                if (diffDays < 0) urgencyClass = "text-red-600";
                else if (diffDays <= 2) urgencyClass = "text-orange-600";
                else if (diffDays <= 5) urgencyClass = "text-yellow-600";
                
                return (
                  <div key={deadline.id} className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className={`h-10 w-10 rounded-full flex items-center justify-center ${
                        deadline.status === 'completed' ? 'bg-green-100' : 
                        deadline.status === 'in-progress' ? 'bg-yellow-100' : 'bg-blue-100'
                      }`}>
                        {deadline.status === 'completed' ? (
                          <CheckCircle className="h-5 w-5 text-green-600" />
                        ) : deadline.status === 'in-progress' ? (
                          <Clock className="h-5 w-5 text-yellow-600" />
                        ) : (
                          <Calendar className="h-5 w-5 text-blue-600" />
                        )}
                      </div>
                      <div>
                        <h3 className="font-medium">{deadline.title}</h3>
                        <Badge className={`mt-1 ${
                          deadline.priority === 'high' ? 'bg-red-100 text-red-800' : 
                          deadline.priority === 'medium' ? 'bg-yellow-100 text-yellow-800' : 
                          'bg-green-100 text-green-800'
                        }`}>
                          {deadline.priority.charAt(0).toUpperCase() + deadline.priority.slice(1)} Priority
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
                      <p className="text-sm text-gray-500">{deadline.dueDate}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* File Upload and Notifications Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
        {/* Recent Uploads */}
        <Card className="border rounded-lg shadow-sm overflow-hidden">
          <CardHeader className="pb-2 pt-5 px-5 border-b flex flex-row items-center justify-between">
            <CardTitle className="text-lg font-semibold">Recent Uploads</CardTitle>
            <Link href="/Editor/dashboard/uploads">
              <Button variant="ghost" size="sm" className="text-[#ff4e00] hover:text-[#e04600]">
                View All
              </Button>
            </Link>
          </CardHeader>
          <CardContent className="px-5 py-5">
            <div className="space-y-4">
              {recentUploads.map((upload) => (
                <div key={upload.id} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                      <Video className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-medium">{upload.name}</h3>
                      <p className="text-sm text-gray-500">{upload.size}</p>
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
              <Link href="/Editor/dashboard/uploads">
                <Button className="w-full mt-2 bg-[#ff4e00] hover:bg-[#e04600] text-white">
                  <Upload className="h-4 w-4 mr-2" /> Upload New File
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Notifications */}
        <Card className="border rounded-lg shadow-sm overflow-hidden">
          <CardHeader className="pb-2 pt-5 px-5 border-b flex flex-row items-center justify-between">
            <CardTitle className="text-lg font-semibold">Notifications</CardTitle>
            <Link href="/Editor/dashboard/notifications">
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
              <Link href="/Editor/dashboard/notifications">
                <Button variant="outline" className="w-full mt-2">
                  View All Notifications
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Chat and Editing Tools Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
        {/* Recent Messages */}
        <Card className="border rounded-lg shadow-sm overflow-hidden">
          <CardHeader className="pb-2 pt-5 px-5 border-b flex flex-row items-center justify-between">
            <CardTitle className="text-lg font-semibold">Recent Messages</CardTitle>
            <Link href="/Editor/dashboard/chat">
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
              <Link href="/Editor/dashboard/chat">
                <Button className="w-full mt-2 bg-[#ff4e00] hover:bg-[#e04600] text-white">
                  <MessageSquare className="h-4 w-4 mr-2" /> Open Chat
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Editing Tools */}
        <Card className="border rounded-lg shadow-sm overflow-hidden">
          <CardHeader className="pb-2 pt-5 px-5 border-b">
            <CardTitle className="text-lg font-semibold">Editing Tools</CardTitle>
          </CardHeader>
          <CardContent className="px-5 py-5">
            <div className="grid grid-cols-2 gap-4">
              <Link href="/Editor/dashboard/editing">
                <div className="border rounded-lg p-4 text-center hover:border-[#ff4e00] hover:bg-[#ff4e00]/5 transition-colors cursor-pointer">
                  <div className="h-12 w-12 rounded-full bg-[#ff4e00]/10 flex items-center justify-center mx-auto mb-3">
                    <Scissors className="h-6 w-6 text-[#ff4e00]" />
                  </div>
                  <h3 className="font-medium">Trim & Cut</h3>
                  <p className="text-xs text-gray-500 mt-1">Edit video segments</p>
                </div>
              </Link>
              
              <Link href="/Editor/dashboard/editing">
                <div className="border rounded-lg p-4 text-center hover:border-[#ff4e00] hover:bg-[#ff4e00]/5 transition-colors cursor-pointer">
                  <div className="h-12 w-12 rounded-full bg-[#ff4e00]/10 flex items-center justify-center mx-auto mb-3">
                    <Video className="h-6 w-6 text-[#ff4e00]" />
                  </div>
                  <h3 className="font-medium">Merge Clips</h3>
                  <p className="text-xs text-gray-500 mt-1">Combine video segments</p>
                </div>
              </Link>
              
              <Link href="/Editor/dashboard/editing">
                <div className="border rounded-lg p-4 text-center hover:border-[#ff4e00] hover:bg-[#ff4e00]/5 transition-colors cursor-pointer">
                  <div className="h-12 w-12 rounded-full bg-[#ff4e00]/10 flex items-center justify-center mx-auto mb-3">
                    <Activity className="h-6 w-6 text-[#ff4e00]" />
                  </div>
                  <h3 className="font-medium">Audio Sync</h3>
                  <p className="text-xs text-gray-500 mt-1">Synchronize audio tracks</p>
                </div>
              </Link>
              
              <Link href="/Editor/dashboard/editing">
                <div className="border rounded-lg p-4 text-center hover:border-[#ff4e00] hover:bg-[#ff4e00]/5 transition-colors cursor-pointer">
                  <div className="h-12 w-12 rounded-full bg-[#ff4e00]/10 flex items-center justify-center mx-auto mb-3">
                    <BarChart2 className="h-6 w-6 text-[#ff4e00]" />
                  </div>
                  <h3 className="font-medium">Color Grading</h3>
                  <p className="text-xs text-gray-500 mt-1">Adjust color profiles</p>
                </div>
              </Link>
            </div>
            
            <Link href="/Editor/dashboard/editing">
              <Button className="w-full mt-4 bg-[#ff4e00] hover:bg-[#e04600] text-white">
                Open Editing Suite
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>

      {/* Reports Section */}
      <div className="mt-8">
        <Card className="border rounded-lg shadow-sm overflow-hidden">
          <CardHeader className="pb-2 pt-5 px-5 border-b flex flex-row items-center justify-between">
            <CardTitle className="text-lg font-semibold">Work Progress Reports</CardTitle>
            <Link href="/Editor/dashboard/performance">
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
                  <Badge className="bg-green-100 text-green-800">92%</Badge>
                </div>
                <div className="h-2 bg-gray-100 rounded-full mb-2">
                  <div className="h-2 bg-green-500 rounded-full" style={{ width: '92%' }}></div>
                </div>
                <p className="text-xs text-gray-500">23 of 25 submissions approved</p>
              </div>
              
              <div className="border rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-medium">On-time Delivery</h3>
                  <Badge className="bg-yellow-100 text-yellow-800">85%</Badge>
                </div>
                <div className="h-2 bg-gray-100 rounded-full mb-2">
                  <div className="h-2 bg-yellow-500 rounded-full" style={{ width: '85%' }}></div>
                </div>
                <p className="text-xs text-gray-500">17 of 20 projects delivered on time</p>
              </div>
              
              <div className="border rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-medium">Quality Score</h3>
                  <Badge className="bg-blue-100 text-blue-800">4.8/5</Badge>
                </div>
                <div className="h-2 bg-gray-100 rounded-full mb-2">
                  <div className="h-2 bg-blue-500 rounded-full" style={{ width: '96%' }}></div>
                </div>
                <p className="text-xs text-gray-500">Based on client feedback</p>
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
                      <p className="text-sm font-medium">Scene 2 - Final Cut</p>
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
                      <p className="text-sm font-medium">Audio Mix - Episode 1</p>
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
    </div>
  );
}