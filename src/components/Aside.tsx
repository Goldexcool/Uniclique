"use client"
import Image from 'next/image'
import React from 'react'
import logo from '../../public/assets/Group 4 (1).svg'
import order from '../../public/assets/Vector (13).svg'
import products from '../../public/assets/Group (6).svg'
import customers from '../../public/assets/Group (7).svg'
import messages from '../../public/assets/Vector (14).svg'
import settings from '../../public/assets/Group (8).svg'
import rocket from '../../public/assets/Rocket-color (1) 1.svg'
import logout from '../../public/assets/Vector (15).svg'


interface AsideProps {
    setActivePage: (page: string) => void;
}
const Aside: React.FC<AsideProps> = ({ setActivePage }) => {
    return (
        <aside className='flex justify-start items-start left-0 p-[1.4rem] flex-col gap-10 bg-aside font-mon'>
            <div className='flex flex-col gap-10 justify-start items-start ml-[1rem]'>
                <Image src={logo} alt='logo' width={170} height={100} />
                <div className='bg-color1 text-white px-10 py-3 rounded-md mt-[-15px] cursor-pointer'>
                    <p>Admin Dashboard</p>
                </div>
                <div className='flex flex-col gap-5 justify-start items-start '>
                    <div className='flex gap-3 font-[500] text-[19px] cursor-pointer relative' onClick={() => setActivePage('order')}>
                        <Image src={order} alt='order' width={17} height={17} />
                        <h1>Orders</h1>
                        {/* <div className='absolute w-full right-0'>
                            <p className='w-2 h-3 bg-color1 flex '></p>
                        </div> */}
                    </div>
                    <div className='flex gap-3 font-[500] text-[19px] cursor-pointer' onClick={() => setActivePage('product')}>
                        <Image src={products} alt='order' width={17} height={17} />
                        <h1>Products</h1>
                    </div>
                    <div className='flex gap-3 font-[500] text-[19px] cursor-pointer'>
                        <Image src={customers} alt='order' width={17} height={17} />
                        <h1>Customers</h1>
                    </div>
                    <div className='flex gap-3 font-[500] text-[19px] cursor-pointer'>
                        <Image src={messages} alt='order' width={17} height={17} />
                        <h1>Messages</h1>
                    </div>
                    <div className='flex gap-3 font-[500] text-[19px] cursor-pointer'>
                        <Image src={settings} alt='order' width={17} height={17} />
                        <h1>Settings</h1>
                    </div>
                    <div className='flex bg-color3 rounded-md flex-col'>
                        <div className='p-5 flex items-center justify-center gap-4 flex-col'>
                            <h1 className='text-[15px] font-[600] text-color1 w-[204px]'>Upgrade your plan to serve you more</h1>
                            <Image src={rocket} alt='rocket' width={150} height={100} />
                            <p className='bg-color1 text-white px-6 py-2 rounded-md mt-[-15px] cursor-pointer'>Upgrade plan</p>
                        </div>
                    </div>
                    <div className='flex items-center justify-center gap-5'>
                        <Image src={logout} alt='logout' width={20} height={20} />
                        <p>Logout</p>
                    </div>
                </div>
            </div>
        </aside>
    )
}

export default Aside
