import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "./ourdoctor.css";
import DoctorCard from "./DoctorCard";
import doctors from "../../data/OurDoctor";

const OurDoctor = () => {
  return (
    <section className="max-w-[1200px] mx-auto px-2 pt-20">
      <h1 className="text-3xl font-bold text-primary">Board of Directors</h1>
      <div className="max-w-max flex items-center gap-x-2 ml-auto mr-0">
                     </div>
      {/* swiper slide */}
      <Swiper
        spaceBetween={50}
        slidesPerView={"auto"}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        breakpoints={{
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
        }}
      >
        {doctors.map((doctor) => (
          <SwiperSlide key={doctor.id}>
            <DoctorCard
              img={doctor.img}
              name={doctor.name}
              bio={doctor.bio}
              profession={doctor.profession}
              email={doctor.email}
              phone={doctor.phone}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default OurDoctor;
