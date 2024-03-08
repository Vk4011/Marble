import React, { useEffect, useRef } from "react";
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
          "oct 2022",
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
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: false,
            borderColor: gradient,
            tension: 0.1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            suggestedMin: "20k",
            suggestedMax: "40k",
            ticks: {
              callback: function (value, index, values) {
                return value;
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
          style={{ width: "750px", height: "50px" }}
        ></canvas>
      </div>
      <div className="flex justify-end flex-row gap-[10px] ">
        <div className="l1 w-[189px] h-[22px] bg-blue-300 rounded-sm px-5 py-0 bg-[#F6F6F7]">
          l1
        </div>

        <div
          className="l1 w-[189px] h-[22px] bg-[#F6F6F7]  rounded-sm px-5 py-0"
        >
          l2
        </div>
      </div>
    </>
  );
};

export default LineChart;
