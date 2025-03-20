"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, Filter, Star, Clock, Calendar } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Play } from "lucide-react";

const categories = [
  "All", "Action", "Comedy", "Drama", "Sci-Fi", "Horror", "Romance", "Animation"
];

const discoveryMovies = [
  {
    title: "The Matrix Resurrections",
    image: "http://abdirhman.com/wp-content/uploads/2025/03/mqdefault.jpg",
    year: "2021",
    rating: "6.8",
    duration: "148 min",
    genre: "Action, Sci-Fi"
  },
  {
    title: "Dune",
    image: "http://abdirhman.com/wp-content/uploads/2025/03/p23711562_v_h8_ad.jpg",
    year: "2021",
    rating: "8.1",
    duration: "155 min",
    genre: "Adventure, Drama, Sci-Fi"
  },
  {
    title: "No Time to Die",
    image: "http://abdirhman.com/wp-content/uploads/2025/03/maxresdefault.jpg",
    year: "2021",
    rating: "7.3",
    duration: "163 min",
    genre: "Action, Adventure, Thriller"
  },
  {
    title: "Shang-Chi",
    image: "http://abdirhman.com/wp-content/uploads/2025/03/maxresdefault-1.jpg",
    year: "2021",
    rating: "7.4",
    duration: "132 min",
    genre: "Action, Adventure, Fantasy"
  },
  {
    title: "Black Widow",
    image: "http://abdirhman.com/wp-content/uploads/2025/03/best-action-movies-upcoming-in-2023.jpg",
    year: "2021",
    rating: "6.7",
    duration: "134 min",
    genre: "Action, Adventure, Sci-Fi"
  },
  {
    title: "Eternals",
    image: "http://abdirhman.com/wp-content/uploads/2025/03/maxresdefault.jpg",
    year: "2021",
    rating: "6.3",
    duration: "156 min",
    genre: "Action, Adventure, Fantasy"
  },
  {
    title: "Eternals",
    image: "http://abdirhman.com/wp-content/uploads/2025/03/maxresdefault.jpg",
    year: "2021",
    rating: "6.3",
    duration: "156 min",
    genre: "Action, Adventure, Fantasy"
  },
  {
    title: "Eternals",
    image: "http://abdirhman.com/wp-content/uploads/2025/03/maxresdefault.jpg",
    year: "2021",
    rating: "6.3",
    duration: "156 min",
    genre: "Action, Adventure, Fantasy"
  },
  {
    title: "Eternals",
    image: "http://abdirhman.com/wp-content/uploads/2025/03/maxresdefault.jpg",
    year: "2021",
    rating: "6.3",
    duration: "156 min",
    genre: "Action, Adventure, Fantasy"
  },
  {
    title: "Eternals",
    image: "http://abdirhman.com/wp-content/uploads/2025/03/maxresdefault.jpg",
    year: "2021",
    rating: "6.3",
    duration: "156 min",
    genre: "Action, Adventure, Fantasy"
  },
  {
    title: "Eternals",
    image: "http://abdirhman.com/wp-content/uploads/2025/03/maxresdefault.jpg",
    year: "2021",
    rating: "6.3",
    duration: "156 min",
    genre: "Action, Adventure, Fantasy"
  },
  {
    title: "Eternals",
    image: "http://abdirhman.com/wp-content/uploads/2025/03/maxresdefault.jpg",
    year: "2021",
    rating: "6.3",
    duration: "156 min",
    genre: "Action, Adventure, Fantasy"
  },
  {
    title: "Eternals",
    image: "http://abdirhman.com/wp-content/uploads/2025/03/maxresdefault.jpg",
    year: "2021",
    rating: "6.3",
    duration: "156 min",
    genre: "Action, Adventure, Fantasy"
  },
];

