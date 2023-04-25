"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Movies() {
  const [movies, setMovies] = useState(null);

  async function getData() {
    const res = await fetch('/api/movies', {
      method: 'GET',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    })
    res.json().then((data) => setMovies(data));
  }

  useEffect(() => {
    getData();
  }, []);
  if (!movies)
    return null;

  return (
    <div className="grid grid-cols-6 gap-[1rem]">
      {movies.map((item, index) => (
        <Link href={`/movie/${item.id}`} key={`movie${index}`} className="flex flex-col items-center">
          <Image src={item.image} alt={item.name} width={170} height={250} className="object-cover" />
          <p className="text-lg font-semibold text-center">{item.name}</p>
        </Link>
      ))}
    </div>
  );
}