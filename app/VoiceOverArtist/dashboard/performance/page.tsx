"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowDown, ArrowUp, BarChart3, Download, TrendingUp, Users } from "lucide-react";

const performanceData = {
  overview: {
    totalViews: "1.2M",
    viewsChange: "+12%",
    uniqueVisitors: "450K",
    visitorsChange: "+8%",
    avgWatchTime: "42 min",
    watchTimeChange: "+15%",
    completionRate: "68%",
    completionChange: "+5%"
  },
  topMovies: [
    {
      title: "Dune",
      views: "125K",
      change: "+18%",
      trend: "up"
    },
    {
      title: "The Batman",
      views: "98K",
      change: "+12%",
      trend: "up"
    },
    {
      title: "No Time to Die",
      views: "87K",
      change: "-3%",
      trend: "down"
    },
    {
      title: "Spider-Man: No Way Home",
      views: "76K",
      change: "+22%",
      trend: "up"
    },
    {
      title: "Black Widow",
      views: "65K",
      change: "-5%",
      trend: "down"
    }
  ],
  demographics: {
    age: [
      { group: "18-24", percentage: 28 },
      { group: "25-34", percentage: 35 },
      { group: "35-44", percentage: 22 },
      { group: "45-54", percentage: 10 },
      { group: "55+", percentage: 5 }
    ],
    gender: [
      { group: "Male", percentage: 58 },
      { group: "Female", percentage: 40 },
      { group: "Other", percentage: 2 }
    ]
  }
};

