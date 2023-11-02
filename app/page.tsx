import React from "react";
import data from "@/data/address.json";
import Image from "next/image";
import Link from "next/link";

console.log(data);

const HomePage: React.FC = () => {
  return (
    <main>
      <div className="flex flex-row flex-wrap justify-stretch max-w-[1100px] mx-auto gap-2">
        {data.map((item, index) => {
          return (
            <div className="max-w-[167px] mx-auto mt-10" key={index}>
              <div
                className="mb-[1.5px] text-center uppercase"
                style={{ background: item.color }}
              >
                hululu <span className="font-bold">{item.county}</span>
              </div>
              <div className="border border-black px-1 pt-1 rounded-sm text-center h-full flex flex-col justify-between">
                <Image
                  src={item.picture}
                  alt="Amber"
                  width={165}
                  height={165}
                />
                <Link href={`/${item.county}`}>Click Me </Link>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default HomePage;
