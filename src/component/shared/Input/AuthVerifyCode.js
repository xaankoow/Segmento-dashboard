import AuthInput from "../../Auth/authInput/AuthInput"
import { setAuth1Redux, setAuth2Redux, setAuth3Redux, setAuth4Redux } from "../../Redux/Action"

export const AuthVerifyCode = () => {

        // <div className="flex flex-col justify-cneter items-center gap-3 mt-20 mb-7">
        //     <span>کد فعال سازی</span>
        //     <div className="flex gap-5">
        //         <AuthInput
        //             classes={"verify_email_cod input_selector_4"}
        //             notCheckValue={true}
        //             maxLength="1"
        //             pressNumber={true}
        //             reduxHandleChange={setAuth1Redux}
        //         />
        //         <AuthInput
        //             classes={"verify_email_cod input_selector_3"}
        //             notCheckValue={true}
        //             maxLength="1"
        //             pressNumber={true}
        //             reduxHandleChange={setAuth2Redux}
        //         />
        //         <AuthInput
        //             classes={"verify_email_cod input_selector_2"}
        //             notCheckValue={true}
        //             maxLength="1"
        //             pressNumber={true}
        //             reduxHandleChange={setAuth3Redux}
        //         />
        //         <AuthInput
        //             classes={"verify_email_cod"}
        //             notCheckValue={true}
        //             maxLength="1"
        //             pressNumber={true}
        //             reduxHandleChange={setAuth4Redux}
        //         />
        //     </div>
        //     <span className={"authVerifyCodeList  absolute right-1 bottom-[-20px] text-[10px] text-[#c42b1c] "}>اطلاعات نامعتبر</span>
        //     {/* <span className={"authVerifyCodeList hidden absolute right-1 bottom-[-20px] text-[10px] text-[#c42b1c] "}>اطلاعات نامعتبر</span> */}
        // </div>
    return (
        <div className="flex items-center gap-5 flex-col relative m-auto  w-max">
          <div className="flex items-center gap-4">
            <AuthInput
              classes={"verify_email_cod input_selector_4"}
              notCheckValue={true}
              reduxHandleChange={setAuth1Redux}
              maxLength="1"
              pressNumber={true}
            />
            <AuthInput
              classes={"verify_email_cod input_selector_3"}
              notCheckValue={true}
              reduxHandleChange={setAuth2Redux}
              maxLength="1"
              pressNumber={true}
            />
            <AuthInput
              classes={"verify_email_cod input_selector_2"}
              notCheckValue={true}
              reduxHandleChange={setAuth3Redux}
              maxLength="1"
              pressNumber={true}
            />
            <AuthInput
              classes={"verify_email_cod"}
              notCheckValue={true}
              reduxHandleChange={setAuth4Redux}
              maxLength="1"
              pressNumber={true}
            />

          </div>
          <span className={"authVerifyCodeList hidden absolute right-1 bottom-[-20px] text-[10px] text-[#c42b1c] "}>اطلاعات نامعتبر</span>



        </div>
    )
}