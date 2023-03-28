import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
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
import FilterChart from "./layouts/FilterChart";
import FilterTabel from "./layouts/FilterTabel";
import KeywordTable from "./layouts/Table";
import TagModal from "./layouts/tagModal";

const KeywordTab = () => {
  const [filteredTableData, setFilteredTableData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selected, setSelected] = useState([]);
  const [loading, setLoading] = useState(true);
  const [addLoading, setAddLoadgin] = useState(false);
  const [deleteWarning, setDeleteWarning] = useState({ show: false, data: {} });
  const [tagModal, setTagModal] = useState({ show: false, data: {} });

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
      console.log("DATA : ", data);
      if (data.data.code !== 200) throw data.data;
      setFilteredTableData(data.data.data);
    } catch (error) {
      console.log("Error code 1: ", error);
    } finally {
      setLoading(false);
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

  async function selectToShow(id) {
    //IF SELECTED BEFORE, NEED DELETE
    if (selected.some((x) => x.uuid === id)) {
      setSelected((prev) => prev.filter((x) => x.uuid !== id));
      return;
    }
    const workspace = findUsedWorkspace(); //FIND CURRENT WORKSPACE
    try {
      const data = await keyWordDataService({ axiosController, workspace, id });
      console.log("DATA : ", data);
      if (data.data.code !== 200) throw data.data;
      setSelected((prev) => [...prev, data.data.data]); // ADD TO SELECTED, THEN SHOW ON CHART
    } catch (error) {
      console.log("Error code 1: ", error);
    }
  }

  async function multyToShow(ids) {
    console.log("IDS : ", ids);
    if (!ids.length) return;
    const workspace = findUsedWorkspace(); //FIND CURRENT WORKSPACE
    let promises = ids.map(
      (id) =>
        new Promise((resolve, reject) => {
          try {
            let res = keyWordDataService({ axiosController, workspace, id });
            resolve(res);
          } catch (error) {
            reject(error);
          }
        })
    );
    console.log("PROMISE : ", promises);
    Promise.all(promises).then((values) => {
      console.log("VALUES : ", values);
      setSelected(values.map((item) => item.data.data));
    });
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
      await fetchData(); //FETCH NEW TABLE DATA
      toast("کلمه کلیدی با موفقیت حذف شد.", { icon: true, type: "success" });
      //CLOSE MODAL
      setDeleteWarning({ show: false, data: {} });
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

  function handleDeleteSelected(key) {
    console.log("KEY : ", key);
    setSelected((prev) => prev.filter((x) => x.key !== key));
  }

  function handleSelectKeyword(key) {
    console.log("KEYWORD SELECTED : ", key);
    if (!key.length) {
      // CLEAR ALL SELECTED AND CHART
      setSelected([]);
    }
    // key.forEach((item) => selectToShow(item.value));
    multyToShow(key.map((id) => id.value));
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
            handleShowTagModal={handleShowTagModal}
            loading={loading}
            selected={selected}
          />
        </div>

        <div className="mt-2 pb-4 px-3">
          <FilterTabel />
        </div>

        <div className="mt-2 pb-7 px-3">
          <FilterChart
            filteredTableData={filteredTableData}
            handleSelectKeyword={handleSelectKeyword}
            selected={selected}
          />
        </div>

        <div className="mt-2 pb-7 px-3">
          <KeywordChart
            selected={selected}
            handleDeleteSelected={handleDeleteSelected}
            filteredTableData={filteredTableData}
            handleSelectKeyword={handleSelectKeyword}
            handleRefreshChart={() => setSelected([])}
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
        onOk={() => handleDeleteRow(deleteWarning.data)}
        onClose={() => setDeleteWarning({ show: false, data: {} })}
      />

      <TagModal
        show={tagModal.show}
        onClose={() => setTagModal({ show: false, data: {} })}
        onFinish={() => handleFinishTag()}
        state={tagModal}
      />
    </>
  );
};

export default KeywordTab;
