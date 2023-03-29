import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowRoundForward } from "react-icons/io";
import ServiceList from "../data/Event"

const ServiceCard = () => {
  return (
    <section className="max-w-[1200px] mx-auto px-2 mt-10" id="ourservices">
      <h1 className="text-3xl font-bold text-primary">EVENTS</h1>
      <div className="mt-10 flex items-center gap-y-8 flex-wrap justify-between">
        {ServiceList.map((event) => (
          <div key={event.id} className="w-full sm:w-[45%] md:w-[30%]">
            <img src={event.img} alt={`${event.title}`} />
            <h2 className="mt-5 text-xl font-semibold text-primary">
              {event.title}
            </h2>
            <p className="mt-3">{event.text}</p>
            <h3 className="mt-5 text-xl font-semibold text-primary">
              {event.date} <br/>
              {event.venue}
            </h3>
            <div className="mt-3 flex items-center gap-x-2">


            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceCard;
