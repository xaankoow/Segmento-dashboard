import React, { useState } from "react";
import PageTitle from "../../DashboaedComponents/pageTitle/pageTitle";
import ChooseCategories from "./ChooseCategories";
export default function Support() {
  const [ticketPages, setTicketPages] = useState(1);
  const setPage = () => {
    switch (ticketPages) {
      case 1:
       return <ChooseCategories/>

      default:
        break;
    }
  };
  return (
    <>
      <PageTitle title={"پشتیبانی و تیکت ها (تیکت جدید) "} />
      {setPage()}
    </>
  );
}
