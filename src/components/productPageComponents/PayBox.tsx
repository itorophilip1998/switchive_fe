'use client'
import React,{useState} from 'react';
import { useSelector, useDispatch } from 'react-redux'; 
import { addItem } from '@/store/cartSlice';
import { usePathname } from 'next/navigation';

function PayBox() {
    const dispatch = useDispatch();
    const getpath = usePathname();
    const list = [
        500, 1000, 2000, 2500, 3000, 3500, 4000, 4500, 5000, 5500, 7000,1000
    ];
    const usdtEstimation = Array.from({ length: 96 }, (_, i) => i + 10); 
   const [value, setValue]=useState<number | string>('')
   const handleAddToCart = (id: number, name: string) => { 
    dispatch(addItem({ id, name, amount:value }));
  };
  const productId=getpath.split('/').filter(Boolean).pop(); 

  const productName="New Product";
    return (
        <div className='payBox'>
            <h5>Suggested Amount’s in PKR</h5>
            <div className='btnList my-4'>
                {list.map((item, key) => (
                    <button className='btn shadow-sm border-0'  onClick={()=>setValue(item)} key={key}>{item}</button>
                ))}
            </div>
            <div className="row ">
                <div className="col-md-8">
                    <input type="number" className='form-control p-3 text-center text-bold shadow-sm ' onChange={(e)=>setValue(e.target.value)} value={value} placeholder="Amount"/>
                    {/* <span className='text-success d-block'> Delivered Amount in USD 1000</span> */}
                </div>
                <div className="col-md-4">
                    <select className="form-select p-3 " onChange={(e)=>setValue(e.target.value)}>
                        <option value="">Select Estimated</option>
                        {usdtEstimation.map((item, key) => (
                            <option key={key} value={`${item}000`}>
                                {item} USD Estimated Price 
                            </option>
                        ))}
                    </select>
                </div>
                
                <div className="col-md-8 mt-4 ">
                <span className='d-block'> The Phone Number to refill</span> 
                    <input type="text" className='form-control p-3 shadow-sm text-center' value="44 58 52 46"  readOnly/>
                </div>
                <div className="col-md-4 mt-5">
                <button className='btn p-3 mx-3' >Close</button>
                {/* handleAddToCart(product.id, product.name, product.price)} */}
                <button className='btn btn-primary p-3 shadow-sm' onClick={() => handleAddToCart(productId, productName)}>Add to Cart</button>
                    
                </div>
            </div>
        </div>
    );
}

export default PayBox;
