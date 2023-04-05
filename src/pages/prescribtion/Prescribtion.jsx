import React from "react";
import Button from "../../components/ui/Button";
import { GoCalendar } from "react-icons/go";
import { AiOutlineInsurance } from "react-icons/ai";
import { HiHome } from "react-icons/hi";
import PrescribtionSteps from "./PrescribtionSteps";
import PayingCard from "./PayingCard";
import OnlinePrescriptionService from "./OnlinePrescriptionService";
import CDIC from "../../assets/cdic.png"
import TypeWriterEffect from 'react-typewriter-effect';
import Footer from "../../layouts/Footer";
import one from "../../assets/cdic1.JPG"
import two from "../../assets/cdic2.JPG"
import three from "../../assets/cdic3.JPG"
import four from "../../assets/cdic4.JPG"
import five from "../../assets/cdic5.JPG"

const Prescribtion = () => {
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
        <div className="sm:w-2/3">
          <h1 className="text-3xl font-semibold text-primaryDark font-poppins">
            PROJECTS
          </h1>

          <img src={one} alt="CDIC" />
          <h2>------- Changing Diabetes® In Children (CDiC).</h2>
            <h2>Project milestone:2014-2017</h2>
          <h2>Partners: Novo Nordisk A/S Novo Alle’ DK-28880 Bagsvaerd Denmark (“NNA/S”),
          Ministry of Health Kenya (MoH).</h2>
          <h2>Overall goal: <br />
          <TypeWriterEffect
          textStyle={{
              fontFamily: 'Red Hat Display',
              fontWeight: 900,
              textAlign: 'left',
              fontSize: '1em',
              color: 'black',
          }

          }
          startDelay={2000}
          cursorColor="#ffff"
          multiText={
              [
                'Improve diabetes care for children with type 1 diabetes and as such help these children and their families live better and healthier lives.'
              ]
          }

              />
              </h2>

<br/>
<br/>

<img src={two} alt="CDIC" />
            <h2>------- Changing Diabetes® In Children (CDiC) project.</h2>
            <h2>Project milestone: 1 st January 2018-31 st December 2020</h2>
          <h2>Partners: Novo Nordisk A/S Novo Alle’ 2880 Bagsvaerd Denmark</h2>
          <h2>Overall goal: <br />
          <TypeWriterEffect
          textStyle={{
              fontFamily: 'Red Hat Display',
              fontWeight: 900,
              textAlign: 'left',
              fontSize: '1em',
              color: 'black',
          }

          }
          startDelay={2000}
          cursorColor="#ffff"
          multiText={
              [
                'Improve diabetes care for children with type 1 diabetes and as such help these children and their families live better and healthier lives.'
              ]
          }

              />
              </h2>

<br/>
<br/>
<img src={three} alt="CDIC" />
            <h2>------- Integrating type 1 diabetes care into health systems in Kenya (WDF20-1799)
            project. <br />
            WDF reference title: Integrating type 1 diabetes care into health systems in Eastern
            Africa and the Middle East.
            </h2>
            <h2>Project milestone: 1 st September 2021-1 st September 2024</h2>
          <h2>Partners: World diabetes foundation Krogshojvej 30A, Bldg 8Y DK-2280 Bagsvaerd
          Denmark (“WDF”), Ministry of health (MoH)-Central implementing Agency
          Novo Nordisk foundation (NNF)</h2>
          <h2>Overall goal: <br />
          <TypeWriterEffect
          textStyle={{
              fontFamily: 'Red Hat Display',
              fontWeight: 900,
              textAlign: 'left',
              fontSize: '1em',
              color: 'black',
          }

          }
          startDelay={2000}
          cursorColor="#ffff"
          multiText={
              [
                'To best promote the equal right to health, i.e improving availability, accessibility, acceptability and quality of the products or services delivered by the project in an equitable manner and without any prejudice.'
              ]
          }

              />
              </h2>

<br/>
<br/>
<img src={four} alt="CDIC" />
            <h2>------- Promoting Healthy Living through Schools Project</h2>
            <h2>Project milestone: (2014-2018)</h2>
          <h2>Partners: World Diabetes Foundation (WDF)</h2>
          <h2>Overall goal: <br />
          <TypeWriterEffect
          textStyle={{
              fontFamily: 'Red Hat Display',
              fontWeight: 900,
              textAlign: 'left',
              fontSize: '1em',
              color: 'black',
          }

          }
          startDelay={2000}
          cursorColor="#ffff"
          multiText={
              [
                'Promoting healthy living and preventing diabetes and related non communicable diseases in coming generations in Kenya.'
              ]
          }

              />
              </h2>

<br/>
<br/>
<img src={five} alt="CDIC" />
            <h2>------- Diabetes foot care: Consolidating the gains</h2>
            <h2>Project milestone: 1 st April 2014 -1 st July 2017</h2>
            <h2>Overall goal: <br />
            <TypeWriterEffect
            textStyle={{
                fontFamily: 'Red Hat Display',
                fontWeight: 900,
                textAlign: 'left',
                fontSize: '1em',
                color: 'black',
            }

            }
            startDelay={2000}
            cursorColor="#ffff"
            multiText={
                [
                  'Improving management and prevention of diabetic foot complications.'
                ]
            }

                />
                </h2>

  <br/>
  <br/>
        </div>
        <div className="py-10 sm:flex items-center gap-x-4">

               </div>

        {/* steps */}
        <div className="mt-5">


        </div>
      </section>
      <Footer />

      {/* paying card wrapper */}
      <section>
          {/*   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="rgb(10,124,139)"
            fill-opacity="1"
            d="M0,192L80,208C160,224,320,256,480,266.7C640,277,800,267,960,224C1120,181,1280,107,1360,69.3L1440,32L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
          </svg> */}

        {/* paying card wrapper */}
        <div className="bg-[rgb(10,124,139)]">
          {/* paying card */}

        </div>
      </section>



    </>
  );
};

export default Prescribtion;
