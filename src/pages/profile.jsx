import React from "react";
import { ImQuotesLeft } from "react-icons/im";
import { BsTelephone, BsTwitter, BsInstagram } from "react-icons/bs";
import { FaFacebook, FaLinkedin } from "react-icons/fa";

const ChairmanMessage = () => {
  return (
    <div className="flex items-start flex-col gap-y-5 md:flex-row">
      <img
        src="https://th.bing.com/th/id/OIP.Sovt-iMBfuoTM8Eiiw-U5AAAAA?pid=ImgDet&w=350&h=325&rs=1"
        alt="chairman"
        className="mt-4 rounded-t-md w-[70%]"
      />
      <div className="md:pl-8 lg:py-16">
        <i>
          <ImQuotesLeft size="40px" fill="rgb(10, 124, 139)" />
        </i>
        <p className="py-2 text-base text-black">
          At Dmi our vision is to be the most well regarded healthcare
          provider in India committed to the highest standards of clinical
          excellence and patient care, supported by latest technology and
          cutting edge research.
        </p>
        <p className="py-2 text-base text-black">
          Every day we come to honour a higher purpose -{" "}
          <strong className="text-primary">To serve. To excel.</strong>
        </p>
        <h2 className="mt-3 text-xl font-bold text-primary">Physician</h2>

        <p className="py-1 text-base text-black">
          Dr. Daniel Katambo
        </p>
        <h2 className="mt-3 text-xl font-bold text-primary">drkatambo@afyacode.com </h2>
        <h2 className="mt-3 text-xl font-bold text-primary">+254 748 595 058 </h2>
      </div>
      <div className="max-w-[1200px] mx-auto mt-14 px-2 flex items-center gap-x-3 gap-y-5 justify-center flex-wrap sm:justify-between">
      <ul className="flex gap-x-5 item-center">
        <li>
          <a href="https://www.facebook.com/">
            <i>
              <FaFacebook size="25px" fill="purple" title="facebook" />
            </i>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/">
            <i>
              <FaLinkedin size="25px" fill="purple" title="Linkedin" />
            </i>
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/">
            <i>
              <BsInstagram size="25px" fill="purple" title="Instagram" />
            </i>
          </a>
        </li>
        <li>
          <a href="https://www.twitter.com/">
            <i>
              <BsTwitter size="25px" fill="purple" title="Twitter" />
            </i>
          </a>
        </li>
      </ul>
      </div>
    </div>

  );
};

export default ChairmanMessage;
