
import React, { useState } from "react";
import {
  FaChevronDown,
  FaArrowUp
} from "react-icons/fa";

import "../TravelSpendingComponent/TravelSpending.css";

const chartData = {
  "Last 3 months": {
    labels: ["Sep", "Oct", "Nov"],
    values: [900, 1450, 2450],
    previous: "vs. previous 3 months"
  },
  "Last 6 months": {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    values: [500, 900, 1200, 1500, 1650, 2150],
    previous: "vs. previous 6 months"
  },
  "Last 12 months": {
    labels: ["Jan", "Mar", "May", "Jul", "Sep", "Nov"],
    values: [400, 650, 900, 1200, 1750, 2450],
    previous: "vs. previous 12 months"
  }
};

const TravelSpending = () => {

  const [period, setPeriod] = useState("Last 6 months");

  const selectedData = chartData[period];

  // Chart dimensions
  const width = 340;
  const height = 210;

  const left = 35;
  const right = 8;
  const top = 12;
  const bottom = 28;

  const maxValue = 2500;

  const chartWidth = width - left - right;
  const chartHeight = height - top - bottom;

  // Calculate coordinates
  const points = selectedData.values.map((value, index) => {

    const x =
      left +
      (index / (selectedData.values.length - 1)) * chartWidth;

    const y =
      top +
      chartHeight -
      (value / maxValue) * chartHeight;

    return { x, y, value };
  });

  const linePath = points
    .map((point, index) =>
      `${index === 0 ? "M" : "L"} ${point.x} ${point.y}`
    )
    .join(" ");

  const areaPath = `
    ${linePath}
    L ${points[points.length - 1].x} ${top + chartHeight}
    L ${points[0].x} ${top + chartHeight}
    Z
  `;

  const yLabels = [2500, 2000, 1500, 1000, 500, 0];

  return (

    <div className="travel-spending-card">

      {/* HEADER */}
      <div className="spending-header">

        <h3>Travel Spending</h3>

        <div className="period-select-wrapper">

          <select
            value={period}
            onChange={(e) => setPeriod(e.target.value)}
            className="period-select"
          >
            {Object.keys(chartData).map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>

          <FaChevronDown className="select-arrow" />

        </div>

      </div>

      {/* SPENDING AMOUNT */}
      <div className="spending-summary">

        <h2>$ 2,450</h2>

        <div className="spending-growth">

          <div className="growth-percentage">
            <FaArrowUp />
            <span>12%</span>
          </div>

          <p>{selectedData.previous}</p>

        </div>

      </div>

      {/* CHART */}
      <div className="spending-chart">

        <svg
          viewBox={`0 0 ${width} ${height}`}
          className="chart-svg"
          preserveAspectRatio="none"
        >

          <defs>
            <linearGradient
              id="chartGradient"
              x1="0"
              y1="0"
              x2="0"
              y2="1"
            >
              <stop
                offset="0%"
                stopColor="#2875ff"
                stopOpacity="0.18"
              />

              <stop
                offset="100%"
                stopColor="#2875ff"
                stopOpacity="0.01"
              />
            </linearGradient>
          </defs>

          {/* Y AXIS LABELS AND GRID */}
          {yLabels.map((value, index) => {

            const y = top + (index / 5) * chartHeight;

            return (
              <g key={value}>

                <line
                  x1={left}
                  y1={y}
                  x2={width - right}
                  y2={y}
                  stroke="#e9eff8"
                  strokeWidth="1"
                />

                <text
                  x={left - 10}
                  y={y + 4}
                  textAnchor="end"
                  fontSize="10"
                  fill="#7186a7"
                >
                  {value === 2500
                    ? "2.5K"
                    : value === 2000
                    ? "2K"
                    : value === 1500
                    ? "1.5K"
                    : value === 1000
                    ? "1K"
                    : value}
                </text>

              </g>
            );
          })}

          {/* AREA UNDER LINE */}
          <path
            d={areaPath}
            fill="url(#chartGradient)"
          />

          {/* CHART LINE */}
          <path
            d={linePath}
            fill="none"
            stroke="#2875ff"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* DATA POINTS */}
          {points.map((point, index) => (

            <circle
              key={index}
              cx={point.x}
              cy={point.y}
              r="3.5"
              fill="#2875ff"
            />

          ))}

          {/* X AXIS LABELS */}
          {selectedData.labels.map((label, index) => {

            const x =
              left +
              (index / (selectedData.labels.length - 1)) * chartWidth;

            return (
              <text
                key={label}
                x={x}
                y={height - 5}
                textAnchor="middle"
                fontSize="10"
                fill="#7186a7"
              >
                {label}
              </text>
            );
          })}

        </svg>

      </div>

    </div>
  );
};

export default TravelSpending;
