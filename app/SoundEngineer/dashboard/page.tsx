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
} from "recharts";
import {
  Users,
  CheckCircle,
  Clock,
  AlertCircle,
  Activity,
  Download,
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

export default function DashboardPage() {
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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
        <Card className="border rounded-lg shadow-sm overflow-hidden">
          <CardHeader className="pb-2 pt-5 px-5 border-b">
            <CardTitle className="text-lg font-semibold">Task Performance</CardTitle>
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

        <Card className="border rounded-lg shadow-sm overflow-hidden">
          <CardHeader className="pb-2 pt-5 px-5 border-b">
            <CardTitle className="text-lg font-semibold">Recent Activity</CardTitle>
          </CardHeader>
          <CardContent className="px-5 py-5">
            <div className="space-y-5">
              {[1, 2, 3, 4, 5].map((_, i) => (
                <div key={i} className="flex items-center gap-3 pb-4 border-b last:border-0 last:pb-0">
                  <div className="h-9 w-9 rounded-full bg-gray-100 flex items-center justify-center">
                    <Activity className="h-4 w-4 text-[#ff4e00]" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">
                      Task "Avatar 3 Scene 5" completed
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      2 hours ago by John Doe
                    </p>
                  </div>
                  <div className="text-xs text-[#ff4e00] font-medium">View</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}