import React from "react";
import Header from "../components/layout/Header";
import Hero from "../components/home/Hero";
import Features from "../components/home/Features";
import TeamSection from "../components/home/TeamSection";
import Footer from "../components/layout/Footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <Hero />
        <Features />
        <TeamSection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
