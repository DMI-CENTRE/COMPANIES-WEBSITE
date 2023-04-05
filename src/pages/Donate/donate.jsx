import React from "react";
import Button from "../../components/ui/Button";
import { GoCalendar } from "react-icons/go";
import { AiOutlineInsurance } from "react-icons/ai";
import { HiHome } from "react-icons/hi";
import PrescribtionSteps from "../prescribtion/PrescribtionSteps";
import PayingCard from "../prescribtion/PayingCard";
import OnlinePrescriptionService from "../prescribtion/OnlinePrescriptionService";
import CDIC from "../../assets/cdic.png"
import TypeWriterEffect from 'react-typewriter-effect';

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
        <div className="sm:w-2/3">
          <h1 className="text-3xl font-semibold text-primaryDark font-poppins">
            Send Donation Via Lipa na M-PESA
          </h1>
          <img src="https://www.safaricom.co.ke/images/paybill.jpg" alt="mpesa" />
          <br />
          <br />
                  <h1 className="text-3xl font-semibold text-primaryDark font-poppins">
          When making M-PESA payments
        </h1>
        <h2>1. On your Mobile app Menu got to your Sim Toolkit</h2>
        <br/>
        <h2>2. Choose your carrier depending on your simcard and choose Mpesa</h2>
        <br/>
        <h2>3. Go to Lipa na Mpesa</h2>
        <br/>
         <h2>4. Select Paybill</h2>
        <br/>
         <h2>5. Enter business number: 928100</h2>
        <br/>
        <h2>5. Enter Account number: DMI DONATION</h2>
        <br/>
        <h2>5. Enter Amount you wish to donate....</h2>
        <br/>

        <h1 className="max-w-[1200px] mx-auto px-2 py-5 text-3xl font-semibold text-black">
        Send a confirmation message to us at "+254 722 755 828"/ For any enquiries before payment
      </h1>
            </div>


        <div className="py-10 sm:flex items-center gap-x-4">
          <div className="sm:w-1/3 flex items-center">
            <GoCalendar size="35px" fill="rgb(14, 132, 147)" />
            <p className="text-xl font-poppins pl-3">
            Support children in Need
            </p>
          </div>
          <div className="sm:w-1/3 flex items-center my-5 sm:m-0">
            <AiOutlineInsurance size="30px" fill="rgb(14, 132, 147)" />
            <p className="text-xl font-poppins pl-3">Serving Type one with a Mission</p>
          </div>
          <div className="sm:w-1/3 flex items-center">
            <HiHome size="30px" fill="rgb(14, 132, 147)" />
            <p className="text-xl font-poppins pl-3">
            Help us make a difference
            </p>
          </div>
        </div>

        <h1 className="py-5 text-3xl font-semibold text-primaryDark font-poppins text-center leading-8">
          Other ways to Donate
        </h1>
        {/* steps */}
        <div className="mt-5">
          <PrescribtionSteps
            img="https://kenyanmagazine.co.ke/wp-content/uploads/2021/06/IMG_20210604_173159_747.jpg"
            step={1}
            todo="DONATE BY BANK TRANSFER"
            text="Bank Name:    DMI CENTRE"

                    flexFlow="flex-row"
          />
          <PrescribtionSteps
            img="https://i.pcmag.com/imagery/reviews/068BjcjwBw0snwHIq0KNo5m-15..v1602794215.png"
            step={2}
            todo="PAYPAL METHOD"
            text="Transfer money online in seconds with PayPal money transfer. All you need is an email address."
            flexFlow="md:flex-row-reverse"
          />
          <PrescribtionSteps
            img="https://clientebancario.bde.es/f/webcb/RCL/ActualidadEducacionFinanciera/Blog/GettyImages-487729487_850x443.jpg"
            step={3}
            todo="DONATE VIA CHEQUE"
            text="A cheque is a document you can issue to your bank, directing it to pay the specified sum mentioned in digits as well as words to the person whose name is borne."
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
          {/* paying card */}

         {/* <div className="max-w-[1200px] mx-auto px-2">
            <div className="text-white">
              <h1 className="text-3xl font-semibold font-poppins text-center leading-8">
                Online prescription pricing details
              </h1>
              <h2 className="py-5 text-2xl text-center font-semibold font-poppins">
                How pricing works
              </h2>
              <p className="text-xl text-center">
                To quickly and easily get your prescription online, join our
                monthly membership program and save up to 80% on your
                prescriptions.
              </p>
            </div>
            {/* paying card
            <div className="mt-10 flex flex-col items-center md:flex-row align-top md:items-stretch justify-center gap-10">
              <PayingCard
                method="with insurance"
                darkColor="bg-[#0E8B96]"
                lightColor="bg-[#4ACACC]"
                firstVisitPayment="Copay"
                firstVisitText="For all visits"
                visitPrice="Often the same as an office visit. Most patients with in-network insurance pay $30 or less!"
              />
              <PayingCard
                method="without insurance"
                darkColor="bg-[#17C0CA]"
                lightColor="bg-[#85F2F4]"
                firstVisitPayment="Rs.1500"
                firstVisitText="Repeats only $69"
                visitPrice="Initial visits are $129 and follow-ups are only $69 for active members."
              />
            </div>
            <div className="text-center pt-10 flex flex-col items-center justify-center">
              <Button text="book an appointment" color="bg-[#40e0d0]" />
              <p className="text-sm text-white py-8">
                If we're unable to treat you, we'll provide a full refund.
              </p>
            </div>
          </div>  */}
  </div>
      </section>

      {/* <OnlinePrescriptionService
        value={1}
        leftHeading="Online prescription services"
        leftDesc="From online prescriptions to prescription refills, our online medical
          services have you covered."
        rightHeading1="New prescriptions"
        rightHeading1Desc="Request a new prescription online. Our board-certified doctors can prescribe medications including antibiotics, birth control, antidepressants, hypertension medication, and more. We accept most major insurances, and online visits take about 15 minutes."
        rightHeading2="Prescription refills"
        rightHeading2Desc="Get your online prescription refills by speaking with a virtual doctor. Our physicians can write an online prescription refill after a medical evaluation on our platform. Your medication refills will be electronically sent to your nearest pharmacy."
        rightHeading3="Prescription discount card"
        rightHeading3Desc="Why pay full price for your prescriptions? Save at 50,000+ pharmacies with our prescription discount card. The card could help you save up to 80% on your prescriptions and medications the next time you visit the pharmacy"
        /> */}

      <OnlinePrescriptionService
        leftHeading="Benefits of Donating Today"
        leftDesc=""
        rightImg1="https://pbs.twimg.com/media/Fo6wZFNXgAEUNVS?format=jpg&name=medium"
        rightHeading1="You help make a difference"
        rightHeading1Desc="When you choose to give to a charity - no matter how big or small that charity is - you’re helping to make a real difference. Charities can carry out their crucial work thanks to the generosity of people like you. And when you donate to a cause you care about, you’ll know that your decision to donate is making a tangible impact on the lives of those the charity helps."
        rightImg2="https://diabetesstrong.com/wp-content/uploads/2021/04/run-out-of-insulin.jpg"
        rightHeading2="Every donation makes an impact"
        rightHeading2Desc="No matter how much you can afford to give, as a one-off donation, through regular giving, or by fundraising for charity, your donation matters. Every donation received adds up and helps charities get to work and make a positive difference."
        rightImg3="https://www.sitarambhartia.org/wp-content/uploads/2019/07/insulin-edited-1170x520@2x.jpg"
        rightHeading3="Gives us a sense of belonging"
        rightHeading3Desc="Life can be difficult sometimes, but remembering we’re all in this together can help us feel more connected to those around us. And by all playing our part to lend a helping hand to those in need, we can feel more like an active part of our society. Our community means so much to us, and seeing them all come together, whether it’s through volunteering, fundraising, or giving - we’re all united in our common goal of protecting children."
        rightImg4="https://www.worlddiabetesfoundation.org/sites/default/files/Kenya%2C%20Eric_main.jpg"
        rightHeading4="You fuel your passion."
        rightHeading4Desc="When you donate your time and money to a cause that is near and dear to your heart, you are giving yourself the opportunity to fuel your passion and spend time doing things you love. "
      />
    </>
  );
};

export default Donate;
