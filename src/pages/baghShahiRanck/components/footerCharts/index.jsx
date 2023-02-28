import FilterImage from "../../assets/images/filter.svg";
import React, { useMemo, useState } from "react";
import ReactSelect from "react-select";
// import { Tooltip } from "react-tooltip";
import {
  Cell,
  Label,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip as ChartTooltip,
} from "recharts";
import {
  samplePieData,
  samplePieDataColors,
} from "../../configs/sampleChartData";
import APISample from "../../configs/APIData";
import {
  distributionCurrentAndPrevWordsDecrease,
  distributionCurrentAndPrevWordsIncrease,
  sortPositionDecreaseWord,
  sortPositionIncreaseAvgWord,
  sortPositionIncreaseWord,
  sortPositionWord,
} from "../../chartDataCalulator";
import EmptyChart from "../SHARED/emptyChart";
import HelpImg from "../../assets/images/help.svg";
import EmptyPieChart from "../SHARED/emptyPieChart";
import EmptyPieChart2 from "../SHARED/emptyPieChart2";

const FooterCharts = () => {
  const optionsMemoPlus = useMemo(
    () =>
      Object.keys(APISample.data)
        .reverse()
        .map((item, indx) => ({
          value: item,
          label:
            indx === 0
              ? `آخرین بروزرسانی (${item})`
              : `${indx} دوره قبل (${item})`,
        }))
        .slice(0, 8),
    [APISample]
  );
  const optionsMemo = useMemo(
    () =>
      Object.keys(APISample.data)
        .reverse()
        .map((item, indx) => ({
          value: item,
          label:
            indx === 0
              ? `آخرین بروزرسانی (${item})`
              : `${indx} دوره قبل (${item})`,
        }))
        .slice(0, 7),
    [APISample]
  );

  const [period, setPeriod] = useState(optionsMemo[0].value);

  const periodIndex = optionsMemoPlus.findIndex(
    (item) => item.value === period
  );

  const PrevPeriod = () => {
    const index = optionsMemoPlus.findIndex((item) => item.value === period);

    return optionsMemoPlus?.[index + 1].value;
  };

  return (
    <div>
      <div className="border-b pb-3 mb-3">
        <h2>آمار و گزارش‌های نسبی</h2>
      </div>
      <div className="flex items-center">
        <div className="flex items-center">
          <div className="bg-neutral-100 rounded-md w-10 h-10 flex items-center justify-center ml-3">
            <img src={FilterImage} width="15" alt="filter" />
          </div>
          <div>نمایش آمار: </div>
        </div>
        <div className="mr-9">
          <ReactSelect
            classNamePrefix="custom-select"
            placeholder=""
            noOptionsMessage={() => "گزینه ای موجود نیست"}
            className="w-[197px] text-sm"
            value={optionsMemo.find((item) => item.value === period)}
            onChange={(e) => setPeriod(e.value)}
            options={optionsMemo}
          />
        </div>
      </div>
      <div className="my-6 flex items-center justify-between">
        <div className="customCard--long relative">
          {/* <Tooltip anchorId="footer-element6" variant="dark" /> */}
          <button
            id="footer-element6"
            data-tooltip-content="بیانگر میزان فراوانی هر بازه نسبت به کل فراوانی 
            کلمات کلیدی صفحه اول گوگل می‌باشد"
            className="absolute top-1 left-1 rounded-full flex items-center justify-center text-[.56rem]"
          >
            <img src={HelpImg} className="w-4 h-4" width="100%" alt="" />
          </button>
          <div className="text-center mb-2">نسبت کل کلمات</div>
          {!sortPositionWord(APISample.data[period]) ? (
            <EmptyPieChart title="کل کلمات" />
          ) : (
            <ResponsiveContainer width="100%" height={260}>
              <PieChart>
                <ChartTooltip
                  itemStyle={{
                    display: "flex",
                    flexDirection: "row-reverse",
                    gap: "4px",
                  }}
                />
                <Pie
                  isAnimationActive={false}
                  data={sortPositionWord(APISample.data[period])}
                  cx="50%"
                  cy="45%"
                  innerRadius={63.5}
                  outerRadius={76.5}
                  fill="#8884d8"
                  paddingAngle={-10}
                  dataKey="value"
                  blendStroke
                  // cornerRadius={132}
                  // maxRadius={10}
                  cornerRadius={10}
                >
                  {sortPositionWord(APISample.data[period]).map(
                    (entry, index) => (
                      <Cell
                        stroke="transparent"
                        key={`cell-${index}`}
                        fill={
                          samplePieDataColors[
                            index % samplePieDataColors.length
                          ]
                        }
                      />
                    )
                  )}
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
                            کل کلمات
                          </tspan>
                          <tspan
                            x="50%"
                            dy="12%"
                            fontWeight="bold"
                            className="text-2xl"
                          >
                            {APISample.data[period].length}
                          </tspan>
                        </text>
                      );
                    }}
                  ></Label>
                </Pie>
                <Legend
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                  align="right"
                />
              </PieChart>
            </ResponsiveContainer>
          )}
        </div>
        <div className="customCard--long relative">
          {/* <Tooltip anchorId="footer-element2" variant="dark" /> */}
          <button
            id="footer-element2"
            data-tooltip-content="بیانگر میزان فراوانی رشد جایگاه کلمات کلیدی هر بازه نسبت 
            به کل فراوانی رشد کلمات صفحه اول گوگل می‌باشد"
            className="absolute top-1 left-1 rounded-full flex items-center justify-center text-[.56rem]"
          >
            <img src={HelpImg} className="w-4 h-4" width="100%" alt="" />
          </button>
          <div className="text-center mb-2">نسبت رشد به کل</div>

          {!distributionCurrentAndPrevWordsIncrease(
            APISample.data,
            periodIndex + 2
          ).total ? (
            <EmptyPieChart title="تعداد کل رشد" />
          ) : (
            <ResponsiveContainer width="100%" height={260}>
              <PieChart>
                <ChartTooltip
                  itemStyle={{
                    display: "flex",
                    flexDirection: "row-reverse",
                    gap: "4px",
                  }}
                />
                <Pie
                  isAnimationActive={false}
                  data={
                    distributionCurrentAndPrevWordsIncrease(
                      APISample.data,
                      periodIndex + 2
                    ).arr
                  }
                  cx="50%"
                  cy="45%"
                  innerRadius={63.5}
                  outerRadius={76.5}
                  fill="#8884d8"
                  paddingAngle={-10}
                  dataKey="value"
                  blendStroke
                  // cornerRadius={132}
                  // maxRadius={10}
                  cornerRadius={10}
                >
                  {distributionCurrentAndPrevWordsIncrease(
                    APISample.data,
                    periodIndex + 2
                  ).arr.map((entry, index) => (
                    <Cell
                      stroke="transparent"
                      key={`cell-${index}`}
                      fill={
                        samplePieDataColors[index % samplePieDataColors.length]
                      }
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
                            تعداد کل رشد
                          </tspan>
                          <tspan
                            x="50%"
                            dy="12%"
                            fontWeight="bold"
                            className="text-2xl"
                          >
                            {
                              distributionCurrentAndPrevWordsIncrease(
                                APISample.data,
                                periodIndex + 2
                              ).total
                            }
                          </tspan>
                        </text>
                      );
                    }}
                  ></Label>
                </Pie>
                <Legend
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                  align="right"
                />
              </PieChart>
            </ResponsiveContainer>
          )}
        </div>
        <div className="customCard--long relative">
          {/* <Tooltip anchorId="footer-element3" variant="dark" /> */}
          <button
            id="footer-element3"
            data-tooltip-content="بیانگر میزان فراوانی افت جایگاه کلمات کلیدی هر بازه نسبت 
            به کل فراوانی افت کلمات صفحه اول گوگل می‌باشد"
            className="absolute top-1 left-1 rounded-full flex items-center justify-center text-[.56rem]"
          >
            <img src={HelpImg} className="w-4 h-4" width="100%" alt="" />
          </button>
          <div className="text-center mb-2">نسبت افت به کل</div>
          {!distributionCurrentAndPrevWordsDecrease(
            APISample.data,
            periodIndex + 2
          ).total ? (
            <EmptyPieChart title="تعداد کل افت" />
          ) : (
            <ResponsiveContainer width="100%" height={260}>
              <PieChart>
                <ChartTooltip
                  itemStyle={{
                    display: "flex",
                    flexDirection: "row-reverse",
                    gap: "4px",
                  }}
                />
                <Pie
                  isAnimationActive={false}
                  data={
                    distributionCurrentAndPrevWordsDecrease(
                      APISample.data,
                      periodIndex + 2
                    ).arr
                  }
                  cx="50%"
                  cy="45%"
                  innerRadius={63.5}
                  outerRadius={76.5}
                  fill="#8884d8"
                  paddingAngle={-10}
                  dataKey="value"
                  blendStroke
                  // cornerRadius={132}
                  // maxRadius={10}
                  cornerRadius={10}
                >
                  {distributionCurrentAndPrevWordsDecrease(
                    APISample.data,
                    periodIndex + 2
                  ).arr.map((entry, index) => (
                    <Cell
                      stroke="transparent"
                      key={`cell-${index}`}
                      fill={
                        samplePieDataColors[index % samplePieDataColors.length]
                      }
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
                            تعداد کل افت
                          </tspan>
                          <tspan
                            x="50%"
                            dy="12%"
                            fontWeight="bold"
                            className="text-2xl"
                          >
                            {
                              distributionCurrentAndPrevWordsDecrease(
                                APISample.data,
                                periodIndex + 2
                              ).total
                            }{" "}
                          </tspan>
                        </text>
                      );
                    }}
                  ></Label>
                </Pie>
                <Legend
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                  align="right"
                />
              </PieChart>
            </ResponsiveContainer>
          )}
        </div>
        <div className="customCard--long relative">
          {/* <Tooltip anchorId="footer-element4" variant="dark" /> */}
          <button
            id="footer-element4"
            data-tooltip-content="بیانگر میزان فراوانی رشد و افت جایگاه کل کلمات کلیدی به کل تغییرات می‌باشد."
            className="absolute top-1 left-1 rounded-full flex items-center justify-center text-[.56rem]"
          >
            <img src={HelpImg} className="w-4 h-4" width="100%" alt="" />
          </button>
          <div className="text-center mb-2">نمودار تعداد رشد و افت</div>
          {!distributionCurrentAndPrevWordsIncrease(
            APISample.data,
            periodIndex + 2
          ).total &&
          !distributionCurrentAndPrevWordsDecrease(
            APISample.data,
            periodIndex + 2
          ).total ? (
            <EmptyPieChart2 title="تعداد کل تغییرات" />
          ) : (
            <ResponsiveContainer width="100%" height={260}>
              <PieChart>
                <ChartTooltip
                  itemStyle={{
                    display: "flex",
                    flexDirection: "row-reverse",
                    gap: "4px",
                  }}
                />
                <Pie
                  isAnimationActive={false}
                  data={[
                    {
                      name: "رشد",
                      value: distributionCurrentAndPrevWordsIncrease(
                        APISample.data,
                        periodIndex + 2
                      ).total,
                    },
                    {
                      name: "افت",
                      value: distributionCurrentAndPrevWordsDecrease(
                        APISample.data,
                        periodIndex + 2
                      ).total,
                    },
                  ]}
                  cx="50%"
                  cy="45%"
                  innerRadius={63.5}
                  outerRadius={76.5}
                  fill="#8884d8"
                  paddingAngle={-10}
                  dataKey="value"
                  blendStroke
                  // cornerRadius={132}
                  // maxRadius={10}
                  cornerRadius={10}
                >
                  {distributionCurrentAndPrevWordsIncrease(
                    APISample.data,
                    periodIndex + 2
                  ).arr.map((entry, index) => (
                    <Cell
                      stroke="transparent"
                      key={`cell-${index}`}
                      fill={
                        samplePieDataColors[index % samplePieDataColors.length]
                      }
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
                            تعداد کل تغییرات
                          </tspan>
                          <tspan
                            x="50%"
                            dy="12%"
                            fontWeight="bold"
                            className="text-2xl"
                          >
                            {distributionCurrentAndPrevWordsIncrease(
                              APISample.data,
                              periodIndex + 2
                            ).total +
                              distributionCurrentAndPrevWordsDecrease(
                                APISample.data,
                                periodIndex + 2
                              ).total}
                          </tspan>
                        </text>
                      );
                    }}
                  ></Label>
                </Pie>
                <Legend
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                  align="right"
                />
              </PieChart>
            </ResponsiveContainer>
          )}
        </div>
        <div className="customCard--long relative">
          {/* <Tooltip anchorId="footer-element5" variant="dark" /> */}
          <button
            id="footer-element5"
            data-tooltip-content="مقایسه گر میانگین رشد و افت جایگاه کل کلمات کلیدی می‌باشد."
            className="absolute top-1 left-1 rounded-full flex items-center justify-center text-[.56rem]"
          >
            <img src={HelpImg} className="w-4 h-4" width="100%" alt="" />
          </button>
          <div className="text-center mb-2">نمودار میانگین رشد و افت</div>
          <ResponsiveContainer width="100%" height={260}>
            <PieChart>
              <ChartTooltip
                itemStyle={{
                  display: "flex",
                  flexDirection: "row-reverse",
                  gap: "4px",
                }}
              />
              <Pie
                isAnimationActive={false}
                data={[
                  {
                    name: "رشد",
                    value: sortPositionIncreaseAvgWord(
                      APISample.data[PrevPeriod()],
                      APISample.data[period]
                    ).avg,
                  },
                  {
                    name: "افت",
                    value: sortPositionIncreaseAvgWord(
                      APISample.data[period],
                      APISample.data[PrevPeriod()]
                    ).avg,
                  },
                ]}
                cx="50%"
                cy="45%"
                innerRadius={63.5}
                outerRadius={76.5}
                fill="#8884d8"
                paddingAngle={-10}
                dataKey="value"
                blendStroke
                // cornerRadius={132}
                // maxRadius={10}
                cornerRadius={10}
              >
                {[
                  {
                    name: "رشد",
                    value: sortPositionIncreaseAvgWord(
                      APISample.data[PrevPeriod()],
                      APISample.data[period]
                    ).avg,
                  },
                  {
                    name: "افت",
                    value: sortPositionIncreaseAvgWord(
                      APISample.data[period],
                      APISample.data[PrevPeriod()]
                    ).avg,
                  },
                ].map((entry, index) => (
                  <Cell
                    stroke="transparent"
                    key={`cell-${index}`}
                    fill={
                      samplePieDataColors[index % samplePieDataColors.length]
                    }
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
                          عملکرد کلی تغییرات
                        </tspan>
                        <tspan
                          x="50%"
                          dy="12%"
                          fontWeight="bold"
                          className="text-2xl"
                        >
                          {
                            sortPositionIncreaseAvgWord(
                              APISample.data[PrevPeriod()],
                              APISample.data[period]
                            ).avg
                          }
                          {" - "}
                          {
                            sortPositionIncreaseAvgWord(
                              APISample.data[period],
                              APISample.data[PrevPeriod()]
                            ).avg
                          }
                        </tspan>
                      </text>
                    );
                  }}
                ></Label>
              </Pie>
              <Legend
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                align="right"
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default FooterCharts;
