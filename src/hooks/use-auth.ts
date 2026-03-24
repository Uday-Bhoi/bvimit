import { supabase } from "@/lib/supabase";
import type { User } from "@supabase/supabase-js";
import { useEffect, useMemo, useState } from "react";

type SignInMethod = "email-otp" | "anonymous";
const GUEST_STORAGE_KEY = "bvimit_guest_session";

export function useAuth() {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState<User | null>(null);
  const [isGuest, setIsGuest] = useState(false);

  useEffect(() => {
    let isMounted = true;

    async function bootstrapAuth() {
      const { data } = await supabase.auth.getSession();
      if (!isMounted) {
        return;
      }

      setUser(data.session?.user ?? null);

      if (typeof window !== "undefined") {
        setIsGuest(localStorage.getItem(GUEST_STORAGE_KEY) === "true");
      }

      setIsLoading(false);
    }

    void bootstrapAuth();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
      setIsLoading(false);
    });

    return () => {
      isMounted = false;
      subscription.unsubscribe();
    };
  }, []);

  const isAuthenticated = useMemo(() => {
    return Boolean(user) || isGuest;
  }, [user, isGuest]);

  const signIn = async (method: SignInMethod, formData?: FormData) => {
    if (method === "anonymous") {
      const { error } = await supabase.auth.signInAnonymously();

      // If anonymous auth is disabled in Supabase, keep the existing guest flow working.
      if (error) {
        if (typeof window !== "undefined") {
          localStorage.setItem(GUEST_STORAGE_KEY, "true");
        }
        setIsGuest(true);
        return;
      }

      if (typeof window !== "undefined") {
        localStorage.removeItem(GUEST_STORAGE_KEY);
      }
      setIsGuest(false);
      return;
    }

    if (!formData) {
      throw new Error("Email sign in requires form data.");
    }

    const email = formData.get("email")?.toString().trim();
    const code = formData.get("code")?.toString().trim();

    if (!email) {
      throw new Error("Email is required.");
    }

    if (code) {
      const { error } = await supabase.auth.verifyOtp({
        email,
        token: code,
        type: "email",
      });

      if (error) {
        throw error;
      }
      return;
    }

    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: { shouldCreateUser: true },
    });

    if (error) {
      throw error;
    }
  };

  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      throw error;
    }

    if (typeof window !== "undefined") {
      localStorage.removeItem(GUEST_STORAGE_KEY);
    }
    setIsGuest(false);
  };

  return {
    isLoading,
    isAuthenticated,
    user,
    signIn,
    signOut,
  };
}
