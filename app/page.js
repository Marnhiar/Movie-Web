import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const movies = [
    {
      id: 1,
      name: "Black Panther - Wakanda Forever",
      image: "/movies/movie1.jpg"
    },
    {
      id: 2,
      name: "Эргэж Ирэхгүй Намар",
      image: "/movies/movie2.png"
    },
    {
      id: 3,
      name: "Black Adam",
      image: "/movies/movie3.png"
    },
    {
      id: 4,
      name: "Хар Ажил",
      image: "/movies/movie4.png"
    },
    {
      id: 5,
      name: "Гүртэн",
      image: "/movies/movie5.png"
    },
    {
      id: 6,
      name: "Strange World",
      image: "/movies/movie6.png"
    },
  ];

  return (
    <div className="flex flex-col w-full gap-[2rem] text-white">
      <div className="text-4xl font-bold">Онцлох</div>
      <div className="relative mx-auto w-fit">
        <Image src="/posters/poster1.png" alt="poster" width={1180} height={400} className="object-cover opacity-60" />
        <div className="absolute flex flex-col left-0 bottom-0 w-[50%] px-[2rem] py-[1rem] gap-[1rem]">
          <p className="text-4xl font-bold">Avatar: The Way of Water</p>
          <p>Jake Sully lives with his newfound family formed on the planet of Pandora. Once a familiar threat returns to finish what was previously started, Jake must work with Neytiri and the army of the Na'vi race to protect their planet.</p>
        </div>
      </div>
      <div className="flex flex-col gap-[1rem]">
        <div className="text-4xl font-bold">Яг одоо дэлгэцнээ</div>
        <div className="grid grid-cols-6 gap-[1rem]">
          {movies.map((item, index) => (
            <Link href={`/${item.id}`} key={`movie${index}`} className="flex flex-col items-center">
              <Image src={item.image} alt={item.name} width={170} height={250} className="object-cover" />
              <p className="text-lg font-semibold text-center">{item.name}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
