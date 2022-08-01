export const TitleModal = (stepModal, free) => {
  switch (stepModal) {

    case 1:
      return "انتخاب اشتراک";
    case 2:
      if (free) {
        return "14 روز رایگان";
      }
      return "خرید اشتراک";
    case 3:
      return "افزودن سایت";
    case 4:
      return "افزودن کلمات کلیدی";
    case 5:
      return "افزودن صفحات تجاری";
    case 6:
      return "خوش آمدید به سگمنتو";
    default:
      break;
  }

}