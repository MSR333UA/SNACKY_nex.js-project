/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

const Mealworm = () => {
  return (
    <section id="/ikea" className="mb-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="flex justify-center items-center">
          <h2 className="text-[var(--primary-color)] text-3xl font-bold mb-5 md:mb-0">
            GalyaShop Dumplings Cherries
          </h2>
        </div>

        <div className="flex justify-center overflow-hidden">
          <Image
            className="w-[80%] rounded-xl"
            src="https://recepty.24tv.ua/resources/photos/recipe/1200x675_DIR/202006/9328b7746e2-f01f-4024-8444-6e5c241dd3da.jpg?1592822349000"
            width={500}
            height={500}
            alt="IKEA'S INSECT BURGER"
            // priority
          />
        </div>

        <div className="flex justify-center items-center md:col-span-2 lg:col-span-1">
          <div className="px-5 w-full h-full flex flex-col justify-evenly text-center">
            <div>
              <p className="font-italic text-2xl my-10">
                "The Future of the Classic may Be behind Dumplings with Fish"
              </p>
            </div>

            <div>
              <Link
                href="https://traditions.in.ua/kukhnia/tradytsiini-stravy/124-varenyky"
                target="_blank"
              >
                <button className="font-bold rounded inline-flex">
                  <span className="mr-2 text-1xl text-[#555] uppercase">
                    read the article "Українські традиції"
                  </span>
                  <BsFillArrowRightCircleFill className="text-2xl" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mealworm;
