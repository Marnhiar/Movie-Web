"use client";

import { useOrderContext } from "@/components/context";
import Image from "next/image";
import Link from "next/link";
import theaters from "@/data/db/theaters";
import { useState } from "react";

export default function Theater() {
  const { order, changeOrder } = useOrderContext();
  console.log(order);
  const [selected, setSelected] = useState(0);
  const today = new Date();
  changeOrder("date", `${today.getMonth() + 1}-${today.getDate()}`);
  const times = ["12:00", "14:20", "17:50", "21:00"];
  if (!order.theaterId) {
    alert("Театраа эхлээд сонгоно уу.");
    return;
  }
  Date.prototype.addDays = function (days) {
    let date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
  }
  function TicketSvg({ index }) {
    return (
      <svg width="84" height="84" viewBox="0 0 84 84" fill="none" xmlns="http://www.w3.org/2000/svg" className={`w-[84px] h-[84px] text-[${selected === index ? "#E10856" : "#434343"}]`}>
        <path d="M0.25 5.6C0.25 2.64528 2.64528 0.25 5.6 0.25H78.4C81.3547 0.25 83.75 2.64528 83.75 5.6V36.5056C80.8285 36.6363 78.5 39.0462 78.5 42C78.5 44.9538 80.8285 47.3637 83.75 47.4944V78.4C83.75 81.3547 81.3547 83.75 78.4 83.75H5.6C2.64528 83.75 0.25 81.3547 0.25 78.4V47.4944C3.17153 47.3637 5.5 44.9538 5.5 42C5.5 39.0462 3.17153 36.6363 0.25 36.5056V5.6ZM42 16C45.0376 16 47.5 13.5376 47.5 10.5C47.5 7.46243 45.0376 5 42 5C38.9624 5 36.5 7.46243 36.5 10.5C36.5 13.5376 38.9624 16 42 16Z" fill="currentColor" stroke="#333333" strokeWidth="0.5" />
      </svg>
    );
  }
  function Tickets() {
    return (
      <div className="flex flex-row gap-[8px]">
        {[...Array(4)].map((item, index) => (
          <div key={index} className="relative cursor-pointer"
            onClick={() => {
              setSelected(index);
              const date = today.addDays(index);
              changeOrder("date", `${date.getMonth() + 1}-${date.getDate()}`);
            }}>
            <TicketSvg index={index} />
            <div className="absolute flex flex-col left-[25%] top-[20%] items-center">
              <p className="font-semibold">{today.addDays(index).getMonth() + 1} сар</p>
              <p className="font-bold text-xl">{today.addDays(index).getDate()}</p>
            </div>
          </div>
        ))}
      </div>
    )
  }
  return (
    <div className="flex flex-col w-full h-[650px] p-[1rem] bg-[#282828] rounded-xl text-white gap-[2rem]">
      <div className="text-4xl font-bold">Кино театраар гарах хуваарь</div>
      <div className="flex flex-row px-[1rem] gap-[2rem] mx-auto">
        <div className="flex flex-col gap-[2rem]">
          <Tickets />
          {times.map((item, index) => (
            <Link key={index} href="/order" className="flex flex-row w-[280px] h-[80px] px-[1rem] gap-[3rem] items-center border-2 border-[#525252] rounded-md"
              onClick={() => {
                changeOrder("time", item);
              }}>
              <Image src="/theaters/clock.svg" alt="clock" width={40} height={40} />
              <div className="font-semibold text-3xl">{item}</div>
            </Link>
          ))}
        </div>
        <div className="flex flex-col">
          <Image src={`/theaters/theater${order.theaterId}.jpg`} alt="theaterPoster" width={800} height={800} className="w-[710px] h-[430px]" />
          <p className="text-2xl font-bold text-[#868686]">{theaters[order.theaterId].location}</p>
        </div>
      </div>
    </div>
  );
}