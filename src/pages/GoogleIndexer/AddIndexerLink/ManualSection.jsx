import React, { useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { ImageContainer } from '../../../assets/img/IMG'
import AuthButton from '../../../component/Auth/authButton/AuthButton'
import TextArea from '../../../component/shared/TeaxtArea/TextArea'
import HorizontalLineInBeforText from '../../../component/shared/Text/HorizontalLineInBeforText'
import { defaultBoxStyleIndexer, parentHorizontalLineInBeforTextStyleIndexer } from '../../../variables/indexer'

export default function ManualSection({ disableSection }) {

  const [textArea, setTextArea] = useState("")

  const [files, setFiles] = useState([]);

  const { getRootProps, getInputProps } = useDropzone({
    multiple: true,
    accept: ["JPG", "PNG", "GIF", "TXT"],
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });

  return (
    <div >
      {disableSection ? <div className='w-full h-full float-right top-0 bg-sectionDisable opacity-40 absolute bg- z-40'></div> : null}
      <div className='flex justify-between items-center'>
        <div className={parentHorizontalLineInBeforTextStyleIndexer}>
          <HorizontalLineInBeforText text={"لیست لینک ها ( هرخط یک لینک )"} />
        </div>
        <div className=' w-full'>
          <TextArea
            classes={
              "w-full !h-[222px] border border-sectionDisable !p-5 !rounded-lg overflow-y-auto leading-relaxed"
            }
            handleChange={setTextArea}
          />
        </div>
      </div>
      <div className='flex justify-between mt-4'>
        <div className={parentHorizontalLineInBeforTextStyleIndexer}>
          <HorizontalLineInBeforText text={"آپلود فایل لینک ها"} />
        </div>
        <div className='flex w-full mt-2 items-center'>
          <div className='flex flex-grow items-center border border-sectionDisable rounded-[3px] justify-between px-3 h-11'>
            <span className='text-title text-sm'>پیوست فایل</span>
            <span className='text-silver text-s'>{files.length != 0 ? `تعداد ${files.length} فایل انتخاب شده است.` : "فایلی انتخاب نشده است. "}</span>
          </div>
          <div
            {...getRootProps({ className: "dropzone" })}
          >
            <button type="button" className="text-[#488CDA] bg-[#F2F5F7] mr-3 rounded-lg focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium text-sm px-5 py-3 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mr-0 mb-0">
              انتخاب فایل
            </button>
          </div>
        </div>
      </div>
      <div className=' text-left w-full mt-7'>
        <div className=' inline-block'>
          <button type="button" className="text-[#fff] bg-[#0A65CD]  hover:bg-[#0A65CD]/90  rounded-lg focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium text-sm px-5 py-3 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mr-2 mb-2">
            ارسال درخواست
            <img className='mr-2' src={ImageContainer.sendLinkAdress} />
          </button>
        </div>
      </div>
    </div>
  )
}
