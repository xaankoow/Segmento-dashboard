import React, { useState } from "react";
import PageTitle from "../../DashboaedComponents/pageTitle/pageTitle";
import ChooseCategories from "./ChooseCategories";
import NewTicket from "./NewTicket";
export default function Support() {
  const [ticketPages, setTicketPages] = useState(2);
  const setPage = () => {
    switch (ticketPages) {
      case 1:
        return <ChooseCategories />;
      case 2:
        return <NewTicket />;
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
