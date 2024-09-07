"use client";
import { UserButton, SignedOut, SignInButton, SignedIn } from "@clerk/nextjs";

export default function Header() {

  return (
    <header className="flex justify-between items-center p-5">
      <h1 className="text-3xl font-bold text-gray-100">
        <a href="/">Skillsetify</a>
      </h1>
      <div>
        <SignedOut>
          <SignInButton 
          />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </header>
  );
}
