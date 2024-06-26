'use client';
import React, { useRef } from 'react';
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import CustomImage from '../CustomImage';

interface ImageItem {
  imageLink: string;
}

interface ProductsCardProps {
  imageList: ImageItem[];
  location: string;
  slug: string;
}

const ProductsCard: React.FC<ProductsCardProps> = ({ imageList, location, slug }) => {
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
      <div className="header">
        <h4>
        {slug} Products in <span className="location_text">{location}</span>
        </h4>
      <div><button className="btn btn-primary shadow-sm px-3">View All</button></div>
      </div>
      <div className="products">
        <button className="btn leftBtn" onClick={scrollProductListToLeft}>
          <MdKeyboardArrowLeft />
        </button>
        <ul className="productList" ref={productListRef}>
          {imageList?.map((item, key) => (
            <li key={key}>
              <CustomImage src={item?.imageLink} className="productImage" />
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

export default ProductsCard;
