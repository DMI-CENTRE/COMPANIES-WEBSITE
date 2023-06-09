import React, { useEffect, useRef, useState } from "react";
import useOnScreen from "../hooks/use-on-screen";

const HospitalInfo = () => {
  const [doctors, setDoctors] = useState(0);
  const [patients, setPatients] = useState(0);
  const [beds, setBeds] = useState(0);
  const [awards, setAwards] = useState(0);

  const hospitalInfoRef = useRef();

  const isVisible = useOnScreen(hospitalInfoRef);

  useEffect(() => {
    let firstTimeOut;
    let secondTimeOut;
    if (isVisible) {
      firstTimeOut = setTimeout(() => {
        doctors < 200 && setDoctors(doctors + 5);
        patients < 10000 && setPatients(patients + 200);
      }, 50);
      secondTimeOut = setTimeout(() => {
        beds < 500 && setBeds(beds + 10);
        awards < 50 && setAwards(awards + 1);
      }, 50);
    }

    // cleanup function
    return () => {
      clearTimeout(firstTimeOut);
      clearTimeout(secondTimeOut);
    };
  });
  return (
    <div
      ref={hospitalInfoRef}
      className="max-w-[1200px] mx-auto px-2 py-12 flex items-center flex-wrap justify-center gap-x-10 gap-y-6 bg-gradient-to-r from-primaryDark to-primary relative top-20 sm:justify-start z-10 sm:flex-nowrap sm:gap-x-6 lg:gap-x-10 "
    >
      <div className="min-w-fit w-56 flex flex-col-reverse items-center">
        <h1 className="text-white text-xl font-medium ">Talk/Screening</h1>
        <h2 className="text-white text-4xl font-bold">{doctors}+</h2>
      </div>
      <div className="min-w-fit w-56 flex flex-col-reverse items-center">
        <h1 className="text-white text-xl font-medium ">Happy Patients</h1>
        <h2 className="text-white text-4xl font-bold">{patients}+</h2>
      </div>
      <div className="min-w-fit w-56 flex flex-col-reverse items-center">
        <h1 className="text-white text-xl font-medium ">Partners</h1>
        <h2 className="text-white text-4xl font-bold">{beds}</h2>
      </div>
      <div className="min-w-fit w-56 flex flex-col-reverse items-center">
        <h1 className="text-white text-xl font-medium ">Winning Awards</h1>
        <h2 className="text-white text-4xl font-bold">{awards}</h2>
      </div>
    </div>
  );
};

export default HospitalInfo;
