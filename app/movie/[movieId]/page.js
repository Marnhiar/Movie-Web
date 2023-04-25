"use client";

import { useOrderContext } from "@/components/context";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Movie({ params }) {
  const [movies, setMovies] = useState(null);
  const id = params.movieId;
  useEffect(() => {
    fetch("http://127.0.0.1:3000/api/movies", {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
    }).then(res => res.json())
      .then(data => setMovies(data))
      .catch(error => console.log(error));
  }, []);
  if (!movies)
    return <div className="flex flex-col py-[10rem] md:py-[15rem] items-center justify-center">Loading...</div>;

  return (
    <div className="flex flex-col w-full gap-[2rem] text-white">
      <div className="flex flex-row w-full gap-[2rem] pb-[1rem] border-b-2 border-white/50">
        <div className="flex flex-col w-[70%] gap-[1rem]">
          <div className="text-4xl font-bold">{movies[id - 1].name}</div>
          <video src="/videos/video1.mp4" controls />
        </div>
        <div className="flex flex-col w-[30%] gap-[1rem]">
          <div className="text-3xl font-bold">Одоо гарч буй кинонууд</div>
          <div className="grid grid-cols-2 gap-[1rem]">
            {movies.map((item, index) => {
              if (index != id - 1 && index <= 4) {
                return (
                  <Link href={`/${item.id}`} key={index}>
                    <Image src={item.image} alt={item.name} width={170} height={250} className="object-cover" />
                  </Link>
                );
              }
            })}
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-[1rem]">
        <Image src={movies[id - 1].image} alt={movies[id - 1].name} width={270} height={380} className="object-cover" />
        <div className="flex flex-col gap-[1rem] w-[25%]">
          <div className="flex flex-col">
            <p className="text-2xl font-semibold">Genres :</p>
            <p className="text-lg text-[#868686]">Action, Adventure, Drama</p>
          </div>
          <div className="flex flex-col">
            <p className="text-2xl font-semibold">Status :</p>
            <p className="text-lg text-[#868686]">Ongoing</p>
          </div>
          <div className="flex flex-col">
            <p className="text-2xl font-semibold">Director :</p>
            <p className="text-lg text-[#868686]">Ryan Coogler</p>
          </div>
          <div className="flex flex-col">
            <p className="text-2xl font-semibold">Author :</p>
            <p className="text-lg text-[#868686]">Ryan Coogler</p>
          </div>
          <div className="flex flex-col">
            <p className="text-2xl font-semibold">Age Category :</p>
            <p className="text-lg text-[#868686]"> PG13</p>
          </div>
          <OrderButton id={id} />
        </div>
        <div className="flex flex-col w-[40%] gap-[1rem]">
          <p className="text-2xl font-semibold">Товч Тайлбар</p>
          <p className="text-lg text-[#868686]">Queen Ramonda, Shuri, M'Baku, Okoye and the Dora Milaje fight to protect the kingdom of Wakanda from intervening world powers in the wake of King T'Challa's death. As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for their nation.</p>
        </div>
      </div>
    </div>
  )
}

function OrderButton({ id }) {
  const { order, changeOrder } = useOrderContext();
  console.log(order);

  return (
    <Link href="/theater" className="w-fit px-[1rem] py-[0.5rem] border-white border rounded-l-[50px] rounded-r-[50px] text-white cursor-pointer"
      onClick={() => {
        changeOrder("movieId", id);
      }}>
      Тасалбар Захиалах
    </Link>
  );
}
