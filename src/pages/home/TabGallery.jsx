import React, { useState } from "react";
import VideoInfoBox from "./VideoInfoBox";
import VideoCard from "../../components/cards/VideoCard";

const TabGallery = () => {
  const [activeTab, setActiveTab] = useState(1);
  const tabs = [
    {
      id: 1,
      title: "DMI CENTRE Introduction",
      text: "See Video Introduction",
      heading: "About Us",
      subHeading:
        " DMI Centre was established in 1999 as a not-for-profit medical charity organization with the objective of creating awareness in diabetes and its management.",
      description:
        "DMI CENTRE designs, implements and publish programs for creating public awareness on prevention, diagnosis and management of diabetes. We provide services to people living with diabetes, care-givers, healthcare professionals, the community in general and other stakeholders involved in diabetes management..",

      coverImg: "/images/tab_gallery/walk2.JPG",
      videoLink: "https://www.youtube.com/embed/bUGx4HoQs8o",
      videoImg: "/images/tab_gallery/walk2.JPG",
    },
    {
      id: 2,
      title: "Why Choose Us",
      text: "Listen from real patients",
      heading: "Why Us",
      subHeading:
        "Across Kenya, community awareness around diabetes is low. People are often diagnosed through medical outreach camps or when patients arrive at the hospital with complications of diabetes like thirst, vision change, fatigue and constant hunger. For many Kenyans, the cost of health care is a key obstacle to treatment.",
      description:
        "Why DMI CENTRE.",

      coverImg: "/images/tab_gallery/hand.jpg",
      videoLink: "https://www.youtube.com/embed/SJ8jYHPLACQ",
      videoImg: "/images/tab_gallery/hand.jpg",
    },
    {
      id: 3,
      title: "Our innovation",
      text: "Our dedicated research team",
      heading: "Our Innovation",
      subHeading:
        "A healthy population free from diabetes and related complications.",
      description:
        "Reached over 2.2M people through the community awareness programmes",
                coverImg: "/images/tab_gallery/walk.JPG",
      videoLink: "https://www.youtube.com/embed/1rwUMglyBU8",
      videoImg: "images/tab_gallery/walk.JPG",
    },

    {
      id: 4,
      title: "Give Back",
      text: "Donation programme",
      heading: "Give Back",
      subHeading:
        "Historically, drugs were discovered through identifying the active ingredient from traditional remedies or by serendipitous discovery.Later chemical libraries of synthetic small molecules.",
      description:
        "Modern drug discovery involves the identification of screening hits, medicinal chemistry and optimization of those hits to increase the affinity, selectivity (to reduce the potential of side effects),efficacy/potency, metabolic stability (to increase the half-life),and oral bioavailability. Once a compound that fulfills all of these requirements.",

      coverImg: "/images/tab_gallery/cover_img_4.avif",
      videoLink: "https://www.youtube.com/embed/TgYY6cRazHM",
      videoImg: "/images/tab_gallery/cdic1.JPG",
    },
  ];
  return (
    <div>
      <div className="sm:flex">
        {tabs.map((tab) => (
          <VideoInfoBox
            key={tab.id}
            title={tab.title}
            text={tab.text}
            id={tab.id}
            makeActive={setActiveTab}
            isActive={tab.id === activeTab}
          />
        ))}
      </div>
      <VideoCard
        heading={tabs[activeTab - 1].heading}
        subHeading={tabs[activeTab - 1].subHeading}
        description={tabs[activeTab - 1].description}
        coverImg={tabs[activeTab - 1].coverImg}
        videoImg={tabs[activeTab - 1].videoImg}
        videoLink={tabs[activeTab - 1].videoLink}
        title={tabs[activeTab - 1].title}
      />
    </div>
  );
};

export default TabGallery;
