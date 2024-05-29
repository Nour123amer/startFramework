import React from "react";
export default function Contact(){
  

        // e.preventDefault();
     
    
      return (
< >
<h2 className=" font-bold my-10 ">CONATCT SECTION</h2>
<p className="flex justify-between">
            <i class="fa-light fa-minus white"></i>
            <i class="fa-solid fa-star white"></i>
            <i class="fa-light fa-minus white"></i>
            </p>

            <form className="flex flex-col w-50 py-5" >
                <input type="text" placeholder="userName" className="w-50 p-1 m-1" />
                <input type="number" placeholder="userAge" className="w-50 p-1 m-1 "/>
                <input type="email" placeholder="userEmail" className="w-50 p-1 m-1"/>
                <input type="password" placeholder="userPassword" className="w-50 p-1 m-1"/>

                <button type="button" className="border-solid rounded-md text-white border-1 my-4 border-black bg-sky-300 w-28 h-18 mx-auto ">send Message</button>
            </form>
</>
      )

}