export default function PerformancePage() {
  return (
    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <div className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">Performance Analytics</h1>
          <Button variant="outline" className="flex items-center gap-2">
            <Download className="h-4 w-4" /> Export Report
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="p-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-gray-500 mb-1">Total Views</p>
                <h3 className="text-2xl font-bold">{performanceData.overview.totalViews}</h3>
              </div>
              <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                <BarChart3 className="h-5 w-5 text-blue-600" />
              </div>
            </div>
            <div className="mt-2 flex items-center text-sm">
              <span className={`flex items-center ${performanceData.overview.viewsChange.includes('+') ? 'text-green-600' : 'text-red-600'}`}>
                {performanceData.overview.viewsChange.includes('+') ? (
                  <ArrowUp className="h-3 w-3 mr-1" />
                ) : (
                  <ArrowDown className="h-3 w-3 mr-1" />
                )}
                {performanceData.overview.viewsChange}
              </span>
              <span className="text-gray-500 ml-2">vs last month</span>
            </div>
          </Card>
          
          <Card className="p-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-gray-500 mb-1">Unique Visitors</p>
                <h3 className="text-2xl font-bold">{performanceData.overview.uniqueVisitors}</h3>
              </div>
              <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center">
                <Users className="h-5 w-5 text-purple-600" />
              </div>
            </div>
            <div className="mt-2 flex items-center text-sm">
              <span className={`flex items-center ${performanceData.overview.visitorsChange.includes('+') ? 'text-green-600' : 'text-red-600'}`}>
                {performanceData.overview.visitorsChange.includes('+') ? (
                  <ArrowUp className="h-3 w-3 mr-1" />
                ) : (
                  <ArrowDown className="h-3 w-3 mr-1" />
                )}
                {performanceData.overview.visitorsChange}
              </span>
              <span className="text-gray-500 ml-2">vs last month</span>
            </div>
          </Card>
          
          <Card className="p-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-gray-500 mb-1">Avg. Watch Time</p>
                <h3 className="text-2xl font-bold">{performanceData.overview.avgWatchTime}</h3>
              </div>
              <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                <TrendingUp className="h-5 w-5 text-green-600" />
              </div>
            </div>
            <div className="mt-2 flex items-center text-sm">
              <span className={`flex items-center ${performanceData.overview.watchTimeChange.includes('+') ? 'text-green-600' : 'text-red-600'}`}>
                {performanceData.overview.watchTimeChange.includes('+') ? (
                  <ArrowUp className="h-3 w-3 mr-1" />
                ) : (
                  <ArrowDown className="h-3 w-3 mr-1" />
                )}
                {performanceData.overview.watchTimeChange}
              </span>
              <span className="text-gray-500 ml-2">vs last month</span>
            </div>
          </Card>
          
          <Card className="p-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-gray-500 mb-1">Completion Rate</p>
                <h3 className="text-2xl font-bold">{performanceData.overview.completionRate}</h3>
              </div>
              <div className="h-10 w-10 rounded-full bg-orange-100 flex items-center justify-center">
                <BarChart3 className="h-5 w-5 text-orange-600" />
              </div>
            </div>
            <div className="mt-2 flex items-center text-sm">
              <span className={`flex items-center ${performanceData.overview.completionChange.includes('+') ? 'text-green-600' : 'text-red-600'}`}>
                {performanceData.overview.completionChange.includes('+') ? (
                  <ArrowUp className="h-3 w-3 mr-1" />
                ) : (
                  <ArrowDown className="h-3 w-3 mr-1" />
                )}
                {performanceData.overview.completionChange}
              </span>
              <span className="text-gray-500 ml-2">vs last month</span>
            </div>
          </Card>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <Card className="p-6 lg:col-span-2">
            <h2 className="text-lg font-semibold mb-4">Top Performing Content</h2>
            <div className="space-y-4">
              {performanceData.topMovies.map((movie, i) => (
                <div key={i} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded bg-gray-100 flex items-center justify-center text-gray-700 font-medium">
                      {i + 1}
                    </div>
                    <div>
                      <h3 className="font-medium">{movie.title}</h3>
                      <p className="text-sm text-gray-500">{movie.views} views</p>
                    </div>
                  </div>
                  <div className={`flex items-center ${movie.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                    {movie.trend === 'up' ? (
                      <ArrowUp className="h-4 w-4 mr-1" />
                    ) : (
                      <ArrowDown className="h-4 w-4 mr-1" />
                    )}
                    <span>{movie.change}</span>
                  </div>
                </div>
              ))}
            </div>
          </Card>
          
          <Card className="p-6">
            <h2 className="text-lg font-semibold mb-4">Audience Demographics</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-medium mb-3">Age Distribution</h3>
                <div className="space-y-2">
                  {performanceData.demographics.age.map((item) => (
                    <div key={item.group} className="space-y-1">
                      <div className="flex items-center justify-between text-sm">
                        <span>{item.group}</span>
                        <span>{item.percentage}%</span>
                      </div>
                      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-[#ff4e00] rounded-full" 
                          style={{ width: `${item.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-sm font-medium mb-3">Gender Distribution</h3>
                <div className="space-y-2">
                  {performanceData.demographics.gender.map((item) => (
                    <div key={item.group} className="space-y-1">
                      <div className="flex items-center justify-between text-sm">
                        <span>{item.group}</span>
                        <span>{item.percentage}%</span>
                      </div>
                      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div 
                          className={`h-full rounded-full ${
                            item.group === 'Male' ? 'bg-blue-500' : 
                            item.group === 'Female' ? 'bg-pink-500' : 'bg-purple-500'
                          }`}
                          style={{ width: `${item.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </div>
        
        <Card className="p-6">
          <Tabs defaultValue="weekly" className="w-full">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold">Viewing Trends</h2>
              <TabsList className="bg-gray-100">
                <TabsTrigger value="weekly" className="data-[state=active]:bg-white">Weekly</TabsTrigger>
                <TabsTrigger value="monthly" className="data-[state=active]:bg-white">Monthly</TabsTrigger>
                <TabsTrigger value="yearly" className="data-[state=active]:bg-white">Yearly</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="weekly" className="mt-0">
              <div className="h-64 flex items-end justify-between gap-2">
                {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, i) => (
                  <div key={day} className="flex flex-col items-center gap-2 flex-1">
                    <div 
                      className="w-full bg-[#ff4e00]/80 rounded-t-md" 
                      style={{ 
                        height: `${Math.floor(Math.random() * 70) + 30}%`,
                        opacity: i === 3 ? 1 : 0.7
                      }}
                    ></div>
                    <span className="text-sm text-gray-500">{day}</span>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </Card>
      </div>
    </div>
  );
}