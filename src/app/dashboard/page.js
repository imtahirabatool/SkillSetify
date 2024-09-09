"use client";

import Header from "./../components/header";
import Link from "next/link";
import { FaPlus } from "react-icons/fa";
import Footer from "../components/footer";

export default function Dashboard() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <div className="flex-grow flex items-center justify-center">
        <div className="flex flex-col items-center justify-center space-y-6">
          <Link href="/create-resume">
            <div className="flex flex-col items-center justify-center p-6 bg-gray-50 rounded-lg shadow-lg hover:bg-gray-200 transition duration-200">
              <FaPlus className="text-teal-600 w-6 h-6 mb-2" />
              <span className="mt-4 text-lg text-teal-600 font-semibold">
                Create Resume
              </span>
            </div>
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}
