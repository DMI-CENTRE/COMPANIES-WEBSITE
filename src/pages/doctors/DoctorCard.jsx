import React from "react";
import { NavLink } from "react-router-dom";

const DoctorCard = ({ img, name, profession, email, phone }) => {
  return (
    <div className="mt-5 max-w-[380px] mx-auto rounded shadow-lg z-10 sm:mx-0">
      <div className="overflow-hidden">
        <img
          src={img}
          alt="doctor"
          className="rounded-t-md transition duration-300 ease-in hover:scale-110 hover:brightness-75"
        />
      </div>
      <div className="bg-white text-center py-7">
        <NavLink to="">
          <h1 className="text-primary text-xl font-bold">{name}</h1>
        </NavLink>
        <p className="text-base text-gray-600 mt-1">{profession}</p>
        <p className="text-base text-gray-600 mt-1">{email}</p>
        <p className="text-base text-gray-600 mt-1">{phone}</p>
      </div>
    </div>
  );
};

export default DoctorCard;
