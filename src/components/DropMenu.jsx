import React from "react";
import { CiCircleQuestion } from "react-icons/ci";
import { LuLineChart } from "react-icons/lu";

function DropMenu() {
  return (
    <>
        <div
          className="w-[212px] h-[167px] rounded-lg bg-[#FFFFFF] border-[2px solid gray] flex flex-col justify-center items-center gap-[5px] shadow-sm
          absolute top-[35px] left-[150px] z-[1000] p-[10px 5px 10px 5px]
          "
        >
          <div className="w-[202px] h-[22px] rounded-sm hover:bg-[#c4c9cb8e] flex justify-between items-center ">
            <p className="flex flex-row justify-center items-center text-[0.9rem]  gap-[10px]">
              <LuLineChart />
              Average Order Value
            </p>
            <CiCircleQuestion />
          </div>
          <div className="w-[202px] h-[22px] rounded-sm bg-[#c4c9cb8e] flex justify-between items-center ">
            <p className="flex flex-row justify-center items-center gap-[10px] text-[0.9rem]">
              <LuLineChart />
              Conversion rate
            </p>
            <CiCircleQuestion />
          </div>
          <div className="w-[202px] h-[22px] rounded-sm hover:bg-[#c4c9cb8e] flex justify-between items-center ">
            <p className="flex flex-row justify-center items-center  gap-[10px] text-[0.9rem]">
              <LuLineChart />
              Gross Sales
            </p>
            <CiCircleQuestion />
          </div>
          <div className="w-[202px] h-[22px] rounded-sm hover:bg-[#c4c9cb8e] flex justify-between items-center ">
            <p className="flex flex-row justify-center items-center  gap-[10px] text-[0.9rem]">
              <LuLineChart />
              Net return value
            </p>
            <CiCircleQuestion />
          </div>
          <div className="w-[202px] h-[22px] rounded-sm hover:bg-[#c4c9cb8e] flex justify-between items-center ">
            <p className="flex flex-row justify-center items-center  gap-[10px] text-[0.9rem]">
              <LuLineChart />
              Store search conversion{" "}
            </p>
            <CiCircleQuestion />
          </div>
          <div className="w-[202px] h-[22px] rounded-sm hover:bg-[#c4c9cb8e] flex justify-between items-center ">
            <p className="flex flex-row justify-center items-center text-[0.9rem]  gap-[10px]">
              <LuLineChart />
              Return rate
            </p>
            <CiCircleQuestion />
          </div>
        </div>
    </>
  );
}

export default DropMenu;
