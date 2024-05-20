"use client"

import { SignedIn, SignedOut } from "@clerk/nextjs";
import MarketingHome from "./(Marketing)/marketing/page";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

// Create a Component for Redirection
const Redirect = () => {
  const router = useRouter();
  useEffect(() => {
    router.push("/dashboard");
  }, []);
  return null;
};

export default function App() {
  return (
    <main>
      {/* Conditional Rendering based on Authentication */}
      <SignedOut>
        <MarketingHome />
      </SignedOut>

      {/* Conditional Rendering based on Authentication */}
      <SignedIn>
        {/* Optionally, you can return null or some loading indicator */}
        <div>Redirecting...</div>

        <Redirect />
      </SignedIn>
    </main>
  );
}
