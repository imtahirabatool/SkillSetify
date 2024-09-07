"use client";
import Header from "./../components/header";
import Footer from "./../components/footer";
import PricingSection from "./../components/priceSection";
import Typewriter from 'typewriter-effect';
import Cards from "../components/Cards";

export default function Dashboard() {
  return (
    <div>
  <Header />
  <main
    className="flex flex-col items-center justify-center min-h-screen w-full"
    style={{
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundAttachment: "fixed",
      backgroundImage: "url('https://i.makeagif.com/media/4-01-2016/03wypQ.gif')",
    }}
  >
    <div className="flex flex-col md:flex-row items-center justify-between h-full w-full p-5 md:p-10">
      <div className="w-full md:w-2/3 flex flex-col items-center justify-center text-center md:text-left">
        <h1
          className="text-3xl sm:text-4xl md:text-5xl font-bold capitalize mt-5 md:mt-0"
          style={{ color: "#257860" }}
        >
          <Typewriter
            options={{
              strings: ["SkillSetify"],
              autoStart: true,
              loop: true,
            }}
          />
        </h1>
        <h2
          className="text-xl sm:text-2xl md:text-3xl font-bold capitalize mt-2 md:mt-5"
          style={{ color: "#257860" }}
        >
          A Resume Builder
        </h2>
        <h5 className="p-3 sm:p-5 mt-3 mx-5 sm:mx-10 md:mx-20 lg:mx-[150px] xl:mx-[200px] font-semibold text-white">
          An AI-integrated resume builder that helps you get hired at your dream companies. Stand out with tailored content that highlights your skills and achievements, making a lasting impression on potential employers.
        </h5>
        <button
          className="text-white p-4 rounded-full font-bold mt-5"
          style={{ backgroundColor: "#257860" }}
        >
          Create Resume
        </button>
      </div>

      <div className="w-full md:w-1/3 flex items-center justify-center mt-10 md:mt-0">
        <img
          src="https://www.realtimecv.com/images/scanner.gif"
          alt="Resume Builder Preview"
          className="w-full h-auto max-w-[300px] md:max-w-full"
          style={{ borderRadius: "35px" }}
        />
      </div>
    </div>
  </main>
  <Cards />
  <PricingSection />
  <Footer />
</div>
  );
}
