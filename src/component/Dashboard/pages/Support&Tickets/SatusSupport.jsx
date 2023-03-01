import React, { useEffect } from "react";
import { useState } from "react";
import { DateObject } from "react-multi-date-picker";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ImageContainer } from "../../../../assets/img/IMG";
import {
  filterBoxDatas,
  titleOfReportSupportTable,
} from "../../../../variables/support";
import AuthButton from "../../../Auth/authButton/AuthButton";
import { InitTicketsData } from "../../../Redux/Action/ticket";
import ComboBox from "../../../shared/comboBox/ComboBox";
import GuideBox from "../../../shared/GuideBox/GuideBox";
import Table from "../../../shared/table/Table";
import { filterSupportData } from "../../../Utils/FilterData/filterSupportTableData";
import { FindStatusTicket, FindTicketPartText, TicketStatusColor } from "../../../Utils/supportAndMessage/supportData";
import PageTitle from "../../DashboaedComponents/pageTitle/pageTitle";
import { FilterDataSupport } from "./changeData";

export default function ReportSupport() {

  // 
  const { allTicketsData } = useSelector(state => state.ticketState);

  const [searchFilterOption, setSearchFilterOption] = useState("بدون فیلتر");
  const [searchFilterValue, setSearchFilterValue] = useState("");

  // api state to get tickets
  const [ticketsFiltered, setTicketsFiltered] = useState([]);

  const [datePickerValues, setDatePickerValues] = useState([
    new DateObject().subtract(4, "days"),
    new DateObject().add(0, "days"),
  ]);

  const dispatch = useDispatch()

  const axiosController = new AbortController();

  useEffect(() => {
    dispatch(InitTicketsData({ axiosController }))
    return () => {
      axiosController.abort();
    }
  },[]);

  useEffect(() => {
    setTicketsFiltered(allTicketsData)
  }, [allTicketsData])
  

  const filterTableData = () => {
    setTicketsFiltered(
      filterSupportData(
        allTicketsData,
        searchFilterOption,
        searchFilterValue
      )
    )
  }

  const arrayOfTickets = ticketsFiltered.map((item, index) => {
    return {
      id: index + 1,
      ticket_id: item.ticket_id,
      title: item.subject,
      categories: FindTicketPartText(item.part),
      updated_at: ("(" + item.updated_at.slice(0, 5) + ")  " + item.updated_at.slice(8, 18)),
      status: (
        <div className={` bg-${TicketStatusColor(item.status)} w-[85px] h-7 text-white rounded-3xl flex justify-center items-center mx-auto`}>
          {FindStatusTicket(item.status)}{" "}
        </div>
      ),
      operation: (
        <Link to={`ticket/${item.uuid}`}>
          {" "}
          <div className="w-16 h-10 rounded-lg btn-secondary flex justify-center items-center">
            <img src={ImageContainer.visibility} alt="" />
          </div>
        </Link>
      ),
    };
  });

  const rowKey = [
    "row.id ",
    "row.ticket_id",
    "row.title",
    "row.categories",
    "row.updated_at",
    "row.status",
    "row.operation",
  ];

  return (
    <>
      <PageTitle title={"پشتیبانی و تیکت ها (تیکت جدید) "} />
      <GuideBox
        classname={"mt-7 mx-9"}
        text={
          "تمامِ تیکت‌هایی که برای واحد امور پشتیبانی سگمنتو ارسال کرده‌اید، در این صفحه لیست شده‌اند:"
        }
        buttonName={"ارسال تیکت جدید"}
        linkTo={""}
      />
      <div className="flex mx-9 justify-between my-5">
        <div className="min-w-[420px]">
          <ComboBox
            placeholder={"فیلد جستجو"}
            radioTextItems={filterBoxDatas.map(item => { return item.filterName })}

            radioClickedHandler={(e) => setSearchFilterOption(e)}
          />
        </div>

        <div className="flex items-center gap-4 ">
          {searchFilterOption !== "بدون فیلتر" && (
            <span className="">مرتب سازی بر اساس</span>
          )}
          <FilterDataSupport
            radioTarget={searchFilterOption}
            datePickerValues={datePickerValues}
            FactorHandler={setSearchFilterValue}
            setDatePickerValues={setDatePickerValues} />
        </div>
        <div className=" inline-block">
          <AuthButton textButton={"اعمال"} classes={"btn-secondary"} handlerClick={filterTableData} />
        </div>
      </div>

      <Table
        columnItem={titleOfReportSupportTable}
        rowsItem={arrayOfTickets}
        rowKey={rowKey}
        classname={"px-9"}
      />
    </>
  );
}
