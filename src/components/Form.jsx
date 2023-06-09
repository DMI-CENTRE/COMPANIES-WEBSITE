import React from "react";

const Form = () => {
  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form
      onSubmit={onSubmit}
      className="w-full mx-auto mt-10 md:m-0 md:w-3/4 lg:w-1/2"
    >
      <div className="before:content-[''] before:bg-formImg before:bg-cover before:bg-no-repeat before:bg-center before:saturate-150 before:brightness-50 before:absolute before:top-0 before:bottom-0 before:left-0 before:right-0 relative w-full h-full">
        <div className="max-w-[600px] mx-auto pt-36 px-4 pb-10 md:m-0 md:pr-0 xl:pl-16 text-white relative">
          <h1 className="text-2xl lg:text-3xl font-bold">
            Make an appointment
          </h1>
          <p className="my-6 text-base text-gray-400">
            We will send you a confirmation within 24 hours.
            <br />
            <strong className="text-white font-bold">Phone Number </strong>Call :
            +254 722 755 828{" "}
          </p>
          {/* form fields */}
          <div className="pr-2 mx-auto md:m-0">
            <div className="flex gap-x-4">
              <input
                type="text"
                name="appointment_name"
                id="appointment_name"
                placeholder="Full Name&#42;"
                aria-label="Your Full Name"
                className="w-1/2 text-black placeholder:text-gray-600 px-2 py-3 rounded text-base font-semibold focus:outline-2 focus:outline-primaryDark outline-none focus:ring-2 focus:ring-primaryDark"
              />
              <input
                type="text"
                name="appointment_number"
                id="appointment_number"
                placeholder="Phone&#42;"
                aria-label="Your Phone Number"
                className="w-1/2 text-black placeholder:text-gray-600 px-2 py-3 rounded text-base font-semibold focus:outline-2 focus:outline-primaryDark outline-none focus:ring-2 focus:ring-primaryDark"
              />
            </div>
            <div className="mt-5 flex gap-x-4">
              <input
                type="email"
                name="appointment_email"
                id="appointment_email"
                placeholder="Email&#42;"
                aria-label="Your email address"
                className="w-1/2 text-black placeholder:text-gray-600 px-2 py-3 rounded text-base font-semibold focus:outline-2 focus:outline-primaryDark outline-none focus:ring-2 focus:ring-primaryDark"
              />
              <select
                name="disease_name"
                id="disease_name"
                aria-label="disease_name"
                className="w-1/2 text-black px-2 py-3 rounded text-base font-semibold focus:outline-2 focus:outline-primaryDark outline-none focus:ring-2 focus:ring-primaryDark"
              >
                <option value="lung" className="text-gray-900">
                  Random Blood sugar test
                </option>
                <option value="heart" className="text-gray-900">
                  Revist + Supplies
                </option>
                <option value="orthopaedic" className="text-gray-900">
                  Medical checkup type 2
                </option>
                <option value="surgery" className="text-gray-900">
                  Enquiry
                </option>
                <option value="pharmacy" className="text-gray-900">
                  HBA1C
                </option>
                <option value="sports" className="text-gray-900">
                  Consultation
                </option>
                <option value="fever" className="text-gray-900">
                 Urine Dipstick
                </option>
                <option value="dental" className="text-gray-900">
                  Diabetes Education/ Nutrition
                </option>
                <option value="eye" className="text-gray-900">
                  BP/ BMI
                </option>
              </select>
            </div>
            <div className="mt-5 flex gap-x-4">
              <input
                type="string"
                name="appointment_date"
                id="appointment_date"
                placeholder="Date"
                aria-label="An Appointment Date"
                className="w-1/2 text-black placeholder:text-gray-600 px-2 py-3 rounded text-base font-semibold focus:outline-2 focus:outline-primaryDark outline-none focus:ring-2 focus:ring-primaryDark"
              />
              <input
                type="string"
                name="appointment_time"
                id="appointment_time"
                placeholder="Time"
                aria-label="An Appointment Time"
                className="w-1/2 text-black placeholder:text-gray-600 px-2 py-3 rounded text-base font-semibold focus:outline-2 focus:outline-primaryDark outline-none focus:ring-2 focus:ring-primaryDark"
              />
            </div>
            <textarea
              name="appointment_message"
              id="appointment_message"
              aria-label="Text Message during appointment booking"
              cols="30"
              rows="10"
              placeholder="message&#42;"
              className="mt-5 w-full text-black placeholder:text-gray-600 px-2 py-3 text-base font-semibold focus:outline-2 focus:outline-primaryDark outline-none focus:ring-2 focus:ring-primaryDark"
            ></textarea>
            <button
              type="submit"
              className="mt-4 py-3 bg-[rgba(20,193,185,0.56)] text-white text-xl font-normal w-full"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Form;
