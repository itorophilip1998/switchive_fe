'use client'
import CategoryProductCard from '@/components/categoriesPageCompnents/CategoryProductCard'
import React from 'react'
import { topProduct } from '@/utils/dummy';
import { useRouter } from 'next/navigation';
import CustomImage from '@/components/CustomImage';
import PayBox from '@/components/categoriesPageCompnents/PayBox';

interface ProductItem {
  imageLink: string;
  title: string;
}
function Page() {
  const navigate = useRouter();

  return (
    <div className='product containerLayout'>
      <div className="productDetails">
        <h4 className="title-text ">
          Skype
        </h4>
        <p>
          Lorem Ipsum is simply dummy text
        </p>

        <div className="row desInfo ">
          <div className="col-md-4"></div>
          <div className="col-md-8 ">
            <div className={'desList'}>
              <CustomImage src={`product/m1.svg`}/>
              <CustomImage src={`product/m2.svg`}/>
              <CustomImage src={`product/m3.svg`}/>
            </div>
            <p>
              <h4>  Lorem Ipsum</h4>
              is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to makeLorem Ipsum is simply dummy text of the printing and typesetting industry. 
              is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to makeLorem Ipsum is simply dummy text of the printing and typesetting industry. 

             </p>
            <p>   <h4>  Lorem Ipsum</h4>
            is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to makeLorem Ipsum is simply dummy text of the printing and typesetting industry. 
            is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to makeLorem Ipsum is simply dummy text of the printing and typesetting industry. 
            is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to makeLorem Ipsum is simply dummy text of the printing and typesetting industry. 
           
              </p>
              <PayBox/>
          </div>
        </div>

      </div>





      <div className="mt-5">
        <h1 className='otherProducth1' >Other products </h1>
        <div className={"categoriesCustomList"}>
          {topProduct?.slice(0, 15)?.map((item: ProductItem, key: number) => (
            <CategoryProductCard key={key} item={item} />
          ))}

        </div>

        <div className="text-center">
          <button className="btn btn-primary" onClick={() => navigate.push('/categories')}>See All</button>

        </div>
      </div>
    </div>
  )
}

export default Page