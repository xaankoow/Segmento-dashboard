import { ImageContainer } from "../assets/img/IMG/index";

export const ticketCategories = [
  { partName: "امور اداری", partCod: 1 },
  { partName: "همکاری", partCod: 2 },
  { partName: "امور مالی", partCod: 3 },
  { partName: "امور فنی", partCod: 6 },
  { partName: "سوالات پیش از خرید", partCod: 7 },
  { partName: "پیشنهادات و انتقاد", partCod: 8 },
];

export const ticketStatus = [
  { partName: "بسته", partCod: 0 },
  { partName: "در انظار پاسخ", partCod: 1 },
  { partName: "پاسخ داده شده", partCod: 2 }
];

export const imgCategories = [
  ImageContainer.omorEdari,
  ImageContainer.omorMali,
  ImageContainer.omorFani,
  ImageContainer.soalatPishKharid,
  ImageContainer.hamkari,
  ImageContainer.idea
]



export const helpText = [
  "نمونه متن برای نوشتن نکات مهم برای تیکت",
  "نمونه متن برای نوشتن نکات مهم برای تیکت",
  "نمونه متن برای نوشتن نکات مهم برای تیکت",
];
export const titleOfReportSupportTable = [
  { title: "ردیف", class: "px-8" },
  { title: "شناسه تیکت", class: "px-8" },
  { title: "عنوان", class: "pl-[140px] text-right" },
  { title: "دسته بندی", class: "pl-[40px] text-center" },
  { title: "آخرین بروز رسانی", class: "" },
  { title: "وضعیت", class: "text-center " },
  { title: "عملیات", class: "flex justify-center" },
];
export const filterBoxDatas = [
  {filterName:"بدون فیلتر",apiKey:"none"},
  {filterName:"شناسه تیکت",apiKey:"ticket_id"},
  {filterName:"عنوان",apiKey:"title"},
  {filterName:"دسته بندی",apiKey:"categories"},
  {filterName:"آخرین بروز رسانی",apiKey:"updated_at"},
  {filterName:"وضعیت",apiKey:"status"},
  // "شناسه تیکت",
  // "عنوان",
  // "دسته بندی",
  // "دپارتمان",
  // "آخرین بروز رسانی",
  // "وضعیت"
]
export const partItemFilterBox = [
  {filterName:"بدون فیلتر",apiKey:"none"},
]

// "row.ticket_id",
// "row.title",
// "row.categories",
// "row.updated_at",
// "row.status",
// "row.operation",