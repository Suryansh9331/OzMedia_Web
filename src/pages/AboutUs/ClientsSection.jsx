import React from 'react';

const ClientsSection = () => {
  const clients = [
    { id: 1, logo: "/images/img_ditech_10.png", alt: "Client 1" },
    { id: 2, logo: "/images/img_ditech_9.png", alt: "Client 2" },
    { id: 3, logo: "/images/img_ditech_8.png", alt: "Client 3" },
    { id: 4, logo: "/images/img_ditech_7.png", alt: "Client 4" },
    { id: 5, logo: "/images/img_ditech_6.png", alt: "Client 5" },
    { id: 6, logo: "/images/img_ditech_5.png", alt: "Client 6" },
    { id: 7, logo: "/images/img_ditech_4.png", alt: "Client 7" },
    { id: 8, logo: "/images/img_ditech_3.png", alt: "Client 8" },
    { id: 9, logo: "/images/img_ditech_2.png", alt: "Client 9" },
    { id: 10, logo: "/images/img_ditech_1.png", alt: "Client 10" },
    { id: 11, logo: "/images/img_ditech.png", alt: "Client 11" },
    { id: 12, logo: "/images/img_ditech_62x188.png", alt: "Client 12" }
  ];

  return (
    <section className="py-16 px-4 md:px-16 bg-bg-dark">
      <div className="container mx-auto">
        <h3 className="text-white font-montserrat font-bold text-4xl text-center mb-16">
          Join the growing list of our satisfied customers:
        </h3>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {clients.map(client => (
            <div key={client.id} className="flex items-center justify-center p-4 relative">
              <img 
                src={client.logo} 
                alt={client.alt} 
                className="max-w-full max-h-16 object-contain"
              />
              <div className="absolute bottom-0 left-0 right-0 h-px bg-primary-red"></div>
              <div className="absolute bottom-0 left-0 w-px h-16 bg-primary-red"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;