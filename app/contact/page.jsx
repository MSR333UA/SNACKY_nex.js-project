import Link from "next/link";
import React from "react";

export const metadata = {
  title: "Contact Us",
};

const page = () => {
  return (
    <div className="text-center mt-[200px] h-[75vh] ">
      <h1 className="font-bold text-2xl uppercase pt-8 text-[var(--primary-color)]">
        my contact telegram{" "}
        <Link
          className="hover:bg-red-700 rounded-3xl hover:text-3xl"
          href="https://t.me/MSR333"
          target="_blank"
        >
          @MSR333!
        </Link>
      </h1>
    </div>
  );
};

export default page;
