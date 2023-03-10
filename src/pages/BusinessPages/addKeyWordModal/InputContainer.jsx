import React from 'react'
import AuthInput from '../../../component/Auth/authInput/AuthInput'
import StaticInputText from '../../../component/Utils/staticInputText/textInput'

export default function index() {
  return (
    <div className=''>
      <div className='mt-12'>

        <StaticInputText
            typeInput={"text"}
            width={"100%"}
            textLabelInput={"صفحه تجاری"}
            staticText={"https:// "}
            placeholder={"example.com"}
            // value={webAdress}
            // reduxHandleChange={setWebAdress}
          />
      </div>
      <div className='mt-16'>

          <AuthInput
                  textLabelInput="کلمات کلیدی"
                  width={"100%"}
                  typeInput="text"
                  // value={handleInputValue(item, "keyWords", "key")}
                  // reduxHandleChange={setKeyWords}
                  // workSpaceTypeState={`keyWord${item}`}
                />
      </div>
    </div>
  )
}
