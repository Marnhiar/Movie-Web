import Carousel from "@/components/carousel";
import Movies from "@/components/movies";

export default function Home() {
  return (
    <div className="flex flex-col w-full gap-[2rem] text-white">
      <div className="text-4xl font-bold">Онцлох</div>
      <Carousel />
      <div className="flex flex-col gap-[1rem]">
        <div className="text-4xl font-bold">Яг одоо дэлгэцнээ</div>
        <Movies />
      </div>
    </div>
  )
}
