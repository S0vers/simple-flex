import React from "react";
import data from "@/data/address.json";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <div className="flex flex-row flex-wrap justify-stretch max-w-[1100px] mx-auto">
      {data.map((item, index) => {
        return (
          <div
            className="w-full sm:max-w-[167px] mx-auto mt-10 h-full flex flex-col justify-between items-center align-middle"
            key={index}
          >
            <div className="border border-black px-1 pt-1 rounded-sm text-center">
              <Image
                src={item.picture}
                alt="Amber"
                width={165}
                height={165}
                className="h-36"
              />
            </div>
            <Link href={`/${item.county}`}>Click Me </Link>
          </div>
        );
      })}
    </div>
  );
};

export default page;
