import React from 'react';

const TeamSection = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Walker",
      position: "CEO",
      image: "/images/img_ditech_10.png" // Using placeholder image
    },
    {
      id: 2,
      name: "Unai Emery",
      position: "Director",
      image: "/images/img_ditech_10.png" // Using placeholder image
    },
    {
      id: 3,
      name: "Natalia",
      position: "CBDO",
      image: "/images/img_ditech_10.png" // Using placeholder image
    },
    {
      id: 4,
      name: "Ghea",
      position: "HR Manager",
      image: "/images/img_ditech_10.png" // Using placeholder image
    }
  ];

  return (
    <section className="py-16 px-4 md:px-16 bg-bg-dark">
      <div className="container mx-auto">
        <div className="mb-12">
          <h2 className="text-primary-red font-montserrat font-bold text-xl mb-2">Team</h2>
          <h3 className="text-white font-montserrat font-bold text-5xl mb-6">Our expert</h3>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map(member => (
            <div key={member.id} className="flex flex-col">
              <div className="bg-[#bdbabac6] h-96 w-full mb-4"></div>
              <h4 className="text-primary-red font-montserrat font-bold text-base mb-1">{member.name}</h4>
              <p className="text-white font-roboto text-sm">{member.position}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;