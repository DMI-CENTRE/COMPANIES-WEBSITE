import React from "react";
import { FaHeartbeat } from "react-icons/fa";
import { AiOutlineClockCircle } from "react-icons/ai";
const EmergencyService = () => {
  return (
    <div className="max-w-[1200px] mx-auto px-2 py-10 flex items-start gap-x-5 flex-col gap-y-5 sm:gap-y-8 bg-gradient-to-r from-primaryDark to-primary md:flex-row lg:px-10 lg:relative -top-14 left-0 right-0">
      <div className="">
        <div className="flex items-center gap-x-3">
          <i>
            <FaHeartbeat size="25px" fill="white" />
          </i>
          <h1 className="text-white text-xl font-semibold">
            Get Support from us!
          </h1>
        </div>
        <p className="text-white text-base pt-3">
        DMI Centre provides services to people and children with diabetes, their caregivers,
        healthcare providers, the general public and other stakeholders involved in diabetes.
        </p>
        <h1 className="text-white text-xl font-medium pt-5">
          Call : +254 722 755 828
        </h1>
      </div>
      {/* right part */}
      <div className="">
        <div className="flex items-center gap-x-3">
          <i>
            <AiOutlineClockCircle size="25px" fill="white" />
          </i>
          <h1 className="text-white text-xl font-semibold">Opening Hours</h1>
        </div>
        <p className="text-white text-base pt-3">
        Across Kenya, community awareness around diabetes is low.
        People are often diagnosed through medical outreach camps
        or when patients arrive at the hospital with complications of
        diabetes like thirst, vision change, fatigue and constant hunger.
        For many Kenyans, the cost of health care is a key obstacle to
        treatment.
        </p>
        <div className="border-white border-b-[1px] text-white pb-7 py-4">
          <span className=" float-left">Mon - Fri</span>
          <span className="float-right">08:00 AM - 4:00 PM</span>
        </div>
        <div className="border-white border-b-[1px] text-white pb-7 pt-4">
          <span className=" float-left">Sat - Sun</span>
          <span className="float-right"> Closed </span>
        </div>
      </div>
    </div>
  );
};

export default EmergencyService;
