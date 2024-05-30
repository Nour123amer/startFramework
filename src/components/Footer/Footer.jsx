import React from "react";

export default function Footer(){
    return(
        <>
        <div className="  bg-sky-800/100 fixed text-white flex justify-around bottom-14 h-32 p-5 left-0 right-0">
          <div className="location text-center ">
             <h3 className="text-lg font-bold">LOCATION</h3>
             <p>2215 John Daniel Drive</p>
             <p>Clark, MO 65243</p>
          </div>

          <div className="web text-center">
          <h3 className="text-lg font-bold">AROUND THE WEB</h3>
           <ul className="flex gap-5 mx-auto">
                <li className="rounded-full border px-1 border-white-200"><i class="fa-brands fa-facebook"></i></li>
                <li className="rounded-full border px-1 border-white-200"><i class="fa-brands fa-twitter"></i></li>
                <li className="rounded-full border px-1 border-white-200"><i class="fa-brands fa-linkedin-in"></i></li>
                <li className="rounded-full border px-1 border-white-200"><i class="fa-solid fa-globe"></i></li>
               
           </ul>
          </div>

          <div className="about text-center">
          <h3 className="text-lg font-bold">ABOUT FREELANCER</h3>
             <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
            
          </div>
        </div>
        </>
    )
}