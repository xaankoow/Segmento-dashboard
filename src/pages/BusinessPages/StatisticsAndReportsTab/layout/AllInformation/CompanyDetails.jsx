import React from "react";
import MultiProgress from "react-multi-progress";
import { ImageContainer } from "../../../../../assets/img/IMG";
import { sampleChartColors } from "../../../../baghShahiRanck/configs/sampleChartData";

export default function index() {
  return (
    <div className="">
      <div className=" grid grid-cols-2 gap-y-7 gap-x-10">
        {[0, 1, 2, 3].map((item) => (
          <div className=" inline-block text-right w-full bg-white pt-2 pb-5 px-5 rounded-lg">
            <div className=" flex justify-between items-center">
              <div className="flex justify-center items-center">
                <img src={ImageContainer.redTriangle} alt="ico" />
                <span className=" mr-2">مشکلات با الویت بالا</span>
              </div>
              <span className="bg-sectionDisable text-orgWhite  rounded-xl px-4">
                2 مورد
              </span>
            </div>
            <div className=" mt-7">
              <MultiProgress
                transitionTime={1.2}
                height="10px"
                elements={[
                  {
                    value: 35,
                    color: "#D9D9D9",
                    showPercentage: false,
                    fontSize: 9,
                    textColor: "black",
                    isBold: false,
                  },
                  {
                    actual: 65,
                    value: 65,
                    color: "#10CCAE",
                    showPercentage: false,
                    fontSize: 9,
                    isBold: false,
                  },
                ]}
                component={({ children, element, ...rest }) => {
                  return (
                    <>
                      <div
                        {...rest} // adds all styles for rendering the progress bar
                        style={{
                          fontWeight: element.isBold ? 900 : 300,
                        }}>
                        {children}
                        <div className="text-xs">
                          <span className="ml-3 text-s absolute text-gold left-0 -top-6">
                            {element?.actual}
                          </span>
                          <i
                            className={` inline-block ${
                              element.color === sampleChartColors.failure
                                ? "borderBT--red triangle-down"
                                : element.color === sampleChartColors.success
                                ? "triangle-up"
                                : "dot"
                            }`}></i>
                        </div>
                      </div>
                    </>
                  );
                }}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="w-full flex justify-around items-center flex-row-reverse bg-red rounded-lg py-1 bg-white">
        <div className="flex justify-center items-center">
          <img
            src={ImageContainer.whiteLockIco}
            className="bg-sectionDisable rounded p-3"
          />
          <span className=" text-title text-sm pr-4">امن</span>
        </div>
        <div className="flex justify-center items-center">
          <img
            src={ImageContainer.whiteSourceIcoIco}
            className="bg-sectionDisable rounded p-3"
          />
          <span className=" text-title text-sm pr-4">64 منبع</span>
        </div>
        <div className="flex justify-center items-center">
          <img
            src={ImageContainer.whiteScalesOfJusticeIco}
            className="bg-sectionDisable rounded p-3"
          />
          <span className=" text-title text-sm pr-4">38.72 کیلوبایت</span>
        </div>
        <div className="flex justify-center items-center">
          <img
            src={ImageContainer.whiteSpeedIco}
            className="bg-sectionDisable rounded p-3"
          />
          <span className=" text-title text-sm pr-4">1.67 ثانیه</span>
        </div>
      </div>
      <div className="px-5 w-full">
      <hr className="w-full border-border mt-8" />
      </div>
    </div>
  );
}
