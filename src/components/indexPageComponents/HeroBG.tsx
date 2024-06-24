 
import React from 'react'
import CustomImage from '../CustomImage'
import { FaLongArrowAltRight } from "react-icons/fa";
import Link from 'next/link';

function HeroBG() {
  return ( 
      <div className='heroBg'> 
        <div className="bgHeroContainer  ">
        <CustomImage src={"indexPage/HeroBG.png"} />
        </div>
 
        <div className="textHeroBg ">
               <div className="row m-0  ">
                <div className="col-md-6 px-5">
                <CustomImage src={"indexPage/illustration.svg"} className={'topImage'}  />

                  <h1  data-aos="fade-up">
                  Shop with <span className="text-warning">Bitcoin</span><br/>
                  and Earn Points
                  </h1>
                  <p>Make mobile top-ups, buy gift cards and pay bills with crypto for more than 14,000 products worldwide in over 170 countries and earn points.
                  </p>
                  <Link className='link text-white d-block w-50 shadow-none pl-0 mt-5' href="#">Explore more
                  <FaLongArrowAltRight  className='mx-5'/>

                  </Link>
                </div>


                <div className="col-md-6 d-none d-md-block imgherobg">
                <CustomImage src={"indexPage/sideHeroBg.svg"}  />
                    
                </div>
               </div>
        </div>
      </div> 
  )
}

export default HeroBG