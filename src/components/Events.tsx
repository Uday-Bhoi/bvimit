import { motion } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export default function Events() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  const events = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=500&fit=crop",
      title: "Annual Tech Symposium 2024",
      date: "March 15, 2024"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800&h=500&fit=crop",
      title: "Industry Expert Workshop",
      date: "February 20, 2024"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&h=500&fit=crop",
      title: "Student Innovation Showcase",
      date: "January 10, 2024"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&h=500&fit=crop",
      title: "Campus Cultural Festival",
      date: "December 5, 2023"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&h=500&fit=crop",
      title: "Hackathon 2023",
      date: "November 18, 2023"
    }
  ];

  const onSelect = useCallback(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
  }, [api]);

  useEffect(() => {
    if (!api) return;
    onSelect();
    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api, onSelect]);

  return (
    <section id="events" className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ type: "spring", delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold">
              Campus Life
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Events & Activities
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore the vibrant campus life at BVIMIT through our various events, workshops, and activities
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <Carousel
            opts={{
              align: "center",
              loop: false,
            }}
            plugins={[
              Autoplay({
                delay: 4000,
                stopOnInteraction: true,
              }),
            ]}
            setApi={setApi}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {events.map((event, index) => {
                const isActive = index === current;
                return (
                  <CarouselItem 
                    key={event.id} 
                    className={`pl-2 md:pl-4 transition-all duration-500 ${
                      isActive ? "md:basis-1/2" : "md:basis-1/3"
                    }`}
                  >
                    <div
                      className="p-2 transition-all duration-500"
                      style={{
                        transform: isActive ? "scale(1.05)" : "scale(0.95)",
                        opacity: isActive ? 1 : 0.7,
                      }}
                    >
                      <div className="relative group overflow-hidden rounded-2xl shadow-lg cursor-pointer">
                        <img
                          src={event.image}
                          alt={event.title}
                          className={`w-full object-cover transition-all duration-500 ${
                            isActive ? "h-96" : "h-80"
                          } group-hover:scale-110`}
                        />
                        {/* Gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                        
                        {/* Text overlay */}
                        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                          <h3 className="text-xl font-bold mb-2 drop-shadow-lg">
                            {event.title}
                          </h3>
                          <p className="text-sm text-gray-200 drop-shadow-md">
                            {event.date}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious className="left-0 -translate-x-12" />
            <CarouselNext className="right-0 translate-x-12" />
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
}