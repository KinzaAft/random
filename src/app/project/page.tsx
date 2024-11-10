import Header from "../Componenets/header"
import Footer from "../Componenets/footer"
import Link from "next/link"
import Image from "next/image"
import { useState } from 'react';
import cateData from "../Data/project"
import Contact from "../Componenets/want";


export default function about (){
    return(
        <div>
            <Header />
         <div className="h-[900px]">
          <h1 className="text-4xl  text-[#10375C] text-center font-extrabold pt-[10px]">PROJECTS</h1>
            <div  className="flex flex-wrap justify-stretch gap-[30px] ml-[100px] mt-[30px]">
                {cateData.map((data)=>(
                    <div className=" shadow h-[350px] w-[350px] bg-slate-100 rounded-3xl ">
                        <p className="text-2xl text-center mt-[20px] text-[#10375C] font-bold">{data.tittle}</p>
                        <p className="text-xl text-[#10375C] font-thin text-center mt-[20px] pl-[10px] pr-[20px]">{data.description}</p>
                        <p className="text-2xl text-[#10375C] font-thin text-center mt-[20px]">{data.skills}</p>
                    <button className="btn shadow btnani2 h-[35px] w-[100px] border-2 border-orange-600 text-xl text-[#FF6600] rounded-[25px] ml-[120px] mt-[20px]">Demo</button>

                        <p className="name2 text-center text-[#10375C]">Available soon</p>
                    </div>
                    
                )

                )}
                
            </div>
         </div>
             <Contact/>
            <Footer />
        </div>
    )
}