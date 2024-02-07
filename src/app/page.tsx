"use client"
import React, { useState } from 'react';
import Aside from '../components/Aside';
import Products from '../components/Products';
import Order from '../components/Order';

const Page = () => {
  const [activePage, setActivePage] = useState('order');

  return (
    <section className="flex">
      <Aside setActivePage={setActivePage} />
      {activePage === 'order' && <Order />}
      {activePage === 'product' && <Products />}
    </section>
  );
};

export default Page;