"use client";
import React, { useRef } from 'react';
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md';
import CustomImage from '../CustomImage';

interface ImageItem {
  name: string; 
  imageLink: string;
}

interface PromotionsCardProps {
  list: ImageItem[];  
}

const CategoriesCard: React.FC<PromotionsCardProps> = ({ list }) => {
  const productListRef = useRef<HTMLUListElement>(null);

  const scrollProductListToLeft = () => {
    if (productListRef.current) {
      productListRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  const scrollProductListToRight = () => {
    if (productListRef.current) {
      productListRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  return (
    <div className="productContainer"> 

      <div className="products">
        <button className="btn leftBtn" onClick={scrollProductListToLeft}>
          <MdKeyboardArrowLeft />
        </button>
        <ul className="productList" ref={productListRef}>
          {list?.map((item, key) => (
            <li key={key}>
              <CustomImage src={item.imageLink} className="productImage" />
            </li>
          ))}
        </ul>
        <button className="btn rightBtn" onClick={scrollProductListToRight}>
          <MdKeyboardArrowRight />
        </button>
      </div>
    </div>
  );
};

export default CategoriesCard;
