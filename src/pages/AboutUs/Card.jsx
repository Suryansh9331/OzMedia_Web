import React from "react";

const TestimonialCard = ({ image, name, company, review }) => {
  return (
    <div className="flex flex-col sm:flex-row bg-[#ffe9e3] rounded-xl overflow-hidden shadow-md max-w-2xl w-full">
      {/* Left: Image */}
      <div className="sm:w-1/3">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>

      <div className="p-4 sm:w-2/3 flex flex-col justify-between">
        <div className="flex mb-2">
          {Array(5)
            .fill(0)
            .map((_, idx) => (
              <span key={idx} className="text-orange-500 text-4xl">
                ★
              </span>
            ))}
        </div>
        <p className="text-md text-black text-bold mb-4">{`"${review}"`}</p>
        <p className="text-md font-semibold">
          {name} <span className="text-gray-500 font-normal">{company}</span>
        </p>
      </div>
    </div>
  );
};

export default TestimonialCard;
