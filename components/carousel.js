"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Carousel() {
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

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <Slider {...settings} >
      {movies.map((item, index) => (
        <div key={index} className="relative mx-auto w-fit">
          <Image src={item.image} alt="poster" width={1180} height={800} className="object-cover w-[1180px] h-[400px] opacity-60" onDragStart={(e) => e.preventDefault()} />
          <Link href={`/movie/${item.id}`} className="absolute flex flex-col left-0 bottom-0 w-[50%] px-[2rem] py-[1rem] gap-[1rem]">
            <p className="text-4xl font-bold">{item.name}</p>
            <p>{item.description}</p>
          </Link>
        </div>
      ))}
    </Slider>
  )
}