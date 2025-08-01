import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="w-full flex justify-between px-[10px] mt-[96px] mb-[80px]">
      <div className="w-full max-w-[162px]">
        <Link href="/" className="font-semibold cursor-pointer">
          <img width={100} src="https://i.ibb.co/jv8vLVHS/logos-copy.png" alt="ac" />
        </Link>
        <p className="mt-[32px] text-white text-opacity-50">
          Created by Kondwani tech,{" "}
          <Link
            href="https://portfolio-u312.onrender.com/"
            target="_blank"
            className="text-blue-600 hover:underline"
          >
            Website
          </Link>
        </p>
      </div>

      <div className="w-full max-w-[162px]">
        <h1 className="text-[18px] font-light">Pages</h1>
        <ul className="mt-[32px]">
          <li className="mb-[16px] text-[16px] text-white text-opacity-50 cursor-pointer">
            <Link href="/menu">Menu</Link>
          </li>
          
          
          <li className="mb-[16px] text-[16px] text-white text-opacity-50 cursor-pointer">
            <Link href="/book-a-table">Book a Table</Link>
          </li>
          <li className="mb-[16px] text-[16px] text-white text-opacity-50 cursor-pointer">
            <Link href="/contact">Contact</Link>
          </li>
          <li className="mb-[16px] text-[16px] text-white text-opacity-50 cursor-pointer">
            <Link href="/blog">Blog</Link>
          </li>
          <li className="mb-[16px] text-[16px] text-white text-opacity-50 cursor-pointer">
            <Link href="/shop">Shop</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
