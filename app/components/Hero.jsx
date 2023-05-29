import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div className="h-screen flex justify-center items-center bg-center bg-cover hero-bg-image">
      <div className="absolute top-0 left-0 bottom-0 bg-black/60 z-[2]" />

      <div className="py-5 text-white z-[2]">
        <Link href="https://www.facebook.com/Varenu4ku/" target="_blank">
          <button className="px-16 py-4 border uppercase rounded-full bg-[var(--primary-color)] border-none text-white font-bold hover:opacity-70 text-1xl md:text-2xl">
            order free samples
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
