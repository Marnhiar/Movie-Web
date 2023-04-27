"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Search() {
  const [value, setValue] = useState("");
  const router = useRouter();
  const search = async (value) => {
    await fetch("/api/movies", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({name: value})
    }).then(res => res.json())
      .then(data => router.push(`/movie/${data.id}`))
      .catch(error => alert(error));
  } 

  return (
    <div className="flex items-center w-full max-w-[330px] h-full px-[1rem] bg-[#374151] rounded-l-[50px] rounded-r-[50px]">
      <input type="text" placeholder="Киноны нэр" value={value} onChange={(e) => setValue(e.target.value)}
        className="w-full bg-transparent text-white" />
      <button className="bg-white px-[1rem] py-[4px] rounded-xl"
        onClick={() => search(value)}>
        Хайх
      </button>
    </div>
  );
}