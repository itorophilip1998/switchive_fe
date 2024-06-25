import HeroBG from '@/components/indexPageComponents/HeroBG'
import PromotionsCard from '@/components/indexPageComponents/ProductsCard'
import { newProducts, popularProducts } from '@/utils/indexPageDummy'
import React from 'react'

function page() {
  return (
    <div className="indexPage">
      <HeroBG/> 
       {/* Popular/New products */}
      <PromotionsCard imageList={popularProducts} location={"USA"} slug={"Popular"}/> 
      <PromotionsCard imageList={newProducts} location={"USA"} slug={"New"}/> 
    </div>
  )
}

export default page