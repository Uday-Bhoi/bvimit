"use client";

import { InstrumentationProvider } from "@/instrumentation";
import { Toaster } from "@/components/ui/sonner";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { VlyToolbar } from "../../vly-toolbar-readonly";

import { AnimatePresence, motion } from "framer-motion";
import { ThemeProvider } from "next-themes";
import LoadingScreen from "@/components/common/LoadingScreen";
import dynamic from "next/dynamic";

const Chatbot = dynamic(() => import("@/components/common/Chatbot"), { ssr: false });

function RouteSyncer() {
    const pathname = usePathname();

    useEffect(() => {
        window.parent.postMessage(
            { type: "iframe-route-change", path: pathname },
            "*",
        );
    }, [pathname]);

    useEffect(() => {
        function handleMessage(event: MessageEvent) {
            if (event.data?.type === "navigate") {
                if (event.data.direction === "back") window.history.back();
                if (event.data.direction === "forward") window.history.forward();
            }
        }

        window.addEventListener("message", handleMessage);
        return () => window.removeEventListener("message", handleMessage);
    }, []);

    return null;
}

export function Providers({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);
    
    return (
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            <VlyToolbar />
            <InstrumentationProvider>
                <LoadingScreen />
                <RouteSyncer />
                {mounted ? (
                    <AnimatePresence mode="popLayout">
                        <motion.div
                            key={pathname}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                            className="relative min-h-screen"
                        >
                            {children}
                        </motion.div>
                    </AnimatePresence>
                ) : (
                    <div key="initial-mount">
                        {children}
                    </div>
                )}
                <Chatbot />
                <Toaster />
            </InstrumentationProvider>
        </ThemeProvider>
    );
}
