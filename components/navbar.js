"use client";

import Link from "next/link";
import { usePathname } from 'next/navigation';
import links from "@/data/links";
import Search from "./search";
import { useEffect, useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [login, setLogin] = useState(false);

  useEffect(() => {
    const temp = localStorage.getItem("user") || false;
    setLogin(temp);
  }, [])

  return (
    <div className="flex flex-row w-full h-[96px] py-[24px] items-center justify-between gap-[1rem] md:gap-[2rem]">
      <Link href="/" className="text-4xl font-bold text-white">
        CinemaTicket
      </Link>
      {links.map((item, index) => (
        <Link key={index} href={item.href} className={`flex items-center justify-center text-lg font-bold ${pathname.includes(item.href) ? "text-white" : "text-[#868686]"}`}>{item.name}</Link>
      ))}
      <Search />
      {!login &&
        <Link href="/login" className="flex items-center justify-center w-[150px] h-full px-[1rem] border-white border rounded-l-[50px] rounded-r-[50px] text-white hover:bg-white hover:text-[#374151] transition-colors">
          Нэвтрэх
        </Link>
      }
      {login &&
        <button className="flex items-center justify-center w-[150px] h-full px-[1rem] border-white border rounded-l-[50px] rounded-r-[50px] text-white hover:bg-white hover:text-[#374151] transition-colors"
          onClick={() => {
            localStorage.removeItem("login");
            window.location.reload(false);
          }}>
          Log out
        </button>
      }
    </div>
  );
}