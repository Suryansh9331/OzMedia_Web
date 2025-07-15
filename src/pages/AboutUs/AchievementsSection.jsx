import React from "react";

const AchievementsSection = () => {
  const digitalMarketingAwards = [
    {
      id: 1,
      agency:
        "We offer the client something more where others use standard solutions",
      award:
        "We always start with the analysis and development of an individual strategy of actions for a client. We look at the planned points of the plan. We are looking for extraordinary solutions for promotion on the Internet. We support the idea of healthy competition in any area of modern business. This is helped us become the No. 1 SEO company in the USA (according to the Clutch rating).",
      year: "2023",
    },
    {
      id: 2,
      agency: "We create a detailed promotion strategy",
      award:
        "We perform a deep audit of the site, finding points of growth and business development. We develop a strategy for promotion, taking into account the features of results, not just formal promises. We take full responsibility for our work on the client.",
      year: "2022",
    },
    {
      id: 3,
      agency: "We have our own staff of specialists",
      award:
        "We are chosen for full involvement in client projects, support at any time, individual approach to offers, reporting, responsibility for the result and the ability to adapt to the available budget.",
      year: "2022",
    },
    {
      id: 3,
      agency: "We provide each client with access to the Personal Account",
      award:
        "This is an informative online dashboard with key metrics, where you can see at any time at what stage the project is, what has already been done, what results have already been achieved, what work is planned for the future, the clarity of our work, and the client receives comprehensive information in real time.",
      year: "2022",
    },
  ];

  const AwardRow = ({ agency, award, year }) => (
    <div className="border-t border-border-gray py-6">
      <div className="grid  grid-cols-12 gap-4">
        <div className="col-span-1 text-center">
          <img className="" src="/images/img_group.svg" />
        </div>
        <div className="col-span-4">
          <p className="text-[#fd4360] font-montserrat font-bold text-base">
            {agency}
          </p>
        </div>
        <div className="col-span-7">
          <p className="text-white font-montserrat font-bold text-lg">
            {award}
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-16 px-4 md:px-16 bg-bg-dark-tertiary">
      <div className="container mx-auto">
        <div className="mb-12">
          <h2 className="text-[#fd4360] font-montserrat font-bold text-xl">
            BENEFITS OF WORK WITH US
          </h2>
        </div>

        <div className="">
          <h4 className="text-white font-montserrat font-bold text-4xl mb-6">
            Digital Marketing Award
          </h4>

          {digitalMarketingAwards.map((award) => (
            <AwardRow
              key={award.id}
              agency={award.agency}
              award={award.award}
              year={award.year}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
