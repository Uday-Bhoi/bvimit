"use client";

import { InstrumentationProvider } from "@/instrumentation";
import { Toaster } from "@/components/ui/sonner";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { VlyToolbar } from "../../vly-toolbar-readonly";

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
    return (
        <>
            <VlyToolbar />
            <InstrumentationProvider>
                <RouteSyncer />
                {children}
                <Toaster />
            </InstrumentationProvider>
        </>
    );
}
