"use client";
import { UserButton, SignedOut, SignInButton, SignedIn, useUser } from "@clerk/nextjs";
import { useRouter, usePathname } from "next/navigation";

export default function Header() {
  const { isSignedIn } = useUser();
  const router = useRouter();
  const pathname = usePathname();

  // Handler for navigating to Home
  const handleHomeClick = () => {
    router.push("/");
  };

  // Handler for navigating to Dashboard
  const handleDashboardClick = () => {
    router.push("/dashboard");
  };

  return (
    <header className="flex justify-between items-center p-5"
      style={{ backgroundColor: "#092419" ,
      borderBottom: "1px solid white",}}>
      <h1 className="text-3xl font-bold text-gray-100">
        <a href="/">SkillSetify</a>
      </h1>
      
      <div className="flex items-center">
        <SignedIn>
          {/* Conditionally show either Home or Dashboard based on the current page */}
          {pathname === "/dashboard" ? (
            <button 
              className="text-gray-100 mr-4 hover:underline" 
              onClick={handleHomeClick}
            >
              Home
            </button>
          ) : (
            <button 
              className="text-gray-100 mr-4 hover:underline" 
              onClick={handleDashboardClick}
            >
              Dashboard
            </button>
          )}
          
          <UserButton />
        </SignedIn>

        <SignedOut>
          <SignInButton />
        </SignedOut>
      </div>
    </header>
  );
}