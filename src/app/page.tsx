"use client"
import React, { useState } from 'react';
import Aside from '../components/Aside';
import Products from '../components/Products';
import Order from '../components/Order';
import Customer from '../components/Customer';

const Page = () => {
  const [activePage, setActivePage] = useState('order');

  return (
    <section className="flex">
      <Aside setActivePage={setActivePage}/>
      {activePage === 'order' && <Order />}
      {activePage === 'product' && <Products />}
      {activePage === 'customer' && <Customer />}
    </section>
  );
};

export default Page;