import Image from "next/image";
import Link from "next/link";

export default function Movie({ params }) {
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
  const id = params.id - 1;

  return (
    <div className="flex flex-col w-full gap-[2rem] text-white">
      <div className="flex flex-row w-full gap-[2rem] pb-[1rem] border-b-2 border-white/50">
        <div className="flex flex-col w-[70%] gap-[1rem]">
          <div className="text-4xl font-bold">{movies[id].name}</div>
          <video src="/videos/video1.mp4" controls />
        </div>
        <div className="flex flex-col w-[30%] gap-[1rem]">
          <div className="text-3xl font-bold">Одоо гарч буй кинонууд</div>
          <div className="grid grid-cols-2 gap-[1rem]">
            {movies.map((item, index) => {
              if (index != id && index <= 4) {
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
        <Image src={movies[id].image} alt={movies[id].name} width={270} height={380} className="object-cover" />
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
          <button className="w-fit px-[1rem] py-[0.5rem] border-white border rounded-l-[50px] rounded-r-[50px] text-white">
            Тасалбар Захиалах
          </button>
        </div>
        <div className="flex flex-col w-[40%] gap-[1rem]">
          <p className="text-2xl font-semibold">Товч Тайлбар</p>
          <p className="text-lg text-[#868686]">Queen Ramonda, Shuri, M'Baku, Okoye and the Dora Milaje fight to protect the kingdom of Wakanda from intervening world powers in the wake of King T'Challa's death. As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for their nation.</p>
        </div>
      </div>
    </div>
  )
}
