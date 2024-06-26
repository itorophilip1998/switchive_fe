import CustomImage from '@/components/CustomImage';
import { companyFooter,businessFooter ,exchangeFooter,resourceFooter} from '@/utils/indexPageDummy';
import React from 'react';
import { FaFacebookF } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

interface FooterProps {
  list: string[];  
}

const Footer: React.FC<FooterProps> = () => {
 
  return (
    <footer> 
      <div className="footerList">
      <div className="logoFooter">
      <CustomImage src={'indexPage/navLogo.svg'} className="footerLogo" />

         <p>
         Lorem Ipsum is simply dummy text of  printing and typesetting industry Lorem Ipsum is simply dummy text of  printing and typesetting industry.
         </p>
         <p className="appStores">
      <CustomImage src={'indexPage/appStore.svg'}  />
      <CustomImage src={'indexPage/googleStore.svg'}   />

         </p>
      </div> 
     <ul>
        <h6>Company</h6>
        {companyFooter?.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <ul>
        <h6>Businesses</h6>
        {businessFooter?.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <ul>
        <h6>Exchange</h6>
        {exchangeFooter?.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <ul>
        <h6>Resources</h6>
        {resourceFooter?.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul> 
      

     
      </div>

      <div className="w-75 mt-0 pt-0 mx-auto">
         <hr/>
         <div className="copyRight">
            <span>Copyright 2022, Switchive

            </span>

            <div className='icons'>
              <button className="btn shadow"><FaFacebookF   /> </button>
              <button className="btn shadow"><FaXTwitter   /> </button>
              <button className="btn shadow"><FaLinkedinIn   /> </button>
              <button className="btn shadow"><RiInstagramFill   /> </button>
            


            </div>
         </div>
      </div>


     


    </footer>
  );
};

export default Footer;
