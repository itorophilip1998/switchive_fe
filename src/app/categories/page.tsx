 
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import CustomImage from '@/components/CustomImage';
import { topProduct } from '@/utils/dummy';
import SideBar from '@/components/categoriesPageCompnents/SideBar';
import Faq from '@/components/Faq';
import CategoryProductCard from '@/components/categoriesPageCompnents/CategoryProductCard';

interface ProductItem {
  imageLink: string;
  title: string;
}

const Page = () => {
  return (
    <div className={' containerLayout'}>
      <div className="categories">
      <SideBar />
      <div className={"categoriesCustomList"}>
        {topProduct?.map((item: ProductItem, key: number) => (
          <CategoryProductCard key={key} item={item}/> 
        ))}

      </div>
      </div>
      <Faq/>
    </div>
  );
}

export default Page;
