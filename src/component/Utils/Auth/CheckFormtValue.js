import { InputError } from "../showInputError";

export const CheckFormat = (type, value, errId) => {
    var CHECK = true;
    // debugger
    switch (type) {
        case "fullName":
            // let name = /\S+@\S+\.\S+/;
            CHECK = value.length >= 2 ? true : false;
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
            // CHECK = value.length >= 8 ? true : false;
            var strong_score=0;
            debugger
            const checkLenghtPass = new RegExp('(?=.{8,})'); 
            const checkExistNumPass = new RegExp('(?=.*[0-9])'); 
            // let strong = new RegExp(?=.{8,});
            if (!checkLenghtPass.test(value)) {
                InputError(errId, "گذرواژه میبایست بیش از 8 کارکتر باشد")
                break;
            }















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