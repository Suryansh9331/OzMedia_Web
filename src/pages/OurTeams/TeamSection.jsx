import React from "react";

const teamMembers = [
  { name: "Walker", role: "CEO", image: "/Image (2).png" },
  { name: "Walker", role: "DIRECTOR", image: "/Image (3).png" },
  { name: "Walker", role: "FRONTEND DEVELOPER", image: "/Image (4).png" },
  { name: "Walker", role: "BACKEND DEVELOPER", image: "/Image (3).png" },
  { name: "Walker", role: "UI/UX DESIGNER", image: "/Image (5).png" },
  { name: "Walker", role: "SOFTWARE DEVELOPER", image: "/Image (6).png" },
  { name: "Walker", role: "CEO", image: "/Image (7).png" },
  { name: "Walker", role: "HR", image: "/Image (8).png" },
];

const TeamSection = () => {
  return (
    <section className=" font-montserrat  py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h3 className="text-4xl  font-bold text-[#073757] uppercase mb-2">
          Team
        </h3>
        <h2 className="text-3xl text-black font-bold mb-10">Our expert</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-80 object-cover rounded-lg"
              />
              <h3 className="text-[#073757] font-semibold mt-4">
                {member.name}
              </h3>
              <p className="text-sm text-black">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
