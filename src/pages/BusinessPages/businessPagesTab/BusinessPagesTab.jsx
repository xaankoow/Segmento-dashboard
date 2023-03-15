import React from "react";
import Title from "./layout/Title";
import AddingPage from "./layout/AddingPage";
import FilterTableItem from './layout/FilterSection/FilterTableItem'
export default function BusinessPagesTab() {
  return (
    <div className="px-7">
      <div className="mt-7">
        <Title />
      </div>
      <div className=" mt-7">
        <AddingPage/>
      </div>
      <div className=" mt-10">
        <FilterTableItem/>
      </div>
    </div>
  );
}
