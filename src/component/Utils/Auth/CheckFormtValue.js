import { InputError } from "../showInputError";

export const CheckFormat = (type, value, errId) => {
    var CHECK=true;
    // debugger
    switch (type) {
        case "fullName":
            // let name = /\S+@\S+\.\S+/;
            CHECK = value.length>=2?true:false;
            if (!CHECK) {
                InputError(errId, "بهتر است نام و نام خانوادگی‌تان را کامل وارد کنید.")
            }
            break;
        case "email":
            let email = /\S+@\S+\.\S+/;
            CHECK = email.test(value);
            if (!CHECK) {
                InputError(errId, "فرمت ایمیل اشتباه است.")
            }
            break;
        case "password":
            CHECK = value.length >= 6 ? true : false;
            if (!CHECK) {
                InputError(errId, "گذرواژه میبایست بیش از 6 کارکتر باشد")
            }
            break;
        case "passwordConfirm":

            CHECK = value.pass1 == value.pass2 ? true : false;
            if (!CHECK) {
                InputError(errId, "گذرواژه‌‌ها یکی نیستند.")
            }
            break;
        default:
            break;
    }
    return CHECK;
}