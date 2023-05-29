import React from "react";

const Info = () => {
  return (
    <section className="w-full">
      <div className="p-4 text-slate-800 bg-slate-300 text-[14px] md:text-[18px] lg:text-2xl text-left md:text-center">
        <h2 className="hidden">Welcome to Snacky!</h2>
        <p>
          Hey, mens loves 🍲 edible dumplings are a great{" "}
          <span className="font-bold">source of protein</span> 💪
        </p>
      </div>
    </section>
  );
};

export default Info;
