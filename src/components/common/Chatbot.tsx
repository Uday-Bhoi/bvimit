"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, User, GraduationCap, Building, Briefcase, Info, Phone, LayoutGrid } from "lucide-react";

interface Message {
  id: string;
  type: "user" | "bot";
  text: string;
}

const QUICK_SUGGESTIONS = [
  { label: "Admissions", query: "Tell me about admissions", icon: <Building className="w-3.5 h-3.5" /> },
  { label: "MCA Course", query: "Tell me about MCA", icon: <GraduationCap className="w-3.5 h-3.5" /> },
  { label: "Placements", query: "Placement record", icon: <Briefcase className="w-3.5 h-3.5" /> },
  { label: "Facilities", query: "Campus facilities", icon: <LayoutGrid className="w-3.5 h-3.5" /> },
];

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: "1", type: "bot", text: "Welcome to BVIMIT! I'm your digital assistant. How can I help you today?" }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const handleSend = (text: string) => {
    if (!text.trim()) return;

    const userMsg: Message = { id: Date.now().toString(), type: "user", text };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      const lowerText = text.toLowerCase();
      let botResponse = "I'm sorry, I don't have that specific detail yet. You can find more info on our website or contact us at 022-27578415.";

      if (lowerText.includes("admission")) {
        botResponse = "Admissions at BVIMIT are primarily for our MCA program through the MAH-MCA-CET entrance exam. We also offer PhD programs in Information Technology. Which one would you like to know more about?";
      } else if (lowerText.includes("mca")) {
        botResponse = "Our MCA is a 2-year full-time postgraduate program approved by AICTE and affiliated with the University of Mumbai. It focuses on modern software development, data science, and IT management.";
      } else if (lowerText.includes("phd") || lowerText.includes("research")) {
        botResponse = "BVIMIT offers a PhD program in Information Technology. Our research center is recognized by the University of Mumbai, focusing on emerging tech like AI, Blockchain, and Cybersecurity.";
      } else if (lowerText.includes("placement") || lowerText.includes("job") || lowerText.includes("recruit")) {
        botResponse = "We have a stellar placement record! Top recruiters like TCS, Capgemini, Infosys, and L&T Infotech regularly hire from BVIMIT. Our average package is highly competitive for the region.";
      } else if (lowerText.includes("fee")) {
        botResponse = "The fees for our programs are decided by the Fees Regulating Authority (FRA), Maharashtra. For the current academic year, please check the 'Admissions' section or visit our administrative office.";
      } else if (lowerText.includes("facility") || lowerText.includes("campus") || lowerText.includes("lab") || lowerText.includes("library")) {
        botResponse = "BVIMIT provides state-of-the-art computer labs, high-speed Wi-Fi, a digital library, spacious classrooms, and an auditorium. We also have a dedicated cell for industry-academia interaction.";
      } else if (lowerText.includes("contact") || lowerText.includes("location") || lowerText.includes("map") || lowerText.includes("address")) {
        botResponse = "We are located at Sector 8, C.B.D. Belapur, Navi Mumbai - 400614. You can call us at 022-27578415 or email principal.bvimit@bharatividyapeeth.edu.";
      } else if (lowerText.includes("about") || lowerText.includes("who")) {
        botResponse = "Bharati Vidyapeeth's Institute of Management & Information Technology (BVIMIT) was established in 2002. We are one of the premier institutes in Navi Mumbai for IT and Management education.";
      } else if (lowerText.includes("hi") || lowerText.includes("hello") || lowerText.includes("hey")) {
        botResponse = "Hello! I'm here to answer your questions about BVIMIT. Feel free to ask about admissions, courses, or placements!";
      }

      setMessages((prev) => [...prev, { id: Date.now().toString() + "bot", type: "bot", text: botResponse }]);
      setIsTyping(false);
    }, 800);
  };

  return (
    <>
      {/* Floating Button - High Visibility with Branding */}
      <motion.button
        className={`fixed bottom-6 right-6 z-[60] p-4 rounded-full shadow-2xl transition-all duration-500 overflow-hidden ${isOpen ? "bg-red-500 scale-90" : "bg-primary hover:bg-primary-dark group"}`}
        whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <div className="absolute inset-0 bg-white/20 scale-0 group-hover:scale-100 transition-transform duration-500 rounded-full" />
        {isOpen ? (
          <X className="w-7 h-7 text-white" />
        ) : (
          <div className="flex items-center gap-2">
            <img src="/assets/images/bharati_logo.png" className="w-7 h-7 object-contain brightness-0 invert" alt="BVIMIT" />
          </div>
        )}
      </motion.button>

      {/* Chat Window - Premium "Vibe" UI */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9, transformOrigin: "bottom right" }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.9 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed bottom-24 right-6 z-[60] w-[380px] max-w-[calc(100vw-3rem)] h-[580px] max-h-[calc(100vh-120px)] bg-background rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.15)] overflow-hidden flex flex-col border border-border/50 transition-colors duration-300"
          >
            {/* Branded Premium Header */}
            <div className="bg-primary/5 dark:bg-primary/10 p-6 pb-8 shrink-0 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
              
              <div className="flex items-center gap-4 relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-white dark:bg-gray-800 p-2.5 shadow-lg shadow-black/5 flex items-center justify-center border border-primary/10">
                  <img
                    src="/assets/images/bharati_logo.png"
                    alt="BVIMIT"
                    className="w-full h-full object-contain"
                  />
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white dark:border-gray-800 rounded-full" />
                </div>
                <div>
                  <h3 className="font-black text-foreground text-xl tracking-tight uppercase leading-none mb-1">
                    BVIMIT Ai
                  </h3>
                  <p className="text-primary font-bold text-[10px] tracking-widest uppercase opacity-80">
                    Always Online • Instant Support
                  </p>
                </div>
              </div>
            </div>

            {/* Conversation Space */}
            <div className="flex-1 overflow-y-auto px-6 pt-2 pb-6 space-y-6 scrollbar-none bg-gradient-to-b from-primary/5 via-transparent to-transparent">
              {messages.map((msg) => (
                <motion.div 
                  key={msg.id}
                  initial={{ opacity: 0, scale: 0.9, x: msg.type === "user" ? 20 : -20 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  className={`flex items-start gap-3 ${msg.type === "user" ? "flex-row-reverse" : "flex-row"}`}
                >
                  {msg.type === "bot" && (
                    <div className="w-8 h-8 rounded-full bg-white dark:bg-gray-800 p-1.5 shadow-sm border border-border/50 shrink-0 mt-1">
                      <img src="/assets/images/bharati_logo.png" className="w-full h-full object-contain" alt="bot" />
                    </div>
                  )}
                  {msg.type === "user" && (
                    <div className="w-8 h-8 rounded-full bg-primary p-2 shadow-lg shadow-primary/20 shrink-0 mt-1 flex items-center justify-center">
                      <User className="w-full h-full text-white" />
                    </div>
                  )}
                  <div className={`relative px-4 py-3 rounded-2xl text-sm leading-relaxed max-w-[80%] ${
                    msg.type === "user" 
                      ? "bg-primary text-white rounded-tr-none shadow-lg shadow-primary/10 font-medium" 
                      : "bg-white dark:bg-gray-800 text-foreground rounded-tl-none border border-border/30 shadow-sm"
                  }`}>
                    {msg.text}
                  </div>
                </motion.div>
              ))}

              {isTyping && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-white dark:bg-gray-800 p-1.5 shadow-sm border border-border/50 shrink-0 mt-1 animate-pulse">
                    <img src="/assets/images/bharati_logo.png" className="w-full h-full object-contain" alt="bot" />
                  </div>
                  <div className="px-5 py-4 bg-white dark:bg-gray-800 shadow-sm rounded-2xl rounded-tl-none border border-border/30">
                    <div className="flex gap-1.5">
                      <motion.div animate={{ scale: [1, 1.4, 1] }} transition={{ repeat: Infinity, duration: 0.8, delay: 0 }} className="w-1.5 h-1.5 bg-primary/40 rounded-full" />
                      <motion.div animate={{ scale: [1, 1.4, 1] }} transition={{ repeat: Infinity, duration: 0.8, delay: 0.2 }} className="w-1.5 h-1.5 bg-primary/40 rounded-full" />
                      <motion.div animate={{ scale: [1, 1.4, 1] }} transition={{ repeat: Infinity, duration: 0.8, delay: 0.4 }} className="w-1.5 h-1.5 bg-primary/40 rounded-full" />
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Actions Footer - Contextual */}
            <div className="bg-white dark:bg-gray-900 px-6 py-4 border-t border-border/30 shrink-0">
               <p className="text-[9px] font-black uppercase text-muted-foreground tracking-widest mb-3 opacity-50 text-center">Suggested Queries</p>
               <div className="flex gap-2 overflow-x-auto scrollbar-none pb-1">
                {QUICK_SUGGESTIONS.map((q) => (
                  <button
                    key={q.label}
                    onClick={() => handleSend(q.query)}
                    className="flex items-center gap-2 text-[10px] font-black uppercase tracking-wider px-4 py-2 bg-muted/50 text-foreground border border-border/50 rounded-xl hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 shrink-0 shadow-sm"
                  >
                    {q.icon}
                    {q.label}
                  </button>
                ))}
              </div>

              {/* Message Input Box */}
              <div className="mt-4 relative group">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSend(input)}
                  placeholder="Type your message..."
                  className="w-full bg-muted/30 dark:bg-gray-800/50 text-foreground rounded-2xl pl-5 pr-14 py-4 outline-none text-sm transition-all border border-transparent focus:border-primary/50 focus:bg-white dark:focus:bg-gray-800"
                />
                <button
                  onClick={() => handleSend(input)}
                  disabled={!input.trim()}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2.5 bg-primary text-white rounded-xl hover:scale-105 active:scale-95 transition-all disabled:opacity-30 disabled:grayscale"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
