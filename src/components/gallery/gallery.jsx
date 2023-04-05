import React from "react";
import leaders from "../../data/OurLeader";
import Heading from "../../components/ui/Heading";
import LeadersCard from "../../components/cards/LeadersCard";
import Footer from "../../layouts/Footer";


const Gallery =  ( ) => {
   return (
    <section className="mt-14">
          <Heading text="DMI Potraits" />
          <div className="mt-10 px-2 sm:px-5 flex flex-wrap gap-6 sm:gap-6 sm:justify-start lg:gap-8 xl:gap-10">
            {leaders.map((leader) => (
              <LeadersCard
                key={leader.id}
                img={leader.img}
                      />
            ))}
          </div>
          <Footer />
        </section>
  );
};

export default Gallery
