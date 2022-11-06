import React from "react";
import Polygon from "react-polygon";
import { createRenderPoint } from "./fun";

export default function CreateRotateLine({ array, classname }) {
  return (
    <div className="flex items-center mr-4">
      {/* {array != undefined&typeof array=="object"? ( */}
      <div className={`w-3 h-3 bg-silver rounded-full absolute  z-10`}></div>
      <div className="polygone_line_style">
        <div className={`polygone_parent  ${classname}`}>
          <Polygon renderPoint={() => createRenderPoint(array)} />
        </div>
      </div>
      {/* // ) : (
            //     <>
            //     <p>لیستی برایه ترسیم خط یافت نشد!</p>
            //     <p>و یا نوع ورودی صحیح نمیباشد</p>
            //     </>
            // )} */}
    </div>
  );
}
