'use client'
import React, { Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation'; // Import useRouter and useSearchParams from next/navigation
import { categories } from '@/utils/indexPageDummy'; // Import categories from '@/utils/indexPageDummy'

const SideBar: React.FC = () => {
  const router = useRouter();

  return (
    <div className="sideBar">
      <ul>
        <Suspense fallback={<div>Loading...</div>}>
          <SidebarContent />
        </Suspense>
      </ul>
    </div>
  );
};

const SidebarContent: React.FC = () => {
  const searchParams = useSearchParams();
  const typeSearch = searchParams.get('type'); // Retrieve 'type' query parameter from searchParams

  const router = useRouter();

  const navigate = (type: string) => {
    router.push(`/categories?type=${type}`); // Navigate to /categories with 'type' query parameter
  };

  return (
    <>
      {categories?.map((item, key) => (
        <li
          key={key}
          className={typeSearch === item ? 'sideBar-active' : ''}
          onClick={() => navigate(item)}
        >
          {item}
        </li>
      ))}
    </>
  );
};

export default SideBar;
