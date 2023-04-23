import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex flex-row w-full h-[96px] py-[24px] items-center justify-between gap-[1rem] md:gap-[2rem]">
      <Link href="/" className="text-4xl font-bold text-white">
        CinemaTicket
      </Link>
      <Link href="/" className={`flex items-center justify-center text-lg font-bold text-white`}>Кино</Link>
      <Link href="#" className={`flex items-center justify-center text-lg font-bold text-[#868686]`}>Театр</Link>
      <Link href="#" className={`flex items-center justify-center text-lg font-bold text-[#868686]`}>Удахгүй дэлгэцнээ</Link>
      <div className="flex items-center w-full max-w-[330px] h-full px-[1rem] bg-[#374151] rounded-l-[50px] rounded-r-[50px]">
        <input type="text" placeholder="Хайх" className="w-full bg-transparent text-white" />
      </div>
      <button className="flex items-center justify-center w-[150px] h-full px-[1rem] border-white border rounded-l-[50px] rounded-r-[50px] text-white hover:bg-white hover:text-[#374151] transition-colors">
        Нэвтрэх
      </button>
    </div>
  )
}