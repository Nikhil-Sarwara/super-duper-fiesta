import { SignedIn, SignedOut } from "@clerk/nextjs";
import MarketingHome from "./(Marketing)/marketing/page";

export default function App() {
  return (
    <main>
      {/* Conditional Rendering based on Authentication */}
      <SignedOut>
        <MarketingHome />
      </SignedOut>

      {/* Conditional Rendering based on Authentication */}
      <SignedIn>
        Dashboard
      </SignedIn>
    </main>
  );
}
