"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  LineChart,
  Line,
} from "recharts";
import {
  Users,
  CheckCircle,
  Clock,
  AlertCircle,
  Activity,
  Download,
  TrendingUp,
  TrendingDown,
  Bell,
  MessageSquare,
  AlertTriangle,
  Info,
  PlayCircle,
  Calendar,
  Film,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

const projectProgressData = [
  { name: "Week 1", actual: 20, expected: 25 },
  { name: "Week 2", actual: 45, expected: 50 },
  { name: "Week 3", actual: 65, expected: 75 },
  { name: "Week 4", actual: 90, expected: 100 },
  { name: "Week 5", actual: 120, expected: 125 },
  { name: "Week 6", actual: 150, expected: 150 },
];

const teamPerformanceData = [
  { name: "Editing", onTime: 8, delayed: 2, completed: 6 },
  { name: "Sound", onTime: 5, delayed: 1, completed: 4 },
  { name: "Voice", onTime: 7, delayed: 3, completed: 5 },
  { name: "Translation", onTime: 10, delayed: 1, completed: 8 },
];

const stats = [
  {
    title: "Active Projects",
    value: "7",
    icon: Film,
    change: "+1 this week",
    color: "text-blue-600",
    bgColor: "bg-blue-100",
    trend: "up",
  },
  {
    title: "Completed Tasks",
    value: "42",
    icon: CheckCircle,
    change: "+8 this week",
    color: "text-green-600",
    bgColor: "bg-green-100",
    trend: "up",
  },
  {
    title: "Pending Reviews",
    value: "16",
    icon: Clock,
    change: "-3 this week",
    color: "text-amber-600",
    bgColor: "bg-amber-100",
    trend: "down",
  },
  {
    title: "Team Members",
    value: "14",
    icon: Users,
    change: "No change",
    color: "text-purple-600",
    bgColor: "bg-purple-100",
    trend: "neutral",
  },
];

type NotificationType = "info" | "warning" | "success" | "message";

interface Notification {
  id: number;
  title: string;
  message: string;
  time: string;
  type: NotificationType;
  isRead: boolean;
}

const notifications: Notification[] = [
  {
    id: 1,
    title: "Review Required",
    message: "The editing team has submitted scene 12 for your approval",
    time: "10 minutes ago",
    type: "info",
    isRead: false,
  },
  {
    id: 2,
    title: "Deadline Alert",
    message: "Project 'Desert Storm' final delivery is due in 48 hours",
    time: "1 hour ago",
    type: "warning",
    isRead: false,
  },
  {
    id: 3,
    title: "Task Completed",
    message: "Voice-over for Project 'Ocean Blue' has been completed",
    time: "2 hours ago",
    type: "success",
    isRead: true,
  },
  {
    id: 4,
    title: "Team Meeting",
    message: "Weekly progress review at 2:00 PM today",
    time: "3 hours ago",
    type: "message",
    isRead: true,
  },
  {
    id: 5,
    title: "Resource Request",
    message: "Sound team needs additional equipment for tomorrow's session",
    time: "Yesterday",
    type: "warning",
    isRead: true,
  },
];

const notificationIcons: Record<NotificationType, JSX.Element> = {
  info: <Info className="h-4 w-4 text-blue-500" />,
  warning: <AlertTriangle className="h-4 w-4 text-amber-500" />,
  success: <CheckCircle className="h-4 w-4 text-green-500" />,
  message: <MessageSquare className="h-4 w-4 text-purple-500" />,
};

const notificationColors: Record<NotificationType, { bg: string; border: string }> = {
  info: { bg: 'bg-blue-50', border: 'border-blue-100' },
  warning: { bg: 'bg-amber-50', border: 'border-amber-100' },
  success: { bg: 'bg-green-50', border: 'border-green-100' },
  message: { bg: 'bg-purple-50', border: 'border-purple-100' },
};

const upcomingTasks = [
  {
    id: 1,
    title: "Review Final Cut - Project Sunrise",
    date: "Today, 3:00 PM",
    assignee: "John Doe",
    priority: "High",
  },
  {
    id: 2,
    title: "Voice-over Approval - Mountain Series",
    date: "Tomorrow, 11:00 AM",
    assignee: "Sarah Lee",
    priority: "Medium",
  },
  {
    id: 3,
    title: "Budget Review - Ocean Blue",
    date: "Oct 15, 2:00 PM",
    assignee: "You",
    priority: "High",
  },
  {
    id: 4,
    title: "Team Performance Evaluation",
    date: "Oct 16, 10:00 AM",
    assignee: "You",
    priority: "Medium",
  },
];

export default function SupervisorDashboard() {
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "High":
        return "bg-red-100 text-red-800";
      case "Medium":
        return "bg-amber-100 text-amber-800";
      case "Low":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="p-6 md:p-8 bg-gray-50/50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Supervisor Dashboard</h1>
            <p className="text-gray-500 mt-1">Monitor team progress and project milestones</p>
          </div>
          <div className="flex gap-3">
            <Button className="bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 rounded-md shadow-sm">
              <Calendar className="h-4 w-4 mr-2 text-gray-500" /> Schedule Meeting
            </Button>
            <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white rounded-md shadow-md hover:shadow-lg transition-all">
              <Download className="h-4 w-4 mr-2" /> Download Report
            </Button>
          </div>
        </div>

        {/* Stat Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
          {stats.map((stat, i) => (
            <Card key={i} className="border rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-500">{stat.title}</p>
                    <h3 className="text-3xl font-bold mt-2 text-gray-900">{stat.value}</h3>
                  </div>
                  <div className={`${stat.bgColor} p-3 rounded-full`}>
                    <stat.icon className={`h-5 w-5 ${stat.color}`} />
                  </div>
                </div>
                <div className="flex items-center mt-4">
                  {stat.trend === "up" ? (
                    <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                  ) : stat.trend === "down" ? (
                    <TrendingDown className="h-4 w-4 text-red-500 mr-1" />
                  ) : (
                    <Activity className="h-4 w-4 text-gray-400 mr-1" />
                  )}
                  <p className={`text-sm ${
                    stat.trend === "up" 
                      ? (stat.title === "Pending Reviews" ? "text-red-500" : "text-green-500") 
                      : stat.trend === "down" 
                        ? (stat.title === "Pending Reviews" ? "text-green-500" : "text-red-500")
                        : "text-gray-500"
                  }`}>
                    {stat.change}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Project Progress Chart */}
          <Card className="border-0 rounded-xl shadow-md overflow-hidden bg-white lg:col-span-2">
            <CardHeader className="pb-2 pt-6 px-6 border-b border-gray-100">
              <CardTitle className="text-xl font-semibold text-gray-900">Project Progress</CardTitle>
            </CardHeader>
            <CardContent className="px-6 py-6">
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={projectProgressData} margin={{ top: 10, right: 10, left: 0, bottom: 10 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} />
                    <YAxis axisLine={false} tickLine={false} />
                    <Tooltip
                      contentStyle={{
                        borderRadius: '8px',
                        border: 'none',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                        fontSize: '12px',
                      }}
                      cursor={{ fill: 'rgba(0, 0, 0, 0.05)' }}
                    />
                    <Legend 
                      align="right" 
                      verticalAlign="top"
                      wrapperStyle={{ paddingBottom: "20px" }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="actual" 
                      name="Actual Progress" 
                      stroke="#10b981" 
                      strokeWidth={3} 
                      dot={{ r: 4, fill: "#10b981", strokeWidth: 2, stroke: "#fff" }}
                      activeDot={{ r: 6, fill: "#10b981", strokeWidth: 2, stroke: "#fff" }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="expected" 
                      name="Expected Progress" 
                      stroke="#f59e0b" 
                      strokeWidth={3} 
                      strokeDasharray="5 5"
                      dot={{ r: 4, fill: "#f59e0b", strokeWidth: 2, stroke: "#fff" }}
                      activeDot={{ r: 6, fill: "#f59e0b", strokeWidth: 2, stroke: "#fff" }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Notifications Update */}
          <Card className="border-0 rounded-xl shadow-md overflow-hidden bg-white">
            <CardHeader className="pb-2 pt-6 px-6 border-b border-gray-100">
              <div className="flex items-center justify-between">
                <CardTitle className="text-xl font-semibold text-gray-900">Notifications</CardTitle>
                <div className="flex items-center gap-2">
                  <div className="bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
                    2 new
                  </div>
                  <Bell className="h-5 w-5 text-gray-400" />
                </div>
              </div>
            </CardHeader>
            <CardContent className="px-6 py-4">
              <div className="space-y-3 max-h-[300px] overflow-y-auto">
                {notifications.map((notification) => (
                  <div
                    key={notification.id}
                    className={`p-3 rounded-lg border ${notification.isRead ? 'bg-white' : `${notificationColors[notification.type].bg} ${notificationColors[notification.type].border}`} transition-colors duration-200 hover:shadow-sm`}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`mt-0.5 p-2 rounded-full ${notificationColors[notification.type].bg}`}>
                        {notificationIcons[notification.type]}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2">
                          <p className="text-sm font-medium text-gray-900">
                            {notification.title}
                          </p>
                          <span className="text-xs text-gray-500 whitespace-nowrap">
                            {notification.time}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 mt-0.5 line-clamp-2">
                          {notification.message}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="ghost" className="w-full mt-4 text-gray-600 hover:text-gray-900">
                View All Notifications
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Team Performance and Upcoming Tasks */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
          {/* Team Performance */}
          <Card className="border-0 rounded-xl shadow-md overflow-hidden bg-white">
            <CardHeader className="pb-2 pt-6 px-6 border-b border-gray-100">
              <CardTitle className="text-xl font-semibold text-gray-900">Team Performance</CardTitle>
            </CardHeader>
            <CardContent className="px-6 py-6">
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={teamPerformanceData} margin={{ top: 10, right: 10, left: 0, bottom: 10 }} barGap={4} barSize={20}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} />
                    <YAxis axisLine={false} tickLine={false} />
                    <Tooltip
                      contentStyle={{
                        borderRadius: '8px',
                        border: 'none',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                        fontSize: '12px',
                      }}
                      cursor={{ fill: 'rgba(0, 0, 0, 0.05)' }}
                    />
                    <Legend 
                      align="right" 
                      verticalAlign="top"
                      wrapperStyle={{ paddingBottom: "20px" }}
                    />
                    <Bar dataKey="completed" name="Completed" fill="#10b981" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="onTime" name="On Time" fill="#60a5fa" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="delayed" name="Delayed" fill="#f97316" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Upcoming Tasks */}
          <Card className="border-0 rounded-xl shadow-md overflow-hidden bg-white">
            <CardHeader className="pb-2 pt-6 px-6 border-b border-gray-100">
              <div className="flex items-center justify-between">
                <CardTitle className="text-xl font-semibold text-gray-900">Upcoming Tasks</CardTitle>
                <Button variant="outline" size="sm" className="text-xs h-8 px-3">
                  <Calendar className="h-3.5 w-3.5 mr-1" /> View Calendar
                </Button>
              </div>
            </CardHeader>
            <CardContent className="px-6 py-4">
              <div className="space-y-4">
                {upcomingTasks.map((task) => (
                  <div key={task.id} className="p-4 border border-gray-100 rounded-lg hover:shadow-sm transition-shadow">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-medium text-gray-900">{task.title}</h4>
                        <div className="flex items-center mt-1 gap-2">
                          <Clock className="h-3.5 w-3.5 text-gray-400" />
                          <span className="text-xs text-gray-500">{task.date}</span>
                        </div>
                      </div>
                      <Badge className={`text-xs ${getPriorityColor(task.priority)}`}>
                        {task.priority}
                      </Badge>
                    </div>
                    <div className="flex justify-between items-center mt-3">
                      <div className="flex items-center">
                        <div className="h-6 w-6 rounded-full bg-orange-100 flex items-center justify-center text-xs font-medium text-orange-800">
                          {task.assignee === "You" ? "Y" : task.assignee.charAt(0)}
                        </div>
                        <span className="text-xs text-gray-500 ml-2">{task.assignee}</span>
                      </div>
                      <Button variant="ghost" size="sm" className="text-xs h-7 px-2 text-orange-600 hover:text-orange-700 hover:bg-orange-50">
                        View Details
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}