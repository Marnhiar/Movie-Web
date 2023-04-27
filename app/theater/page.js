"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Theaters() {
  const [theaters, setTheaters] = useState(null);
  const [order, setOrder] = useState(null);
  useEffect(() => {
    setOrder(JSON.parse(localStorage.getItem("order")));
    fetch("/api/theaters", {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
    }).then(res => res.json())
      .then(data => setTheaters(data))
      .catch(error => alert(error));
  }, []);
  if (!theaters)
    return <div>...Loading</div>

  return (
    <div className="grid grid-cols-3 mx-auto w-fit gap-x-[2rem] gap-y-[1rem]">
      {theaters.map((item, index) => (
        <Link href={!order.movieId ? "/theater/#" : `/theater/${item.id}`} key={index} className="flex flex-col"
          onClick={() => {
            if (!order.movieId)
              alert("Киногоо эхлээд сонгоно уу.");
            else {
              let temp = JSON.parse(localStorage.getItem("order"));
              temp.theaterId = item.id;
              localStorage.setItem("order", JSON.stringify(temp));
            }
          }}>
          <p className="text-2xl font-bold text-white">{item.name}</p>
          <Image src={item.image} alt={`poster${item.id}`} width={600} height={800} className="object-cover rounded-xl w-[316px] h-[400px] opacity-80" />
          <p className="font-semibold text-[#868686] text-center">{item.location}</p>
        </Link>
      ))}
    </div>
  );
}