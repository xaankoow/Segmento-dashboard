export const setImages = (step) => {
  switch (step) {
    case 3:
      return (
        <img
          src="/img/dashboard/EasyStartPage/webAdress.svg"
          alt="EasyStartPage"
          className=" w-[328px] m-auto "
        />
      );
    case 4:
      return (
        <img
          src="/img/dashboard/EasyStartPage/keywords.svg"
          alt="EasyStartPage"
          className=" w-[228px] m-auto "
        />
      );
    case 5:
      return (
        <div className="relative m-auto w-[228px] pt-6">
               <img
          src="/img/dashboard/EasyStartPage/Group 2.svg"
          alt="EasyStartPage"
          className="  "
        />
          <img
          src="/img/dashboard/EasyStartPage/money.svg"
          alt="EasyStartPage"
          className=" pt-4 absolute top-0 right-0"
        />
        </div>
     
      );

    default:
      break;
  }
};
