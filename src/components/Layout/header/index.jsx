import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
import "../style.css";
import AnimatedToggleIcon from "../../AmimatedToggleIcon";
import { HiMenuAlt3 } from "react-icons/hi";
import { RxCross1 } from "react-icons/rx";
import { socialIcons } from "../../../assets";
import { useScroll } from "motion/react";
import { motion } from "framer-motion";

const ACTIVE_COLOR = [
  { linkColor: "#ffffff", bgColor: "#000000" },
  { linkColor: "#ffffff", bgColor: "#FD273F" },
  { linkColor: "#ffffff", bgColor: "#8837B9" },
  { linkColor: "#ffffff", bgColor: "#FFE41B" },
  { linkColor: "#ffffff", bgColor: "#7FCDFA" },
  { linkColor: "#ffffff", bgColor: "#00CCB6" },
  { linkColor: "#ffffff", bgColor: "#FD7B41" },
  { linkColor: "#ffffff", bgColor: "#CFBBF7" },
];

const Header = () => {
  const { scrollYProgress } = useScroll();
  const [open, setOpen] = useState(false);
  const [activeColor, setActiveColor] = useState(0);

  useEffect(() => {
    if (open) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }

    return () => {
      document.body.style.overflowY = "auto";
    };
  }, [open]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  const navLinks = [
    { id: 1, path: "/", label: "Home" },
    { id: 2, path: "/about", label: "About Us" },
    { id: 3, path: "/it-services", label: "It Services" },
    { id: 4, path: "/digital-marketing", label: "Digital Marketing" },
    { id: 5, path: "/contact", label: "Contact Us" },
    { id: 6, path: "/our-teams", label: "Our Teams" },
  ];

  console.log(socialIcons, "socialIcons");

  return (
    <>
      <div className="bg-transparent p-4 xl:px-28 sm:px-14 px-10 flex justify-between items-center relative z-50 ">
        <motion.div
          id="scroll-indicator"
          style={{
            scaleX: scrollYProgress,
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            height: 5,
            originX: 0,
            backgroundColor: "#ff0088",
          }}
        />

        <Link to="./">
          {/* <img src={logo} className="h-18 object-cover" alt="Logo" /> */}
          <h1 className="text-white text-2xl">Oz Media</h1>
        </Link>

        <AnimatedToggleIcon
          closeIcon={<HiMenuAlt3 />}
          openIcon={<RxCross1 />}
          openColor="text-white"
          closeColor="text-white"
          isOpen={open}
          onClick={() => setOpen(!open)}
          size="text-4xl"
          className="font-bold"
        />
      </div>

      {/* Full-screen sliding menu */}
      <div
        style={{
          color: ACTIVE_COLOR[activeColor].linkColor,
          backgroundColor: ACTIVE_COLOR[activeColor].bgColor,
        }}
        className={classNames(
          "fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center z-40 p-4 sm:p-10 md:p-20 lg:p-40 ",
          "transition-all duration-500 ease-in-out",
          {
            "translate-y-0": open,
            "-translate-y-full": !open,
          }
        )}
      >
        <img
          src="./images/img_abstractgeometricseamlesspatterns2zqt82c_2.png"
          className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
        />

        <div className="w-full flex  ">
          <div className="w-1/2  sm:w-full">
            <ul className="text-2xl sm:text-4xl md:text-5xl lg:text-[3.5em] font-bold space-y-6 ">
              {navLinks.map((item) => (
                <li
                  className="transition-transform duration-300 ease-in-out hover:scale-[1.01] cursor-pointer"
                  key={item.id}
                >
                  <Link
                    className="hover:text-black"
                    onMouseEnter={() => {
                      setActiveColor(item.id);
                    }}
                    onMouseOut={() => {
                      setActiveColor(0);
                    }}
                    to={item.path}
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-1/2 ">
            {/* <img src="" className="w-full h-full " /> */}
          </div>
        </div>
        <div className="absolute bottom-10 right-10 flex gap-6">
          {Object.values(socialIcons).map((icon, index) => (
            <Link>
              <img
                key={index}
                src={icon}
                alt={`social-icon-${index}`}
                className="filter brightness-50 hover:brightness-150 transition duration-300 cursor-pointer"
              />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Header;
