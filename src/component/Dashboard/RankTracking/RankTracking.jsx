import React, { Fragment, useEffect, useState } from "react";
import './rankTracking.css';

import { useDispatch, useSelector } from "react-redux";
import {
  handleLowOffLimitCount,
  resetLimitState,
} from "../../Redux/Action/workSpace";
import { ContentProductionService } from "../../service/contentProduction";
import PopUp from "../../Utils/PopUp/PopUp";
import SearchBox from "../DashboaedComponents/SearchBox/SearchBox";
import Table from "../DashboaedComponents/TableData/TableData";
// import SaveListModal from "./SaveListModal";
import cached_svg from "../../../assets/img/dashboard/table/cached.svg";
import update_svg from "../../../assets/img/popUp/update.svg";
import playlist_add_svg from "../../../assets/img/popUp/playlist_add.svg";
import PopUpLimit from "../../Utils/Limit/PopUpLimit";
import AuthButton from "../../Auth/authButton/AuthButton";

export default function RankTracking({ onClickHandler }) {

  // searchBox Value
  const [searchBoxHandleClick, setSearchBoxHandleClick] = useState(false);


  return (
    <>
      <div className="tracker">
        <div className="tracker__wells">


          <div className="well well--active">
          
            <div className="well__content">
              <div className="well__header">
                <div className="well__title">میانگین کل کلمات</div>
                <div className="well__date">روزانه</div>
              </div>
              <div className="well__chart">
                chart js
              </div>
              <div className="well__more">
                <div className="well__btn">
                  5 رتبه
                  <i className=""></i>
                </div>

                <div className="well__btn">
                  26%
                </div>
              </div>
            </div>
            <div className="well__footer">
              www.example.ir
            </div>
          </div>



        </div>
      </div>
    </>
  );
}
