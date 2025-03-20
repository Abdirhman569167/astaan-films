"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { 
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon, CheckCircle2, Clock, Film, Upload, FileText, Award, Users } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().min(10, {
    message: "Please enter a valid phone number.",
  }),
  projectType: z.string({
    required_error: "Please select a project type.",
  }),
  budget: z.string({
    required_error: "Please select a budget range.",
  }),
  deadline: z.date({
    required_error: "Please select a deadline.",
  }),
  description: z.string().min(10, {
    message: "Description must be at least 10 characters.",
  }),
});

const projectTypes = [
  "Short Film",
  "Feature Film",
  "Documentary",
  "Music Video",
  "Commercial",
  "Corporate Video",
  "Wedding Video",
  "Event Coverage",
  "Animation",
  "Other"
];

const budgetRanges = [
  "Under $1,000",
  "$1,000 - $5,000",
  "$5,000 - $10,000",
  "$10,000 - $25,000",
  "$25,000 - $50,000",
  "$50,000 - $100,000",
  "$100,000+"
];

export default function CommissionPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      description: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    // Here you would typically send the data to your backend
    setIsSubmitted(true);
  }

  const ServiceCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
    <Card className="p-6 border-0 shadow-md hover:shadow-lg transition-shadow bg-white">
      <div className="flex flex-col items-center text-center">
        <div className="w-16 h-16 rounded-full bg-[#ff4e00]/10 flex items-center justify-center mb-4">
          {icon}
        </div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </Card>
  );

  const ProcessStep = ({ number, title, description }: { number: number, title: string, description: string }) => (
    <div className="flex flex-col items-center text-center">
      <div className="w-12 h-12 rounded-full bg-[#ff4e00] text-white flex items-center justify-center mb-4 text-xl font-bold">
        {number}
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );

  const FaqItem = ({ question, answer }: { question: string, answer: string }) => (
    <div className="border-b border-gray-200 pb-4 mb-4 last:border-0 last:mb-0 last:pb-0">
      <h3 className="text-lg font-medium mb-2 text-[#ff4e00]">{question}</h3>
      <p className="text-gray-600">{answer}</p>
    </div>
  );

  if (isSubmitted) {
    return (
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center bg-white rounded-xl shadow-lg p-12">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center">
              <CheckCircle2 className="h-10 w-10 text-green-600" />
            </div>
          </div>
          <h1 className="text-3xl font-bold mb-4">Thank You for Your Commission Request!</h1>
          <p className="text-xl text-gray-600 mb-8">
            We've received your project details and will get back to you within 48 hours to discuss next steps.
          </p>
          <Button 
            onClick={() => setIsSubmitted(false)} 
            className="bg-[#ff4e00] hover:bg-[#ff4e00]/90 text-white"
          >
            Submit Another Request
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      {/* Hero Section */}
      <div className="text-center mb-16 bg-gradient-to-r from-[#ff4e00]/10 to-[#ff4e00]/5 rounded-2xl p-12">
        <h1 className="text-4xl font-bold mb-4 text-[#ff4e00]">Film Commission Services</h1>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto">
          Let us bring your vision to life. Our team of experienced filmmakers is ready to create custom film projects tailored to your needs.
        </p>
      </div>

      {/* Services Section */}
      <div className="mb-20">
        <h2 className="text-2xl font-semibold mb-8 text-center">Our Commission Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ServiceCard 
            icon={<Film className="h-8 w-8 text-[#ff4e00]" />}
            title="Custom Film Production"
            description="From concept to final cut, we handle every aspect of producing your custom film project with professional quality."
          />
          <ServiceCard 
            icon={<Clock className="h-8 w-8 text-[#ff4e00]" />}
            title="Quick Turnaround"
            description="We understand deadlines. Our efficient workflow ensures your project is delivered on time without compromising quality."
          />
          <ServiceCard 
            icon={<Upload className="h-8 w-8 text-[#ff4e00]" />}
            title="High-Quality Delivery"
            description="Receive your final project in multiple formats optimized for your intended platform, whether it's social media, broadcast, or cinema."
          />
          <ServiceCard 
            icon={<FileText className="h-8 w-8 text-[#ff4e00]" />}
            title="Script Development"
            description="Our experienced writers can help develop your concept into a compelling script that tells your story effectively."
          />
          <ServiceCard 
            icon={<Award className="h-8 w-8 text-[#ff4e00]" />}
            title="Award-Winning Team"
            description="Work with our team of award-winning directors, cinematographers, and editors to create visually stunning content."
          />
          <ServiceCard 
            icon={<Users className="h-8 w-8 text-[#ff4e00]" />}
            title="Full Production Crew"
            description="Access our network of professional talent, from actors to technical specialists, to bring your project to life."
          />
        </div>
      </div>

      {/* Process Section */}
      <div className="mb-20 bg-white rounded-xl shadow-lg p-12">
        <h2 className="text-2xl font-semibold mb-8 text-center">Our Commission Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <ProcessStep 
            number={1}
            title="Initial Consultation"
            description="We discuss your vision, goals, and requirements to understand your project needs."
          />
          <ProcessStep 
            number={2}
            title="Proposal & Planning"
            description="We create a detailed proposal including timeline, budget, and production plan."
          />
          <ProcessStep 
            number={3}
            title="Production"
            description="Our team executes the project according to the approved plan with regular updates."
          />
          <ProcessStep 
            number={4}
            title="Delivery & Feedback"
            description="We deliver the final product and incorporate your feedback for any revisions."
          />
        </div>
      </div>

      {/* Commission Form */}
      <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
        <h2 className="text-2xl font-semibold mb-8 text-center">Request a Commission</h2>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder="John Doe" {...field} className="bg-gray-50" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="john@example.com" {...field} className="bg-gray-50" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <Input placeholder="+1 (555) 123-4567" {...field} className="bg-gray-50" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="projectType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Project Type</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="bg-gray-50">
                          <SelectValue placeholder="Select project type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {projectTypes.map((type) => (
                          <SelectItem key={type} value={type}>{type}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="budget"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Budget Range</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="bg-gray-50">
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {budgetRanges.map((range) => (
                          <SelectItem key={range} value={range}>{range}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="deadline"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Project Deadline</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "w-full pl-3 text-left font-normal bg-gray-50",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            {field.value ? (
                              format(field.value, "PPP")
                            ) : (
                              <span>Pick a date</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={(date) => date < new Date()}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Project Description</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Please describe your project in detail including goals, target audience, and any specific requirements."
                      className="min-h-[150px] bg-gray-50"
                      {...field} 
                    />
                  </FormControl>
                  <FormDescription>
                    The more details you provide, the better we can understand your vision.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <div className="flex justify-center">
              <Button 
                type="submit" 
                className="bg-[#ff4e00] hover:bg-[#ff4e00]/90 text-white px-8 py-6 text-lg"
              >
                Submit Commission Request
              </Button>
            </div>
          </form>
        </Form>
      </div>
      
      {/* Portfolio Section */}
      <div className="mb-20">
        <h2 className="text-2xl font-semibold mb-8 text-center">Our Recent Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <div className="aspect-video bg-gray-200 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-gray-500">Project Image</span>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-1">Corporate Brand Film</h3>
              <p className="text-gray-600 text-sm mb-2">A cinematic brand story for a tech startup</p>
              <p className="text-[#ff4e00] text-sm font-medium">Commercial</p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <div className="aspect-video bg-gray-200 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-gray-500">Project Image</span>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-1">Wedding Highlight Film</h3>
              <p className="text-gray-600 text-sm mb-2">Cinematic wedding highlights for a destination wedding</p>
              <p className="text-[#ff4e00] text-sm font-medium">Wedding Video</p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <div className="aspect-video bg-gray-200 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-gray-500">Project Image</span>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-1">Documentary Short</h3>
              <p className="text-gray-600 text-sm mb-2">Award-winning documentary about local artisans</p>
              <p className="text-[#ff4e00] text-sm font-medium">Documentary</p>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-8">
          <Button 
            className="bg-transparent hover:bg-[#ff4e00]/10 text-[#ff4e00] border border-[#ff4e00]"
          >
            View Full Portfolio
          </Button>
        </div>
      </div>
      
      {/* Testimonials Section */}
      <div className="mb-20 bg-white rounded-xl shadow-lg p-12">
        <h2 className="text-2xl font-semibold mb-8 text-center">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-gray-300 mr-4"></div>
              <div>
                <h3 className="font-semibold">Sarah Johnson</h3>
                <p className="text-sm text-gray-600">Marketing Director, TechCorp</p>
              </div>
            </div>
            <p className="text-gray-700 italic">"The team delivered beyond our expectations. Our corporate video has received incredible feedback from both clients and employees. The professionalism and creativity they brought to the project was outstanding."</p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-gray-300 mr-4"></div>
              <div>
                <h3 className="font-semibold">Michael Chen</h3>
                <p className="text-sm text-gray-600">Independent Filmmaker</p>
              </div>
            </div>
            <p className="text-gray-700 italic">"Working with this team on my documentary was a game-changer. Their technical expertise and storytelling abilities helped elevate my project to festival quality. I couldn't be happier with the results."</p>
          </div>
        </div>
      </div>
      
      {/* FAQ Section */}
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-semibold mb-8 text-center">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <FaqItem 
            question="How long does a typical commission take?"
            answer="Project timelines vary based on complexity. A short commercial might take 2-4 weeks, while a feature film could take several months. We'll provide a detailed timeline during our initial consultation."
          />
          <FaqItem 
            question="What information do you need to provide a quote?"
            answer="To provide an accurate quote, we need to understand your project scope, timeline, location requirements, talent needs, and distribution goals. The form above captures the basics, and we'll discuss details during our follow-up."
          />
          <FaqItem 
            question="Do you offer revisions to the final product?"
            answer="Yes, our standard packages include two rounds of revisions. Additional revision rounds can be arranged for an extra fee."
          />
          <FaqItem 
            question="What happens after I submit this form?"
            answer="Our team will review your request and contact you within 48 hours to schedule an initial consultation. During this call, we'll discuss your project in detail and provide a customized proposal."
          />
          <FaqItem 
            question="Do you work on international projects?"
            answer="Yes, we have experience working with clients worldwide. We can coordinate remote productions or travel to your location depending on the project requirements and budget."
          />
          <FaqItem 
            question="What payment methods do you accept?"
            answer="We accept bank transfers, credit cards, and PayPal. For larger projects, we typically require a 50% deposit to begin work, with the remaining balance due upon completion."
          />
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="mt-20 text-center">
        <h2 className="text-2xl font-semibold mb-4">Ready to Bring Your Vision to Life?</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          Fill out our commission form above or contact us directly to discuss your project needs.
        </p>
        <div className="flex justify-center space-x-4">
          <Button className="bg-[#ff4e00] hover:bg-[#ff4e00]/90 text-white">
            Contact Us Directly
          </Button>
          <Button className="bg-transparent hover:bg-[#ff4e00]/10 text-[#ff4e00] border border-[#ff4e00]">
            View Our Portfolio
          </Button>
        </div>
      </div>
    </div>
  );
}