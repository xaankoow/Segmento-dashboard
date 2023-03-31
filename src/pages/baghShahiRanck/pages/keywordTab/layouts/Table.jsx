import moment from "jalali-moment";
import React, { useEffect, useState } from "react";
import KeywordItem from "./keywordItem";

//==== IMAGEs
import { toast } from "react-toastify";
import BookmarkIcon from "../../../../../assets/img/ico/bookmark.svg";
import CopyIcon from "../../../../../assets/img/ico/copy.svg";
import DeleteIcon from "../../../../../assets/img/ico/delete.svg";
import TagIcon from "../../../../../assets/img/ico/tag.svg";

const defaultRowClass = `px-6 py-4 text-xs font-normal text-center text-gray-500`;

const KeywordTable = ({
  data,
  setSelected,
  handleDeleteRow,
  handleShowTagModal,
  loading,
  selected,
}) => {
  const [tableHead, setTableHead] = useState([
    { title: "نمودار", minWidth: 40 },
    { title: "ردیف", minWidth: 40 },
    { title: "کلمه کلیدی", minWidth: 100 },
    { title: "رتبه فعلی", minWidth: 95 },
    { title: "عدد افت و رشد", minWidth: 150 },
    { title: "تاریخ افزودن", minWidth: 120 },
    { title: "آخرین بروزرسانی", minWidth: 160 },
    { title: "میانگین 7 دوره", minWidth: 155 },
    { title: "برچسب", minWidth: 60 },
  ]);
  const [max, setMax] = useState([]);

  useEffect(() => {
    if (typeof data !== "undefined" && data.length) {
      addCompetitorsToHead(data);
    }
  }, [data]);

  function addCompetitorsToHead(data) {
    let max = 0;
    let needMergedata = [];
    data.forEach((item) => {
      if (item.extra_attributes.competitors.length > max) {
        max = item.extra_attributes.competitors.length;
      }
    });
    setMax([...Array(max).keys()]);

    while (max > 0) {
      needMergedata.push({ title: `سایت رقیب ${max}`, minWidth: 190 });
      max--;
    }
    needMergedata.reverse();
    setTableHead((prev) => [...prev, ...needMergedata]);
  }

  function handleCopyRow(row = {}) {
    let strArr = [];
    strArr.push(`کلمه کلیدی : ${row.key}`);
    strArr.push(
      `آخرین بروزرسانی : ${moment(row.extra_attributes.last_check_at).format(
        "jYYYY/jM/jD HH:mm:ss"
      )}`
    );
    if (
      !!row.extra_attributes.competitors &&
      !!row.extra_attributes.competitors.length
    ) {
      strArr.push(`رقبا : ${row.key}`);

      row.extra_attributes.competitors.forEach((item) => strArr.push(item));
    }
    let str = strArr.join(" و ");
    navigator.clipboard.writeText(str);
    toast("با موفقیت کپی شد.", { icon: true, type: "success" });
  }

  function handleSelect(row) {
    console.log("ROW : ", row);
    console.log("SELECTED : ", selected);
    let finded = selected.find((item) => item.uuid === row.uuid);
    if (typeof finded === "undefined") {
      setSelected((prev) => [...prev, row]);
    }
  }

  return (
    <div class="w-full flex justify-center mx-auto">
      <div class="flex flex-col w-full">
        <div class="w-full min-h-[220px] ">
          <div class=" rounded-lg keyword-table-container overflow-scroll relative scroll-bar-table">
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
                        <th
                          class={`px-4 py-3 text-sm font-normal min-w-[${item.minWidth}px]`}
                        >
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
                {!loading ? (
                  data &&
                  !!data.length &&
                  data.map((row, index) => {
                    return (
                      <tr
                        class={`whitespace-nowrap w-fits ${
                          !!selected.length &&
                          selected.some((item) => item.uuid === row.uuid)
                            ? "text-[#2563eb]"
                            : ""
                        }`}
                      >
                        {/* نمودار */}
                        <td className={defaultRowClass}>
                          <div
                            className={`chart-icon  ${
                              !!selected.length &&
                              selected.some((item) => item.uuid === row.uuid)
                                ? "need-blue"
                                : ""
                            }`}
                            onClick={() => handleSelect(row)}
                          />
                        </td>

                        {/* ردیف */}
                        <td className={defaultRowClass}>{index + 1}</td>

                        {/* کلمه کلیدی */}
                        <KeywordItem row={row} selected={selected} />

                        {/* رتبه فعلی */}
                        <td className={defaultRowClass}>
                          {!!row.position ? row.position : "0"}
                        </td>

                        {/* عدد افت و رشد	*/}
                        <td className={defaultRowClass}>
                          <div style={{ minWidth: "100px" }} />
                        </td>

                        {/* تاریخ افزودن */}
                        <td className={defaultRowClass + " text-left"}>
                          {row.extra_attributes.create_at
                            ? moment(row.extra_attributes.create_at).format(
                                "HH:mm:ss jYYYY/jM/jD"
                              )
                            : "undefined"}
                        </td>

                        {/* آخرین بروزرسانی	*/}
                        <td className={defaultRowClass + " text-left"}>
                          {moment(row.extra_attributes.last_check_at).format(
                            "HH:mm:ss jYYYY/jM/jD"
                          )}
                        </td>

                        {/*میانگین 7 دوره	*/}
                        <td className={defaultRowClass}>{""}</td>

                        {/*برچسب  */}
                        <td className={defaultRowClass}>
                          {row.extra_attributes.note && (
                            <div className="note-label">
                              <span>{row.extra_attributes.note}</span>
                              <span className="close-button">×</span>
                            </div>
                          )}
                        </td>

                        {/* رقبا */}
                        {!!row.extra_attributes.competitors.length
                          ? max.map((item, i) => (
                              <td key={item} className={defaultRowClass}>
                                {!!row.extra_attributes.competitors[item] ? (
                                  <a
                                    href={`https://${row.extra_attributes.competitors[item].url}`}
                                    target="_blank"
                                    rel="noreferrer"
                                    style={{ color: "blue" }}
                                  >
                                    {row.extra_attributes.competitors[item].url}
                                  </a>
                                ) : (
                                  <span>-</span>
                                )}
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
                            className="cursor-pointer hover:scale-105"
                            onClick={() => handleShowTagModal(row)}
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
                            className="cursor-pointer hover:scale-105"
                            onClick={() => handleCopyRow(row)}
                          />
                        </td>
                      </tr>
                    );
                  })
                ) : (
                  <div className="w-full h-[250px] flex items-center justify-center">
                    <h3
                      style={{
                        transform: "translateX(-31vw)",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {" "}
                      درحال بارگذاری ...
                    </h3>
                  </div>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeywordTable;
