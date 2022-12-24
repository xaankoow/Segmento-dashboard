import React, { useEffect, useState } from "react";
import Checkbox from "../../../Utils/Elements/CheckBox/Checkbox";
import KeyWordsSearch from "../KeyWordsSearch/KeyWordsSearch";
import bookmark_svg from '../../../../assets/img/dashboard/table/bookmark.svg'
import add_chart_svg from '../../../../assets/img/dashboard/table/add_chart.svg'
import Skeleton from "react-loading-skeleton";

export default function Table({
  data,
  headerButton,
  NothingSearch,
  WordsSearcher,
  contentsProduction,
  openModal,
  iskeyWord,
  searchBoxValue,
  savedItem,
  loading
}) {
  const [selectColumnTitle, setSelectColumnTitle] = useState("انتخاب");
  const [handleClickButton, setHandleClickButton] = useState(false);
  const [handleClickCopy, setHandleClickCopy] = useState(false);
  const [handleClickCopyIndex, SetHandleCopyIndex] = useState(false);
  const [copyItem, setCopyItem] = useState([]);
  // row of table

  const [activeRow, setActiveRow] = useState(0);
  const [activeCheckBox, setActiveCheckBox] = useState([]);
  const [isActive, setActive] = useState(false); // <-- set className name when checkbox is checking

  const handleCheckingInput = () => {
    ;

    if (copyItem.length > 0) {
      setSelectColumnTitle("کپی");
    } else {
      setSelectColumnTitle("انتخاب");
    }
  };

  // seperator adjusting
  let searchBox = searchBoxValue !== undefined ? searchBoxValue.length : savedItem ? savedItem.length : 0;
  const groupIt = (array) => {
    let resultObj = {};

    for (let i = 0; i < array.length; i++) {
      let currentWord = array[i].slice(searchBox).trim();
      let firstChar = currentWord[0].toLowerCase();
      let innerArr = [];
      if (resultObj[firstChar] === undefined) {
        innerArr.push(currentWord);
        resultObj[firstChar] = innerArr;
      } else {
        resultObj[firstChar].push(currentWord);
      }
    }
    return resultObj;
  };
  const seperator = groupIt(data);

  const a = Object.keys(seperator).map((item) => {
    return item;
  });


  const setSepetator = (data) => {
    const list = [];
    for (let i = 0; i < a.length; i++) {
      let lastLetter = "";
      for (let j = 0; j < data.length; j++) {
        let ch = data[j].slice(searchBox);
        let bo = ch.trim().slice(0, 1);
        if (lastLetter !== a[i]) {
          if (a[i] == bo) {
            lastLetter = a[i];
            list.push(data[j]);
          }
        }
      }
    }
    return list;
  };

  //keyWordSearch
  const [secoundSearchBoxValue, setSecoundSearchBoxValue] = useState("");
  //  filter from comboBox
  const [radioClickedHandler, setRadioClickedHandler] = useState("1");
  let comboboxFiltered = [];
  const radioButtonHandler = (e) => {
    setRadioClickedHandler(e.target.value);
  };
  if (radioClickedHandler === "1") {
    comboboxFiltered = data.filter((item) => {
      return item;
    });
  } else if (radioClickedHandler === "2" && secoundSearchBoxValue) {
    comboboxFiltered = data.filter((item) => {
      return item.includes(secoundSearchBoxValue);
    });
  } else if (radioClickedHandler === "3" && secoundSearchBoxValue) {
    comboboxFiltered = data.filter((item) => {
      return item == secoundSearchBoxValue;
    });
  } else if (radioClickedHandler === "4" && secoundSearchBoxValue) {
    comboboxFiltered = data.filter((item) => {
      return !item.includes(secoundSearchBoxValue);
    });
  } else {
    comboboxFiltered = data.filter((item) => {
      return item;
    });
  }
  const secoundSearchBoxChangeHandler = (e) => {
    setSecoundSearchBoxValue(e.target.value);
  };
  var filteredDatas = [];
  if (comboboxFiltered) {
    filteredDatas = comboboxFiltered;
  } else filteredDatas = data;
  // copy all items in to clipboard in different line
  function createListOutput() {
    var myListOutput = "";
    if (comboboxFiltered) {
      for (var i = 0; i < comboboxFiltered.length; i++) {
        //check if list is NOT the last in the array, if last don't output a line break
        if (i != comboboxFiltered.length - 1) {
          let lineItem = comboboxFiltered[i] + "\n";
          myListOutput = myListOutput + lineItem;
        } else {
          let lineItem = comboboxFiltered[i];
          myListOutput = myListOutput + lineItem;
        }
      }
    } else {
      for (var i = 0; i < data.length; i++) {
        //check if list is NOT the last in the array, if last don't output a line break
        if (i != data.length - 1) {
          let lineItem = data[i] + "\n";
          myListOutput = myListOutput + lineItem;
        } else {
          let lineItem = data[i];
          myListOutput = myListOutput + lineItem;
        }
      }
    }
    return myListOutput;
  }
  function customCopy() {
    var myListOutput = "";
    for (var i = 0; i < copyItem.length; i++) {
      //check if list is NOT the last in the array, if last don't output a line break
      if (i != copyItem.length - 1) {
        let lineItem = copyItem[i] + "\n";
        myListOutput = myListOutput + lineItem;
      } else {
        let lineItem = copyItem[i];
        myListOutput = myListOutput + lineItem;
      }
    }
    return myListOutput;
  }
  const HandleCheckBoxClick = (e, item) => {
    if (e.target.checked) {
      setCopyItem([...copyItem, item]);
    } else {
      setCopyItem(copyItem.filter((copyItems) => copyItems != item));
    }

    handleCheckingInput(e.target.checked, item);
  };
  const seperatorList = setSepetator(filteredDatas);
  let indexSeprator = 0;

  return (
    <div
      className=" flex grow flex-col border border-[#D9D9D9] p-0 "
      id="TABLE"
    >
      {false ?
        <div className="min-w-full">
          <div className="flex items-center justify-between bg-[#FCFCFB] w-full px-2">
            <div className="flex gap-4 items-center ">
              <div
                className={`text-sm font-medium text-gray-900  relative text-right ${copyItem.length > 0
                  ? "text-[#0A65CD] btn-secondary m-auto cursor-pointer"
                  : "text-[#D9D9D9]"
                  }`}

              >
                <span
                  className={
                    (copyItem.length > 0) & handleClickCopy
                      ? "flex tooltip tooltipTop absolute -right-[10%] rounded bg-[#ffffff] -top-11"
                      : " hidden "
                  }
                >
                  کپی شد!
                </span>
                {copyItem.length > 0 ? "کپی" : "انتخاب"}
              </div>
              <div
                className={
                  NothingSearch
                    ? "text-[#D9D9D9] text-sm font-medium pr-2 text-right"
                    : "text-sm font-medium text-gray-900 pr-2  text-right"
                }
              >
                ردیف
              </div>
              <div
                className={
                  NothingSearch
                    ? "text-[#D9D9D9] text-sm font-medium pr-2 text-right"
                    : "text-sm font-medium text-gray-900 pr-2  text-right"
                }
              >
                {iskeyWord ? "کلمه کلیدی" : " ایده‌های پیشنهادی"}
              </div>
            </div>
            <div className="flex gap-4 items-center">
              {headerButton && (
                <div className="text-sm font-medium text-gray-900 pr-2 py-4 text-right">
                  <button
                    disabled={NothingSearch ? true : false}
                    className={
                      NothingSearch
                        ? "copyAllButtondisabled rounded-[9px] py-[8px] px-5 text-[#ffffff] bg-secondary flex items-center btn-style"
                        : "btn-style"
                    }
                    onClick={() => openModal()}
                  >
                    <img
                      src={bookmark_svg}
                      alt="bookmark"
                      className={"ml-3"}
                    />{" "}
                    ذخیره پیشنهادات
                  </button>
                </div>
              )}
              {WordsSearcher && (
                <div className="w-[334px]">
                  <KeyWordsSearch
                    dataItems={comboboxFiltered}
                    secoundSearch={secoundSearchBoxChangeHandler}
                    radioClickedHandler={radioButtonHandler}
                  />
                </div>
              )}
              <div className="text-sm font-medium text-gray-900 pr-2 py-4 text-right relative">
                <span
                  className={
                    handleClickButton
                      ? "flex tooltip tooltipTop absolute  rounded bg-[#ffffff] -top-10 right-11"
                      : "-top-[29px] tooltip tooltipTop left-[70%] hidden absolute  rounded bg-[#ffffff]"
                  }
                >
                  کپی شد!
                </span>
                <button
                  className={
                    isActive
                      ? "copyAllButton rounded-[9px] py-[8px] px-5 text-[#ffffff] bg-primary flex items-center w-[128px] transition-all"
                      : NothingSearch
                        ? "copyAllButtondisabled rounded-[9px] py-[8px] px-5 text-[#ffffff] bg-secondary flex items-center w-[128px]  transition-all"
                        : "copyAllButton rounded-[9px] py-[8px] px-5 text-[#488CDA] bg-secondary flex items-center hover:bg-primary w-[128px] hover:text-[#ffffff]  transition-all"
                  }
                  disabled={NothingSearch ? true : false}
                  onClick={() => {
                    setHandleClickButton(true);
                    navigator.clipboard.writeText(createListOutput());
                    setTimeout(() => {
                      setHandleClickButton(false);
                    }, 1000);
                  }}
                >
                  <div className="imageIcon ml-3 w-5 h-5"></div>کپی همه{" "}
                </button>
              </div>
            </div>
          </div>
          {NothingSearch ? (
            <div className="w-full flex flex-col items-center justify-center gap-3 min-h-[401px]">
              <img
                src={add_chart_svg}
                alt="imgNothingSearch"
              />
              <span className="text-[#E5E5E5]">
                اطلاعاتی برای نمایش وجود ندارد!
              </span>
            </div>
          ) : (
            <div
              className="bg-[#fff] text-right w-full overflow-y-scroll max-h-[450px] "
              id="table"
            >
              {filteredDatas.map((item, index) => {
                if (seperatorList[indexSeprator] == item) {
                  indexSeprator = indexSeprator + 1;
                }

                return (
                  <>
                    {seperatorList[indexSeprator - 1] == item &&
                      !contentsProduction ? (
                      <div className="flex items-center justify-center m-2">
                        <div className="bg-gray w-[55px] h-[20px] text-center flex items-center justify-center text-[#ffffff] rounded">
                          {a[indexSeprator - 1]}
                        </div>
                        <div className="w-full h-[1px] bg-gray rounded"></div>
                      </div>
                    ) : null}

                    <div
                      key={index}
                      className={
                        index < data.length - 1
                          ? "tableRow relative border-b border-[#D9D9D9] flex gap-5 mx-2 items-center"
                          : "tableRow relative border-0 flex gap-5 mx-2 items-center"
                      }
                    >
                      <div className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900 ">
                        {/* <Checkbox handleClick={(e)=>HandleCheckBoxClick(e,item)} /> */}
                        <input
                          type={"checkbox"}
                          className="checkbox rounded border border-[#D9D9D9] bg-[#0A65CD] w-[18px] h-[18px] cursor-pointer hover:border-[#0A65CD] hover:border"
                          onClick={(e) => {
                            if (e.target.checked) {
                              setCopyItem([...copyItem, item]);
                            } else {
                              setCopyItem(
                                copyItem.filter((copyItems) => copyItems != item)
                              );
                            }

                            handleCheckingInput(e.target.checked, item);
                          }}
                        />
                      </div>
                      <div className="text-sm text-gray-900 font-light pr-[18px] py-4 whitespace-nowrap">
                        {index + 1}
                      </div>
                      <div className="text-sm text-gray-900 font-light px-5 py-4 whitespace-nowrap">
                        {item}
                      </div>
                      {activeRow === index ? (
                        <span
                          className={
                            handleClickCopyIndex
                              ? "flex tooltip tooltip-right absolute left-[100px] rounded bg-[#ffffff] "
                              : "tooltip tooltip-right  hidden absolute   rounded bg-[#ffffff]"
                          }
                        >
                          کپی شد!
                        </span>
                      ) : null}
                      <div
                        className=" absolute left-[14px] content_copy_blue w-4 h-5 "
                        onClick={() => {
                          SetHandleCopyIndex(true);
                          navigator.clipboard.writeText(item);
                          setActiveRow(index);
                          setTimeout(() => {
                            SetHandleCopyIndex(false);
                          }, 500);
                        }}
                      ></div>
                    </div>
                  </>
                );
              })}
            </div>
          )}
        </div>
        :
        <div className="min-w-full">
          <div className="flex items-center justify-between bg-[#FCFCFB] w-full px-2">
            <div className="flex gap-4 items-center ">
              <div
                className={`text-sm font-medium text-gray-900  relative text-right ${copyItem.length > 0
                  ? "text-[#0A65CD] btn-secondary m-auto cursor-pointer"
                  : "text-[#D9D9D9]"
                  }`}
                onClick={() => {
                  navigator.clipboard.writeText(customCopy());
                  setHandleClickCopy(true);
                  setTimeout(() => {
                    setHandleClickCopy(false);
                  }, 500);
                }}
              >
                <span
                  className={
                    (copyItem.length > 0) & handleClickCopy
                      ? "flex tooltip tooltipTop absolute -right-[10%] rounded bg-[#ffffff] -top-11"
                      : " hidden "
                  }
                >
                  کپی شد!
                </span>
                {copyItem.length > 0 ? "کپی" : "انتخاب"}
              </div>
              <div
                className={
                  NothingSearch
                    ? "text-[#D9D9D9] text-sm font-medium pr-2 text-right"
                    : "text-sm font-medium text-gray-900 pr-2  text-right"
                }
              >
                ردیف
              </div>
              <div
                className={
                  NothingSearch
                    ? "text-[#D9D9D9] text-sm font-medium pr-2 text-right"
                    : "text-sm font-medium text-gray-900 pr-2  text-right"
                }
              >
                {iskeyWord ? "کلمه کلیدی" : " ایده‌های پیشنهادی"}
              </div>
            </div>
            <div className="flex gap-4 items-center">
              {headerButton && (
                <div className="text-sm font-medium text-gray-900 pr-2 py-4 text-right">
                  <button
                    disabled={NothingSearch ? true : false}
                    className={
                      NothingSearch
                        ? "copyAllButtondisabled rounded-[9px] py-[8px] px-5 text-[#ffffff] bg-secondary flex items-center btn-style"
                        : "btn-style"
                    }
                    onClick={() => openModal()}
                  >
                    <img
                      src={bookmark_svg}
                      alt="bookmark"
                      className={"ml-3"}
                    />{" "}
                    ذخیره پیشنهادات
                  </button>
                </div>
              )}
              {WordsSearcher && (
                <div className="w-[334px]">
                  <KeyWordsSearch
                    dataItems={comboboxFiltered}
                    secoundSearch={secoundSearchBoxChangeHandler}
                    radioClickedHandler={radioButtonHandler}
                  />
                </div>
              )}
              <div className="text-sm font-medium text-gray-900 pr-2 py-4 text-right relative">
                <span
                  className={
                    handleClickButton
                      ? "flex tooltip tooltipTop absolute  rounded bg-[#ffffff] -top-10 right-11"
                      : "-top-[29px] tooltip tooltipTop left-[70%] hidden absolute  rounded bg-[#ffffff]"
                  }
                >
                  کپی شد!
                </span>
                <button
                  className={
                    isActive
                      ? "copyAllButton rounded-[9px] py-[8px] px-5 text-[#ffffff] bg-primary flex items-center w-[128px] transition-all"
                      : NothingSearch
                        ? "copyAllButtondisabled rounded-[9px] py-[8px] px-5 text-[#ffffff] bg-secondary flex items-center w-[128px]  transition-all"
                        : "copyAllButton rounded-[9px] py-[8px] px-5 text-[#488CDA] bg-secondary flex items-center hover:bg-primary w-[128px] hover:text-[#ffffff]  transition-all"
                  }
                  disabled={NothingSearch ? true : false}
                  onClick={() => {
                    setHandleClickButton(true);
                    navigator.clipboard.writeText(createListOutput());
                    setTimeout(() => {
                      setHandleClickButton(false);
                    }, 1000);
                  }}
                >
                  <div className="imageIcon ml-3 w-5 h-5"></div>کپی همه{" "}
                </button>
              </div>
            </div>
          </div>


          {NothingSearch ? (
            <div className="w-full flex flex-col items-center justify-center gap-3 min-h-[401px]">
              <img
                src={add_chart_svg}
                alt="imgNothingSearch"
              />
              <span className="text-[#E5E5E5]">
                اطلاعاتی برای نمایش وجود ندارد!
              </span>
            </div>
          ) :

            <>
              {loading ?
                <div
                  className="bg-[#fff] text-right w-full overflow-y-scroll max-h-[450px] "
                  id="table"
                >
                  <>
                    <div className="flex items-center justify-center m-2">
                      <div className="bg-gray w-[55px] h-[20px] text-center flex items-center justify-center text-[#ffffff] rounded">
                        <Skeleton width={20} height={13} />
                      </div>
                      <div className="w-full h-[1px] bg-gray rounded"></div>
                    </div>
                    <div
                      className={"tableRow relative border-b border-[#D9D9D9] flex gap-5 mx-2 items-center"}
                    >
                      <div className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900 ">
                        <input
                          type={"checkbox"}
                          className="checkbox rounded border border-[#D9D9D9] bg-[#0A65CD] w-[18px] h-[18px] cursor-pointer hover:border-[#0A65CD] hover:border"
                        />
                      </div>
                      <div className="text-sm text-gray-900 font-light pr-[10px] py-4 whitespace-nowrap">
                        <Skeleton width={30} />
                      </div>
                      <div className="text-sm text-gray-900 font-light px-5 py-4 whitespace-nowrap">
                        <Skeleton width={100} />
                      </div>
                      <div
                        className=" absolute left-[14px] content_copy_blue w-4 h-5 "
                      >
                      </div>
                    </div>
                  </>
                  <>
                    <div className="flex items-center justify-center m-2">
                      <div className="bg-gray w-[55px] h-[20px] text-center flex items-center justify-center text-[#ffffff] rounded">
                        <Skeleton width={20} height={13} />
                      </div>
                      <div className="w-full h-[1px] bg-gray rounded"></div>
                    </div>
                    <div
                      className={"tableRow relative border-b border-[#D9D9D9] flex gap-5 mx-2 items-center"}
                    >
                      <div className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900 ">
                        <input
                          type={"checkbox"}
                          className="checkbox rounded border border-[#D9D9D9] bg-[#0A65CD] w-[18px] h-[18px] cursor-pointer hover:border-[#0A65CD] hover:border"
                        />
                      </div>
                      <div className="text-sm text-gray-900 font-light pr-[10px] py-4 whitespace-nowrap">
                        <Skeleton width={30} />
                      </div>
                      <div className="text-sm text-gray-900 font-light px-5 py-4 whitespace-nowrap">
                        <Skeleton width={100} />
                      </div>
                      <div
                        className=" absolute left-[14px] content_copy_blue w-4 h-5 "
                      >
                      </div>
                    </div>
                  </>
                  <>
                    <div className="flex items-center justify-center m-2">
                      <div className="bg-gray w-[55px] h-[20px] text-center flex items-center justify-center text-[#ffffff] rounded">
                        <Skeleton width={20} height={13} />
                      </div>
                      <div className="w-full h-[1px] bg-gray rounded"></div>
                    </div>
                    <div
                      className={"tableRow relative border-b border-[#D9D9D9] flex gap-5 mx-2 items-center"}
                    >
                      <div className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900 ">
                        <input
                          type={"checkbox"}
                          className="checkbox rounded border border-[#D9D9D9] bg-[#0A65CD] w-[18px] h-[18px] cursor-pointer hover:border-[#0A65CD] hover:border"
                        />
                      </div>
                      <div className="text-sm text-gray-900 font-light pr-[10px] py-4 whitespace-nowrap">
                        <Skeleton width={30} />
                      </div>
                      <div className="text-sm text-gray-900 font-light px-5 py-4 whitespace-nowrap">
                        <Skeleton width={100} />
                      </div>
                      <div
                        className=" absolute left-[14px] content_copy_blue w-4 h-5 "
                      >
                      </div>
                    </div>
                  </>
                </div>
                :
                <div
                  className="bg-[#fff] text-right w-full overflow-y-scroll max-h-[450px] "
                  id="table"
                >
                  {filteredDatas.map((item, index) => {
                    if (seperatorList[indexSeprator] == item) {
                      indexSeprator = indexSeprator + 1;
                    }
                    return (
                      <>
                        {seperatorList[indexSeprator - 1] == item &&
                          !contentsProduction ? (
                          <div className="flex items-center justify-center m-2">
                            <div className="bg-gray w-[55px] h-[20px] text-center flex items-center justify-center text-[#ffffff] rounded">
                              {a[indexSeprator - 1]}
                            </div>
                            <div className="w-full h-[1px] bg-gray rounded"></div>
                          </div>
                        ) : null}

                        <div
                          key={index}
                          className={
                            index < data.length - 1
                              ? "tableRow relative border-b border-[#D9D9D9] flex gap-5 mx-2 items-center"
                              : "tableRow relative border-0 flex gap-5 mx-2 items-center"
                          }
                        >
                          <div className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900 ">
                            <input
                              type={"checkbox"}
                              className="checkbox rounded border border-[#D9D9D9] bg-[#0A65CD] w-[18px] h-[18px] cursor-pointer hover:border-[#0A65CD] hover:border"
                              onClick={(e) => {
                                if (e.target.checked) {
                                  setCopyItem([...copyItem, item]);
                                } else {
                                  setCopyItem(
                                    copyItem.filter((copyItems) => copyItems != item)
                                  );
                                }

                                handleCheckingInput(e.target.checked, item);
                              }}
                            />
                          </div>
                          <div className="text-sm text-gray-900 font-light pr-[18px] py-4 whitespace-nowrap">
                            {index + 1}
                          </div>
                          <div className="text-sm text-gray-900 font-light px-5 py-4 whitespace-nowrap">
                            {item}
                          </div>
                          {activeRow === index ? (
                            <span
                              className={
                                handleClickCopyIndex
                                  ? "flex tooltip tooltip-right absolute left-[100px] rounded bg-[#ffffff] "
                                  : "tooltip tooltip-right  hidden absolute   rounded bg-[#ffffff]"
                              }
                            >
                              کپی شد!
                            </span>
                          ) : null}
                          <div
                            className=" absolute left-[14px] content_copy_blue w-4 h-5 "
                            onClick={() => {
                              SetHandleCopyIndex(true);
                              navigator.clipboard.writeText(item);
                              setActiveRow(index);
                              setTimeout(() => {
                                SetHandleCopyIndex(false);
                              }, 500);
                            }}
                          ></div>
                        </div>
                      </>
                    );
                  })}
                </div>}
            </>
          }
        </div>
      }

    </div>
  );
}
