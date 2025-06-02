"use client";

import Link from "next/link";
import NavigationFooter from "@/components/NavigationFooter";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Atelier CAMARIO</title>
      </Head>

      <main className="min-h-screen relative overflow-hidden w-full">
        <section className="!fixed inset-0 min-h-screen w-full bg-transparent flex flex-col items-center justify-between p-8 md:p-12 z-[20]">
          <Link href="/" className="font-semibold cursor-pointer w-50px">
            <img width={100} src="https://i.ibb.co/jv8vLVHS/logos-copy.png" alt="ac" />
          </Link>

          <div className="flex relative flex-col items-center">
            <h2 className="text-[#FACE8D] font-dancing text-2xl sm:text-[40px] md:text-[60px] lg:text-[80px] leading-none">
              The taste of
            </h2>
            <h1 className="font-medium text-center text-5xl sm:text-6xl md:text-[90px] lg:text-[160px] leading-none">
              Atelier CAMARIO
            </h1>
            <p className="text-xl md:text-[23px] text-center md:text-start mt-[20px] md:max-w-[600px]">
              We are a design house and cocktail bar
              Fashion /Interior architecture /graphic design.
            </p>

            <div className="w-full flex-col justify-center max-w-[650px]">
              <div className="mt-[23px] ml-10 max-w-[650px] w-full flex justify-end">
                <div className="bg-white w-[250px] h-[163px] rounded-[10px] text-black py-4 px-6 hidden sm:block">
                  <h3 className="font-normal tracking-wide">Opening Hours</h3>
                  <div className="mt-2 flex justify-between items-center">
                    <h2 className="">Mon</h2>
                    <p className="font-normal tracking-wide">closed</p>
                  </div>
                  <div className="mt-2 flex justify-between items-center">
                    <h2 className="">Tue - Fri</h2>
                    <p className="font-normal tracking-wide">4pm - 8pm</p>
                  </div>
                  <div className="mt-2 flex justify-between items-center">
                    <h2 className="">Sat - Sun</h2>
                    <p className="font-normal tracking-wide">4pm - 8pm</p>
                  </div>
                </div>
              </div>
              <NavigationFooter />
            </div>
          </div>
        </section>

        <div className="slider">
          <div className="slide"></div>
          <div className="slide"></div>
          <div className="slide"></div>
          <div className="slide"></div>
          <div className="slide"></div>
        </div>
      </main>
    </>
  );
}
