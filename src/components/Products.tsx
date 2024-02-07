"use client"
import Image from "next/image";
import React, { useState } from "react";
import Header from '../components/header'
import drop from "../../public/assets/Vector (18).svg";
import plus from "../../public/assets/Vector (19).svg";
import product from '../Data/product'
import prev from "../../public/assets/Vector (20).svg";
import next from "../../public/assets/Vector (21).svg";

const Products = () => {
    const [activeNumber, setActiveNumber] = useState(1);

    const handleClick = (number: number) => {
        setActiveNumber(number);
    };
    return (
        <section className="p-10 w-full flex flex-col gap-7 relative">
            <Header />
            <div>
                <h1 className="text-[20px] font-[100] text-color1 font-fold">
                    My product catalogue
                </h1>
            </div>
            <div className="w-full flex items-center justify-between">
                <div className="px-5 py-2 bg-white border-color1 w-fit font-mon text-[14px] font-[600] text-color1 flex">
                    <button className="flex gap-2 items-center justify-center">
                        Product category{" "}
                        <Image src={drop} alt="drop" width={12} height={12} />
                    </button>
                </div>

                <div className="px-5 py-2 bg-color1 border-color1 w-fit font-mon text-[14px] font-[600] text-white flex">
                    <button className="flex gap-2 items-center justify-center">
                        <Image src={plus} alt="drop" width={12} height={12} /> Add product
                    </button>
                </div>
            </div>
            <div className="flex justify-between w-full flex-wrap">
                {product.map((prod: any) => (
                    <div key={prod}>
                        <Image src={prod.image01} alt="product" width={280} />
                        <div className="p-5 bg-white">
                            <h1 className="text-[14px] text-black1 font-[700] font-fold">{prod.title}</h1>
                            <h2 className="text-[16px] text-problack font-[700]">#{prod.price}</h2>
                            <div className="flex items-center gap-5 mt-4">
                                <div className=" bg-white border-color1 w-fit font-mon text-[14px] font-[600] text-color1 flex">
                                    <button className="px-4 py-2 rounded-md bord">Edit</button>
                                </div>
                                <div className="border-color1">
                                    <button className="px-4 py-2 rounded-md bord">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
                }
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
                                onClick={() => handleClick(number)}
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
    );
};

export default Products;
