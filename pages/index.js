import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Carousel } from "react-responsive-carousel";
import Banner from "../components/Banner";
import Header from "../components/Header";
import HotelFeed from "../components/HotelFeed";
import KenyanFeed from "../components/KenyanFeed";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Bonfire Adventures</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />

        <link
          href="https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Great+Vibes&family=Italianno&family=Parisienne&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Header />
      <Banner />
      <div className="lg:max-w-6xl mx-auto">
        <KenyanFeed />
      </div>
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        <div className="relative h-64">
          <Image
            src="/enashipai.jpg"
            layout="fill"
            objectFit="cover"
            objectPosition="top"
          />

          <h3 className="absolute top-20 md:top-30 text-white  left-10 font-bold max-w-[600px] text-left text-2xl md:text-5xl z-30">
            Enashipai
          </h3>
          <p className="absolute top-32 md:top-36 text-white left-10">
            Tours, Events & Excursions
          </p>
          <Link href="/">
            <a className="absolute bottom-3 left-10 bg-white py-2 px-4 rounded-md">
              View Deals
            </a>
          </Link>
        </div>
        <div className="relative h-64">
          <Image src="/baobab.jpg" layout="fill" objectFit="cover" />

          <h3 className="absolute top-20 md:top-30 text-white  left-10 font-bold max-w-[600px] text-left text-2xl md:text-5xl z-30">
            Baobab Beach Resort
          </h3>
          <p className="absolute top-32 md:top-36 text-white left-10">
            Unbelievable Hotels
          </p>
          <Link href="/">
            <a className="absolute bottom-3 left-10 bg-white py-2 px-4 rounded-md">
              View Deals
            </a>
          </Link>
        </div>
      </Carousel>
      <div className="lg:max-w-6xl mx-auto">
        <HotelFeed />
      </div>
    </div>
  );
}
