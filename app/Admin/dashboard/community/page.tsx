"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Heart, MessageCircle, Share2, ThumbsUp } from "lucide-react";

const communityPosts = [
  {
    id: 1,
    user: {
      name: "Sarah Johnson",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
      username: "@sarahj"
    },
    time: "2 hours ago",
    content: "Just watched the new Spider-Man movie and it was amazing! The visual effects were stunning and the storyline kept me engaged throughout. Definitely recommend it!",
    image: "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=800&h=400&fit=crop",
    likes: 124,
    comments: 23,
    shares: 7
  },
  {
    id: 2,
    user: {
      name: "Michael Chen",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      username: "@mikechen"
    },
    time: "5 hours ago",
    content: "What's everyone's favorite sci-fi movie of all time? Mine has to be Interstellar - the score, the visuals, the story... everything about it is perfect!",
    likes: 87,
    comments: 42,
    shares: 3
  },
  {
    id: 3,
    user: {
      name: "Jessica Williams",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      username: "@jessicaw"
    },
    time: "Yesterday",
    content: "Just got tickets for the premiere of the new Marvel movie next week! Anyone else going?",
    likes: 56,
    comments: 14,
    shares: 2
  }
];

export default function CommunityPage() {
  return (
    <div className="max-w-4xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-6">Community</h1>
        
        <Tabs defaultValue="trending" className="w-full">
          <TabsList className="mb-6 bg-transparent p-0 justify-start space-x-2">
            <TabsTrigger 
              value="trending"
              className="rounded-full px-4 py-2 data-[state=active]:bg-[#ff4e00] data-[state=active]:text-white"
            >
              Trending
            </TabsTrigger>
            <TabsTrigger 
              value="latest"
              className="rounded-full px-4 py-2 data-[state=active]:bg-[#ff4e00] data-[state=active]:text-white"
            >
              Latest
            </TabsTrigger>
            <TabsTrigger 
              value="following"
              className="rounded-full px-4 py-2 data-[state=active]:bg-[#ff4e00] data-[state=active]:text-white"
            >
              Following
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="trending" className="mt-0 space-y-6">
            {communityPosts.map((post) => (
              <Card key={post.id} className="p-6">
                <div className="flex items-start gap-4">
                  <Avatar className="h-10 w-10 border border-gray-200">
                    <AvatarImage src={post.user.avatar} alt={post.user.name} />
                    <AvatarFallback>{post.user.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium">{post.user.name}</h3>
                        <p className="text-sm text-gray-500">{post.user.username} • {post.time}</p>
                      </div>
                      <Button variant="ghost" size="sm" className="text-gray-500">
                        •••
                      </Button>
                    </div>
                    <p className="mt-3 text-gray-700">{post.content}</p>
                    {post.image && (
                      <div className="mt-4 rounded-xl overflow-hidden">
                        <img src={post.image} alt="Post" className="w-full h-auto" />
                      </div>
                    )}
                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex items-center gap-6">
                        <Button variant="ghost" size="sm" className="flex items-center gap-1 text-gray-600">
                          <ThumbsUp className="h-4 w-4" />
                          <span>{post.likes}</span>
                        </Button>
                        <Button variant="ghost" size="sm" className="flex items-center gap-1 text-gray-600">
                          <MessageCircle className="h-4 w-4" />
                          <span>{post.comments}</span>
                        </Button>
                        <Button variant="ghost" size="sm" className="flex items-center gap-1 text-gray-600">
                          <Share2 className="h-4 w-4" />
                          <span>{post.shares}</span>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}