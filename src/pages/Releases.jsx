import { useEffect, useState } from "react";
import Header from "../components/Header";
import {
  getReleasesInTheLast30Days,
  getAllReleases,
  isNotReleasesInTheLast30DaysInLocalstorage
} from "../utils/api/releases";

import {getItemLocalStorage , setItemLocalStorage } from "../utils/localstorage";

export default function Releases() {
  const [count, setCount] = useState();
  const [allData, setAllData] = useState([]);
  const [releasesInTheLast30DayslData, setReleasesInTheLast30DayslData] = useState([]);
console.log(getItemLocalStorage ())
  useEffect(() => {
    var data3 = getReleasesInTheLast30Days();
    setCount(data3.length);
    setReleasesInTheLast30DayslData(data3)
    var data2 = getAllReleases();
    setAllData(data2);
  }, []);

  function MarkAllasRead(releasesInTheLast30DayslData) {
    setItemLocalStorage(releasesInTheLast30DayslData)
     var data3 = getReleasesInTheLast30Days();
    setCount(data3.length);
   
  }
  isNotReleasesInTheLast30DaysInLocalstorage()
  return (
    <main className="flex  min-h-screen flex-col items-center m-auto ">
      <Header />
      <div className="w-full max-w-[1280px]  mt-40 px-6 ">
        <div className="flex items-center  justify-between">
          <h1 className="text-4xl  mb-2 max-md:text-4xl">Releases</h1>
          <button onClick={() => MarkAllasRead(releasesInTheLast30DayslData)}>Mark All as Read</button>
        </div>

        {allData.map((item, index) => {
          return index <= count - 1 ? (
            <div
              key={index}
              className="p-5 border-t-[1px] border-b-[1px] bg-[#636371] hover:bg-[#636371]"
            >
              <a>
                <div> {item.name}</div>
                <span> Created in {item.created_at.slice(0, 10)}</span>
              </a>
            </div>
          ) : (
            <div
              key={index}
              className="p-5 border-t-[1px] border-b-[1px]  hover:bg-[#636371]"
            >
              <a>
                <div> {item.name}</div>
                <span> Created in {item.created_at.slice(0, 10)}</span>
              </a>
            </div>
          );
        })}
      </div>
    </main>
  );
}
