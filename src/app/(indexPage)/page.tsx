 
import {ProductsCard,HeroBG,GiftCard, Promotions,ManageGiftCards,CategoriesCard,SupportedBlockchains,BlogCards} from '@/components/indexPageComponents';
import { giftCard, newProducts, popularProducts,promotionsDetails,categoryCards ,blockChainList,blogCard} from '@/utils/indexPageDummy'
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
      <CategoriesCard list={categoryCards} />   
      <SupportedBlockchains list={blockChainList} />   
      <BlogCards list={blogCard} />   
      </div>
    </div>
  )
}

export default page