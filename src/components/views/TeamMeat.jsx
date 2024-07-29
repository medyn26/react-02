import React from 'react'
import Button from '../ui/Button';
import image2 from "../../assets/img/image2.png";
import { FaStar } from "react-icons/fa";

function TeamMeat() {
  return (
    <>
    <div className=' m-0 auto text-center'>
        <p className='font-semibold text-[24px] text-[#377DFF]'>About Us</p>
        <h1 className='font-bold text-[55px]'>Our Teammate</h1>
    </div>
    <div className='flex m-0 auto'>
        <div className="">
            <img src={image2} width={565} height={402}/>
        </div>
        <div className="flex flex-col ">
            <div className="m-w-[610]"><p className=''>We move with make a Creative Strategy for help your business goal,
                we help to improve your income by a services we have. make your content
                look interesting and make people look for your business</p></div>
            
            <p>We move with make a Creative Strategy for help your business goal, we help to improve your income by a services we
                have. make your content look interesting and make people look for
                your business</p>
        </div>
    </div>
     </>
  )
}

export default TeamMeat