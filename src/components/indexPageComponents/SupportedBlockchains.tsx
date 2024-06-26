"use client";
import React, { useRef } from 'react';
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md';
import CustomImage from '../CustomImage';

interface ImageItem { 
  imageLink: string;
}

interface SupportedBlockchainsProps {
  list: ImageItem[]; // Assuming list is passed as props
}

const SupportedBlockchains: React.FC<SupportedBlockchainsProps> = ({ list }) => {
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
    <div className="productContainer SupportedBlockchains">  
    <h1 className="font-weight-bold  text-center mb-4">Supported Blockchains</h1>
      <div className="products">
        <button className="btn leftBtn" onClick={scrollProductListToLeft}>
          <MdKeyboardArrowLeft />
        </button>
        <ul className="productList" ref={productListRef}>
          {list?.map((item, key) => (
            <li key={key}>
              <CustomImage src={item.imageLink}   />
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

export default SupportedBlockchains;
