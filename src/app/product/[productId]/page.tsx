'use client'
import CategoryProductCard from '@/components/categoriesPageCompnents/CategoryProductCard'
import React from 'react'
import { reviewsListdummy, topProduct } from '@/utils/dummy';
import { useRouter } from 'next/navigation';
import CustomImage from '@/components/CustomImage';
import PayBox from '@/components/categoriesPageCompnents/PayBox';
import Reviews from '@/components/categoriesPageCompnents/Reviews';
import ReactStars from 'react-stars';

interface ProductItem {
  imageLink: string;
  title: string;
}
function Page() {
  const navigate = useRouter();

  return (
    <div className='product containerLayout '>
      <div className="productDetails container">
        <div className="header-Details">
          <h4 className="title-text text-bold ">
            Skype
          </h4>
          <p>
            Lorem Ipsum is simply dummy text
          </p>
        </div>

        <div className="row desInfo ">
          <div className="col-md-3">
            <button className="btn  online px-4 my-4  ">online</button>
            <div className="productsPageCard ">
              <CustomImage src={'categories/c3.svg'} />
              <h4 className="text-bold">PKR 1000 - 50000</h4>
            </div>
            {/* top reviews */}

            <div className="rBox mt-4">
              <h6 className="text-bold d-flex justify-content-between align-items-center">Reviews (12)   <ReactStars
                    count={5}
                    value={4}
                    size={20}
                    color2={'#ffd333'}
                    className='stars d-inline-block'
                    edit={false}/></h6>
            {reviewsListdummy?.slice(0,2)?.map((item, key) => <Reviews item={item} key={key} />)}
            </div>
            <div className="watchList">
              <button className="btn  btn-primary px-5 py-4 my-4 text-center  w-100">Add to Wishlist </button>
              <ul>
                <li> <CustomImage src={'product/h1.svg'} /> Instant delivery</li>
                <li> <CustomImage src={'product/h3.svg'} /> Lower network fees</li>
                <li> <CustomImage src={'product/h2.svg'} /> Private and safe payment</li>
              </ul>
            </div>

          </div>
          <div className="col-md-7 ">
            <div className={'desList'}>
              <CustomImage src={`product/m1.svg`} />
              <CustomImage src={`product/m2.svg`} />
              <CustomImage src={`product/m3.svg`} />
            </div>
            <p>
              <h4>  Lorem Ipsum</h4>
              is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to makeLorem Ipsum is simply dummy text of the printing and typesetting industry.
              is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to makeLorem Ipsum is simply dummy text of the printing and typesetting industry.

            </p>
            <p>   <h4>  Lorem Ipsum</h4>
              is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to makeLorem Ipsum is simply dummy text of the printing and typesetting industry.
              is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to makeLorem Ipsum is simply dummy text of the printing and typesetting industry.
              is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to makeLorem Ipsum is simply dummy text of the printing and typesetting industry.

            </p>
            <PayBox />
          </div>
        </div>

      </div>





      <div className="mt-5">
        <h1 className='otherProducth1' >Other products </h1>
        <div className={"categoriesCustomList"}>
          {topProduct?.slice(0, 15)?.map((item: ProductItem, key: number) => (
            <CategoryProductCard key={key} item={item} />
          ))}

        </div>

        <div className="text-center">
          <button className="btn btn-primary" onClick={() => navigate.push('/categories')}>See All</button>

        </div>
      </div>
    </div>
  )
}

export default Page