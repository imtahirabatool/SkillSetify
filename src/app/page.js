"use client";
import Head from "next/head";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import Header from "./components/header";
import Footer from "./components/footer";
import PricingSection from "./components/priceSection";
import Cards from "./components/Cards";
import Typewriter from 'typewriter-effect';

export default function Home() {
  const router = useRouter();
  const { isSignedIn } = useUser();

  const handleGetStarted = () => {
    if (isSignedIn) {
      router.push("/dashboard");
    } else {
      router.push("/sign-in");
    }
  };

  return (
    <div>
      <Head>
        <title>Skillsetify</title>
      </Head>
      <Header/>
      <main
        className="flex flex-col items-center justify-center"
        style={{
          backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed", 
    backgroundImage: "url('https://i.makeagif.com/media/4-01-2016/03wypQ.gif')",
    height: "100vh",
    width: "100vw",
        }}
      >
        <div className="flex flex-col md:flex-row items-center justify-between h-screen w-screen">
  <div className="w-full md:w-2/3 flex flex-col items-center justify-center">
    <h1
      className="text-3xl sm:text-3xl items-center md:text-4xl font-bold capitalize mt-[50px] md:mt-[0] text-center md:text-left text-white"
      style={{ color: "#257860" }}
    >
      <Typewriter
        options={{
          strings: ['SkillSetify'],
          autoStart: true,
          loop: true,
        }}
      />
    </h1>
    <h2
      className="text-2xl sm:text-2xl items-center md:text-3xl font-bold capitalize md:mt-[10px] text-center md:text-left text-white"
      style={{ color: "#257860" }}
    >
      A Resume Builder
    </h2>
    <h5 className="p-5 sm:p-5 mt-3 mx-5 sm:mx-10 md:mx-20 lg:mx-[200px] xl:mx-[300px] font-semibold text-white text-center md:text-left">
      An AI-integrated resume builder that helps you get hired at your dream companies. Stand out with tailored content that highlights your skills and achievements, making a lasting impression on potential employers.
    </h5>
    <button
      className="text-white p-4 rounded-full font-bold mt-5"
      style={{ backgroundColor: "#257860" }}
      onClick={handleGetStarted}
    >
      Get Started
    </button>
  </div>

  <div className="w-full md:w-1/3 flex items-center justify-center mt-10 md:mt-0 md:ml-20 pr-[100px]">
    <img
      src="https://www.realtimecv.com/images/scanner.gif"
      alt="Resume Builder Preview"
      className="w-full h-auto object-cover max-w-[300px] md:max-w-full"
      style={{
        borderRadius:"35px",
      }}
    />
  </div>
</div>
      </main>
      <Cards/>
      <PricingSection />
      <Footer />
    </div>
  );
}
