import React from "react";
import { ImQuotesLeft } from "react-icons/im";
import {TbSend} from "react-icons/tb"

const NewsLetterSubscribtion = () => {
  return (
    <section className="max-w-[1200px] mx-auto relative -top-80">
      {/* top part */}
      <div className="bg-white flex flex-col sm:flex-row items-center">
        <div className="w-1/2">
          <img
            src="https://media.licdn.com/dms/image/C5603AQG5x7G6bOC5pQ/profile-displayphoto-shrink_800_800/0/1590745145380?e=1686182400&v=beta&t=Us6ctICw-Towd8dcXiZhlE36KKxsr9sEOwXYCAGE3gQ"
            alt="doctor talking with patients"
            className="w-full"
          />
        </div>
        <div className="w-full px-2 sm:pl-8 sm:pr-5 flex flex-col justify-center md:w-1/2 md:pl-14 ">
          <i>
            <ImQuotesLeft size="40px" fill="rgb(10, 124, 139)" />
          </i>
          <p className="py-5 lg:py-10 text-base text-gray-600">
          Diabetes is a chronic condition in which blood glucose (sugar) is too high.
          The blood always has some glucose in it because the body needs glucose
          for energy. Glucose comes from the food we eat. The pancreas produces the
          hormone insulin that helps glucose get from the blood into body cells where it is converted into energy.
                   </p>
          <h1 className="text-xl font-bold text-primary md:pb-5">
            Erick Omondi
          </h1>
          <p className="text-sm text-gray-600">Diabetes Educator</p>
        </div>
      </div>

      {/* bottom part */}
      <div className="py-14 px-2 mt-5 sm:mt-2 md:mt-0 bg-gradient-to-r from-primary to-primaryDark md:px-10">
        <div className="md:flex items-center">
          <div className="w-full md:w-1/2">
            <h1 className="text-white text-2xl font-bold ">
              Share an Email to us
            </h1>
            <p className="pt-5 text-base text-gray-100">
            DMI Centre empowers people living with diabetes, conducts mass screening on diabetes,
            hypertension & body weight, raises funds fundraises to support projects,
            facilitates training among peer educators & health care providers and
            conducts research to assist in the management of diabetes.
            </p>
          </div>
          <div className="w-full md:w-1/2 pt-10 md:pl-10">
            <div className="flex items-start">
              <input
                type="email"
                name="subscription_email"
                id="subscription_email"
                aria-label="Your email address to subscribe our newsletter"
                placeholder="Your Email Address"
                className="w-[50%] sm:w-full basis-3/4 rounded rounded-r-none pl-5 py-3"
              />
              <button className="px-2 sm:px-5 py-3 basis-1/4 text-white bg-[rgb(3,59,66)] rounded rounded-l-none hover:bg-primaryDark" >
                Email us
                <a href="mailto:joykemunto333@gmail.com"><TbSend className="juy" /></a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsLetterSubscribtion;
