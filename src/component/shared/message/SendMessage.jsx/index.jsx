import React, { useState } from 'react'
import { useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import { ImageContainer } from '../../../../assets/img/IMG'
import AuthButton from '../../../Auth/authButton/AuthButton'
import { EditorCustomizedToolbarOption } from '../../../Dashboard/pages/EditUserProfile/components/Editor/Editor'


export default function Index({ setValueEditor, setFileArray }) {

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
  useEffect(() => {
    setFileArray(files)
  }, [files])
  console.log(files)
  return (
    <div className='w-full mt-6'>
      <EditorCustomizedToolbarOption setValueEditor={setValueEditor} />
      <div className='flex items-center h-12 -mt-5 w-full border border-lightGray rounded-lg'>
        <img src={ImageContainer.infoBlue} alt="information" className=' mx-3' />
        <p className=' py-2 text-sm '>
          امکان بارگزاری یک یا چند فایل همزمان را دارید.
        </p>
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
      <p className='text-title text-s mt-2'>پسوند های مجاز: .jpg, .gif, .jpeg, .png, .zip, .txt, .pdf</p>
    </div>
  )
}
