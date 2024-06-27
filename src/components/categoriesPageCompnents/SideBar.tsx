'use client'
import React from 'react';
import { useRouter,useSearchParams } from 'next/navigation';  

import { categories } from '@/utils/indexPageDummy';

const SideBar: React.FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const typeSearch = searchParams.get('type');
  const navigate = (type: string) => {
    router.push(`/categories?type=${type}`); 
  };
 
  return (
    <div className="sideBar"> 
      <ul>
        {categories?.map((item, key) => (
          <li key={key} className={typeSearch==item && 'sideBar-active'} onClick={() => navigate(item)}>
            {item} 
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
