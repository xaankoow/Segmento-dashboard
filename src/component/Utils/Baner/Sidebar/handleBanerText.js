import { useSelector } from "react-redux";

export const TextBaner=()=>{

    const { userData } = useSelector((state) => state.userState);
   
    if (userData.package==undefined) {
        return "خرید اشتراک سگمنتو است"
    }else if (userData.package.title=="14 روز رایگان") {
        return "خرید اشتراک سگمنتو است"
    }else if (userData.package.type_text=="برنزی"|userData.package.type_text=="نقره ای") {
        return "ارتقا اشتراک سگمنتو است"
    }else if (userData.package.type_text=="طلایی"|userData.package.type_text=="الماسی") {
        return "تمدید اشتراک سگمنتو است"
    }
}