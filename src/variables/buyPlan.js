export const convertPalanType = {
    برنزی: "bronze",
    "نقره ای": "silver",
    طلایی: "gold",
    الماسی: "diamond",
    getPlanName: (type) => {
      return convertPalanType[type] || "";
    },
  };