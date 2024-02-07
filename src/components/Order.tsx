import React from 'react'
import Header from '../components/header'

const Order = () => {
  return (
    <section className='p-10 w-full flex flex-col gap-7'>
      <Header />
        <h1 className='text-color1 font-[500] text-[20px]'>My Orders</h1>
    </section>
  )
}

export default Order
