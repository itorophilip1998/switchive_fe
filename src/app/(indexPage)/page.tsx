 
import {ProductsCard,HeroBG,GiftCard, Promotions,ManageGiftCards} from '@/components/indexPageComponents';
import { giftCard, newProducts, popularProducts,promotionsDetails } from '@/utils/indexPageDummy'
import React from 'react'

function page() {
  return (
    <div className="indexPage">
      <HeroBG/> 
       {/* Popular/New products */}
      <div className="ContainerBox ">
      <ProductsCard imageList={popularProducts} location={"USA"} slug={"Popular"}/> 
      <ProductsCard imageList={newProducts} location={"USA"} slug={"New"}/>  
      <GiftCard list={giftCard} />   
      <Promotions list={promotionsDetails} />   
      <ManageGiftCards   />   
      </div>
    </div>
  )
}

export default page