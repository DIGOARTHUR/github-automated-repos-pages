import { createContext, useState, ReactNode, useEffect } from "react";
import {
    getReleasesInTheLast30Days,
    getAllReleasesAPI
  } from "../utils/api/releases";
  
  import {
    setItemLocalStorage,
  } from "../utils/localstorage";

  export const ReleaseNotificationContext = createContext({});




export const ReleaseNotificationProvider = ({children})=>{

 const [countReleasesInTheLast30Days, setCountReleasesInTheLast30Days] =useState(0);
 getAllReleasesAPI().then((data) =>{ setCountReleasesInTheLast30Days(getReleasesInTheLast30Days(data).length)} );

 console.log(countReleasesInTheLast30Days)
 function _resetReleasesInTheLast30DayslData(){
    setCountReleasesInTheLast30Days(0)
 
 }

 function _dataAllReleases(){
    
 
 }
   

 return (
    <ReleaseNotificationContext.Provider
    value={{
        _resetReleasesInTheLast30DayslData,
        setCountReleasesInTheLast30Days,
        countReleasesInTheLast30Days,
        _dataAllReleases,
    }}
    >
        {children}
    </ReleaseNotificationContext.Provider> 
 )


}

   
