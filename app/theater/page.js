"use client";

import Image from "next/image";
import theaters from "@/data/db/theaters";
import Link from "next/link";
import { useOrderContext } from "@/components/context";

export default function Theaters() {
  const { order, changeOrder } = useOrderContext();
  console.log(order);

  return (
    <div className="grid grid-cols-3 mx-auto w-fit gap-x-[2rem] gap-y-[1rem]">
      {theaters.map((item, index) => (
        <Link href={!order.movieId ? "/theater/#" :`/theater/${index + 1}`} key={index} className="flex flex-col"
          onClick={() => {
            if (!order.movieId)
              alert("Киногоо эхлээд сонгоно уу.");
            else
            changeOrder("theaterId", index+1);
          }}>
          <p className="text-2xl font-bold text-white">{item.name}</p>
          <Image src={item.image} alt={`poster${index}`} width={316} height={400} className="object-cover rounded-xl" />
          <p className="font-semibold text-[#868686] text-center">{item.location}</p>
        </Link>
      ))}
    </div>
  );
}