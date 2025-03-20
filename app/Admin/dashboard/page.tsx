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
} from "lucide-react";

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
    trend: "up",
  },
  {
    title: "Completed Tasks",
    value: "156",
    icon: CheckCircle,
    change: "+23 this week",
    color: "text-green-600",
    bgColor: "bg-green-100",
    trend: "up",
  },
  {
    title: "Pending Tasks",
    value: "42",
    icon: Clock,
    change: "-5 this week",
    color: "text-amber-600",
    bgColor: "bg-amber-100",
    trend: "down",
  },
  {
    title: "Overdue Tasks",
    value: "8",
    icon: AlertCircle,
    change: "+3 this week",
    color: "text-red-600",
    bgColor: "bg-red-100",
    trend: "up",
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
    title: "New Project Update",
    message: "The storyboard for Scene 7 has been approved",
    time: "Just now",
    type: "success",
    isRead: false,
  },
  {
    id: 2,
    title: "Deadline Approaching",
    message: "VFX rendering deadline in 2 days",
    time: "5 minutes ago",
    type: "warning",
    isRead: false,
  },
  {
    id: 3,
    title: "New Comment",
    message: "Director left feedback on the latest cut",
    time: "1 hour ago",
    type: "message",
    isRead: true,
  },
  {
    id: 4,
    title: "System Update",
    message: "New rendering farm capacity available",
    time: "2 hours ago",
    type: "info",
    isRead: true,
  },
  {
    id: 5,
    title: "Resource Alert",
    message: "Storage space running low - 85% used",
    time: "3 hours ago",
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

export default function DashboardPage() {
  return (
    <div className="p-6 md:p-8 bg-gray-50/50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Dashboard Overview</h1>
            <p className="text-gray-500 mt-1">Track your project's progress and team performance</p>
          </div>
          <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white rounded-md shadow-md hover:shadow-lg transition-all">
            <Download className="h-4 w-4 mr-2" /> Download Report
          </Button>
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
                  ) : (
                    <TrendingDown className="h-4 w-4 text-red-500 mr-1" />
                  )}
                  <p className={`text-sm ${stat.trend === "up" ? (stat.title === "Overdue Tasks" ? "text-red-500" : "text-green-500") : "text-green-500"}`}>
                    {stat.change}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Charts and Notifications */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Performance Chart */}
          <Card className="border-0 rounded-xl shadow-md overflow-hidden bg-white">
            <CardHeader className="pb-2 pt-6 px-6 border-b border-gray-100">
              <CardTitle className="text-xl font-semibold text-gray-900">Task Performance</CardTitle>
            </CardHeader>
            <CardContent className="px-6 py-6">
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={performanceData} margin={{ top: 10, right: 10, left: 0, bottom: 10 }}>
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
                    <Bar dataKey="completed" fill="#10b981" name="Completed" radius={[4, 4, 0, 0]} barSize={30} />
                    <Bar dataKey="pending" fill="#f59e0b" name="Pending" radius={[4, 4, 0, 0]} barSize={30} />
                    <Bar dataKey="overdue" fill="#ef4444" name="Overdue" radius={[4, 4, 0, 0]} barSize={30} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Notifications Update */}
          <Card className="border-0 rounded-xl shadow-md overflow-hidden bg-white">
            <CardHeader className="pb-2 pt-6 px-6 border-b border-gray-100">
              <div className="flex items-center justify-between">
                <CardTitle className="text-xl font-semibold text-gray-900">Notifications Update</CardTitle>
                <div className="flex items-center gap-2">
                  <div className="bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
                    2 new
                  </div>
                  <Bell className="h-5 w-5 text-gray-400" />
                </div>
              </div>
            </CardHeader>
            <CardContent className="px-6 py-4">
              <div className="space-y-3">
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
      </div>
    </div>
  );
}