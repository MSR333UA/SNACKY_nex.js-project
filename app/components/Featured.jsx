import Link from "next/link";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

const Featured = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-10 md:gap-2 py-8">
      <div className="md:col-span-6 text-center py-5">
        <span className="font-bold text-1xl text-[#555]">
          SNACKY'S FEATURED PRODUCT
        </span>
        <img
          className="w-[40%] ml-12 md:mx-auto py-8"
          src="https://cdn-icons-png.flaticon.com/256/8709/8709612.png"
          alt="dumplings"
        />
        <h1 className="text-[#555] text-2xl font-bold lg:text-3xl text-left ml-12 pt-8 md:text-center md:ml-0">
          Dumplings with Cherries Dessert
        </h1>
        <p className="uppercase py-3 font-bold text-1xl text-left ml-12 md:text-center md:ml-0">
          cocoa
        </p>
        <p className=" py-3 font-bold text-2xl text-left ml-12 md:text-center md:ml-0">
          €7.95
        </p>
        <Link
          href="https://galya-baluvana.kiev.ua/product/vareniki-cherries/"
          target="_blank"
        >
          <button className="font-bold pt-4 rounded inline-flex items-center">
            <span className="mr-3 text-2xl text-[var(--primary-color)] uppercase">
              order now
            </span>
            <BsFillArrowRightCircleFill className="text-3xl" />
          </button>
        </Link>
      </div>

      <div className="md:col-span-4 text-center py-5">
        <div className="flex items-center justify-center">
          <img
            className="w-full py-14"
            src="https://cdn-icons-png.flaticon.com/256/7649/7649415.png"
            alt="dumplings with cherries"
          />
        </div>
      </div>
    </section>
  );
};

export default Featured;
