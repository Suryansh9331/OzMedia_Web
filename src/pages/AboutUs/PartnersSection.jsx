import React from 'react';

const PartnersSection = () => {
  const partners = [
    { id: 1, logo: "/images/img_ditech_10.png", alt: "Ditech" },
    { id: 2, logo: "/images/img_ditech_4.png", alt: "Partner 2" },
    { id: 3, logo: "/images/img_ditech_62x188.png", alt: "Partner 3" },
    { id: 4, logo: "/images/img_ditech_1.png", alt: "Partner 4" },
    { id: 5, logo: "/images/img_ditech_5.png", alt: "Partner 5" }
  ];

  return (
    <section className="py-16 px-4 md:px-16 bg-bg-dark">
      <div className="container mx-auto">
        <h3 className="text-white font-montserrat font-bold text-4xl text-center mb-12">
          Our Partners already have Best in Venture Support.
        </h3>
        
        <div className="flex flex-wrap justify-center items-center gap-16">
          {partners.map(partner => (
            <div key={partner.id} className="w-40 h-20 flex items-center justify-center">
              <img 
                src={partner.logo} 
                alt={partner.alt} 
                className="max-w-full max-h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;