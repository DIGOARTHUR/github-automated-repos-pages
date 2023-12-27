import { useContext, useEffect, useState } from "react";
import Header from "../components/Header";
import { ReleaseNotificationContext } from '../context/ReleaseNotificationContext';
import {
  getReleasesInTheLast30Days,
  isNotReleasesInTheLast30DaysInLocalstorage,
  getAllReleasesAPI,
} from "../utils/api/releases";

import {
  getItemLocalStorage,
  setItemLocalStorage,
} from "../utils/localstorage";

export default function Releases() {
  const { countReleasesInTheLast30Days,setCountReleasesInTheLast30Days} = useContext(ReleaseNotificationContext);

  const [allData, setAllData] = useState([]);
  const [releasesInTheLast30DayslData, setReleasesInTheLast30DayslData] =useState([]);
  const [releasesDataAPI, setReleasesDataAPI] = useState([]);

  useEffect(() => {
    getAllReleasesAPI().then((data) =>{setAllData(data), setReleasesInTheLast30DayslData(getReleasesInTheLast30Days(data))} );
    
  }, []);
  setCountReleasesInTheLast30Days(releasesInTheLast30DayslData.length)
 
  
  function MarkAllasRead(releasesInTheLast30DayslData) {
    setItemLocalStorage(releasesInTheLast30DayslData);
    setCountReleasesInTheLast30Days(0)
    setReleasesInTheLast30DayslData([])
  }
  isNotReleasesInTheLast30DaysInLocalstorage();
  return (
    <main className="flex  min-h-screen flex-col items-center m-auto ">
      <Header />
      <div className="w-full max-w-[1280px]  mt-40 px-6 ">
        <div className="flex items-center  justify-between">
          <h1 className="text-4xl  mb-2 max-md:text-4xl">Releases</h1>
          <button onClick={() => MarkAllasRead(releasesInTheLast30DayslData)}>
            Mark All as Read
          </button>
        </div>

        {allData.map((item, index) => {
          return index <= releasesInTheLast30DayslData.length - 1 ? (
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
