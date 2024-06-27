'use client'
import React,{useState} from 'react';


function PayBox() {
    const list = [
        500, 1000, 2000, 2500, 3000, 3500, 4000, 4500, 5000, 5500, 7000,1000
    ];
    const usdtEstimation = Array.from({ length: 96 }, (_, i) => i + 10); 
   const [value, setValue]=useState<number | string>('')
//    console.debug(value)
    return (
        <div className='payBox'>
            <h5>Suggested Amount’s in PKR</h5>
            <div className='btnList my-4'>
                {list.map((item, key) => (
                    <button className='btn shadow-sm border-0'  onClick={()=>setValue(item)} key={key}>{item}</button>
                ))}
            </div>
            <div className="row col-8">
                <div className="col-md-8">
                    <input type="text" className='form-control p-3 text-center text-bold shadow-none ' value={value} placeholder="Amount"/>
                    {/* <span className='text-success d-block'> Delivered Amount in USD 1000</span> */}

                </div>
                <div className="col-md-4">
                    <select className="form-select p-3" onChange={(e)=>setValue(e.target.value)}>
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

                    <input type="text" className='form-control p-3 shadow-none' value="44 58 52 46"  readOnly/>
                </div>
                <div className="col-md-4 mt-5">
                <button className='btn p-3 mx-3' >Close</button>
                <button className='btn btn-primary p-3 shadow-sm'>Add to Caret</button>
                    
                </div>
            </div>
        </div>
    );
}

export default PayBox;
