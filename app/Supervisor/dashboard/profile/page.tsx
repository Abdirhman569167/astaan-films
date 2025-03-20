"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Camera, Edit, Film, Settings, Star, User } from "lucide-react";

const userProfile = {
  name: "John Doe",
  username: "@johndoe",
  avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
  bio: "Film enthusiast and critic. I love discussing movies and sharing recommendations.",
  stats: {
    reviews: 48,
    followers: 1250,
    following: 364,
    watchlist: 127
  },
  favoriteGenres: ["Sci-Fi", "Thriller", "Drama", "Action"],
  recentActivity: [
    {
      type: "review",
      title: "Dune",
      rating: 4.5,
      date: "2 days ago"
    },
    {
      type: "watchlist",
      title: "The Batman",
      date: "1 week ago"
    },
    {
      type: "rating",
      title: "No Time to Die",
      rating: 4.0,
      date: "2 weeks ago"
    }
  ]
};

export default function ProfilePage() {
  return (
    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <div className="mb-8">
        <Card className="overflow-hidden">
          {/* Cover Photo */}
          <div className="h-48 bg-gradient-to-r from-[#ff4e00] to-[#ff9e00] relative">
            <Button 
              variant="ghost" 
              size="icon" 
              className="absolute bottom-4 right-4 h-9 w-9 rounded-full bg-black/30 hover:bg-black/50 text-white"
            >
              <Camera className="h-5 w-5" />
            </Button>
          </div>
          
          {/* Profile Info */}
          <div className="px-6 pb-6 relative">
            <div className="flex flex-col md:flex-row md:items-end gap-4 -mt-12">
              <Avatar className="h-24 w-24 border-4 border-white">
                <AvatarImage src={userProfile.avatar} alt={userProfile.name} />
                <AvatarFallback>{userProfile.name.charAt(0)}</AvatarFallback>
              </Avatar>
              
              <div className="flex-1 mt-4 md:mt-0">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h1 className="text-2xl font-bold">{userProfile.name}</h1>
                    <p className="text-gray-500">{userProfile.username}</p>
                  </div>
                  <div className="flex gap-3">
                    <Button variant="outline" className="rounded-full">
                      <Edit className="h-4 w-4 mr-2" /> Edit Profile
                    </Button>
                    <Button variant="ghost" size="icon" className="rounded-full">
                      <Settings className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            
            <p className="mt-4 text-gray-700">{userProfile.bio}</p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <p className="text-2xl font-bold">{userProfile.stats.reviews}</p>
                <p className="text-gray-500 text-sm">Reviews</p>
              </div>
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <p className="text-2xl font-bold">{userProfile.stats.followers}</p>
                <p className="text-gray-500 text-sm">Followers</p>
              </div>
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <p className="text-2xl font-bold">{userProfile.stats.following}</p>
                <p className="text-gray-500 text-sm">Following</p>
              </div>
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <p className="text-2xl font-bold">{userProfile.stats.watchlist}</p>
                <p className="text-gray-500 text-sm">Watchlist</p>
              </div>
            </div>
          </div>
        </Card>
        
        <Tabs defaultValue="activity" className="mt-8">
          <TabsList className="mb-6 bg-transparent p-0 justify-start space-x-2">
            <TabsTrigger 
              value="activity"
              className="rounded-full px-4 py-2 data-[state=active]:bg-[#ff4e00] data-[state=active]:text-white"
            >
              Activity
            </TabsTrigger>
            <TabsTrigger 
              value="reviews"
              className="rounded-full px-4 py-2 data-[state=active]:bg-[#ff4e00] data-[state=active]:text-white"
            >
              Reviews
            </TabsTrigger>
            <TabsTrigger 
              value="watchlist"
              className="rounded-full px-4 py-2 data-[state=active]:bg-[#ff4e00] data-[state=active]:text-white"
            >
              Watchlist
            </TabsTrigger>
            <TabsTrigger 
              value="favorites"
              className="rounded-full px-4 py-2 data-[state=active]:bg-[#ff4e00] data-[state=active]:text-white"
            >
              Favorites
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="activity" className="mt-0">
            <Card className="p-6">
              <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
              <div className="space-y-4">
                {userProfile.recentActivity.map((activity, i) => (
                  <div key={i} className="flex items-start gap-4 pb-4 border-b last:border-0">
                    <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center">
                      {activity.type === "review" ? (
                        <Star className="h-5 w-5 text-[#ff4e00]" />
                      ) : activity.type === "watchlist" ? (
                        <Film className="h-5 w-5 text-blue-500" />
                      ) : (
                        <Star className="h-5 w-5 text-yellow-500" />
                      )}
                    </div>
                    <div>
                      <p className="text-gray-800">
                        {activity.type === "review" ? (
                          <>Reviewed <span className="font-medium">{activity.title}</span></>
                        ) : activity.type === "watchlist" ? (
                          <>Added <span className="font-medium">{activity.title}</span> to watchlist</>
                        ) : (
                          <>Rated <span className="font-medium">{activity.title}</span></>
                        )}
                      </p>
                      {activity.rating && (
                        <div className="flex items-center gap-1 mt-1">
                          <Star className="h-4 w-4 text-[#ff4e00] fill-[#ff4e00]" />
                          <span>{activity.rating}/5</span>
                        </div>
                      )}
                      <p className="text-sm text-gray-500 mt-1">{activity.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}