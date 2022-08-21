import { useSelector } from "react-redux";

export const TextBaner=()=>{

    const { userData } = useSelector((state) => state.userState);
    if (userData.package==undefined) {
        return "خرید اشتراک سگمنتو است"
    }else if (userData.package.title=="14 روز رایگان") {
        return "خرید اشتراک سگمنتو است"
    }else if (userData.package.title=="برنزی"|userData.package.title=="نقره ای") {
        return "ارتقا اشتراک سگمنتو است"
    }else if (userData.package.title=="طلایی"|userData.package.title=="الماسی") {
        return "تمدید اشتراک سگمنتو است"
    }
}