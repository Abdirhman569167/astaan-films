"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

// Sample data for movies
const movies = [
  {
    id: 1,
    title: "Godzilla x Kong: The New Empire",
    image: "/public/new1.jpg",
    rating: "SU",
    genres: ["Sci-Fi", "Action"]
  },
  {
    id: 2,
    title: "Ghostbusters: Frozen Empire",
    image: "/ghostbusters.jpg",
    rating: "SU",
    genres: ["Comedy", "Action", "Fantasy"]
  },
  {
    id: 3,
    title: "Arthur the King",
    image: "/arthur-king.jpg",
    rating: "SU",
    genres: ["Adventure", "Drama"]
  },
  {
    id: 4,
    title: "Exhuma",
    image: "/exhuma.jpg",
    rating: "R 13+",
    genres: ["Horror", "Mystery"]
  },
  {
    id: 5,
    title: "Kung Fu Panda 4",
    image: "/kungfu-panda.jpg",
    rating: "SU",
    genres: ["Animation", "Comedy", "Family"]
  },
  {
    id: 6,
    title: "Dune: Part Two",
    image: "/dune.jpg",
    rating: "R 13+",
    genres: ["Sci-Fi", "Adventure"]
  }
];

// Sample data for dates
const dates = [
  { day: "Today", date: "02 Apr" },
  { day: "Wed", date: "03 Apr" },
  { day: "Thu", date: "04 Apr" },
  { day: "Fri", date: "05 Apr" },
  { day: "Sat", date: "06 Apr" },
  { day: "Sun", date: "07 Apr" },
  { day: "Mon", date: "08 Apr" },
  { day: "Tue", date: "09 Apr" },
  { day: "Wed", date: "10 Apr" },
  { day: "Thu", date: "11 Apr" },
  { day: "Fri", date: "12 Apr" },
  { day: "Sat", date: "13 Apr" },
  { day: "Sun", date: "14 Apr" },
  { day: "Mon", date: "15 Apr" }
];

// Sample data for showtimes
const showtimes = [
  "1:00 PM - 3:15 PM",
  "3:00 PM - 5:15 PM",
  "5:00 PM - 7:15 PM",
  "7:00 PM - 9:15 PM"
];

// Sample data for seats
const generateSeats = () => {
  const rows = ["A", "B", "C", "D", "E", "F"];
  const cols = Array.from({ length: 10 }, (_, i) => i + 1);
  
  const seats = [];
  for (const row of rows) {
    for (const col of cols) {
      const seatId = `${row}${col < 10 ? '0' + col : col}`;
      const status = Math.random() > 0.8 ? "booked" : "available";
      seats.push({ id: seatId, row, col, status });
    }
  }
  return seats;
};

