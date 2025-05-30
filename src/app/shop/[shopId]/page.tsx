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
            <h2 className="text-[24px]">Lorem ipsum dolor</h2>
            <p className="text-white text-[16px] text-opacity-50 mt-[16px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Integer malesuada nunc vel risus commodo viverra maecenas. Dis
              parturient montes nascetur ridiculus mus mauris vitae ultricies.
              Placerat duis ultricies lacus sed turpis. Vel elit scelerisque
              mauris pellentesque pulvinar pellentesque habitant morbi
              tristique. Turpis massa sed elementum tempus egestas sed sed
              risus.
            </p>

            <div className="w-full h-[300px] relative mt-[48px] rounded-[10px] overflow-hidden">
              <Image
                src={shopState.img}
                objectFit="cover"
                layout="fill"
                alt="blog img"
              />
            </div>

            <h2 className="text-[24px] mt-[48px]">Lorem ipsum dolor</h2>
            <p className="text-white text-[16px] text-opacity-50 mt-[16px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Integer malesuada nunc vel risus commodo viverra maecenas. Dis
              parturient montes nascetur ridiculus mus mauris vitae ultricies.
              Placerat duis ultricies lacus sed turpis. Vel elit scelerisque
              mauris pellentesque pulvinar pellentesque habitant morbi
              tristique. Turpis massa sed elementum tempus egestas sed sed
              risus.
              <br />
              <br />
              orem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Integer malesuada nunc vel risus commodo viverra maecenas. Dis
              parturient
              <br />
              <br />
              Eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Integer malesuada nunc vel risus commodo viverra maecenas. Dis
              parturient montes nascetur ridiculus mus mauris vitae ultricies.
              Placerat duis ultricies lacus sed turpis. Vel elit scelerisque
              mauris pellentesque pulvinar pellentesque habitant morbi
              tristique. Turpis massa sed elementum tempus egestas sed sed
              risus.
            </p>

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
