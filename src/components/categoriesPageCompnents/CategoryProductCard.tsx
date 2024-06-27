'use client'
import React from 'react'
import CustomImage from '../CustomImage'
import { useRouter } from 'next/navigation';

interface ProductsItemsProps{
    item:itemList;
}

interface itemList{
    imageLink:string;
    title:string;
}

const CategoryProductCard:React.FC<ProductsItemsProps> =  ({item}) =>{
  const navigate=useRouter();
  return ( 
        <div className={"card"} style={{ width: "18rem" }} onClick={()=>navigate.push(`/product/${item?.title}`)}>
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
     
  )
}

export default CategoryProductCard