import React, { useState } from "react";
import PageTitle from "../../DashboaedComponents/pageTitle/pageTitle";
import ChooseCategories from "./ChooseCategories";
import NewTicket from "./NewTicket";
export default function Support() {
  const [ticketPages, setTicketPages] = useState(1);
  const [clickedItem, setClicked] = useState(-1);
  const [categoriValue, setCategoriValue] = useState("");
  const setPage = () => {
    switch (ticketPages) {
      case 1:
        return <ChooseCategories link={setTicketPages} clickedItem={clickedItem} setClicked={setClicked} setCategoriValue={setCategoriValue}/>;
      case 2:
        return <NewTicket categories={categoriValue} />;
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
