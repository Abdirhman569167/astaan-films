"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, Filter, Plus, MoreHorizontal, Mail, Phone } from "lucide-react";

// Mock user data
const usersData = [
  {
    id: 1,
    name: "Ahmed Mohamed",
    email: "ahmed@example.com",
    phone: "+1 (123) 456-7890",
    role: "Admin",
    status: "Active",
    avatar: "https://i.pravatar.cc/150?img=1",
    joinDate: "Jan 15, 2023"
  },
  {
    id: 2,
    name: "Fatima Hassan",
    email: "fatima@example.com",
    phone: "+1 (234) 567-8901",
    role: "User",
    status: "Active",
    avatar: "https://i.pravatar.cc/150?img=5",
    joinDate: "Feb 3, 2023"
  },
  {
    id: 3,
    name: "Omar Ali",
    email: "omar@example.com",
    phone: "+1 (345) 678-9012",
    role: "Editor",
    status: "Inactive",
    avatar: "https://i.pravatar.cc/150?img=3",
    joinDate: "Mar 21, 2023"
  },
  {
    id: 4,
    name: "Amina Yusuf",
    email: "amina@example.com",
    phone: "+1 (456) 789-0123",
    role: "User",
    status: "Active",
    avatar: "https://i.pravatar.cc/150?img=10",
    joinDate: "Apr 7, 2023"
  },
  {
    id: 5,
    name: "Ibrahim Mohamed",
    email: "ibrahim@example.com",
    phone: "+1 (567) 890-1234",
    role: "User",
    status: "Active",
    avatar: "https://i.pravatar.cc/150?img=11",
    joinDate: "May 19, 2023"
  },
  {
    id: 6,
    name: "Halima Abdi",
    email: "halima@example.com",
    phone: "+1 (678) 901-2345",
    role: "Editor",
    status: "Active",
    avatar: "https://i.pravatar.cc/150?img=9",
    joinDate: "Jun 30, 2023"
  },
  {
    id: 7,
    name: "Yusuf Hassan",
    email: "yusuf@example.com",
    phone: "+1 (789) 012-3456",
    role: "User",
    status: "Inactive",
    avatar: "https://i.pravatar.cc/150?img=12",
    joinDate: "Jul 11, 2023"
  },
  {
    id: 8,
    name: "Sahra Ali",
    email: "sahra@example.com",
    phone: "+1 (890) 123-4567",
    role: "Admin",
    status: "Active",
    avatar: "https://i.pravatar.cc/150?img=8",
    joinDate: "Aug 25, 2023"
  }
];

export default function UsersPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTab, setSelectedTab] = useState("all");
  
  // Filter users based on search and tab
  const filteredUsers = usersData.filter(user => {
    const matchesSearch = 
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase());
    
    if (selectedTab === "all") return matchesSearch;
    if (selectedTab === "active") return matchesSearch && user.status === "Active";
    if (selectedTab === "inactive") return matchesSearch && user.status === "Inactive";
    if (selectedTab === "admin") return matchesSearch && user.role === "Admin";
    if (selectedTab === "editor") return matchesSearch && user.role === "Editor";
    if (selectedTab === "user") return matchesSearch && user.role === "User";
    
    return matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <div className="mb-10">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold mb-2">Users</h1>
            <p className="text-gray-500">Manage and view all users in the system</p>
          </div>
          <Button className="mt-4 sm:mt-0 bg-[#ff4e00] hover:bg-[#ff4e00]/90 text-white">
            <Plus className="h-4 w-4 mr-2" /> Add New User
          </Button>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input 
              placeholder="Search users by name or email..." 
              className="pl-10 bg-white border-gray-200"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <Button variant="outline" className="flex items-center gap-2 bg-white">
            <Filter className="h-4 w-4" />
            Filters
          </Button>
        </div>
        
        <Tabs 
          defaultValue="all" 
          value={selectedTab}
          onValueChange={setSelectedTab}
          className="w-full"
        >
          <TabsList className="bg-white p-1 rounded-full inline-flex mb-8 shadow-sm">
            <TabsTrigger 
              value="all"
              className="rounded-full px-4 py-2 data-[state=active]:bg-[#ff4e00] data-[state=active]:text-white"
            >
              All Users
            </TabsTrigger>
            <TabsTrigger 
              value="active"
              className="rounded-full px-4 py-2 data-[state=active]:bg-[#ff4e00] data-[state=active]:text-white"
            >
              Active
            </TabsTrigger>
            <TabsTrigger 
              value="inactive"
              className="rounded-full px-4 py-2 data-[state=active]:bg-[#ff4e00] data-[state=active]:text-white"
            >
              Inactive
            </TabsTrigger>
            <TabsTrigger 
              value="admin"
              className="rounded-full px-4 py-2 data-[state=active]:bg-[#ff4e00] data-[state=active]:text-white"
            >
              Admins
            </TabsTrigger>
            <TabsTrigger 
              value="editor"
              className="rounded-full px-4 py-2 data-[state=active]:bg-[#ff4e00] data-[state=active]:text-white"
            >
              Editors
            </TabsTrigger>
            <TabsTrigger 
              value="user"
              className="rounded-full px-4 py-2 data-[state=active]:bg-[#ff4e00] data-[state=active]:text-white"
            >
              Users
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value={selectedTab} className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredUsers.map(user => (
                <Card key={user.id} className="overflow-hidden">
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <img 
                          src={user.avatar} 
                          alt={user.name} 
                          className="w-12 h-12 rounded-full object-cover mr-4"
                        />
                        <div>
                          <h3 className="font-semibold">{user.name}</h3>
                          <p className="text-sm text-gray-500">{user.role}</p>
                        </div>
                      </div>
                      <Badge 
                        className={user.status === "Active" 
                          ? "bg-green-100 text-green-800 hover:bg-green-100" 
                          : "bg-gray-100 text-gray-800 hover:bg-gray-100"
                        }
                      >
                        {user.status}
                      </Badge>
                    </div>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm">
                        <Mail className="h-4 w-4 text-gray-400 mr-2" />
                        <span>{user.email}</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <Phone className="h-4 w-4 text-gray-400 mr-2" />
                        <span>{user.phone}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">Joined: {user.joinDate}</span>
                      <Button variant="ghost" size="sm" className="p-0 h-8 w-8">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  
                  <div className="border-t border-gray-100 mt-2">
                    <div className="flex justify-between p-4">
                      <Button variant="outline" size="sm">View</Button>
                      <Button variant="outline" size="sm">Edit</Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
            
            {filteredUsers.length === 0 && (
              <div className="text-center py-16">
                <h3 className="text-xl font-medium mb-2">No users found</h3>
                <p className="text-gray-500">Try adjusting your search or filters</p>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}