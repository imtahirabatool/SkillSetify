"use client";

import Header from "./../components/header";
import Link from "next/link";
import { FaPlus } from "react-icons/fa";
import Footer from "../components/footer";

export default function Dashboard() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <div className="min-h-screen flex flex-col items-center justify-center">
        <div className="max-w-7xl mx-auto p-6">
          <div className="flex flex-col items-center space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-md">
              <Link href="/create-resume">
                <div className="flex flex-col items-center justify-center p-6 bg-gray-100 rounded-lg shadow-lg hover:bg-gray-200 transition duration-200">
                  <FaPlus className="text-green-500 w-6 h-6 mb-2" />
                  <span className="mt-4 text-lg text-green-500 font-semibold">
                    Create Resume
                  </span>
                </div>
              </Link>
              <div className="flex flex-col items-center justify-center p-6 bg-gray-100 rounded-lg shadow-lg hover:bg-gray-200 transition duration-200">
                <span className="mt-4 text-lg text-green-500 font-semibold">
                  Previous Resumes
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
