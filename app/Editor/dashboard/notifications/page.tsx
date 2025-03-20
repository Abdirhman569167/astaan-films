"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Bell, Calendar, Film, MessageSquare, Star, ThumbsUp, User } from "lucide-react";

const notifications = [
  {
    id: 1,
    type: "comment",
    user: {
      name: "Sarah Johnson",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face"
    },
    content: "commented on your review of Dune",
    time: "10 minutes ago",
    read: false
  },
  {
    id: 2,
    type: "like",
    user: {
      name: "Michael Chen",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    content: "liked your watchlist",
    time: "2 hours ago",
    read: false
  },
  {
    id: 3,
    type: "friend",
    user: {
      name: "Jessica Williams",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    },
    content: "started following you",
    time: "Yesterday",
    read: true
  },
  {
    id: 4,
    type: "system",
    content: "New movies added to your watchlist are now available",
    time: "2 days ago",
    read: true
  },
  {
    id: 5,
    type: "reminder",
    content: "The Batman is now available to stream",
    time: "3 days ago",
    read: true
  }
];

export default function NotificationsPage() {
  const getNotificationIcon = (type: string) => {
    switch(type) {
      case "comment": return <MessageSquare className="h-4 w-4 text-blue-500" />;
      case "like": return <ThumbsUp className="h-4 w-4 text-pink-500" />;
      case "friend": return <User className="h-4 w-4 text-purple-500" />;
      case "system": return <Bell className="h-4 w-4 text-gray-500" />;
      case "reminder": return <Calendar className="h-4 w-4 text-green-500" />;
      default: return <Star className="h-4 w-4 text-yellow-500" />;
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <div className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">Notifications</h1>
          <Button variant="outline" className="text-gray-600 border-gray-300">
            Mark all as read
          </Button>
        </div>
        
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="mb-6 bg-transparent p-0 justify-start space-x-2">
            <TabsTrigger 
              value="all"
              className="rounded-full px-4 py-2 data-[state=active]:bg-[#ff4e00] data-[state=active]:text-white"
            >
              All
            </TabsTrigger>
            <TabsTrigger 
              value="unread"
              className="rounded-full px-4 py-2 data-[state=active]:bg-[#ff4e00] data-[state=active]:text-white"
            >
              Unread
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="all" className="mt-0">
            <div className="space-y-3">
              {notifications.map((notification) => (
                <Card 
                  key={notification.id} 
                  className={`p-4 ${!notification.read ? 'border-l-4 border-l-[#ff4e00]' : ''}`}
                >
                  <div className="flex items-start gap-4">
                    {notification.user ? (
                      <Avatar className="h-10 w-10 border border-gray-200">
                        <AvatarImage src={notification.user.avatar} alt={notification.user.name} />
                        <AvatarFallback>{notification.user.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                    ) : (
                      <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center">
                        {getNotificationIcon(notification.type)}
                      </div>
                    )}
                    
                    <div className="flex-1">
                      <p className="text-gray-800">
                        {notification.user && (
                          <span className="font-medium">{notification.user.name} </span>
                        )}
                        {notification.content}
                      </p>
                      <p className="text-sm text-gray-500 mt-1">{notification.time}</p>
                    </div>
                    
                    <div className="flex items-center">
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-gray-400">
                        •••
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}