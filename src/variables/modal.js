export const afterOpenOrCloseAnyModal=({open})=>{
    if (open) {
        const main=document.querySelector(".main");
        main.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
        document.getElementById("dashboardMap").style.overflow="hidden";
    } else {
        document.getElementById("dashboardMap").style.overflow="scroll";
        
    }
  }