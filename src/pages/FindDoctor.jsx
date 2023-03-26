import React from "react";
import { Link } from "react-router-dom";
import img from "../assets/preview.png"

const Gallery = ( ) => {
   return (
    <div className="mt-5 max-w-[380px] mx-auto rounded shadow-lg z-10 sm:mx-0">
      <div className="overflow-hidden">
        <img
          src={img}
          alt="cute doctor"
          className="rounded-t-md transition duration-300 ease-in hover:scale-110 hover:brightness-75"
        />
      </div>
      <div className="bg-white text-center py-7">
        <Link to="">
          <h1 className="text-primary text-xl font-bold">Annual Diabetes Walk</h1>
        </Link>
        <p className="text-base text-gray-600 mt-1">Walking, in particular, helps in reducing the belly fat,
        which is one of the contributing factors for type 2 diabetes. Exercise can reduce the sensitivity for
        pain by the release of endorphins. Regular exercises have shown to improve insulin sensitivity and
        hence important in the management of diabetes.</p>
      </div>

    </div>


  );
};

export default Gallery
