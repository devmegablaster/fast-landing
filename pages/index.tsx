import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import Landing from "../components/Landing";
import WhyUs from "../components/WhyUs";
import Footer from "../components/Footer";

const Home: NextPage = () => {
  return (
    <div className="w-screen h-screen overflow-x-hidden overflow-y-scroll scrollbar-hide">
      <div className="flex md:hidden">
        <Header />
      </div>
      <Landing />
      <WhyUs />
      <Footer />
    </div>
  );
};

export default Home;
