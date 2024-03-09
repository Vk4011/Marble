// Demo.jsx
import React, { useState } from "react";
import "./Demo.css";
import { FaPen } from "react-icons/fa";
import { MdArrowDropUp } from "react-icons/md";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import LineChart from "./LineChart";
import Over from "./Over";
import DropMenu from "./DropMenu";

function Demo({
  isMenuOpen1,
  isMenuOpen2,
  isMenuOpen3,
  isMenuOpen4,
  setIsMenuOpen1,
  setIsMenuOpen2,
  setIsMenuOpen3,
  setIsMenuOpen4,
}) {

  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const [frameHeight, setFrameHeight] = useState("282px");

  const toggleDropDown = () => {
    if (isDropDownOpen) {
      setFrameHeight("120px");
    } else {
      setFrameHeight("282px");
    }
    setIsDropDownOpen(!isDropDownOpen);
  };

  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);
  const [isHovered4, setIsHovered4] = useState(false);

  const toggleMenu1 = () => {
    setIsMenuOpen1(!isMenuOpen1);
  };

  const toggleMenu2 = () => {
    setIsMenuOpen2(!isMenuOpen2);
  };

  const toggleMenu3 = () => {
    setIsMenuOpen3(!isMenuOpen3);
  };

  const toggleMenu4 = () => {
    setIsMenuOpen4(!isMenuOpen4);
  };



  return (
    <>
      <div
        className={`Frame w-[793px] h-[${frameHeight}] border-[1px] border-none shadow-sm shadow-gray-600`}
      >
        <div className="metrics">
          <div className="m m1  flex flex-col relative">
            <div
              style={{ fontSize: "0.8rem" }}
              className="flex flex-row justify-between w-[160px] items-center"
            >
              <span
                className="border-b border-dotted inline-block relative"
                onMouseEnter={() => setIsHovered1(true)}
                onMouseLeave={() => setIsHovered1(false)}
              >
                Online store sessions
                {isHovered1 && <Over />}
              </span>

              <div
                className="w-[23px] h-[23px] hover:bg-gray-400 flex justify-center items-center rounded-md cursor-pointer"
                onClick={toggleMenu1}
              >
                <FaPen style={{ fontSize: "0.8rem" }} />
              </div>
            </div>
            {isMenuOpen1 && <DropMenu />}
            <br />
            <div className="flex flex-row">
              <p style={{ fontSize: "0.7rem", fontWeight: "bold" }}>255,581</p>
              <div className="flex justify-center items-center flex-row">
                <MdArrowDropUp />
                <p className="text-[0.5rem] text-gray-500">9%</p>
              </div>
            </div>
          </div>

          <div className="m m1 m2  hover:bg relative group flex flex-col">
            <div
              style={{ fontSize: "0.8rem" }}
              className="flex flex-row justify-between w-[160px] items-center"
            >
              <span
                className="border-dotted border-b inline-block"
                onMouseEnter={() => setIsHovered2(true)}
                onMouseLeave={() => setIsHovered2(false)}
              >
                Net return value
                {isHovered2 && <Over />}
              </span>
              <div
                className="w-[23px] h-[23px] hover:bg-gray-400 flex justify-center items-center rounded-md cursor-pointer"
                onClick={toggleMenu2}
              >
                <FaPen style={{ fontSize: "0.8rem" }} />
              </div>
            </div>
            {isMenuOpen2 && <DropMenu />}
            <br />
            <div className="flex flex-row ">
              <p style={{ fontSize: "0.7rem", fontWeight: "bold" }}>
                -$15,07.44
              </p>
              <div className="flex justify-center items-center flex-row">
                <MdArrowDropUp />
                <p className="text-[0.5rem] text-gray-500">14%</p>
              </div>
            </div>
          </div>

          <div className="m m1 m2  hover:bg relative group flex flex-col">
            <div
              style={{ fontSize: "0.8rem" }}
              className="flex flex-row justify-between w-[160px] items-center"
            >
              <span
                className="border-dotted border-b inline-block"
                onMouseEnter={() => setIsHovered3(true)}
                onMouseLeave={() => setIsHovered3(false)}
              >
                Total orders
                {isHovered3 && <Over />}
              </span>
              <div
                className="w-[23px] h-[23px] hover:bg-gray-400 flex justify-center items-center rounded-md cursor-pointer"
                onClick={toggleMenu3}
              >
                <FaPen style={{ fontSize: "0.8rem" }} />
              </div>
            </div>
            {isMenuOpen3 && <DropMenu />}
            <br />
            <div className="flex flex-row ">
              <p style={{ fontSize: "0.7rem", fontWeight: "bold" }}>10,511</p>
              <div className="flex justify-center items-center flex-row">
                <MdArrowDropUp />
                <p className="text-[0.5rem] text-gray-500">2%</p>
              </div>
            </div>
          </div>

          <div className="m m1 m2 hover:bg relative group flex flex-col">
            <div
              style={{ fontSize: "0.8rem" }}
              className="flex flex-row justify-between w-[160px] items-center"
            >
              <span
                className="border-dotted border-b inline-block"
                onMouseEnter={() => setIsHovered4(true)}
                onMouseLeave={() => setIsHovered4(false)}
              >
                Conversion rate
                {isHovered4 && <Over />}
              </span>
              <div
                className="w-[23px] h-[23px] hover:bg-gray-400 flex justify-center items-center rounded-md cursor-pointer"
                onClick={toggleMenu4}
              >
                <FaPen style={{ fontSize: "0.8rem" }} />
              </div>
            </div>
            {isMenuOpen4 && <DropMenu />}
            <br />
            <div className="flex flex-row">
              <p style={{ fontSize: "0.7rem", fontWeight: "bold" }}>3.18%</p>
              <div className="flex justify-center items-center flex-row">
                <MdArrowDropUp />
                <p className="text-[0.5rem] text-gray-500">7%</p>
              </div>
            </div>
          </div>

          <div onClick={toggleDropDown} className="icon-container">
            {isDropDownOpen ? <RiArrowDropUpLine /> : <RiArrowDropDownLine />}
          </div>
        </div>
        <div className="chartcomp mt-[6rem]">
          {isDropDownOpen && <LineChart />}
        </div>
      </div>
    </>
  );
}

export default Demo;
