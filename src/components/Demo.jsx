import React, { useState } from "react";
import "./Demo.css";
import { FaPen } from "react-icons/fa";
import { MdArrowDropUp } from "react-icons/md";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import LineChart from "./LineChart";

function Demo() {
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

  return (
    <>
    
      <div
        className={`Frame w-[793px] h-[${frameHeight}] border-[1px] border-none shadow-sm shadow-gray-600`}
      >
        <div className="metrics">
          <div className="m m1  flex flex-col">
            <div
              style={{ fontSize: "0.6rem" }}
              className="flex flex-row justify-between w-[160px] items-center"
            >
              <span className="border-b border-dotted inline-block">
                Online store sessions
              </span>
              <FaPen style={{ fontSize: "0.6rem" }} />
            </div>
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
              style={{ fontSize: "0.6rem" }}
              className="flex flex-row justify-between w-[160px] items-center"
            >
              <span className="border-dotted border-b inline-block">
                Net return value
              </span>
              <FaPen
                className="invisible group-hover:visible"
                style={{ fontSize: "0.6rem" }}
              />
            </div>
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
              style={{ fontSize: "0.6rem" }}
              className="flex flex-row justify-between w-[160px] items-center"
            >
              <span className="border-dotted border-b inline-block">
                Total orders
              </span>
              <FaPen
                className="invisible group-hover:visible"
                style={{ fontSize: "0.6rem" }}
              />
            </div>
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
              style={{ fontSize: "0.6rem" }}
              className="flex flex-row justify-between w-[160px] items-center"
            >
              <span className="border-dotted border-b inline-block">
                Conversion rate
              </span>
              <FaPen
                className="invisible group-hover:visible"
                style={{ fontSize: "0.6rem" }}
              />
            </div>
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
