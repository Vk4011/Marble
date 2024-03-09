import { useEffect, useRef } from "react"; 
import Chart from "chart.js/auto";

const LineChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");
    const gradient = ctx.createLinearGradient(0, 0, 0, 300);
    gradient.addColorStop(0, "#489AD2");
    gradient.addColorStop(1, "#6FC2F3");

    const myChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: [
          "Oct 2022",
          "Dec 2022",
          "Feb 2023",
          "Apr 2023",
          "Jun 2023",
          "Aug 2023",
          "Oct 2023",
          "Dec 2023",
        ],
        datasets: [
          {
            label: "Sales",
            data: [65000, 59000, 80000, 81000, 56000, 55000, 40000],
            fill: false,
            borderColor: gradient,
            tension: 0.1,
          },
          {
            label: "Dotted Line",
            data: [55000, 59000, 60000, 58000, 59000, 58000, 60000], 
            fill: false,
            borderColor: "#4288f1", 
            borderWidth: 3, 
            borderCapStyle: "round", 
            borderDash: [5, 5], 
            tension: 0.1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            suggestedMin: 0,
            suggestedMax: 40000,
            ticks: {
              stepSize: 20000,
              callback: function (value, index, values) {
                if (value === 0) return "0";
                if (value === 20000) return "20k";
                if (value === 40000) return "40k";
              },
            },
          },
        },
      },
    });

    return () => {
      myChart.destroy();
    };
  }, []);

  return (
    <>
      <div className="line-chart-container">
        <canvas
          ref={chartRef}
          style={{ width: "740px", height: "110px" }}
        ></canvas>
      </div>
      <div className="flex justify-end flex-row gap-[10px] ">
        <div
          className=" w-[189px] h-[22px] bg-[#F6F6F7]  rounded-sm px-5 py-0
        text-[0.7rem]
        text-gray-400
        flex flex-row justify-between items-center
        "
        >
          <div className="w-[15px] h-[3px] bg-gradient-to-tr from-blue-400 to-blue-200 rounded-lg border-blue"></div>
          Oct 1,2022 - Feb 21,2024
        </div>

        <div
          className=" w-[189px] h-[22px] bg-[#F6F6F7]  rounded-sm px-5 py-0 
          text-[0.7rem] text-gray-400
          flex flex-row justify-between items-center
          "
        >
          <div className="l flex flex-row justify-center items-center gap-[2px]">
            <div className="w-[3px] h-[3px] bg-blue-300 rounded-lg border-blue"></div>
            <div className="w-[3px] h-[3px] bg-blue-300 rounded-lg border-blue"></div>
            <div className="w-[3px] h-[3px] bg-blue-300 rounded-lg border-blue"></div>
            <div className="w-[3px] h-[3px] bg-blue-300 rounded-lg border-blue"></div>
          </div>
          Oct 1,2021 - Feb 21,2023
        </div>
      </div>
    </>
  );
};

export default LineChart;
