import React from 'react'
import image from "../../assets/12.png"
export default function Home() {
  return (

         <>
         <div lassName=" my-150 bg-blue-400/100">
          <h1 > Lorem ipsum dolor sit amet.</h1>
         </div>
    <div className="bg-blue-400/100  py-20 flex flex-col justify-center items-center w-full">
            <img src={image} className="rounded-full w-1/5 m-3"/>
            <h2 className="text-white">START FRAMEWORK</h2>

            <p className="flex justify-between">
            <i class="fa-light fa-minus text-white"></i>
            <i class="fa-solid fa-star text-white"></i>
            <i class="fa-light fa-minus text-white"></i>
            </p>
            <p className="text-white">Graphic Artist - Web Designer - Illustrator</p>
         </div>


        </>

  )
}
