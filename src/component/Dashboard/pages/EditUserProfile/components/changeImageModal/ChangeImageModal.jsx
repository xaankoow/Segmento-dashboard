import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import PageTitle from "../../../../DashboaedComponents/pageTitle/pageTitle";
import {useDropzone} from 'react-dropzone';
export default function ChangeImageModal({ close, isOpen,userImage,setUserImage}) {
  const customStyles = {
    content: {
      top: "43vh",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgrounColor: "red",
      "z-index": "100",
    },
  };
  
  const [files, setFiles] = useState([]);
  const {getRootProps, getInputProps} = useDropzone({
    accept: ["JPG", "PNG", "GIF"],
    onDrop: acceptedFiles => {
      setFiles(acceptedFiles.map(file => Object.assign(file, {
        preview: URL.createObjectURL(file)
      })));
    }
  });

  const thumbs = files.length !=0 || files.length != undefined ? files.map(file => 
   (
   <>
    <img
    src={file.preview != undefined ? file.preview : "../img/dashboard/userProfile/profileImage.png"}
    className="rounded-full my-3 w-[125px] h-[125px]"
    alt="userImage"
  />
{ console.log(file.preview != undefined ? file.preview : "../img/dashboard/userProfile/profileImage.png")}</>
  )) :<img
  src={"../img/dashboard/userProfile/profileImage.png"}
  className="rounded-full my-3 max-w-[125px] max-h-[125px]"
  alt="userImage"
/>


  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks
    files.forEach(file => URL.revokeObjectURL(file.preview));
  }, [files]);
 console.log(files);
  return (
    <Modal
      isOpen={isOpen ? true : false}
      parentSelector={() =>
        document.querySelector(".app #DASHBOARD .body .main")
      }
      // onAfterOpen={afterOpenModal}
      // onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
      // className={"myModal"}
    >
      <div className="min-w-[530px] rounded-lg">
      
        <div className="w-full flex relative" >
          <PageTitle title={"تغییر تصویر پروفایل"} />
          <img
            src="./img/dashboard/nav_right/close.svg"
            alt="close"
            width={"14px"}
            height={"14px"}
            className="absolute top-4 left-6 cursor-pointer"
            onClick={() => close()}
          />
        </div>
        <div className="p-4">
          <div className="flex flex-col justify-center items-center" >
            {  thumbs 
              
            }

            <div
            {...getRootProps({className: 'dropzone'})}
            
              className="border rounded-lg border-dashed border-primary min-w-[358px] bg-secondary flex flex-col justify-center items-center py-4 gap-4"
            >
              <input {...getInputProps()} className="w-full bg-yellow h-11"/>
              <img
                src="../img/dashboard/userProfile/backup.svg"
                alt="backup"
                width={"28px"}
                height={"20px"}
              />
              <span className="text-gray text-xs">
                تصویر خود را اینجا بکشید
              </span>
              <span className="text-gray text-xs">
                {" "}
                <span className="text-[#D9D9D9]">—————</span> یا{" "}
                <span className="text-[#D9D9D9]">—————</span>{" "}
              </span>
              <button className="btn-style" > انتخاب فایل</button>
            </div>
            <div className="flex justify-end gap-5 mt-7 w-full max-w-[358px]">
              <button className="btn-secondary" onClick={() => close()} >
                {" "}
                
                انصراف{" "}
              </button>
              <button className="btn-style" onClick={()=>setUserImage(files)}> ذخیره تغییرات </button>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}
