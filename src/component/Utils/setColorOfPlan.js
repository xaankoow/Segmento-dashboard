
export const setColorOfPlan = (packageType) => {

  switch (packageType) {
    case packageType.includes("طلایی"):
      return "bg-yellow";
    case packageType.includes("نقره ای"):
      return "bg-secondary";
    case packageType.includes("برنزی"):
      return "bg-[#E99991]";
    case packageType.includes("الماسی"):
      return "bg-diamond";
    case packageType.includes("14 روز رایگان"):
      return "bg-secondary";
    default:
      break;
  }


};
