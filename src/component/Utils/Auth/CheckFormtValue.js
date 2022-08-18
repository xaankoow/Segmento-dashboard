import { InputError } from "../showInputError";

export const CheckFormat = (type, value, errId) => {
    var CHECK=true;
    // debugger
    switch (type) {
        case "email":
            let email = /\S+@\S+\.\S+/;
            CHECK = email.test(value);
            if (!CHECK) {
                InputError(errId, "فرمت ایمیل وارد شده صحیح نمیباشد")
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
                InputError(errId, "گذرواژه هخوانی ندارد")
            }
            break;
        default:
            break;
    }
    return CHECK;
}