export default function DiscoveryPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [yearRange, setYearRange] = useState([2000, 2023]);
  const [ratingRange, setRatingRange] = useState([5, 10]);
  const [isFilterApplied, setIsFilterApplied] = useState(false);
  const [activeFilters, setActiveFilters] = useState({
    year: false,
    rating: false,
    genre: false
  });
  const [selectedMovie, setSelectedMovie] = useState<any>(null);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  // Filter movies based on all criteria
  const filteredMovies = discoveryMovies.filter(movie => {
    // Always apply search filter
    const matchesSearch = movie.title.toLowerCase().includes(searchQuery.toLowerCase());
    
    // Always apply category filter from tabs
    const matchesCategory = selectedCategory === "all" || 
      movie.genre.toLowerCase().includes(selectedCategory.toLowerCase());
    
    // Only apply these filters if the Apply Filters button was clicked
    if (isFilterApplied) {
      // Year filter
      const movieYear = parseInt(movie.year);
      const matchesYear = movieYear >= yearRange[0] && movieYear <= yearRange[1];
      
      // Rating filter
      const movieRating = parseFloat(movie.rating);
      const matchesRating = movieRating >= ratingRange[0] && movieRating <= ratingRange[1];
      
      return matchesSearch && matchesCategory && matchesYear && matchesRating;
    }
    
    // If filters aren't applied, just use search and category
    return matchesSearch && matchesCategory;
  });

  // Function to apply filters
  const applyFilters = () => {
    setIsFilterApplied(true);
    setActiveFilters({
      year: true,
      rating: true,
      genre: true
    });
  };

  // Function to reset filters
  const resetFilters = () => {
    setYearRange([2000, 2023]);
    setRatingRange([5, 10]);
    setSelectedCategory("all");
    setIsFilterApplied(false);
    setActiveFilters({
      year: false,
      rating: false,
      genre: false
    });
  };

  // Function to handle view details click
  const handleViewDetails = (movie: any) => {
    setSelectedMovie(movie);
    setIsDetailsOpen(true);
    console.log("Viewing details for:", movie.title);
  };

  const MovieCard = ({ movie }: any) => (
    <Card className="group relative overflow-hidden rounded-xl border-0 shadow-md hover:shadow-lg transition-all duration-300">
      <div className="relative">
        <img
          src={movie.image}
          alt={movie.title}
          className="aspect-[2/3] w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        
        <Badge className="absolute top-3 right-3 bg-[#ff4e00]/90 hover:bg-[#ff4e00]">
          {movie.rating}
        </Badge>
        
        <div className="absolute bottom-0 left-0 right-0 p-4 transform transition-transform duration-300">
          <h3 className="text-lg font-semibold text-white mb-1">{movie.title}</h3>
          <div className="flex items-center gap-2 text-sm text-white/80">
            <div className="flex items-center">
              <Calendar className="h-3 w-3 mr-1" />
              <span>{movie.year}</span>
            </div>
            <span>•</span>
            <div className="flex items-center">
              <Clock className="h-3 w-3 mr-1" />
              <span>{movie.duration}</span>
            </div>
          </div>
          <div className="mt-2">
            {movie.genre.split(", ").map((genre: string, index: number) => (
              <Badge key={index} variant="outline" className="mr-1 mb-1 text-xs bg-white/10 text-white border-white/20 hover:bg-white/20">
                {genre}
              </Badge>
            ))}
          </div>
        </div>
      </div>
      
      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
        <Button 
          className="bg-[#ff4e00] hover:bg-[#ff4e00]/90 text-white rounded-full px-6 py-2 font-medium"
          onClick={() => handleViewDetails(movie)}
        >
          View Details
        </Button>
      </div>
    </Card>
  );

  return (
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <div className="mb-10">
        <h1 className="text-3xl font-bold mb-2">Discover Movies</h1>
        <p className="text-gray-500 mb-8">Explore our collection of films and find your next favorite</p>
        
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input 
              placeholder="Search for movies, TV shows, people..." 
              className="pl-10 bg-white border-gray-200"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" className="flex items-center gap-2 bg-white">
                <Filter className="h-4 w-4" />
                Filters {isFilterApplied && <Badge className="ml-2 bg-[#ff4e00]">Active</Badge>}
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Filter Movies</SheetTitle>
                <SheetDescription>
                  Refine your movie search with these filters
                </SheetDescription>
              </SheetHeader>
              <div className="py-6 space-y-6">
                <div className="space-y-2">
                  <h3 className="text-sm font-medium">Year Range</h3>
                  <Slider 
                    defaultValue={yearRange} 
                    max={2023} 
                    min={1950} 
                    step={1}
                    value={yearRange}
                    onValueChange={setYearRange}
                  />
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>{yearRange[0]}</span>
                    <span>{yearRange[1]}</span>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-sm font-medium">Rating</h3>
                  <Slider 
                    defaultValue={ratingRange} 
                    max={10} 
                    min={0} 
                    step={0.1}
                    value={ratingRange}
                    onValueChange={setRatingRange}
                  />
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>{ratingRange[0].toFixed(1)}</span>
                    <span>{ratingRange[1].toFixed(1)}</span>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-sm font-medium">Genres</h3>
                  <div className="flex flex-wrap gap-2">
                    {categories.slice(1).map((category) => (
                      <Badge 
                        key={category} 
                        variant={selectedCategory === category.toLowerCase() ? "default" : "outline"}
                        className="cursor-pointer"
                        onClick={() => setSelectedCategory(category.toLowerCase())}
                      >
                        {category}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="pt-4 flex justify-end gap-2">
                  <Button variant="outline" onClick={resetFilters}>
                    Reset
                  </Button>
                  <Button 
                    className="bg-[#ff4e00] hover:bg-[#ff4e00]/90"
                    onClick={applyFilters}
                  >
                    Apply Filters
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
        
        {/* Active filters display */}
        {isFilterApplied && (
          <div className="flex flex-wrap gap-2 mb-4">
            {activeFilters.year && (
              <Badge variant="secondary" className="flex items-center gap-1">
                Year: {yearRange[0]}-{yearRange[1]}
                <button 
                  className="ml-1 rounded-full hover:bg-gray-200 p-1"
                  onClick={() => {
                    setYearRange([2000, 2023]);
                    setActiveFilters({...activeFilters, year: false});
                  }}
                >
                  ×
                </button>
              </Badge>
            )}
            {activeFilters.rating && (
              <Badge variant="secondary" className="flex items-center gap-1">
                Rating: {ratingRange[0].toFixed(1)}-{ratingRange[1].toFixed(1)}
                <button 
                  className="ml-1 rounded-full hover:bg-gray-200 p-1"
                  onClick={() => {
                    setRatingRange([5, 10]);
                    setActiveFilters({...activeFilters, rating: false});
                  }}
                >
                  ×
                </button>
              </Badge>
            )}
            {selectedCategory !== "all" && (
              <Badge variant="secondary" className="flex items-center gap-1">
                Genre: {selectedCategory}
                <button 
                  className="ml-1 rounded-full hover:bg-gray-200 p-1"
                  onClick={() => {
                    setSelectedCategory("all");
                  }}
                >
                  ×
                </button>
              </Badge>
            )}
            {(activeFilters.year || activeFilters.rating || selectedCategory !== "all") && (
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-sm"
                onClick={resetFilters}
              >
                Clear All
              </Button>
            )}
          </div>
        )}
        
        <Tabs 
          defaultValue="all" 
          value={selectedCategory}
          onValueChange={setSelectedCategory}
          className="w-full"
        >
          <div className="bg-white p-1 rounded-full inline-flex mb-8 shadow-sm">
            <TabsList className="bg-transparent p-0 justify-start space-x-1">
              {categories.map((category) => (
                <TabsTrigger 
                  key={category} 
                  value={category.toLowerCase()}
                  className="rounded-full px-4 py-2 data-[state=active]:bg-[#ff4e00] data-[state=active]:text-white"
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
          
          <TabsContent value={selectedCategory} className="mt-0">
            {filteredMovies.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                {filteredMovies.map((movie, i) => (
                  <MovieCard key={i} movie={movie} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <h3 className="text-xl font-medium mb-2">No movies found</h3>
                <p className="text-gray-500">Try adjusting your search or filters</p>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
      
      {/* Movie Details Dialog - Moved inside the return statement */}
      <Dialog open={isDetailsOpen} onOpenChange={setIsDetailsOpen}>
        <DialogContent className="sm:max-w-[600px] p-0 overflow-hidden bg-black text-white">
          {selectedMovie && (
            <>
              <div className="relative">
                <img 
                  src={selectedMovie.image} 
                  alt={selectedMovie.title}
                  className="w-full h-[300px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                
                <div className="absolute top-4 right-4">
                  <Badge className="bg-[#ff4e00]/90 hover:bg-[#ff4e00]">
                    {selectedMovie.rating}
                  </Badge>
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h2 className="text-2xl font-bold mb-2">{selectedMovie.title}</h2>
                  <div className="flex items-center gap-3 text-sm text-white/80">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{selectedMovie.year}</span>
                    </div>
                    <span>•</span>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{selectedMovie.duration}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {selectedMovie.genre.split(", ").map((genre: string, index: number) => (
                    <Badge key={index} variant="outline" className="bg-white/10 text-white border-white/20">
                      {genre}
                    </Badge>
                  ))}
                </div>
                
                <p className="text-white/80 mb-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, 
                  nisl vel ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl 
                  nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia.
                </p>
                
                <Button className="w-full bg-[#ff4e00] hover:bg-[#ff4e00]/90 text-white rounded-full py-6">
                  <Play className="mr-2 h-5 w-5" /> Watch Now
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}