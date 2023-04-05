import React from "react";
import { GoCalendar } from "react-icons/go";
import { AiOutlineInsurance } from "react-icons/ai";
import { HiHome } from "react-icons/hi";
import PrescribtionSteps from "./prescribtion/PrescribtionSteps";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
const Donate = () => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="mt-10"
      >
        <path
          fill="rgb(10, 124, 139)"
          fill-opacity="0.9"
          d="M0,288L60,266.7C120,245,240,203,360,186.7C480,171,600,181,720,176C840,171,960,149,1080,149.3C1200,149,1320,171,1380,181.3L1440,192L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
        ></path>
      </svg>
      <section className="max-w-[1200px] mx-auto px-2">
        {/* book an appointment */}

      <h1 className="py-5 text-3xl font-semibold text-primaryDark font-poppins text-center leading-8">
          Events
        </h1>
        {/* steps */}
        <div className="mt-5">
          <PrescribtionSteps
            img="https://dmi.or.ke/wp-content/uploads/2020/07/4.jpeg"
            step={1}
            todo="Diabetes Charity Golf Tournament held on Friday, February 22nd 2019"
            text="----- The major awards presented to winners and associates.
            DMI Chairperson presenting award to Vetlab Golf Club CEO.
            Official participant preparing to make a shot.
            DMI officials receiving charity cheque from KPLC officials."

                    flexFlow="flex-row"
          />
          <br/>
          <br/>
          <br/>
          <br/>
          <PrescribtionSteps
            img="https://www.liaisongroup.net/wp-content/uploads/2019/08/DABanner.png"
            step={2}
            todo="Annual Diabetes Walk (July)"
            text="---- Safaricom, in partnership with the Diabetes Management and Information (DMI) Center, today launched the 11th edition of the Safaricom Diabetes Walk. The annual walk aims to raise awareness on the need for early detection and management of diabetes, as well as raise funds for the prevention and treatment of the condition especially among low income households."
            flexFlow="md:flex-row-reverse"
          />
          <br/>
          <br/>
          <br/>
          <br/>
          <PrescribtionSteps
            img="https://clientebancario.bde.es/f/webcb/RCL/ActualidadEducacionFinanciera/Blog/GettyImages-487729487_850x443.jpg"
            step={3}
            todo="World Diabetes Day (November)"
            text="---- A healthy diet, regular physical activity, maintaining a normal body weight and avoiding tobacco use are ways to prevent or delay the onset of type 2 diabetes. Diabetes can be treated and its consequences avoided or delayed with diet, physical activity, medication and regular screening and treatment for complications."
            flexFlow="flex-row"
          />

        </div>
      </section>

      {/* paying card wrapper */}
      <section>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="rgb(10,124,139)"
            fill-opacity="1"
            d="M0,192L80,208C160,224,320,256,480,266.7C640,277,800,267,960,224C1120,181,1280,107,1360,69.3L1440,32L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>

        {/* paying card wrapper */}
        <div className="bg-[rgb(10,124,139)]">

  </div>
      </section>

    </>
  );
};

export default Donate;
