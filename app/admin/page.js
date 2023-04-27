"use client";

import { useOrderContext } from "@/components/context";
import { useEffect, useState } from "react";

export default function Admin() {
  const { login } = useOrderContext();
  const [orders, setOrders] = useState(null);

  useEffect(() => {
    fetch("/api/order", {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
    }).then(res => res.json())
      .then(data => {
        setOrders(data);
      })
      .catch(error => console.log(error));
  }, []);

  if (!login)
    return <div className="w-full text-white">Unauthorized</div>
  if (!orders)
    return <div className="w-full text-white">...Loading</div>
  return (
    <div className="flex flex-col w-full">
      <table className="bg-[#282828] rounded-xl p-4">
        <tr className="text-slate-100 border-b">
          <th className="p-4 border-r">Захиалга код</th>
          <th className="p-4 border-r">Театр</th>
          <th className="p-4 border-r">Кино</th>
          <th className="p-4 border-r">Захиалсан огноо</th>
          <th className="p-4 border-r">Үзлэгийн огноо</th>
          <th className="p-4 border-r">Цаг</th>
          <th className="p-4">Суудал</th>
        </tr>
        {orders.map((item, index) => (
          <tr key={index} className="text-[#00D9A2]">
            <td className="text-center p-2 border-r">{item._id}</td>
            <td className="text-center p-2 border-r">{item.theaterId}</td>
            <td className="text-center p-2 border-r">{item.movieId}</td>
            <td className="text-center p-2 border-r">{item.orderDate}</td>
            <td className="text-center p-2 border-r">{item.date}</td>
            <td className="text-center p-2 border-r">{item.time}</td>
            <td className="text-center p-2">{item.seatId}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}