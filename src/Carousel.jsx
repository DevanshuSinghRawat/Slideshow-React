import { BsArrowRightCircleFill } from "react-icons/bs"; 
import { BsArrowLeftCircleFill } from "react-icons/bs"; 

import React, { useState } from "react";
import './carousel.css';

export default function Carousel({data}) {
    const [slide,setSlide] = useState(0);
    let size = data.length;
    return (
            <div className="slides-container">
                <BsArrowLeftCircleFill className="arrow arrow-left" onClick={()=>setSlide(slide>0? ((slide-1)%size):(size-1)) } />

                {data.map((item,idx) => {
                    return <img key={idx} className={(slide===idx)?"slide selected-slide":"slide back-slides"} src={item.src} alt={item.alt} />
                })} 
                <BsArrowRightCircleFill className="arrow arrow-right" onClick={()=>setSlide((slide+1)%size)} />

                
            </div>
    ); 
}
