import React from "react";
import CompanyInformation from "./CompanyInformation";
import CompanyDetails from "./CompanyDetails";
import SpeedInformation from "./SpeedInformation";
import ChartsData from "./ChartsData";
import PagesLoading from "./PagesLoading";
export default function index({ pageData, insight }) {
  return (
    <div className="rounded-lg w-full border border-border overflow-hidden">
      <div className="text-title text-sm px-4 py-2  bg-white w-full text-right">
        سرعت صفحه وبسایت
      </div>
      <div className=" mt-7">
        <CompanyInformation
          companyName={pageData?.title}
          link={pageData?.link}
          description={pageData?.description}
        />
      </div>
      {/* <div className=' mt-10'>
          <CompanyDetails/>
        </div> */}
      <div>
        {insight && (
          <SpeedInformation
            timeToInteractive={insight[0].time_to_interactive}
            totalBlockingTime={insight[0].total_blocking_time}
            cumulativeLayoutShift={insight[0].cumulative_layout_shift}
            firstContentfulPaint={insight[0].first_contentful_paint}
            speedIndex={insight[0].speed_index}
            largestContentfulPaint={insight[0].large_contentful_paint}
          />
        )}
      </div>
      <div className=" mt-14 mb-8">
        {insight && (
          <ChartsData
            performance={insight[0].performance}
            accessibility={insight[0].accessibility}
            best_practices={insight[0].best_practices}
            seo={insight[0].seo}
          />
        )}
      </div>
      {/* <div className=" mt-14">
        <PagesLoading />
      </div> */}
    </div>
  );
}
