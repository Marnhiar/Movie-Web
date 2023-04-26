import Movies from "@/components/movies";

export default function MoviesPage() {
  return (
    <div className="flex flex-col w-full gap-[2rem] text-white">
      <div className="text-4xl font-bold">Бүх кинонууд</div>
      <Movies />
    </div>
  );
}