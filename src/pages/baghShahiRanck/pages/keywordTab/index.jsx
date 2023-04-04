import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { ImageContainer } from "../../../../assets/img/IMG";
import AuthButton from "../../../../component/Auth/authButton/AuthButton";
import {
  addKeywordService,
  deleteKeywordService,
  deleteNoteService,
  getKeywordRankPeriodService,
  keyWordsDataService,
} from "../../../../component/service/rankTracking";
import FilterChart from "./layouts/FilterChart";
import FilterTabel from "./layouts/FilterTabel";
import KeywordTable from "./layouts/Table";
import AddKeyWordModal from "./layouts/addNewModal";
import KeywordChart from "./layouts/chart";
import DeleteWarningModal from "./layouts/deleteWarningModal";
import TagModal from "./layouts/tagModal";

const KeywordTab = () => {
  const [tableData, setTableData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selected, setSelected] = useState([]);
  const [selectForComparison, setSelectForComparison] = useState(null);
  const [loading, setLoading] = useState(true);
  const [addLoading, setAddLoadgin] = useState(false);
  const [deleteWarning, setDeleteWarning] = useState({
    show: false,
    data: {},
    deleteWord: "",
    onOk: () => null,
  });
  const [tagModal, setTagModal] = useState({ show: false, data: {} });
  const [labels, setLabels] = useState(["", "", "", "", "", "", ""]);
  const [allChartData, setAllChartData] = useState([]);

  const workSpaceState = useSelector((state) => state.workSpaceState);
  const axiosController = new AbortController();

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    setLoading(true);
    const workspace = findUsedWorkspace();
    try {
      const data = await keyWordsDataService({ axiosController, workspace });
      if (data.data.code !== 200) throw data.data;
      // setTableData(data.data.data);
      setTableData([
        ...data.data.data,
        { ...data.data.data[0], key: "استلار", uuid: "ping" },
        { ...data.data.data[0], key: "بایننس", uuid: "binance" },
      ]);
    } catch (error) {
      console.log("Error code 1: ", error);
    } finally {
      setLoading(false);

      try {
        const res = await getKeywordRankPeriodService({ workspace });
        if (res.code !== 200) throw res;
        return handlePrepareRawData(res.data);
      } catch (error) {
        console.log("ERROR CODE 8 : ", error);
      }
    }
  }

  function handlePrepareRawData(data) {
    //FIND AND SET TABLE HORIZENTAL LABEL
    let keys = Object.keys(data);
    let labels_ = keys.slice(-7);
    let customLabels = labels_.map((item) =>
      //REMOVE YEAR & REPLACE - WITH /
      item.split("-").slice(1).join("/")
    );
    setLabels(customLabels);

    //PREPARE AND SET ALL CHART DATA IN ARRAY
    let allChart = labels_.map((item) => data[item]);
    setAllChartData(allChart);
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
      if (!!item.key) {
        data.push({
          keyWord: item["key"],
          site: item["site"],
        });
      }
    }
    return data;
  }

  function findUsedWorkspace() {
    let siteUrl = workSpaceState.webAdress;
    if (typeof siteUrl === "undefined") return;
    return workSpaceState.allWorkSpace.find((item) => item.website === siteUrl)
      .uuid;
  }

  async function findSelectedById(id) {
    const findedSelected = tableData.find((item) => item.uuid === id);
    if (typeof findedSelected !== "undefined")
      setSelected((prev) => [...prev, findedSelected]);
  }

  async function handleDeleteRow(rowData, needWarning) {
    if (typeof needWarning !== "undefined" && !!needWarning) {
      setDeleteWarning({
        show: true,
        data: rowData,
        deleteWord: "کلمه کلیدی",
        onOk: () => handleDeleteRow(rowData),
      });
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
      await fetchData(); //FETCH NEW TABLE DATA
      toast("کلمه کلیدی با موفقیت حذف شد.", { icon: true, type: "success" });
      //CLOSE MODAL
      setDeleteWarning({
        show: false,
        data: {},
        deleteWord: "",
        onOk: () => null,
      });
    } catch (error) {
      console.log("ERRRO CODE 3 : ", error);
    } finally {
      setLoading(false);
    }
  }

  async function handleDeleteNote(rowData, needWarning) {
    if (typeof needWarning !== "undefined" && !!needWarning) {
      setDeleteWarning({
        show: true,
        data: rowData,
        deleteWord: "این برچسب",
        onOk: () => handleDeleteNote(rowData),
      });
      return;
    }
    const workspace = findUsedWorkspace();
    setLoading(true);
    try {
      const res = await deleteNoteService({
        axiosController,
        workspace,
        id: rowData.uuid,
      });
      console.log("RES IS : ", res);
      await fetchData(); //FETCH NEW TABLE DATA
      toast("برچسب با موفقیت حذف شد.", { icon: true, type: "success" });
      //CLOSE MODAL
      setDeleteWarning({
        show: false,
        data: {},
        deleteWord: "",
        onOk: () => null,
      });
    } catch (error) {
      console.log("ERRRO CODE 3 : ", error);
    } finally {
      setLoading(false);
    }
  }

  function handleShowTagModal(rowData) {
    console.log("HANDLE SHOW TAG MODAL");
    setTagModal({ show: true, data: rowData });
  }

  function handleFinishTag() {
    console.log("FINISH");
    setTagModal({ show: false, data: {} });
    fetchData();
  }

  function handleSelectKeyword(key) {
    console.log("KEYWORD SELECTED : ", key);
    if (!Array.isArray(key)) key = [key];
    // CLEAR ALL SELECTED AND CHART
    setSelected([]);
    key.forEach((item) => {
      findSelectedById(item.value);
    });
  }

  function handleRefreshChart() {
    setSelected([]);
    setSelectForComparison(null);
    setTimeout(() => {
      setSelected([]);
      setSelectForComparison(null);
    }, 100);
  }

  function handleSelectForComparison(item) {
    if (!selected.length || !tableData.length) return; // IF HAVE NO SELECTED ITEM & NO DATA DO NOTING
    if (selected.some((x) => x.uuid === item.uuid)) return; // IF WANT COMPARISON WHIT SELF DON NOGIN
    setSelected((prev) => [prev[0]]);
    setSelectForComparison(item); // ADD COMPARISON DATA
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

        <div className="py-7">
          <KeywordTable
            data={tableData}
            setSelected={setSelected}
            handleDeleteRow={handleDeleteRow}
            handleShowTagModal={handleShowTagModal}
            loading={loading}
            selected={selected}
            handleDeleteNote={handleDeleteNote}
          />
        </div>

        <div className="mt-2 pb-4 px-3">
          <FilterTabel />
        </div>

        <div className="mt-2 pb-7 px-3">
          <FilterChart
            tableData={tableData}
            handleSelectForComparison={handleSelectForComparison}
            selected={selected}
            selectForComparison={selectForComparison}
          />
        </div>

        <div className="mt-2 pb-7 px-3">
          <KeywordChart
            labels={labels}
            selected={selected}
            setSelected={setSelected}
            tableData={tableData}
            handleSelectKeyword={handleSelectKeyword}
            handleRefreshChart={handleRefreshChart}
            selectForComparison={selectForComparison}
            allChartData={allChartData}
            handleRemoveComparisonFromRoot={() => setSelectForComparison(null)}
          />
        </div>
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
        deleteWord={deleteWarning.deleteWord}
        onOk={deleteWarning.onOk}
        onClose={() =>
          setDeleteWarning({
            show: false,
            data: {},
            deleteWord: "",
            onOk: () => null,
          })
        }
      />

      <TagModal
        show={tagModal.show}
        onClose={() => setTagModal({ show: false, data: {}, deleteWord: "" })}
        onFinish={() => handleFinishTag()}
        state={tagModal}
      />
    </>
  );
};

export default KeywordTab;
