import React from 'react';
import CustomImage from './CustomImage';  
import Link from 'next/link';  
import { faq } from '@/utils/indexPageDummy';  

function Faq() {
  return (
    <div className="faq containerLayout">
      {faq?.map((item, key) => (
        <div key={key} className="card" style={{ width: "20rem" }}>
          <CustomImage src={item?.imageLink}   />  
          <div className="card-body">
            <h5 className="card-title">{item?.title}</h5>
            <p className="card-text py-2">
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
            </p>
            <Link href="#">  
              Link goes here 
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Faq;
