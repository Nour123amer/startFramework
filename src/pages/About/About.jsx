import React from "react";
export default function About(){
    return(
        <>
      
        <div className=" bg-sky-200/100 flex flex-col m-auto h-full gap-3 ">
            <h2>ABOUT COMPONENT</h2>
            <p className="flex justify-between">
            <i class="fa-light fa-minus white"></i>
            <i class="fa-solid fa-star white"></i>
            <i class="fa-light fa-minus white"></i>
            </p>

            <div className="container text flex   gap-5 my-20">
               <p className="white bg-sky w-1/2 my-20 py-10">Freelancer is a free bootstrap theme created by Route. 
               The download includes the complete source files including HTML,
                 CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
                
                 </p>
               <p className="white w-1/2 my-20 py-10">Freelancer is a free bootstrap theme created by Route.
                The download includes the complete source files including HTML,
                 CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
            </div>
        </div>
        
        
        </>
    )
}