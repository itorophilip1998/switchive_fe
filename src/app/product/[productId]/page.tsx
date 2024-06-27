'use client'
import CategoryProductCard from '@/components/categoriesPageCompnents/CategoryProductCard'
import React from 'react'
import { topProduct } from '@/utils/dummy';
import { useRouter } from 'next/navigation';
interface ProductItem {
  imageLink: string;
  title: string;
}
function Page() {
  const navigate=useRouter(); 
 
  return (
    <div className='product'> 
 <div className="container">

    <h1 >Other products </h1>

<div className={"categoriesCustomList"}>
  {topProduct?.slice(0,16)?.map((item: ProductItem, key: number) => (
    <CategoryProductCard key={key} item={item}/> 
  ))}
 
</div>

<div className="text-center">
    <button className="btn btn-primary" onClick={()=>navigate.push('/categories')}>See All</button>

  </div>
 </div>
    </div>
  )
}

export default Page