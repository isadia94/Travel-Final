import Head from "next/head";
import { useState, useEffect } from "react";
import { SpinnerCircular, SpinnerDotted } from "spinners-react";

import Banner from "../components/Banner";
import Header from "../components/Header";
import HotelFeed from "../components/HotelFeed";
import KenyanFeed from "../components/KenyanFeed";
import PopularPackages from "../components/PopularPackages";
import International from "../components/International";
import Themes from "../components/Themes";
import Deals from "../components/Deals";
import Footer from "../components/Footer";

export default function Home() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <div>
      <Head>
        <title>Bonfire Adventures</title>
        <meta name="description" content="Developed By Brian" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />

        <link
          href="https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Great+Vibes&family=Italianno&family=Parisienne&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100&display=swap"
          rel="stylesheet"
        />
      </Head>

      {loading ? (
        <div className="h-screen w-screen flex items-center justify-center relative">
          <SpinnerDotted size={100} />
        </div>
      ) : (
        <>
          <Header />
          <Banner />
          <div className="lg:max-w-6xl mx-auto relative">
            <KenyanFeed />
            <Deals />

            <HotelFeed />
            <PopularPackages />
            <div className="mt-20">
              <International />
            </div>

            <Themes />
          </div>
          <Footer />
        </>
      )}
    </div>
  );
}
