import React from "react";
import Button from "../../components/ui/Button";
import "../home/home.css"
import TypeWriterEffect from 'react-typewriter-effect';

const IntroSection = () => {
  return (

    <section className="w-full mt-10 flex bg-hospitalImg bg-cover bg-no-repeat bg-center saturate-150">

      {/* content */}
      <div className="max-w-[1200px] mx-auto w-full h-[400px] pt-8 flex flex-col items-start justify-center md:h-[500px]">

        <h1 className="text-white text-6xl font-semibold font-poppins leading-none sm:text-9xl">
        <TypeWriterEffect
                            textStyle={{
                                fontFamily: 'Red Hat Display',
                                fontWeight: 900,
                                textAlign: 'center',
                                fontSize: '0.3em',
                                color: 'yellow',
                            }

                            }
                            startDelay={2000}
                            cursorColor="#ffff"
                            multiText={
                                [
                                    'Join us for our Annual Diabetes Walk 2023!!!',
                                    '8th July at Carnivore grounds',
                                    'From 7:00AM - 6:00PM',
                                    'For more information, Contact: +254 722 755 828',
                                    'Mark your calender 😊'
                                ]
                            }
                            multiTextDelay={1000}
                            typeSpeed={150}
                            multiTextLoop
                                />
                DMI CENTRE
        </h1>
        <h2 className="pl-[5px] text-xl text-white font-normal font-poppins sm:text-3xl">
          Kenya diabetes Management and Information Centre (DMI)
        </h2>
        <p className="pl-[5px] mt-2 text-white text-base leading-6 font-normal font-poppins tracking-wider sm:text-[22px]">
          Living Healthy Together
        </p>
        <div className="mt-10">
          <a href="#contact">
            <Button text="Contact" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
