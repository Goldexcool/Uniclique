"use client"
import React, { useState } from 'react'
import Header from '../components/header'
import Image from 'next/image'
import Orders from '../Data/order'
import prev from "../../public/assets/Vector (20).svg";
import next from "../../public/assets/Vector (21).svg";

const Order = () => {
    const [activeNumber, setActiveNumber] = useState(1);
    const [activeTab, setActiveTab] = useState('All');


    const handleClick = (number: number, tab: string) => {
        setActiveNumber(number);
        setActiveTab(tab);
    };

    const getStatusStyle = (status: string) => {
        switch (status) {
            case 'Confirmed':
                return 'text-confirmed text-[12px] py-1 bg-confi-bg rounded-full';
            case 'Pending':
                return 'text-pending text-[12px] py-1 bg-pending-bg rounded-full justify-center';
            case 'Cancelled':
                return 'text-cancelled text-[12px] py-1 bg-cancelled-bg rounded-full';
            default:
                return '';
        }
    };
    const filteredOrders = () => {
        switch (activeTab) {
            case 'All':
                return Orders;
            case 'Completed':
                return Orders.filter(order => order.status === 'Confirmed');
            case 'Pending':
                return Orders.filter(order => order.status === 'Pending');
            case 'Cancel':
                return Orders.filter(order => order.status === 'Cancelled');
            default:
                return Orders;
        }
    };

    const getUnderlineStyle = (tab: string) => {
        return activeTab === tab ? 'border-b-2 border-color1 pb-2 transition duration-300 ease-in-out' : '';
    };

    return (
        <section className='p-10 w-full flex flex-col gap-7 relative'>
            <Header />
            <h1 className='text-color1 font-[500] text-[20px]'>My Orders</h1>
            <div className=' bg-white rounded-sm'>
                <div className='flex w-full justify-around items-center text-[20px] p-5'>
                    <h1
                        onClick={() => handleClick(1, 'All')}
                        className={`cursor-pointer ${getUnderlineStyle('All')} ${activeTab === 'All' ? 'active-tab text-color1 text-[17px] font-[600]' : 'inactive-tab text-gray-500 text-[17px]'}`}
                    >
                        All orders
                    </h1>
                    <h2
                        onClick={() => handleClick(2, 'Completed')}
                        className={`cursor-pointer ${getUnderlineStyle('Completed')} ${activeTab === 'Completed' ? 'active-tab text-color1 text-[17px]' : 'inactive-tab text-gray-500 text-[17px]'}`}
                    >
                        Completed
                    </h2>
                    <h3
                        onClick={() => handleClick(3, 'Pending')}
                        className={`cursor-pointer ${getUnderlineStyle('Pending')} ${activeTab === 'Pending' ? 'active-tab text-color1 text-[17px]' : 'inactive-tab text-gray-500 text-[17px]'}`}
                    >
                        Pending
                    </h3>
                    <h4
                        onClick={() => handleClick(4, 'Cancel')}
                        className={`cursor-pointer ${getUnderlineStyle('Cancel')} ${activeTab === 'Cancel' ? 'active-tab text-color1 text-[17px]' : 'inactive-tab text-gray-500 text-[17px]'}`}
                    >
                        Cancel
                    </h4>
                </div>
                <hr className='bg-color1 mt-1' />
                <div className='overflow-x-auto'>
                    <table className='min-w-full bg-white border-collapse border border-gray-100'>
                        <thead>
                            <tr className='bg-color1 text-white'>
                                <th className='py-4 px-6 text-left'>Product Name</th>
                                <th className='py-4 px-6 text-left'>Order ID</th>
                                <th className='py-4 px-6 text-left'>Order Date</th>
                                <th className='py-4 px-6 text-left'>Price</th>
                                <th className='py-4 px-6 text-left'>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredOrders().slice(0, 5).map((order) => (
                                <tr key={order.id} className='border-b border-gray-200 text-[15px] font-mon font-[600]'>
                                    <td className='px-6 py-4'>
                                        <div className='flex items-center'>
                                            <div className='w-4 mr-2'>
                                                <Image src={order.image01} alt={order.productName} width={12} height={12} />
                                            </div>
                                            {order.productName}
                                        </div>
                                    </td>
                                    <td className='px-6 py-5'>#{order.orderId}</td>
                                    <td className='px-6 py-5'>{order.orderDate}</td>
                                    <td className='px-6 py-5'>&#8358;{order.price}</td>
                                    <td className={`px-6 py-1 mt-[0.9rem] flex justify-center items-center w-[70%] ${getStatusStyle(order.status)}`}>{order.status}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

            </div>
            <div className="bottom-3 absolute flex items-center gap-10">
                <h1 className="text-[12px] font-[500] text-color1 font-fold">Showing 1 pages of 5 entries</h1>
                <div className="flex gap-4">
                    <div className="flex gap-3 items-center">
                        <Image src={prev} alt="prev" width={12} height={12} />
                        <h1 className="text-[12px] font-[700] text-color1">Previous</h1>
                    </div>
                    <div className="flex gap-2 text-[12px] font-[700]">
                        {[1, 2, 3, 4, 5].map((number) => (
                            <h1
                                key={number}
                                className={`px-1 rounded-full cursor-pointer ${activeNumber === number ? 'bg-color1 text-white' : 'bg-color2 text-color1'}`}
                                onClick={() => handleClick(number, activeTab)}
                            >
                                {number}
                            </h1>
                        ))}
                    </div>
                    <div className="flex gap-3 items-center">
                        <h1 className="text-[12px] font-[700] text-color1">Next</h1>
                        <Image src={next} alt="next" width={12} height={12} />
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Order
