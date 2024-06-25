import React from 'react';
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import CustomImage from '../CustomImage';

interface ImageItem {
  imageLink: string;
}

interface PromotionsCardProps {
  imageList: ImageItem[];
  location: string;
  slug: string;
}

const PromotionsCard: React.FC<PromotionsCardProps> = ({ imageList, location, slug }) => {

  return (
    <div className="productContainer">
      <div className="header">
        {slug} Products in {location}
      </div>
      <div className="products">
        <button className="btn leftBtn">
          <MdKeyboardArrowLeft />
        </button>
        <ul className="productList">
          {imageList?.map((item, key) => (
            <li key={key}>
              <CustomImage src={item?.imageLink} className="productImage" />
            </li>
          ))}
        </ul>
        <button className="btn rightBtn">
          <MdKeyboardArrowRight />
        </button>
      </div>
    </div>
  );
}

export default PromotionsCard;
