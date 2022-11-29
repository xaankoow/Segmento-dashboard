import React from 'react'

export default function AnimationSegmentoLogo({parentClass,lineContainerClass,animation,animationWithHover}) {
    return (
        <div>
            <div  className={`flex justify-center items-center rounded-2xl bg-white w-52 h-52 ${animation&&"animate-pulse"}  ${parentClass?parentClass:"w-52 h-52"} ${animationWithHover&&" hover:animate-pulse"}`}>
                <div id="loading-container-segmento-logo" className={`${lineContainerClass}  ${animation&&"animation"}`} onMouseEnter={(e)=>e.currentTarget.classList.add("animation")} onMouseLeave={(e)=>e.currentTarget.classList.remove("animation")}>
                    <div className="segmento_logo_1"></div>
                    <div className="segmento_logo_2"></div>
                    <div className="segmento_logo_3"></div>
                    <div className="segmento_logo_4"></div>
                    <div className="segmento_logo_5"></div>
                    <div className="segmento_logo_6"></div>
                    <div className="segmento_logo_7"></div>
                </div>
            </div>
        </div>
    )
}
