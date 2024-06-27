 
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import CustomImage from '@/components/CustomImage';
import { topProduct } from '@/utils/indexPageDummy';
import SideBar from '@/components/categoriesPageCompnents/SideBar';

interface ProductItem {
  imageLink: string;
  title: string;
}

const Page = () => {
  return (
    <div className={'categories containerLayout'}>
      <SideBar />
      <div className={"categoriesCustomList"}>
        {topProduct?.map((item: ProductItem, key: number) => (
          <div key={key} className={"card"} style={{ width: "18rem" }}>
            <CustomImage 
              src={item?.imageLink} 
              className={"card-img-top"} 
            />
            <div className={"card-body px-0"}>
              <p className={"card-text"}>
                {item?.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Page;
