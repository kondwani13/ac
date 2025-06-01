import React from "react";
import menuData from "./menuData";
import Image from "next/image";
import Footer from "@/components/Footer";
import Link from "next/link";
import { BsFacebook, BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";

const Feed = () => {
  return (
    <div className="mt-[80px] max-w-[628px] w-full overflow-hidden overflow-y-scroll">
      <p className="text-[16px] text-white text-opacity-50">Digital marketing</p>
      <h1 className="mt-[8px] text-[40px]">Reserve Your Spot</h1>
      <div className="min-w-[280px] min-h-[260px] lg:min-h-[210px] relative flex justify-center items-center">
                          <Image
                            src={
                               "https://i.ibb.co/Y75CNL3C/dm.webp"
                }
                            alt="card"
                            layout="fill"
                            className="z-10 rounded-[10px]"
                            objectFit="cover"
                            unoptimized={true}
                          />
                        </div>
      <p className="text-[16px] text-white text-opacity-50 mt-[16px]">
        Kondwani Tech is hosting a Digital Marketing workshop at Atelier CAMARIO. This event will cover essential strategies and tools to enhance online presence, reach target audiences, and achieve marketing goals for entrepreneurs and small businesses.
      </p>

      <div className="flex items-center mt-[32px] mb-[80px]">
        <button className="h-[60px] rounded-[50px] w-[181px] bg-[#F8D49E] uppercase text-black active:scale-95 duration-150">
          Book A Spot
        </button>
        <p className="ml-[32px] text-[24px]">100k</p>
      </div>
      <div className="w-full px-[10px]">
        <h1 className="text-[#FACE8D] font-dancing text-[64px] leading-none">
          Details
        </h1>

        <ul className="mt-[32px]">
          <li className="flex items-center justify-between h-[80px] border-b border-[#171717]">
            <h4 className="text-[20px] font-medium">Date</h4>
            <p className="text-[18px] text-white text-opacity-50">
              June 16, 2025 6:00 PM
            </p>
          </li>
          <li className="flex items-center justify-between h-[80px] border-b border-[#171717]">
            <h4 className="text-[20px] font-medium">Teacher</h4>
            <div className="flex items-center">
              <Image
                src={
                  "https://i.ibb.co/rKqZFyNs/self.jpg"
                }
                alt="teacher"
                width={40}
                height={40}
                className="overflow-hidden h-[40px] w-[40px] rounded-full object-cover"
                unoptimized={true}
              />
              <p className="text-[18px] text-white text-opacity-50 ml-[6px]">
                Kondwani Tech
              </p>
            </div>
          </li>
          
          <li className="flex items-center justify-between h-[80px]">
            <h4 className="text-[20px] font-medium">Location</h4>
            <p className="text-[18px] text-white text-opacity-50">
              Nalikwanda Rd, Lusaka 10101
            </p>
          </li>
        </ul>
      </div>

      <div className="w-full px-[10px] mt-[96px]">
        <h1 className="text-[#FACE8D] font-dancing text-[64px] leading-none mb-[32px]">
          Menu
        </h1>
        {menuData.breakfast.slice(0, 2).map((item) => (
          <div
            style={{
              borderRadius: 10,
            }}
            key={item.id}
            className="flex w-full mt-[16px] cursor-pointer hover:scale-95 duration-150"
          >
            <Image
              width={90}
              height={72}
              src={item.pictureUrl}
              alt={item.name}
              className="rounded-[10px]"
              unoptimized={true}
            />
            <div className="ml-[24px]">
              <div className="flex items-center justify-between">
                <h1 className="text-[20px]">{item.name}</h1>
                <p className="text-white text-opacity-90">{item.price}</p>
              </div>
              <p className="text-[16px] text-white text-opacity-50">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <h1 className="text-[#FACE8D] font-dancing text-[64px] leading-none mb-[32px] mt-[80px]">
        Teacher
      </h1>
      <div className="flex items-center mt-[32px] w-full">
        <div className="min-w-[80px] min-h-[80px] overflow-hidden relative bg-green-500 rounded-full">
          <Image
            src="https://i.ibb.co/rKqZFyNs/self.jpg"
            alt="teacher"
            width={80}
            height={80}
            className="min-w-[80px] w-full min-h-[80px] max-h-[80px] object-cover rounded-full"
            unoptimized={true}
          />
        </div>
        <div className="flex flex-col ml-[32px]">
          <h1 className="text-[24px]">Kondwani tech</h1>
          <p className="text-[16px] mt-[4px] text-white text-opacity-50">
            I'm Kondwani Sakala, a web developer and designer based in Lusaka, Zambia. With a passion for creating beautiful and functional websites, I specialize in front-end development and user experience design.
          </p>
          <div className="flex items-center mt-[20px] space-x-4">
            <Link
              className="hover:animate-bounce"
              target="_blank"
              href={"https://github.com/kondwani13"}
            >
              <BsGithub />
            </Link>
            <Link
              className="hover:animate-bounce"
              target="_blank"
              href={"https://www.linkedin.com/in/kondwani13/"}
            >
              <BsLinkedin />
            </Link>
            <Link
              className="hover:animate-bounce"
              target="_blank"
              href={"https://www.instagram.com/sakala_kondwani/"}
            >
              <BsInstagram />
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Feed;
