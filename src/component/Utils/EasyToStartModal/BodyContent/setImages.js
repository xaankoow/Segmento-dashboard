import webAdress_svg from "../../../../assets/img/dashboard/EasyStartPage/webAdress.svg";
import keywords_svg from "../../../../assets/img/dashboard/EasyStartPage/keywords.svg";
import Group2_svg from "../../../../assets/img/dashboard/EasyStartPage/Group 2.svg";
import money_svg from "../../../../assets/img/dashboard/EasyStartPage/money.svg";

export const setImages = (step) => {
  switch (step) {
    case 3:
      return (
        <img
          src={webAdress_svg}
          alt="EasyStartPage"
          className=" w-[328px] m-auto "
        />
      );
    case 4:
      return (
        <img
          src={keywords_svg}
          alt="EasyStartPage"
          className=" w-[228px] m-auto "
        />
      );
    case 5:
      return (
        <div className="relative m-auto w-[228px] pt-6">
               <img
          src={Group2_svg}
          alt="EasyStartPage"
          className="  "
        />
          <img
          src={money_svg}
          alt="EasyStartPage"
          className=" pt-4 absolute top-0 right-0"
        />
        </div>
     
      );

    default:
      break;
  }
};
