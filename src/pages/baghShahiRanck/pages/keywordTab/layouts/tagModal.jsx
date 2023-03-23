import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import AuthButton from "../../../../../component/Auth/authButton/AuthButton";
import AuthInput from "../../../../../component/Auth/authInput/AuthInput";
import PageTitle from "../../../../../component/Dashboard/DashboaedComponents/pageTitle/pageTitle";
import { defaultCustomModalStyle } from "../../../../../variables/style";
import { ImageContainer } from "../../../../../assets/img/IMG";
import { toast } from "react-toastify";
import {
  addKeywordTagService,
  searchKeywordTagService,
} from "../../../../../component/service/rankTracking";
import { useSelector } from "react-redux";

const TagModal = ({ state, onClose, onFinish }) => {
  const [keywordInput, setKeywordInput] = useState("");
  const [loading, setLoading] = useState(false);
  const axiosControler = new AbortController();
  const workSpaceState = useSelector((state) => state.workSpaceState);

  useEffect(() => {
    // fetchTags("برچسب");
  }, []);

  // async function fetchTags(tag) {
  //   const workspace = findUsedWorkspace();
  //   try {
  //     const res = await searchKeywordTagService(
  //       workspace,
  //       { tag, type: "keyword" },
  //       axiosControler
  //     );
  //     console.log("RES : ", res);
  //   } catch (error) {
  //     console.log("ERROR CODE 5 : ", error);
  //   }
  // }

  async function handleAddTag() {
    if (!keywordInput) {
      toast("لطفا تگ مورد نظر خود را وارد کنید.", {
        type: "error",
        icon: true,
      });
      return;
    }

    try {
      setLoading(true);
      const workspace = findUsedWorkspace();
      const formData = new FormData();
      formData.append("uuid", state.data.uuid);
      formData.append("type", "keyword");
      formData.append("note", keywordInput);
      formData.append("tags[]", keywordInput);

      const res = await addKeywordTagService(
        workspace,
        formData,
        axiosControler
      );

      if (res.data.code !== 200) throw res;
      toast("برچسب با موفقیت افزوده شد.", { icon: true, type: "success" });
      onFinish();
    } catch (error) {
      console.log("error code 4 : ", error);
    } finally {
      setLoading(false);
    }
  }

  function findUsedWorkspace() {
    let siteUrl = workSpaceState.webAdress;
    if (typeof siteUrl === "undefined") return;
    return workSpaceState.allWorkSpace.find((item) => item.website === siteUrl)
      .uuid;
  }

  return (
    <Modal
      isOpen={state.show}
      parentSelector={() => document.getElementById("dashboardMap")}
      style={defaultCustomModalStyle}
      contentLabel="Delete Modal"
      onRequestClose={() => onClose()}
      preventScroll
    >
      <div className="tag-modal-container w-[500px] mt-2">
        <PageTitle title={"افزودن برچسب"} />
        <div className="p-4 mt-3">
          <AuthInput
            textLabelInput="افزودن برچسب جدید"
            value={keywordInput}
            handleChange={setKeywordInput}
            classes={"w-full"}
          />
          <div className="mb-4">
            <AuthButton
              handlerClick={() => handleAddTag()}
              setOnclickValue={true}
              textButton={
                <>
                  <img src={ImageContainer.plus} alt="plus" className="ml-4" />
                  ذخیره برچسب جدید
                </>
              }
              classes="inline-block mt-4"
              disabled={loading}
            />
          </div>
          <hr />
        </div>
      </div>
    </Modal>
  );
};

export default TagModal;
