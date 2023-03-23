import React, { useState, useEffect } from "react";
import { KEYWORD_TABEL_HEADER_ITEM_REPORTS_TAB } from "../../../../../variables/businessPages";
import moment from "jalali-moment";
import ToolTip from "../../../../../component/Utils/ToolTip";
import KeywordItem from "./keywordItem";

//==== IMAGEs
import BookmarkIcon from "../../../../../assets/img/ico/bookmark.svg";
import CopyIcon from "../../../../../assets/img/ico/copy.svg";
import DeleteIcon from "../../../../../assets/img/ico/delete.svg";
import TagIcon from "../../../../../assets/img/ico/tag.svg";

const defaultRowClass = `px-6 py-4 text-xs font-normal text-center text-gray-500`;

const KeywordTable = ({ data, selectToShow, handleDeleteRow }) => {
  const [tableHead, setTableHead] = useState([
    { title: "نمودار" },
    { title: "ردیف" },
    { title: "کلمه کلیدی" },
    { title: "رتبه فعلی" },
    { title: "عدد افت و رشد" },
    { title: "آخرین بروزرسانی" },
    { title: "میانگین 7 دوره" },
    { title: "برچسب" },
    { title: "تاریخ افزودن" },
  ]);

  useEffect(() => {
    if (typeof data !== "undefined" && data.length) {
      addCompetitorsToHead(data);
    }
  }, [data]);

  function addCompetitorsToHead(data) {
    let max = 0;
    let needMergedata = [];
    data.forEach((item) => {
      if (item.competitors.length > max) {
        max = item.competitors.length;
      }
    });
    console.log("max : ", max);

    while (max > 0) {
      console.log("MAX MAX : ", max);
      needMergedata.push({ title: `سایت رقیب ${max}` });
      max--;
    }
    needMergedata.reverse();
    setTableHead((prev) => [...prev, ...needMergedata]);
  }

  return (
    <div class="w-full flex justify-center mx-auto">
      <div class="flex flex-col w-full">
        <div class="w-full min-h-[300px]">
          <div class=" rounded-lg keyword-table-container overflow-scroll relative">
            <table class="rounded p-0 m-0">
              <thead>
                <tr
                  className="rounded"
                  style={{ backgroundColor: "#FCFCFB", borderRadius: "5px" }}
                >
                  {tableHead &&
                    !!tableHead.length &&
                    tableHead.map((item) => {
                      return (
                        <th class={`px-4 py-3 text-sm font-normal`}>
                          <span>{item.title}</span>
                        </th>
                      );
                    })}

                  <th
                    class={`px-4 py-3 text-sm font-normal last-col sticky-col`}
                  >
                    <span>عملیات</span>
                  </th>
                </tr>
              </thead>

              <tbody class="bg-black">
                {data &&
                  !!data.length &&
                  data.map((row, index) => {
                    return (
                      <tr class="whitespace-nowrap w-fits">
                        {/* نمودار */}
                        <td className={defaultRowClass}>
                          <div
                            className="chart-icon"
                            onClick={() => selectToShow(row.uuid)}
                          />
                        </td>

                        {/* ردیف */}
                        <td className={defaultRowClass}>{index + 1}</td>

                        {/* کلمه کلیدی */}
                        <KeywordItem row={row} />

                        {/* رتبه فعلی */}
                        <td className={defaultRowClass}>
                          {!!row.position ? row.position : "0"}
                        </td>

                        {/* عدد افت و رشد	*/}
                        <td className={defaultRowClass}>{""}</td>

                        {/* آخرین بروزرسانی	*/}
                        <td className={defaultRowClass}>
                          {moment(row.extra_attributes.last_check_at).format(
                            "jYYYY/jM/jD HH:mm:ss"
                          )}
                        </td>

                        {/*میانگین 7 دوره	*/}
                        <td className={defaultRowClass}>{""}</td>

                        {/*برچسب  */}
                        <td className={defaultRowClass}>{""}</td>

                        {/* تاریخ افزودن */}
                        <td className={defaultRowClass}>{""}</td>

                        {/* رقبا */}
                        {!!row.competitors.length
                          ? row.competitors.map((item) => (
                              <td key={item} className={defaultRowClass}>
                                <a
                                  href={`https://${item.url}`}
                                  target="_blank"
                                  rel="noreferrer"
                                  style={{ color: "blue" }}
                                >
                                  {item.url}
                                </a>
                              </td>
                            ))
                          : null}

                        {/* عملیات */}
                        <td
                          className={
                            defaultRowClass +
                            " flex items-center gap-2 last-col sticky-col"
                          }
                        >
                          <img
                            src={BookmarkIcon}
                            alt="bookmark Icon"
                            height={15}
                            className="cursor-default opacity-50"
                          />

                          <img
                            src={TagIcon}
                            alt="tag Icon"
                            height={15}
                            className="cursor-pointer"
                          />

                          <img
                            src={DeleteIcon}
                            alt="delete Icon"
                            height={15}
                            className="cursor-pointer hover:scale-105"
                            onClick={() => handleDeleteRow(row, true)}
                          />

                          <img
                            src={CopyIcon}
                            alt="copy Icon"
                            height={15}
                            className="cursor-pointer"
                          />
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeywordTable;
