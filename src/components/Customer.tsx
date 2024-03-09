import React from 'react'
import Image from 'next/image'
import search from "../../public/assets/icons (3).svg";
import nortification from "../../public/assets/Vector (16).svg";
import profile from "../../public/assets/Ellipse 3 (1).svg";
import Customers from '../Data/customer';

const Customer = () => {
  return (
    <section className="p-10 w-full flex flex-col gap-7 relative">
      <div className="flex md:justify-between md:items-center justify-start items-start w-full flex-col md:flex-row">
        <div className="bg-white rounded-md md:w-[550px] w-full flex items-center border-white mt-10 md:mt-0">
          <input
            type="text"
            placeholder="Search your customers"
            className="p-2 py-3 w-[95%]  text-[12px] border-none"
          />
          <Image src={search} alt="search" width={12} height={12} />
        </div>
        <div className="flex gap-8 items-center justify-center mt-2 md:mt-0">
          <Image
            src={nortification}
            alt="nortificationbar"
            width={15}
            height={15}
          />
          <div className="flex items-center gap-3">
            <Image src={profile} alt="profile" width={30} height={30} />
            <div className="flex flex-col items-start justify-start">
              <h1 className="text-[15px]">Akintayo daniel</h1>
              <h2 className="text-[15px]">ID: 24653542</h2>
            </div>
          </div>
        </div>
      </div>

      <div className='overflow-x-auto'>
        <table className="w-full border-collapse border border-gray-100">
          <thead>
            <tr className="text-problack">
              <th className="py-4 px-6 text-left">Customer Name</th>
              <th className="py-4 px-6 text-left">Location</th>
              <th className="py-4 px-6 text-left">Date</th>
              <th className="py-4 px-6 text-left">Status</th>
            </tr>
          </thead>
          <tbody className='mb-5'>
            {Customers.map((customer) => (
              <tr
                key={customer.id}
                className="border-b border-gray-200 text-[15px] font-mon font-[600] hover:bg-gray-100 transition-all cursor-pointer mt-20 bg-white"
              >
                <td className="px-6 py-3 ">
                  <div className="flex items-center gap-3">
                    <div className="w-8 ">
                      <Image
                        src={customer.image01}
                        alt={customer.name}
                        width={70}
                        height={70}
                      />
                    </div>
                    <div className="flex flex-col items-center">
                      <div>{customer.name}</div>
                      <div className="text-gray-500 text-[12px]">{customer.email}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-3 md:text-[15px] text-[12px]">{customer.location}</td>
                <td className="px-6 py-3 md:text-[15px] text-[12px]">{customer.date}</td>
                <td className={`px-6 py-1 lg:mt-[1rem] mt-[1.3rem] flex justify-center items-center w-[70%] md:text-[12px] text-[10px]  rounded-full ${customer.status === 'Confirmed' ? 'text-confirmed bg-confi-bg' : ''}`}>
                  {customer.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default Customer
