import React from "react";
export default function Contact(){
  

        // e.preventDefault();
     
    
      return (
< >
<h2 className=" font-bold p-30 ">CONATCT SECTION</h2>
<p className="flex justify-between">
            <i class="fa-light fa-minus white"></i>
            <i class="fa-solid fa-star white"></i>
            <i class="fa-light fa-minus white"></i>
            </p>

            <form className="flex flex-col m-auto py-5 w-1/2" >
                <input type="text" placeholder="userName" className=" p-1 m-2 outline-none border-b border-gray-200 shadow-sm  " />
                <input type="number" placeholder="userAge" className=" p-1 m-2 outline-none border-b border-gray-200 shadow-sm  "/>
                <input type="email" placeholder="userEmail" className=" p-1 m-2 outline-none border-b border-gray-200 shadow-sm  "/>
                <input type="password" placeholder="userPassword" className=" p-1 m-2 outline-none border-b border-gray-200 shadow-sm  "/>

                <button type="button" className="border-solid rounded-md text-white border-1 my-4 border-black bg-sky-400 w-28 h-18 mx-auto ">send Message</button>
            </form>
</>
      )

}