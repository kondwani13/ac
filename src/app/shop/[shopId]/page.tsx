"use client";

import shopData from "@/utils/shopData";
import Footer from "@/components/Footer";
import NavigationFooter from "@/components/NavigationFooter";
import { Metadata, NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Head from "next/head";


//------------------------------------------------------------------
interface PageProps {
  params: { shopId: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

interface shopData {
  id: number;
  title: string;
  description: string;
  price: string;
  img: string;
}
//------------------------------------------------------------------

const Page: NextPage<PageProps> = ({ params }: PageProps) => {
  const [shopState, setShopState] = useState<shopData>({
    id: 0,
    title: "",
    description: "",
    price: "",
    img: "",
  });

  const { shopId } = params;
  const navigation = useRouter();

  useEffect(() => {
    const shop = shopData.find((value) => value.id === Number(shopId));
    if (!shop?.title) return navigation.replace("/shop");
    setShopState(shop);

    return () => undefined;
  }, [shopId, navigation]);

  return (
    <>
      <Head>
        <title>Shop - {shopState.title ?? ""}</title>
      </Head>

      <main className="min-h-screen relative overflow-hidden">
        <section className="w-full flex flex-col lg:flex-row h-full min-h-screen overflow-hidden">
          <div
            style={{
              background: `url(${shopState.img})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
            className="w-full lg:w-[50%] p-12 flex flex-col justify-between items-center min-h-screen h-full"
          >
            <Link href="/" className="font-semibold cursor-pointer">
              <img width={100} src="https://i.ibb.co/jv8vLVHS/logos-copy.png" alt="ac" />
            </Link>
            <div className="text-center">
              <h2 className="text-[#FACE8D] font-dancing text-[50px] lg:text-[80px] leading-none">
                {shopState.price}
              </h2>
              <h1 className="font-medium text-[60px] lg:text-[80px] leading-none">
                {shopState.title}
              </h1>
            </div>

            <NavigationFooter />
          </div>

          <div className="w-full lg:w-[50%] pt-[96px] h-screen overflow-hidden overflow-y-scroll px-4 lg:px-[80px]">
            <h2 className="text-[24px]">AC Item</h2>
            
            <p className="text-white text-[16px] text-opacity-50 mt-[16px]">
              Atelier Camario is a lifestyle brand governed by passion and creativity located in the capital city of Zambia Lusaka . The atelier touches different aspects of design such as art, fashion and architecture.
            </p>

            <div className="w-full h-[300px] relative mt-[48px] rounded-[10px] overflow-hidden">
              <Image
                src={shopState.img}
                objectFit="cover"
                layout="fill"
                alt="blog img"
                unoptimized={true}
              />
            </div>

            <h2 className="text-[24px] mt-[48px]">AC Item</h2>
            <p className="text-white text-[16px] text-opacity-50 mt-[16px]">
              Atelier Camario is a lifestyle brand governed by passion and creativity located in the capital city of Zambia Lusaka . The atelier touches different aspects of design such as art, fashion and architecture.
              <br />
              
            </p>
            <button className="bg-[#F8D49E] active:scale-95 hover:bg-[#f4ca8a] duration-150 mt-[48px] w-full text-black text-[16px] uppercase flex items-center justify-center rounded-[500px] h-[60px]">
                  Buy
            </button> 
            <div className="px-[50px]">
              <Footer />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Page;
