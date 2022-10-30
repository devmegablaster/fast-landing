import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import Landing from "../components/Landing";
import WhyUs from "../components/WhyUs";
import Footer from "../components/Footer";
import LandingServices from "../components/Services/LandingServices";
import Safety from "../components/Landing/Safety";
import ProvideServices from "../components/Landing/ProvideServices";

const Home: NextPage = () => {
  return (
    <div className="w-screen h-screen overflow-x-hidden overflow-y-scroll scrollbar-hide">
      <div className="flex md:hidden">
        <Header />
      </div>
      <Landing />
      <WhyUs />
      <LandingServices />
      <Safety />
      <ProvideServices />
      <Footer />
    </div>
  );
};

export default Home;
