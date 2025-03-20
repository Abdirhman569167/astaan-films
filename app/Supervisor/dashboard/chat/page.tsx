"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { ArrowUpFromLine, Image, Paperclip, Search, Send, Smile } from "lucide-react";
import { useState } from "react";

// Sample data for chat contacts and messages
const contacts = [
  {
    id: 1,
    name: "Support Team",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
    status: "online",
    lastMessage: "How can we help you today?",
    time: "10:42 AM",
    unread: 0,
    isSupport: true
  },
  {
    id: 2,
    name: "Sarah Johnson",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face",
    status: "online",
    lastMessage: "I loved the new Batman movie!",
    time: "Yesterday",
    unread: 2,
    isSupport: false
  },
  {
    id: 3,
    name: "Michael Chen",
    avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&h=150&fit=crop&crop=face",
    status: "offline",
    lastMessage: "What did you think of Dune?",
    time: "Yesterday",
    unread: 0,
    isSupport: false
  },
  {
    id: 4,
    name: "Emma Wilson",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
    status: "online",
    lastMessage: "Have you seen the trailer for the new Marvel movie?",
    time: "Tuesday",
    unread: 0,
    isSupport: false
  },
  {
    id: 5,
    name: "James Rodriguez",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    status: "offline",
    lastMessage: "Thanks for the recommendation!",
    time: "Monday",
    unread: 0,
    isSupport: false
  }
];

const supportMessages = [
  {
    id: 1,
    sender: "support",
    content: "Hello! Welcome to Astaan Film. How can I help you today?",
    time: "10:30 AM"
  },
  {
    id: 2,
    sender: "user",
    content: "Hi, I'm having trouble finding how to download films for offline viewing.",
    time: "10:32 AM"
  },
  {
    id: 3,
    sender: "support",
    content: "I'd be happy to help with that! To download films for offline viewing, you need to have a Premium subscription. Once you have that, you'll see a download icon next to each film that's available for offline viewing.",
    time: "10:35 AM"
  },
  {
    id: 4,
    sender: "support",
    content: "Would you like me to guide you through the process of upgrading to Premium?",
    time: "10:36 AM"
  },
  {
    id: 5,
    sender: "user",
    content: "Yes, please. What are the benefits of Premium?",
    time: "10:38 AM"
  },
  {
    id: 6,
    sender: "support",
    content: "Premium gives you access to exclusive content, offline downloads, 4K streaming quality, and no ads. It costs $12.99/month or $129.99/year (saving you about 17%).",
    time: "10:40 AM"
  },
  {
    id: 7,
    sender: "support",
    content: "You can upgrade from your account settings or I can send you a direct link. Which would you prefer?",
    time: "10:42 AM"
  }
];

export default function ChatPage() {
  const [activeContact, setActiveContact] = useState(contacts[0]);
  const [messages, setMessages] = useState(supportMessages);
  const [newMessage, setNewMessage] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredContacts = contacts.filter(contact => 
    contact.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSendMessage = () => {
    if (newMessage.trim() === "") return;
    
    const newMsg = {
      id: messages.length + 1,
      sender: "user",
      content: newMessage,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    
    setMessages([...messages, newMsg]);
    setNewMessage("");
    
    // Simulate response for demo purposes
    setTimeout(() => {
      const responseMsg = {
        id: messages.length + 2,
        sender: "support",
        content: "Thanks for your message. Our team will get back to you shortly.",
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, responseMsg]);
    }, 1000);
  };

  return (
    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-6">Messages</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-[calc(100vh-200px)]">
          {/* Contacts sidebar */}
          <Card className="md:col-span-1 flex flex-col">
            <div className="p-4">
              <div className="relative mb-4">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input 
                  placeholder="Search contacts..." 
                  className="pl-9"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
            
            <ScrollArea className="flex-1">
              <div className="px-4 space-y-1">
                {filteredContacts.map((contact) => (
                  <div 
                    key={contact.id}
                    className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-colors ${
                      activeContact.id === contact.id ? 'bg-gray-100' : 'hover:bg-gray-50'
                    }`}
                    onClick={() => setActiveContact(contact)}
                  >
                    <div className="relative">
                      <Avatar>
                        <AvatarImage src={contact.avatar} />
                        <AvatarFallback>{contact.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <span 
                        className={`absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white ${
                          contact.status === 'online' ? 'bg-green-500' : 'bg-gray-300'
                        }`}
                      ></span>
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <p className="font-medium truncate">{contact.name}</p>
                        <p className="text-xs text-gray-500">{contact.time}</p>
                      </div>
                      <p className="text-sm text-gray-500 truncate">{contact.lastMessage}</p>
                    </div>
                    
                    {contact.unread > 0 && (
                      <div className="h-5 w-5 rounded-full bg-[#ff4e00] text-white text-xs flex items-center justify-center">
                        {contact.unread}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </ScrollArea>
          </Card>
          
          {/* Chat area */}
          <Card className="md:col-span-2 flex flex-col">
            {/* Chat header */}
            <div className="p-4 border-b flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage src={activeContact.avatar} />
                  <AvatarFallback>{activeContact.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <h2 className="font-medium">{activeContact.name}</h2>
                  <p className="text-xs text-gray-500">
                    {activeContact.status === 'online' ? 'Online' : 'Offline'}
                    {activeContact.isSupport && ' • Support Team'}
                  </p>
                </div>
              </div>
            </div>
            
            {/* Messages */}
            <ScrollArea className="flex-1 p-4">
              <div className="space-y-4">
                {messages.map((message) => (
                  <div 
                    key={message.id} 
                    className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div 
                      className={`max-w-[80%] p-3 rounded-lg ${
                        message.sender === 'user' 
                          ? 'bg-[#ff4e00] text-white rounded-br-none' 
                          : 'bg-gray-100 text-gray-800 rounded-bl-none'
                      }`}
                    >
                      <p>{message.content}</p>
                      <p className={`text-xs mt-1 ${message.sender === 'user' ? 'text-white/70' : 'text-gray-500'}`}>
                        {message.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
            
            {/* Message input */}
            <div className="p-4 border-t">
              <div className="flex items-center gap-2">
                <Button variant="outline" size="icon" className="rounded-full">
                  <Paperclip className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full">
                  <Image className="h-4 w-4" />
                </Button>
                <Input 
                  placeholder="Type a message..." 
                  className="flex-1"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      handleSendMessage();
                    }
                  }}
                />
                <Button variant="outline" size="icon" className="rounded-full">
                  <Smile className="h-4 w-4" />
                </Button>
                <Button 
                  className="bg-[#ff4e00] hover:bg-[#ff4e00]/90 text-white rounded-full"
                  size="icon"
                  onClick={handleSendMessage}
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}