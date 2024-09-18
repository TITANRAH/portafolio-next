import About from "@/components/home/about/About";
import Download from "@/components/home/download/Download";
import Footer from "@/components/home/footer/Footer";
import Form from "@/components/home/form/Form";
import Home from "@/components/home/Home";
import Reviews from "@/components/home/reviews/Reviews";
import React from "react";

function HomePage() {
  return (
    <div className="">
      <Home />
      <About />
      <Reviews/>
      <Download/>
      <Form/>
      <Footer/>
    </div>
  );
}

export default HomePage;
