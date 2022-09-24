export const createRenderPoint = (point) => {
    return (
      <>
      {point.length!=0|point!=undefined|point!=null? point.map((item,index)=>(
        <>
        <polygon points={`${point.length/2>=index&&`30,${200+(-index)*30} 370,200 ${point.length!=(index)*2?`30,${200+((index)*30)} 370,200`:""}`}`} className='polygone_line_style1' />
        
        <circle cx="30" cy={`${point.length/2>=index?`${200+(-index)*30}`:200}`} r="3"
            fill="#D9D9D9" />
        <circle cx="30" cy={`${point.length/2>=index?`${point.length!=(index)*2?`${200+((index)*30)}`:"200"}`:200}`} r="3"
            fill="#D9D9D9" />
        </>
      )):""}
      </>
    )
  }