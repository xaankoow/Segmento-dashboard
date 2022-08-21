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
            CHECK = false;
            var strong_score = 0;
            // debugger
            const checkLenghtPass = new RegExp('(?=.{8,})'); //check lenght pass
            const checkExistNumPass = new RegExp('(?=.*[0-9])'); // check exist num
            const checkLowercaseUppercasePass = new RegExp('^(?=.*[a-z])(?=.*[A-Z])'); // check upper and lower case character
            const checSpecialCharacterPass = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})'); // check exist special character
            // let strong = new RegExp(?=.{8,});
            if (!checkLenghtPass.test(value)) {
                CHECK = false
                // strong_score++;
                InputError(errId, "گذرواژه ضعیف: خوب نیست.","#F35242",true)
                break;
            }

            if (checkExistNumPass.test(value)) {
                strong_score++;
            }
            if (checkLowercaseUppercasePass.test(value)) {
                strong_score++;
            }
            if (checSpecialCharacterPass.test(value)) {
                strong_score++;
            }
            console.log(strong_score)

            if (strong_score==1) {
                CHECK = true
                InputError(errId, "گذرواژه متوسط: گذرواژه نامطمئن است.","#F35242",true)
                
            } else if(strong_score==2){
                CHECK = true
                InputError(errId, "گذرواژه قوی: حالا گذرواژه‌ مطمئن است.", "#10CCAE",true)
                
            } else if(strong_score==3){
                CHECK = true
                InputError(errId, "گذرواژه بسیار قوی: به‌به چه رمزی، کارتون خیلی درسته.", "#10CCAE",true)
                
            }

        case "passwordConfirm":

            CHECK = value.pass1 == value.pass2 ? true : false;
            if (!CHECK) {
                InputError(errId, "گذرواژه‌‌ها یکی نیستند.",true)
            }
            break;
        default:
            break;
    }
    return CHECK;
}