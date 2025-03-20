"use client";

import { useState, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { 
  Plus, 
  Search, 
  Filter, 
  Calendar, 
  CheckCircle2, 
  Clock, 
  AlertCircle,
  MoreHorizontal,
  User,
  ChevronDown,
  Upload,
  Image,
  FileText,
  Video,
  Music
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// Sample data for tasks
const initialTasks = [
  {
    id: 1,
    title: "Implement New Feature",
    description: "Add a 'dark mode' option for improved UX.",
    status: "todo",
    priority: "normal",
    type: "feature",
    dueDate: "2024-04-17",
    endDate: "2024-05-15",
    assignees: ["John Doe", "Sarah Smith", "Michael Johnson"],
    assigneeAvatars: ["/avatars/john.jpg", "/avatars/sarah.jpg", "/avatars/michael.jpg"],
  },
  {
    id: 2,
    title: "Fix Bug - On Payment",
    description: "The 'save' button is not working on mobile.",
    status: "todo",
    priority: "urgent",
    type: "bug",
    dueDate: "2024-05-10",
    endDate: "2024-07-18",
    assignees: ["Emily Chen", "David Wilson", "Sarah Smith"],
    assigneeAvatars: ["/avatars/emily.jpg", "/avatars/david.jpg", "/avatars/sarah.jpg"],
  },
  {
    id: 3,
    title: "Review Design - Final",
    description: "Provide feedback on the latest UI prototypes.",
    status: "todo",
    priority: "normal",
    type: "review",
    dueDate: "2024-06-11",
    endDate: "2024-07-17",
    assignees: ["John Doe", "Emily Chen"],
    assigneeAvatars: ["/avatars/john.jpg", "/avatars/emily.jpg"],
  },
  {
    id: 4,
    title: "New Version - Quality Check",
    description: "Conduct thorough testing of updated software.",
    status: "todo",
    priority: "lowest",
    type: "testing",
    dueDate: "2024-05-27",
    endDate: "2024-06-11",
    assignees: ["David Wilson", "Sarah Smith", "Michael Johnson"],
    assigneeAvatars: ["/avatars/david.jpg", "/avatars/sarah.jpg", "/avatars/michael.jpg"],
  },
  {
    id: 5,
    title: "Fix Bug - Mobile Compatibility",
    description: "The app is crashing on some Android devices.",
    status: "in-progress",
    priority: "urgent",
    type: "bug",
    dueDate: "2024-04-17",
    endDate: "2024-05-15",
    assignees: ["Emily Chen", "David Wilson", "John Doe", "Sarah Smith"],
    assigneeAvatars: ["/avatars/emily.jpg", "/avatars/david.jpg", "/avatars/john.jpg", "/avatars/sarah.jpg"],
  },
  {
    id: 6,
    title: "Review Marketing Campaign",
    description: "Analyze the effectiveness of recent social media.",
    status: "in-progress",
    priority: "normal",
    type: "review",
    dueDate: "2024-05-10",
    endDate: "2024-07-18",
    assignees: ["John Doe", "Sarah Smith", "Michael Johnson"],
    assigneeAvatars: ["/avatars/john.jpg", "/avatars/sarah.jpg", "/avatars/michael.jpg"],
  },
  {
    id: 7,
    title: "Conduct User Research",
    description: "Gather feedback from users to identify areas.",
    status: "in-progress",
    priority: "normal",
    type: "testing",
    dueDate: "2024-06-11",
    endDate: "2024-07-17",
    assignees: ["Emily Chen", "David Wilson", "Sarah Smith", "Michael Johnson", "John Doe"],
    assigneeAvatars: ["/avatars/emily.jpg", "/avatars/david.jpg", "/avatars/sarah.jpg", "/avatars/michael.jpg", "/avatars/john.jpg"],
  },
  {
    id: 8,
    title: "Update Documentation",
    description: "Ensure all documentation is update and accurate.",
    status: "in-progress",
    priority: "urgent",
    type: "review",
    dueDate: "2024-05-27",
    endDate: "2024-06-11",
    assignees: ["John Doe", "Sarah Smith"],
    assigneeAvatars: ["/avatars/john.jpg", "/avatars/sarah.jpg"],
  },
  {
    id: 9,
    title: "Optimize Database Performance",
    description: "Improve database query efficiency & scalability.",
    status: "completed",
    priority: "lowest",
    type: "feature",
    dueDate: "2024-04-17",
    endDate: "2024-05-15",
    assignees: ["David Wilson", "John Doe"],
    assigneeAvatars: ["/avatars/david.jpg", "/avatars/john.jpg"],
  },
];

// Status options
const statusOptions = [
  { value: "all", label: "All Tasks" },
  { value: "todo", label: "Not Started" },
  { value: "in-progress", label: "In Progress" },
  { value: "completed", label: "Done" },
];

// Priority options
const priorityOptions = [
  { value: "all", label: "All Priorities" },
  { value: "lowest", label: "Lowest" },
  { value: "normal", label: "Normal" },
  { value: "urgent", label: "Urgent" },
];

// Type options
const typeOptions = [
  { value: "all", label: "All Types" },
  { value: "feature", label: "Feature" },
  { value: "bug", label: "Bug" },
  { value: "review", label: "Review" },
  { value: "testing", label: "Testing" },
];

// Assignee options
const assigneeOptions = [
  { value: "all", label: "All Assignees" },
  { value: "John Doe", label: "John Doe" },
  { value: "Sarah Smith", label: "Sarah Smith" },
  { value: "Michael Johnson", label: "Michael Johnson" },
  { value: "Emily Chen", label: "Emily Chen" },
  { value: "David Wilson", label: "David Wilson" },
];

// Function to format dates consistently
const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  });
};