export default function SchedulePage() {
  const [selectedDate, setSelectedDate] = useState(dates[0]);
  const [selectedMovie, setSelectedMovie] = useState(movies[0]);
  const [selectedShowtime, setSelectedShowtime] = useState(showtimes[0]);
  const [selectedSeats, setSelectedSeats] = useState<string[]>(["B02", "B03"]);
  const [seats] = useState(generateSeats());
  const [discount, setDiscount] = useState(20000);
  const [discountCode] = useState("NOONTONSERU");

  const handleSeatSelect = (seatId: string) => {
    if (selectedSeats.includes(seatId)) {
      setSelectedSeats(selectedSeats.filter(id => id !== seatId));
    } else if (selectedSeats.length < 2) {
      setSelectedSeats([...selectedSeats, seatId]);
    }
  };

  const totalPrice = selectedSeats.length * 55000;
  const finalPrice = totalPrice - discount;

  return (
    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-6">Film Schedule</h1>
        
        {/* Date selector */}
        <div className="flex overflow-x-auto pb-4 mb-6 gap-2">
          {dates.map((date, index) => (
            <Button
              key={index}
              variant={selectedDate === date ? "default" : "outline"}
              className={`min-w-[80px] flex-col ${selectedDate === date ? "bg-[#ff4e00] hover:bg-[#ff4e00]/90" : ""}`}
              onClick={() => setSelectedDate(date)}
            >
              <span className="text-xs">{date.day}</span>
              <span className="font-medium">{date.date}</span>
            </Button>
          ))}
        </div>
        
        {/* Film section */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold">Film</h2>
            <div className="relative w-64">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input placeholder="Search films..." className="pl-9" />
            </div>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {movies.map((movie) => (
              <Card 
                key={movie.id} 
                className={`overflow-hidden cursor-pointer transition-all ${
                  selectedMovie.id === movie.id ? "ring-2 ring-[#ff4e00]" : ""
                }`}
                onClick={() => setSelectedMovie(movie)}
              >
                <div className="relative aspect-[2/3]">
                  <div className="absolute top-2 right-2 z-10">
                    <Badge className="bg-white text-black font-medium">{movie.rating}</Badge>
                  </div>
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-500 text-xl font-bold">
                    {movie.title.split(' ').map(word => word.charAt(0)).join('')}
                  </div>
                  <img 
                    src={movie.image} 
                    alt={movie.title}
                    className="w-full h-full object-cover absolute inset-0"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>
                <div className="p-3">
                  <h3 className="font-medium text-sm truncate">{movie.title}</h3>
                </div>
              </Card>
            ))}
          </div>
        </div>
        
        {/* Movie details and booking section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1">
            <h2 className="text-xl font-bold mb-4">{selectedMovie.title}</h2>
            
            <div className="mb-4">
              <div className="flex gap-2 mb-2">
                {selectedMovie.genres.map((genre, index) => (
                  <Badge key={index} variant="outline" className="bg-gray-100">{genre}</Badge>
                ))}
              </div>
            </div>
            
            <div className="mb-6">
              <h3 className="font-medium mb-3">Select Showtime</h3>
              <div className="mb-4">
                <h4 className="text-sm text-gray-500 mb-2">Cinema Stela</h4>
                <div className="flex flex-wrap gap-2">
                  {showtimes.map((time, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      className={selectedShowtime === time ? "bg-gray-100" : ""}
                      onClick={() => setSelectedShowtime(time)}
                    >
                      {time}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-2">
            <div className="mb-4">
              <h3 className="font-medium mb-3">Select Seat</h3>
              <div className="grid grid-cols-10 gap-1 mb-4">
                {seats.map((seat) => {
                  const isSelected = selectedSeats.includes(seat.id);
                  const isBooked = seat.status === "booked";
                  
                  return (
                    <Button
                      key={seat.id}
                      variant="outline"
                      size="sm"
                      disabled={isBooked}
                      className={`h-8 p-0 ${
                        isBooked 
                          ? "bg-gray-200 cursor-not-allowed" 
                          : isSelected
                            ? "bg-[#ff4e00] text-white hover:bg-[#ff4e00]/90"
                            : ""
                      }`}
                      onClick={() => handleSeatSelect(seat.id)}
                    >
                      {seat.id}
                    </Button>
                  );
                })}
              </div>
              
              <div className="w-full h-8 border-t-4 border-gray-300 rounded-t-full mb-6 flex justify-center">
                <div className="text-xs text-gray-500 mt-2">Cinema Screen</div>
              </div>
            </div>
            
            <Card className="p-4">
              <h3 className="font-medium mb-3">Price</h3>
              
              <div className="space-y-2 mb-4">
                <div className="flex justify-between">
                  <span>2 Ticket</span>
                  <span>
                    {selectedSeats.join(", ")}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Sub Total</span>
                  <span>IDR 110,000</span>
                </div>
              </div>
              
              <Separator className="my-4" />
              
              <div className="space-y-2 mb-4">
                <div className="flex justify-between">
                  <span>Discount</span>
                  <span className="text-red-500">- IDR 20,000</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{discountCode}</span>
                  <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Discount claimed</Badge>
                </div>
              </div>
              
              <Separator className="my-4" />
              
              <div className="flex justify-between font-medium mb-6">
                <span>Total</span>
                <span>IDR 90,000</span>
              </div>
              
              <div className="flex gap-2">
                <Button variant="outline" className="flex-1">Pay QRIS</Button>
                <Button className="flex-1 bg-[#ff4e00] hover:bg-[#ff4e00]/90">Pay Cash</Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}