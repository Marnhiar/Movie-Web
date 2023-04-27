"use client"

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Order() {
  const [order, setOrder] = useState(null);
  const [selectedRow, setSelectedRow] = useState(-1);
  const [selectedCol, setSelectedCol] = useState(-1);
  const [seats, setSeats] = useState(null);
  
  useEffect(() => {
    const temp = JSON.parse(localStorage.getItem("order"));
    setOrder(temp);
    fetch("/api/order", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ "theaterId": temp.theaterId, "movieId": temp.movieId, "date": temp.date, "time": temp.time })
    }).then(res => res.json())
      .then(data => {
        let s = [
          [0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0]
        ]
        data.map((item, index) => {
          const [row, col] = item.seatId.split("-");
          s[row - 1][col - 1] = 1;
        });
        setSeats(s);
      })
      .catch(error => console.log(error));
  }, []);

  if (!seats)
    return <div>...Loading</div>
  if (!order.movieId || !order.theaterId || !order.date || !order.time) {
    return <div className="w-full text-center text-white">Захиалга бүрэн биш байна.</div>;
  }

  return (
    <div className="flex flex-row py-[2rem]">
      <div className="flex flex-col w-[60%] gap-[3rem] items-center">
        {/* Screen */}
        <div className="w-full border border-[#555555]"></div>
        {/* Seats */}
        <div className="grid grid-cols-2 gap-x-[6rem] gap-y-[2rem] w-fit">
          {seats.map((row, rowIndex) => (
            <>
              <div key={`${rowIndex}0-3`} className="relative grid grid-cols-4 gap-[2rem] w-fit">
                {[...Array(4)].map((item, index) => (
                  <div key={`${rowIndex}${index}`} className="cursor-pointer"
                    onClick={() => {
                      if (row[index] === 0) {
                        let tempRow = selectedRow;
                        let tempCol = selectedCol;
                        tempRow = rowIndex;
                        tempCol = index;
                        setSelectedRow(tempRow);
                        setSelectedCol(tempCol);
                      }
                    }}>
                    {(selectedRow === rowIndex && selectedCol === index) &&
                      <SelectedChair />
                    }
                    <Chair state={row[index]} />
                  </div>
                ))}
              </div>
              <div key={`${rowIndex}4-7`} className="grid grid-cols-4 gap-[2rem] w-fit">
                {[...Array(4)].map((item, index) => (
                  <div key={`${rowIndex}${index + 4}`} className="cursor-pointer"
                    onClick={() => {
                      if (row[index + 4] === 0) {
                        let tempRow = selectedRow;
                        let tempCol = selectedCol;
                        tempRow = rowIndex;
                        tempCol = index + 4;
                        setSelectedRow(tempRow);
                        setSelectedCol(tempCol);
                      }
                    }}>
                    {(selectedRow === rowIndex && selectedCol === index + 4) &&
                      <SelectedChair />
                    }
                    <Chair state={row[index + 4]} />
                  </div>
                ))}
              </div>
            </>
          ))}
        </div>
        <div className="flex flex-row gap-[1rem] text-white">
          <Chair state={0} />
          <div>Сул суудал</div>
          <Chair state={1} />
          <div>Дүүрсэн суудал</div>
        </div>
      </div>
      {/* Order */}
      <div className="flex flex-col w-[40%] items-center">
        <button className="w-fit px-[3rem] py-[1rem] bg-[#E10856] rounded-3xl text-2xl font-bold text-white"
          onClick={async () => {
            let temp = JSON.parse(localStorage.getItem("order"));
            temp.seatId = `${selectedRow + 1}-${selectedCol + 1}`;
            const today = new Date();
            temp.orderDate = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
            localStorage.setItem("order", JSON.stringify(temp));
            setOrder(temp);

            const res = await fetch("/api/order", {
              method: "PUT", // *GET, POST, PUT, DELETE, etc.
              headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(temp)
            });
            if (res.ok) {
              alert("Successful");
              window.location.reload(false);
            }
            else
              alert(res);
          }}>
          Захиалах
        </button>
      </div>
    </div >
  );
}

function SelectedChair() {
  const colors = "#E10856";
  return (
    <svg width="39" height="34" viewBox="0 0 39 34" fill="none" xmlns="http://www.w3.org/2000/svg" className={`absolute z-[1] text-[${colors}]`}>
      <g opacity="0.7">
        <path d="M10.7401 15.5532H10.7402L10.7401 15.5484C10.7118 12.6488 8.7395 10.1506 5.9668 9.42631V4.81325C5.9668 2.45315 7.88003 0.539917 10.2401 0.539917H29.3335C31.6936 0.539917 33.6068 2.45315 33.6068 4.81325V9.42631C30.8341 10.1506 28.8618 12.6488 28.8335 15.5484H28.8335V15.5532V21.0199H10.7401V15.5532Z" fill="currentColor" stroke="currentColor" />
        <path d="M31.72 24.4066H32.22V23.9066V15.5596C32.2642 13.8759 33.6172 12.5209 35.3 12.4734C36.9829 12.5209 38.3359 13.8759 38.38 15.5596V32.9532H34.1067H29.3334H10.24H5.46669H1.19336V15.5596C1.23754 13.8759 2.59051 12.5209 4.27336 12.4734C5.95621 12.5209 7.30919 13.8759 7.35336 15.5596V23.9066V24.4066H7.85336H31.72Z" fill="currentColor" stroke="currentColor" />
      </g>
    </svg>
  );
}

function Chair({ state }) {
  const colors = ["#B7B7B7", "#555555"];
  return (
    <svg width="39" height="34" viewBox="0 0 39 34" fill="none" xmlns="http://www.w3.org/2000/svg" className={`text-[${colors[state]}]`}>
      <g opacity="0.7">
        <path d="M10.7401 15.5532H10.7402L10.7401 15.5484C10.7118 12.6488 8.7395 10.1506 5.9668 9.42631V4.81325C5.9668 2.45315 7.88003 0.539917 10.2401 0.539917H29.3335C31.6936 0.539917 33.6068 2.45315 33.6068 4.81325V9.42631C30.8341 10.1506 28.8618 12.6488 28.8335 15.5484H28.8335V15.5532V21.0199H10.7401V15.5532Z" fill="currentColor" stroke="currentColor" />
        <path d="M31.72 24.4066H32.22V23.9066V15.5596C32.2642 13.8759 33.6172 12.5209 35.3 12.4734C36.9829 12.5209 38.3359 13.8759 38.38 15.5596V32.9532H34.1067H29.3334H10.24H5.46669H1.19336V15.5596C1.23754 13.8759 2.59051 12.5209 4.27336 12.4734C5.95621 12.5209 7.30919 13.8759 7.35336 15.5596V23.9066V24.4066H7.85336H31.72Z" fill="currentColor" stroke="currentColor" />
      </g>
    </svg>
  );
}