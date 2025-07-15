import React from "react";

const ClientsSection = () => {
  const clientLogos = [
    { id: 1, src: "/images/img_ditech_10.png", alt: "Client 1" },
    { id: 2, src: "/images/img_ditech_9.png", alt: "Client 2" },
    { id: 3, src: "/images/img_ditech_8.png", alt: "Client 3" },
    { id: 4, src: "/images/img_ditech_7.png", alt: "Client 4" },
    { id: 5, src: "/images/img_ditech_6.png", alt: "Client 5" },
    { id: 6, src: "/images/img_ditech_5.png", alt: "Client 6" },
    { id: 7, src: "/images/img_ditech_4.png", alt: "Client 7" },
    { id: 8, src: "/images/img_ditech_3.png", alt: "Client 8" },
    { id: 9, src: "/images/img_ditech_2.png", alt: "Client 9" },
    { id: 10, src: "/images/img_ditech_1.png", alt: "Client 10" },
    { id: 11, src: "/images/img_ditech_62x188.png", alt: "Client 11" },
    { id: 12, src: "/images/img_ditech.png", alt: "Client 12" },
  ];

  return (
    <section className="py-16 ">
      <div className="container mx-auto px-4">
        <h2 className=" font-bold text-4xl text-center mb-16 text-[#fd4360] ">
          Join the growing list of our satisfied customers:
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {clientLogos.map((logo, index) => (
            <React.Fragment key={logo.id}>
              <div className="flex justify-center items-center p-4">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-[62px] w-[188px] object-contain"
                />
              </div>
              {(index + 1) % 4 === 0 && index !== clientLogos.length - 1 && (
                <div className="col-span-full h-[1px] bg-[#fd4360] my-8"></div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
