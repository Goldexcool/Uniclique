import React from 'react'
import search from "../../public/assets/icons (3).svg";
import nortification from "../../public/assets/Vector (16).svg";
import profile from "../../public/assets/Ellipse 3 (1).svg";
import Image from 'next/image';

const Header = () => {
    return (
        <div className="flex justify-between items-center w-full">
            <div className="bg-white rounded-md w-[550px] flex items-center border-white">
                <input
                    type="text"
                    placeholder="Search your order"
                    className="p-2 py-3 w-[95%] text-[12px] border-none"
                />
                <Image src={search} alt="search" width={12} height={12} />
            </div>
            <div className="flex gap-8 items-center justify-center">
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
    )
}

export default Header
