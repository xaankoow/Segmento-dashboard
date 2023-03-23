import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ImageContainer } from "../../../../assets/img/IMG";
import AuthButton from "../../../../component/Auth/authButton/AuthButton";
import {
  addKeywordService,
  deleteKeywordService,
  keyWordDataService,
  keyWordsDataService,
} from "../../../../component/service/rankTracking";
import AddKeyWordModal from "./layouts/addNewModal";
import KeywordChart from "./layouts/chart";
import DeleteWarningModal from "./layouts/deleteWarningModal";
import FilterTabel from "./layouts/FilterTabel";
import KeywordTable from "./layouts/Table";

const KeywordTab = () => {
  const [filteredTableData, setFilteredTableData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selected, setSelected] = useState([]);
  const [loading, setLoading] = useState(true);
  const [addLoading, setAddLoadgin] = useState(false);
  const [deleteWarning, setDeleteWarning] = useState({ show: false, data: {} });

  const workSpaceState = useSelector((state) => state.workSpaceState);
  const axiosController = new AbortController();

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const workspace = findUsedWorkspace();

    try {
      const data = await keyWordsDataService({ axiosController, workspace });
      console.log("DATA : ", data);
      if (data.data.code !== 200) throw data.data;
      setFilteredTableData(data.data.data);
    } catch (error) {
      console.log("Error code 1: ", error);
    }
  }

  async function handleSaveKeyword() {
    const data = getDataFromStore();
    const workspace = findUsedWorkspace();
    setAddLoadgin(true);
    data.forEach(async (item) => {
      try {
        let data = {
          keyword: item.keyWord,
          url: item.site,
          workspace,
          axiosController,
        };
        const res = await addKeywordService(data);
        console.log("RES IS : ", res);

        // UPDATE LIMIT
        // CLOSE MODAL
        // UPDATE LIST
      } catch (error) {
        console.log("ERROR CODE 2 :", error);
      } finally {
        setAddLoadgin(false);
      }
    });
  }

  function getDataFromStore() {
    let data = [];
    for (var i = 1; i <= 10; i++) {
      let key = `keyWord${i}`;
      let item = workSpaceState[`${key}`];
      console.log("ITEM : ", item);
      if (!!item.key)
        data.push({
          keyWord: workSpaceState[`${key}`]["key"],
          site: workSpaceState[`${key}`]["site"],
        });
    }
    return data;
  }

  function findUsedWorkspace() {
    let siteUrl = workSpaceState.webAdress;
    if (typeof siteUrl === "undefined") return;
    return workSpaceState.allWorkSpace.find((item) => item.website === siteUrl)
      .uuid;
  }

  async function selectToShow(id) {
    console.log("SELECTED : ", id);
    const workspace = findUsedWorkspace();
    try {
      const data = await keyWordDataService({ axiosController, workspace, id });
      console.log("DATA : ", data);
      if (data.data.code !== 200) throw data.data;
    } catch (error) {
      console.log("Error code 1: ", error);
    }
  }

  async function handleDeleteRow(rowData, needWarning) {
    if (typeof needWarning !== "undefined" && !!needWarning) {
      setDeleteWarning({ show: true, data: rowData });
      return;
    }
    const workspace = findUsedWorkspace();
    setLoading(true);
    try {
      const res = await deleteKeywordService({
        axiosController,
        workspace,
        id: rowData.uuid,
      });
      console.log("RES IS : ", res);

      //CLOSE MODAL
      //SET LOADING TRUE AND FETCH DATA
    } catch (error) {
      console.log("ERRRO CODE 3 : ", error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <div className="px-7">
        <div className="flex justify-between items-baseline">
          <span>جدول کلمات کلیدی</span>

          <AuthButton
            handlerClick={() => setShowModal(true)}
            setOnclickValue={true}
            textButton={
              <>
                <img src={ImageContainer.plus} alt="plus" className=" ml-4" />
                افزودن کلمه کلیدی
              </>
            }
            classes="inline-block"
          />
        </div>

        <div className="py-5">
          <KeywordTable
            data={filteredTableData}
            selectToShow={selectToShow}
            handleDeleteRow={handleDeleteRow}
          />
        </div>

        <div className="mt-2 pb-4 px-3">
          <FilterTabel setFilteredTableData={setFilteredTableData} />
        </div>

        <div className="mt-2 pb-7 px-3">
          <FilterTabel setFilteredTableData={setFilteredTableData} />
        </div>

        <div className="mt-2 pb-7 px-3">{/* <KeywordChart /> */}</div>
      </div>

      {/*======  MODALS  ======*/}
      <AddKeyWordModal
        isOpen={showModal}
        setModal={setShowModal}
        handleSaveKeyword={handleSaveKeyword}
        addLoading={addLoading}
      />

      <DeleteWarningModal
        show={deleteWarning.show}
        onOk={() => handleDeleteRow(deleteWarning.data)}
        onClose={() => setDeleteWarning({ show: false, data: {} })}
      />
    </>
  );
};

export default KeywordTab;
