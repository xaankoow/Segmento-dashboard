import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ImageContainer } from "../../../../assets/img/IMG";
import {
  filterBoxDatas,
  titleOfReportSupportTable,
} from "../../../../variables/support";
import AuthButton from "../../../Auth/authButton/AuthButton";
import { getSupportChatData, ticketTableData } from "../../../service/ticket";
import ComboBox from "../../../shared/comboBox/ComboBox";
import GuideBox from "../../../shared/GuideBox/GuideBox";
import Table from "../../../shared/table/Table";
import { FindStatusTicket, FindTicketPartText, TicketStatusColor } from "../../../Utils/supportAndMessage/supportData";
import PageTitle from "../../DashboaedComponents/pageTitle/pageTitle";
import { FilterDataSupport } from "./changeData";

export default function ReportSupport() {
  const [searchFilterOption, setSearchFilterOption] = useState("بدون فیلتر");
  const { uuid } = useSelector((state) => state.ticketState);
  // api state to get tickets
  const [tickets, setTickets] = useState([]);
  const [ticketsFiltered, setTicketsFiltered] = useState([]);

  const loadingState = useSelector((state) => state.loadingState);

  const dispatch = useDispatch();

  const handleTickets = async () => {
    try {
      const { data } = await ticketTableData();
      if ((data.code == 200) & (data.status == true)) {
        console.log(data.data);
        setTickets(data.data);
      }
    } catch (error) {

    }
  };

  useEffect(() => {
    if (tickets.length <= 0) {
      handleTickets();
    }
  });

  const arrayOfTickets = (ticketsFiltered.length>0?ticketsFiltered:tickets).map((item, index) => {
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
            radioTextItems={filterBoxDatas}
            radioClickedHandler={(e) => setSearchFilterOption(e.target.value)}
          />
        </div>

        <div className="flex items-center gap-4 ">
          {searchFilterOption !== "بدون فیلتر" && (
            <span className="">مرتب سازی بر اساس</span>
          )}
          <FilterDataSupport radioTarget={searchFilterOption} />
        </div>
        <div className=" inline-block">
          <AuthButton textButton={"اعمال"} classes={"btn-secondary"} />
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