// Add this type for file attachments
interface FileAttachment {
  file: File;
  type: 'image' | 'document' | 'video' | 'audio';
  preview?: string;
}

export default function TasksPage() {
  const [tasks, setTasks] = useState(initialTasks);
  const [statusFilter, setStatusFilter] = useState("all");
  const [priorityFilter, setPriorityFilter] = useState("all");
  const [typeFilter, setTypeFilter] = useState("all");
  const [assigneeFilter, setAssigneeFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [attachments, setAttachments] = useState<FileAttachment[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
    status: "todo",
    priority: "normal",
    type: "feature",
    dueDate: new Date().toISOString().split('T')[0],
    endDate: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    assignees: [assigneeOptions[1].value],
    attachments: [] as FileAttachment[]
  });

  // Filter tasks based on selected filters and search query
  const filteredTasks = tasks.filter(task => {
    const matchesStatus = statusFilter === "all" || task.status === statusFilter;
    const matchesPriority = priorityFilter === "all" || task.priority === priorityFilter;
    const matchesType = typeFilter === "all" || task.type === typeFilter;
    const matchesAssignee = assigneeFilter === "all" || 
                           (task.assignees && task.assignees.includes(assigneeFilter));
    const matchesSearch = task.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          task.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesStatus && matchesPriority && matchesType && matchesAssignee && matchesSearch;
  });

  // Group tasks by status
  const todoTasks = filteredTasks.filter(task => task.status === "todo");
  const inProgressTasks = filteredTasks.filter(task => task.status === "in-progress");
  const completedTasks = filteredTasks.filter(task => task.status === "completed");

  // Function to get status badge styling
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "todo":
        return { label: "Not Started", className: "bg-blue-100 text-blue-800" };
      case "in-progress":
        return { label: "In Progress", className: "bg-yellow-100 text-yellow-800" };
      case "completed":
        return { label: "Done", className: "bg-green-100 text-green-800" };
      default:
        return { label: status, className: "" };
    }
  };

  // Function to get priority badge styling
  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case "lowest":
        return { label: "Lowest", className: "bg-green-100 text-green-800" };
      case "normal":
        return { label: "Normal", className: "bg-yellow-100 text-yellow-800" };
      case "urgent":
        return { label: "Urgent", className: "bg-red-100 text-red-800" };
      default:
        return { label: priority, className: "" };
    }
  };

  // Function to get type badge styling
  const getTypeBadge = (type: string) => {
    switch (type) {
      case "feature":
        return { label: "Feature", className: "bg-purple-100 text-purple-800", icon: <Plus className="h-3 w-3 mr-1" /> };
      case "bug":
        return { label: "Bug", className: "bg-red-100 text-red-800", icon: <AlertCircle className="h-3 w-3 mr-1" /> };
      case "review":
        return { label: "Review", className: "bg-blue-100 text-blue-800", icon: <CheckCircle2 className="h-3 w-3 mr-1" /> };
      case "testing":
        return { label: "Testing", className: "bg-gray-100 text-gray-800", icon: <Clock className="h-3 w-3 mr-1" /> };
      default:
        return { label: type, className: "", icon: null };
    }
  };

  // Function to update task status
  const updateTaskStatus = (taskId: number, newStatus: string) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, status: newStatus } : task
    ));
  };

  // Function to handle creating a new task
  const handleCreateTask = () => {
    const task = {
      id: tasks.length > 0 ? Math.max(...tasks.map(t => t.id)) + 1 : 1,
      ...newTask,
      assigneeAvatars: newTask.assignees.map(() => "/avatars/placeholder.jpg"), // Default avatars
    };
    
    setTasks([...tasks, task]);
    setNewTask({
      title: "",
      description: "",
      status: "todo",
      priority: "normal",
      type: "feature",
      dueDate: new Date().toISOString().split('T')[0],
      endDate: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      assignees: [assigneeOptions[1].value],
      attachments: [] // Reset attachments
    });
    setAttachments([]); // Clear attachments state
    setOpen(false);
  };

  // Function to handle file selection
  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>, type: 'image' | 'document' | 'video' | 'audio') => {
    const files = e.target.files;
    if (!files) return;

    Array.from(files).forEach(file => {
      // Create preview URL for images
      const preview = type === 'image' ? URL.createObjectURL(file) : undefined;
      
      setAttachments(prev => [...prev, {
        file,
        type,
        preview
      }]);
    });
  };

  // Function to remove attachment
  const removeAttachment = (index: number) => {
    setAttachments(prev => {
      const newAttachments = [...prev];
      if (newAttachments[index].preview) {
        URL.revokeObjectURL(newAttachments[index].preview!);
      }
      newAttachments.splice(index, 1);
      return newAttachments;
    });
  };

  // Function to trigger file input click
  const triggerFileInput = (type: 'image' | 'document' | 'video' | 'audio') => {
    if (fileInputRef.current) {
      fileInputRef.current.setAttribute('accept', getAcceptTypes(type));
      fileInputRef.current.click();
    }
  };

  // Function to get accept types for file input
  const getAcceptTypes = (type: string) => {
    switch (type) {
      case 'image': return 'image/*';
      case 'document': return '.pdf,.doc,.docx,.txt';
      case 'video': return 'video/*';
      case 'audio': return 'audio/*';
      default: return '';
    }
  };

  // Function to handle file drop
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    
    Array.from(files).forEach(file => {
      const type = file.type.startsWith('image/') ? 'image' :
                   file.type.startsWith('video/') ? 'video' :
                   file.type.startsWith('audio/') ? 'audio' : 'document';
                   
      const preview = type === 'image' ? URL.createObjectURL(file) : undefined;
      
      setAttachments(prev => [...prev, {
        file,
        type,
        preview
      }]);
    });
  };

  // Function to prevent default drag behavior
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  // Function to render task card
  const renderTaskCard = (task: any) => {
    const typeBadge = getTypeBadge(task.type);
    const priorityBadge = getPriorityBadge(task.priority);
    
    return (
      <Card key={task.id} className="mb-4 hover:shadow-md transition-shadow border border-gray-100 overflow-hidden">
        <div className="p-4">
          <div className="flex items-start justify-between mb-2">
            <div className="flex items-center">
              <input type="checkbox" className="mr-2 h-4 w-4 rounded border-gray-300 text-[#ff4e00] focus:ring-[#ff4e00]" />
              <h3 className="font-medium text-gray-900">{task.title}</h3>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0 rounded-full hover:bg-gray-100">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="cursor-pointer">Edit Task</DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">Assign Task</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem 
                  onClick={() => updateTaskStatus(task.id, "todo")}
                  disabled={task.status === "todo"}
                  className="cursor-pointer"
                >
                  Mark as Not Started
                </DropdownMenuItem>
                <DropdownMenuItem 
                  onClick={() => updateTaskStatus(task.id, "in-progress")}
                  disabled={task.status === "in-progress"}
                  className="cursor-pointer"
                >
                  Mark as In Progress
                </DropdownMenuItem>
                <DropdownMenuItem 
                  onClick={() => updateTaskStatus(task.id, "completed")}
                  disabled={task.status === "completed"}
                  className="cursor-pointer"
                >
                  Mark as Completed
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-red-600 cursor-pointer">Delete Task</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          
          <p className="text-sm text-gray-500 mb-3">{task.description}</p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge className={`flex items-center px-2 py-1 rounded-full ${typeBadge.className}`}>
              {typeBadge.icon}
              {typeBadge.label}
            </Badge>
            <Badge className={`${priorityBadge.className} px-2 py-1 rounded-full`}>
              {priorityBadge.label}
            </Badge>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex -space-x-2 overflow-hidden">
              {task.assignees.slice(0, 3).map((assignee: string, index: number) => (
                <Avatar key={index} className="border-2 border-white h-9 w-9 transition-transform hover:scale-110">
                  <AvatarImage 
                    src={task.assigneeAvatars[index] || `https://ui-avatars.com/api/?name=${encodeURIComponent(assignee)}&background=random`} 
                    alt={assignee} 
                  />
                  <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-600 text-white font-medium">
                    {assignee.split(' ').map((n: string) => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
              ))}
              {task.assignees.length > 3 && (
                <Avatar className="border-2 border-white h-9 w-9 bg-gray-200">
                  <AvatarFallback className="bg-gray-200 text-gray-600 font-medium">
                    +{task.assignees.length - 3}
                  </AvatarFallback>
                </Avatar>
              )}
            </div>
            
            <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-gray-100 text-xs text-gray-600">
              <Calendar className="h-3 w-3 mr-1" />
              {formatDate(task.dueDate)} - {formatDate(task.endDate)}
            </div>
          </div>
        </div>
        
        {/* Bottom color bar based on status */}
        <div className={`h-1 w-full ${
          task.status === "todo" ? "bg-blue-500" :
          task.status === "in-progress" ? "bg-yellow-500" : "bg-green-500"
        }`}></div>
      </Card>
    );
  };

  return (
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <div className="mb-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Task Management</h1>
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button className="bg-[#ff4e00] hover:bg-[#ff4e00]/90 shadow-md transition-all rounded-full">
                <Plus className="mr-2 h-4 w-4" /> Add Task
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[800px] max-h-[90vh] overflow-y-auto rounded-xl">
              <DialogHeader className="sticky top-0 z-10 bg-white pb-4 mb-4 border-b">
                <DialogTitle className="text-xl font-semibold">Create New Task</DialogTitle>
                <DialogDescription>
                  Fill in the details below to create a new task.
                </DialogDescription>
              </DialogHeader>

              <div className="grid gap-6">
                <div className="space-y-4">
                  <div className="grid gap-4">
                    <div>
                      <Label htmlFor="title" className="text-sm font-medium mb-1.5 block">
                        Title
                      </Label>
                      <Input
                        id="title"
                        value={newTask.title}
                        onChange={(e) => setNewTask({...newTask, title: e.target.value})}
                        className="w-full"
                        placeholder="Enter task title"
                      />
                    </div>

                    <div>
                      <Label htmlFor="description" className="text-sm font-medium mb-1.5 block">
                        Description
                      </Label>
                      <Textarea
                        id="description"
                        value={newTask.description}
                        onChange={(e) => setNewTask({...newTask, description: e.target.value})}
                        className="min-h-[100px]"
                        placeholder="Enter task description"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="status" className="text-sm font-medium mb-1.5 block">
                          Status
                        </Label>
                        <Select 
                          value={newTask.status} 
                          onValueChange={(value) => setNewTask({...newTask, status: value})}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select status" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="todo">Not Started</SelectItem>
                            <SelectItem value="in-progress">In Progress</SelectItem>
                            <SelectItem value="completed">Done</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label htmlFor="type" className="text-sm font-medium mb-1.5 block">
                          Type
                        </Label>
                        <Select 
                          value={newTask.type} 
                          onValueChange={(value) => setNewTask({...newTask, type: value})}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="feature">Feature</SelectItem>
                            <SelectItem value="bug">Bug</SelectItem>
                            <SelectItem value="review">Review</SelectItem>
                            <SelectItem value="testing">Testing</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label htmlFor="priority" className="text-sm font-medium mb-1.5 block">
                          Priority
                        </Label>
                        <Select 
                          value={newTask.priority} 
                          onValueChange={(value) => setNewTask({...newTask, priority: value})}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select priority" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="lowest">Lowest</SelectItem>
                            <SelectItem value="normal">Normal</SelectItem>
                            <SelectItem value="urgent">Urgent</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="dueDate" className="text-sm font-medium mb-1.5 block">
                          Start Date
                        </Label>
                        <Input
                          id="dueDate"
                          type="date"
                          value={newTask.dueDate}
                          onChange={(e) => setNewTask({...newTask, dueDate: e.target.value})}
                        />
                      </div>

                      <div>
                        <Label htmlFor="endDate" className="text-sm font-medium mb-1.5 block">
                          End Date
                        </Label>
                        <Input
                          id="endDate"
                          type="date"
                          value={newTask.endDate}
                          onChange={(e) => setNewTask({...newTask, endDate: e.target.value})}
                        />
                      </div>

                      <div>
                        <Label className="text-sm font-medium mb-1.5 block">
                          Assignees
                        </Label>
                        <Select
                          value={assigneeFilter === "all" ? undefined : assigneeFilter}
                          onValueChange={(value) => {
                            if (!newTask.assignees.includes(value) && value !== "all") {
                              setNewTask({
                                ...newTask,
                                assignees: [...newTask.assignees, value]
                              });
                            }
                          }}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select assignees" />
                          </SelectTrigger>
                          <SelectContent>
                            {assigneeOptions.slice(1).map(option => (
                              <SelectItem key={option.value} value={option.value}>
                                <div className="flex items-center space-x-2">
                                  <Avatar className="h-6 w-6">
                                    <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-600 text-white text-xs">
                                      {option.label.split(' ').map(n => n[0]).join('')}
                                    </AvatarFallback>
                                  </Avatar>
                                  <span>{option.label}</span>
                                </div>
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>

                        <div className="mt-2 flex flex-wrap gap-2">
                          {newTask.assignees.map(assignee => {
                            const assigneeOption = assigneeOptions.find(option => option.value === assignee);
                            if (!assigneeOption) return null;
                            
                            return (
                              <Badge key={assignee} variant="secondary" className="flex items-center gap-1">
                                <Avatar className="h-4 w-4">
                                  <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-600 text-white text-[10px]">
                                    {assigneeOption.label.split(' ').map(n => n[0]).join('')}
                                  </AvatarFallback>
                                </Avatar>
                                {assigneeOption.label}
                                <Button 
                                  variant="ghost" 
                                  size="sm" 
                                  className="h-4 w-4 p-0 hover:bg-transparent"
                                  onClick={() => {
                                    setNewTask({
                                      ...newTask,
                                      assignees: newTask.assignees.filter(a => a !== assignee)
                                    });
                                  }}
                                >
                                  ×
                                </Button>
                              </Badge>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <Label className="text-sm font-medium mb-3 block">
                      Attachments
                    </Label>
                    <input
                      type="file"
                      ref={fileInputRef}
                      className="hidden"
                      onChange={(e) => handleFileSelect(e, 'image')}
                      multiple
                    />
                    <div 
                      className="border-2 border-dashed rounded-lg p-6 text-center bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer"
                      onDrop={handleDrop}
                      onDragOver={handleDragOver}
                    >
                      <div className="mx-auto flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-gray-100">
                        <Upload className="h-6 w-6 text-gray-600" />
                      </div>
                      <p className="text-sm text-gray-600 mb-2">Drag & drop files to upload</p>
                      <p className="text-xs text-gray-500 mb-4">or click buttons below to select files</p>
                      
                      <div className="flex flex-wrap gap-2 justify-center">
                        <Button
                          variant="outline"
                          size="sm"
                          className="flex items-center"
                          onClick={() => triggerFileInput('image')}
                        >
                          <Image className="h-4 w-4 mr-1" />
                          Photos
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className="flex items-center"
                          onClick={() => triggerFileInput('document')}
                        >
                          <FileText className="h-4 w-4 mr-1" />
                          Documents
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className="flex items-center"
                          onClick={() => triggerFileInput('video')}
                        >
                          <Video className="h-4 w-4 mr-1" />
                          Video
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className="flex items-center"
                          onClick={() => triggerFileInput('audio')}
                        >
                          <Music className="h-4 w-4 mr-1" />
                          Audio
                        </Button>
                      </div>
                    </div>

                    {attachments.length > 0 && (
                      <div className="mt-4 grid grid-cols-2 gap-3">
                        {attachments.map((attachment, index) => (
                          <div key={index} className="relative group">
                            <div className="border rounded-lg p-3 bg-white">
                              <div className="flex items-center gap-2">
                                {attachment.type === 'image' && attachment.preview ? (
                                  <img 
                                    src={attachment.preview} 
                                    alt="Preview" 
                                    className="w-10 h-10 object-cover rounded"
                                  />
                                ) : (
                                  <div className="w-10 h-10 rounded bg-gray-100 flex items-center justify-center">
                                    {attachment.type === 'document' && <FileText className="h-5 w-5 text-gray-600" />}
                                    {attachment.type === 'video' && <Video className="h-5 w-5 text-gray-600" />}
                                    {attachment.type === 'audio' && <Music className="h-5 w-5 text-gray-600" />}
                                  </div>
                                )}
                                <div className="flex-1 min-w-0">
                                  <p className="text-sm font-medium truncate">{attachment.file.name}</p>
                                  <p className="text-xs text-gray-500">
                                    {(attachment.file.size / 1024).toFixed(1)} KB
                                  </p>
                                </div>
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  className="opacity-0 group-hover:opacity-100 transition-opacity"
                                  onClick={() => removeAttachment(index)}
                                >
                                  ×
                                </Button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <DialogFooter className="sticky bottom-0 z-10 bg-white pt-4 mt-6 border-t">
                <Button variant="outline" onClick={() => setOpen(false)}>
                  Cancel
                </Button>
                <Button 
                  onClick={handleCreateTask}
                  className="bg-[#ff4e00] hover:bg-[#ff4e00]/90"
                >
                  Create Task
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>

        {/* Filters and Search */}
        <div className="bg-white p-5 rounded-xl shadow-sm mb-8 border border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-5">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input 
                placeholder="Search tasks..." 
                className="pl-9 border-gray-200 focus:border-[#ff4e00] focus:ring-[#ff4e00]/20 rounded-lg"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="border-gray-200 focus:ring-[#ff4e00]/20 rounded-lg">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                {statusOptions.map(option => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            
            <Select value={priorityFilter} onValueChange={setPriorityFilter}>
              <SelectTrigger className="border-gray-200 focus:ring-[#ff4e00]/20">
                <SelectValue placeholder="Filter by priority" />
              </SelectTrigger>
              <SelectContent>
                {priorityOptions.map(option => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            
            <Select value={typeFilter} onValueChange={setTypeFilter}>
              <SelectTrigger className="border-gray-200 focus:ring-[#ff4e00]/20">
                <SelectValue placeholder="Filter by type" />
              </SelectTrigger>
              <SelectContent>
                {typeOptions.map(option => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            
            <Select value={assigneeFilter} onValueChange={setAssigneeFilter}>
              <SelectTrigger className="border-gray-200 focus:ring-[#ff4e00]/20">
                <SelectValue placeholder="Filter by assignee" />
              </SelectTrigger>
              <SelectContent>
                {assigneeOptions.map(option => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Task Board */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Not Started Column */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                <h2 className="font-semibold text-gray-900">Not Started</h2>
              </div>
              <Badge variant="outline" className="text-blue-500 border-blue-200 bg-blue-50">
                {todoTasks.length}
              </Badge>
            </div>
            <div className="space-y-4">
              {todoTasks.length === 0 ? (
                <Card className="p-6 text-center border-dashed border-2 border-gray-200 bg-gray-50">
                  <p className="text-gray-500">No tasks in this column</p>
                </Card>
              ) : (
                todoTasks.map(task => renderTaskCard(task))
              )}
            </div>
          </div>

          {/* In Progress Column */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                <h2 className="font-semibold text-gray-900">In Progress</h2>
              </div>
              <Badge variant="outline" className="text-yellow-500 border-yellow-200 bg-yellow-50">
                {inProgressTasks.length}
              </Badge>
            </div>
            <div className="space-y-4">
              {inProgressTasks.length === 0 ? (
                <Card className="p-6 text-center border-dashed border-2 border-gray-200 bg-gray-50">
                  <p className="text-gray-500">No tasks in this column</p>
                </Card>
              ) : (
                inProgressTasks.map(task => renderTaskCard(task))
              )}
            </div>
          </div>

          {/* Done Column */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                <h2 className="font-semibold text-gray-900">Done</h2>
              </div>
              <Badge variant="outline" className="text-green-500 border-green-200 bg-green-50">
                {completedTasks.length}
              </Badge>
            </div>
            <div className="space-y-4">
              {completedTasks.length === 0 ? (
                <Card className="p-6 text-center border-dashed border-2 border-gray-200 bg-gray-50">
                  <p className="text-gray-500">No tasks in this column</p>
                </Card>
              ) : (
                completedTasks.map(task => renderTaskCard(task))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
