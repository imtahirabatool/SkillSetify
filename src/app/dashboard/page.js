"use client";
import Header from "./../components/header";
import Footer from "./../components/footer";
import PricingSection from "./../components/priceSection";

export default function Dashboard() {
  return (
    <div className="container">
      <Header />
      <main
        className="flex flex-col items-center justify-center"
        style={{
          backgroundSize: "cover",
          backgroundColor: "black",
          backgroundPosition: "center",
          marginTop: "-100px",
        }}
      >
        <div className="flex flex-col md:flex-row items-center justify-between h-screen w-screen">
          <div className="w-full md:w-2/3 flex flex-col items-center justify-center">
            <h1 className="text-3xl sm:text-3xl items-center md:text-4xl font-bold capitalize mt-[50px] md:mt-[0] text-center md:text-left text-white">
              SkillSetify
            </h1>
            <h2 className="text-2xl sm:text-2xl items-center md:text-3xl font-bold capitalize  md:mt-[10px] text-center md:text-left text-white">
              A Resume Builder
            </h2>
            <h5 className="p-5 sm:p-5 mt-3 mx-5 sm:mx-10 md:mx-20 lg:mx-[200px] xl:mx-[300px] font-semibold text-white text-center md:text-left">
              An AI integrated resume builder that helps you get hired at your
              dream companies.
            </h5>
            <button className="bg-gray-300 text-black p-4 rounded-full font-bold mt-5">
              Create Resume
            </button>
          </div>

          <div className="w-full md:w-1/3 flex items-center justify-center mt-10 md:mt-0 mr-[100px]">
            <img
              src="https://news.microsoft.com/wp-content/uploads/prod/sites/388/2018/05/limitedexperience_hero_social.gif"
              alt="Resume Builder Preview"
              className="w-full h-auto object-cover max-w-[300px] md:max-w-full"
            />
          </div>
        </div>
      </main>
      <PricingSection />
      <Footer />
    </div>
  );
}
