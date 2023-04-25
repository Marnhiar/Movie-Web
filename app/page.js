import Movies from "@/components/movies";
import Image from "next/image";

export default function Home() {
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
        <Movies />
      </div>
    </div>
  )
}
