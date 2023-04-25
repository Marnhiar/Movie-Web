import Link from "next/link";

export default function Footer() {
  const students = [
    "Г.Лундаажамц /B200910052/",
    "М.Тэмүүжин ",
    "У.Гүррагчаа "
  ];

  return (
    <div className="flex flex-row w-full py-8 items-center justify-between gap-[1rem] md:gap-[2rem]">
      <Link href="/" className="text-4xl font-bold text-white">
        CinemaTicket
      </Link>
      <Link href="/" className={`flex items-center justify-center text-lg font-bold text-[#868686]`}>Кино</Link>
      <Link href="#" className={`flex items-center justify-center text-lg font-bold text-[#868686]`}>Театр</Link>
      <Link href="#" className={`flex items-center justify-center text-lg font-bold text-[#868686]`}>Удахгүй дэлгэцнээ</Link>
      <div className="flex flex-col gap-[0.5rem]">
        {students.map((item, index) => (
          <div key={index} className="text-slate-300">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}