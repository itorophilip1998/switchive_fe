"use client";
import React, { useRef } from 'react';
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md';
import CustomImage from '../CustomImage';

interface ImageItem { 
  imageLink: string;
  title:string;
}

interface BlogCardsProps {
  list: ImageItem[]; // Assuming list is passed as props
}

const BlogCards: React.FC<BlogCardsProps> = ({ list }) => {
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
    <div className="productContainer BlogCards">  
    <div className="blogTxt mb-4">
      <div></div>
      <div>------ Blog ------</div>
      <div></div>
    </div>
    {/* <h1 className="font-weight-bold  text-center mb-4">Supported Blockchains</h1> */}
      <div className="products">
        <button className="btn leftBtn" onClick={scrollProductListToLeft}>
          <MdKeyboardArrowLeft />
        </button>
        <ul className="productList" ref={productListRef}>
          {list?.map((item, key) => (
            <li key={key}>
               <div className="card " style={{width: "18rem"}}>
             <CustomImage src={item?.imageLink} className="card-img-top" />
            <div className="card-body">
                <h5 className="card-title text-bold ">{item?.title}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
            </div>
            </div> 
            </li>
          ))}
        </ul>
        <button className="btn rightBtn" onClick={scrollProductListToRight}>
          <MdKeyboardArrowRight />
        </button>
      </div>
      <div className="text-center mt-4">
      <button className="btn btn-primary shadow-sm px-3 ">Show More</button>

      </div>
    </div>
  );
};

export default BlogCards;
