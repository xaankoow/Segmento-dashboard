import React from "react";
import {
  Cell,
  Label,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
} from "recharts";
import { samplePieDataColors } from "../../configs/sampleChartData";

const EmptyPieChart2 = ({ title }) => {
  return (
    <ResponsiveContainer className="emptyPie" width="100%" height={260}>
      <PieChart>
        <Pie
          isAnimationActive={false}
          data={[
            { value: 1, name: "isd1" },
            { value: 1, name: "isd2" },
            { value: 1, name: "isd" },
          ]}
          cx="50%"
          cy="45%"
          innerRadius={63.5}
          outerRadius={76.5}
          fill="#C8C8C8"
          paddingAngle={-10}
          dataKey="value"
          blendStroke
          // cornerRadius={132}
          // maxRadius={10}
          cornerRadius={10}
        >
          {[].map((entry, index) => (
            <Cell
              stroke="transparent"
              key={`cell-${index}`}
              fill={samplePieDataColors[index % samplePieDataColors.length]}
            />
          ))}
          <Label
            content={() => {
              return (
                <text
                  offset="5"
                  x="29"
                  y="93.99999999999999"
                  fill="#002145"
                  className="recharts-text recharts-label"
                  textAnchor="middle"
                >
                  <tspan x="50%" dy="-5%">
                    {title}
                  </tspan>
                  <tspan
                    x="50%"
                    dy="12%"
                    fontWeight="bold"
                    className="text-2xl"
                  >
                    {0}
                  </tspan>
                </text>
              );
            }}
          ></Label>
        </Pie>
        <Legend
          content={
            ({ payload }) => (
              <ul
                class="recharts-default-legend"
                style={{ padding: "0px", margin: "0px", textAlign: "right" }}
              >
                <li
                  class="recharts-legend-item legend-item-0"
                  style={{ display: "inline-block", marginRight: "10px" }}
                >
                  <svg
                    class="recharts-surface"
                    width="14"
                    height="14"
                    style={{
                      display: "inline-block",
                      verticalAlign: "middle",
                      marginRight: "4px",
                    }}
                    viewBox="0 0 32 32"
                  >
                    <title></title>
                    <desc></desc>
                    <path
                      stroke="none"
                      fill="#F64E60"
                      d="M0,4h32v24h-32z"
                      class="recharts-legend-icon"
                      // style="--darkreader-inline-fill: #f65364; --darkreader-inline-stroke: none;"
                      data-darkreader-inline-fill=""
                      data-darkreader-inline-stroke=""
                    ></path>
                  </svg>
                  <span
                    class="recharts-legend-item-text"
                    // style="color: rgb(246, 78, 96); --darkreader-inline-color: #f65364;"
                    data-darkreader-inline-color=""
                  >
                    رشد
                  </span>
                </li>
                <li
                  class="recharts-legend-item legend-item-1"
                  style={{display: 'inline-block', marginRight: '10px'}}
                >
                  <svg
                    class="recharts-surface"
                    width="14"
                    height="14"
                    style={{display: 'inline-block', verticalAlign: 'middle', marginRight: '4px'}}
                    viewBox="0 0 32 32"
                  >
                    <title></title>
                    <desc></desc>
                    <path
                      stroke="none"
                      fill="#8950FC"
                      d="M0,4h32v24h-32z"
                      class="recharts-legend-icon"
                      // style="--darkreader-inline-fill: #8b52fc; --darkreader-inline-stroke: none;"
                      data-darkreader-inline-fill=""
                      data-darkreader-inline-stroke=""
                    ></path>
                  </svg>
                  <span
                    class="recharts-legend-item-text"
                    // style="color: rgb(137, 80, 252); --darkreader-inline-color: #8b52fc;"
                    data-darkreader-inline-color=""
                  >
                    افت
                  </span>
                </li>
              </ul>
            )

            // payload.map((entry, index) => (
            //   <li key={`item-${index}`}>{entry.value}</li>
            // ))
          }
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          align="right"
        />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default EmptyPieChart2;
