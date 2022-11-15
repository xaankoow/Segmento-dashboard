import React, { useState } from 'react'
import { useDropzone } from 'react-dropzone'
import AuthButton from '../../../component/Auth/authButton/AuthButton'
import TextArea from '../../../component/shared/TeaxtArea/TextArea'
import HorizontalLineInBeforText from '../../../component/shared/Text/HorizontalLineInBeforText'
import { defaultBoxStyleIndexer, parentHorizontalLineInBeforTextStyleIndexer } from '../../../variables/indexer'

export default function ManualSection() {

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
    <div className={`${defaultBoxStyleIndexer}`}>
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
          // className="border rounded-lg border-dashed border-primary min-w-[358px] bg-secondary flex flex-col justify-center items-center py-4 gap-4"
          >
            <AuthButton classes={"btn-secondary mr-5"} textButton={"انتخاب فایل"} />
            {/* <input {...getInputProps()} className="btn-secondary mr-5" /> */}
          </div>
        </div>


      </div>

    </div>
  )
}
