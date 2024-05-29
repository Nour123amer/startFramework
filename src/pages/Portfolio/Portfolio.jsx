import React from "react";
import image1 from "../../assets/1.png";
import image2 from "../../assets/2.png";
import image3 from "../../assets/3.png";
export default function Nav(){
    return(
        <>
        <div className="container ">
           <h2>PORTFOLIO COMPONENT</h2>
           <div className="images flex justify-between flex-wrap gap-3 my-5">
            <img className="w-80 h-75 rounded-md " src={image1}  />
            <img className="w-80 h-75 rounded-md" src={image2}  />
            <img className="w-80 h-75 rounded-md" src={image3}  />
            <img className="w-80 h-75 rounded-md" src={image1}  />
            <img className="w-80 h-75 rounded-md" src={image2}  />
            <img className="w-80 h-75 rounded-md" src={image3}  />

           </div>
        </div>

        </>
    )
}