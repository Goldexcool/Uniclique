"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import logo from '../../public/assets/Group 4 (1).svg'
import order from '../../public/assets/Vector (13).svg'
import products from '../../public/assets/Group (6).svg'
import customers from '../../public/assets/Group (7).svg'
import messages from '../../public/assets/Vector (14).svg'
import settings from '../../public/assets/Group (8).svg'
import rocket from '../../public/assets/Rocket-color (1) 1.svg'
import logout from '../../public/assets/Vector (15).svg'
import menu from '../../public/assets/bx-menu-alt-right.svg'
import close from '../../public/assets/bx-x (1).svg'



interface AsideProps {
    setActivePage: (page: string) => void;
}
const Aside: React.FC<AsideProps> = ({ setActivePage }) => {

    const [activeTab, setActiveTab] = useState('order');
    const [open, setOpen] = useState(false);

    const handleTabClick = (tab: string) => {
        setActiveTab(tab);
        setActivePage(tab);
    };

    const hammenu = () => {
        setOpen(!open);
    }


    const handleClickOutsideMenu = (e: MouseEvent) => {
        const target = e.target as HTMLElement;

        // Check if the click occurred outside the menu
        if (!target.closest('.mobile-menu') && open) {
            setOpen(false);
        }
    };

    // Add click event listener to close the menu when clicking outside
    useEffect(() => {
        document.addEventListener('click', handleClickOutsideMenu);

        // Cleanup the event listener on component unmount
        return () => {
            document.removeEventListener('click', handleClickOutsideMenu);
        };
    }, [open]);

    console.log(open);
    return (
        <section className=''>
            <div className=''>
                <div className="w-full lg:hidden flex justify-center top-[3%] z-[100] items-center absolute px-[2rem]">
                    <Image src={logo} alt="logo" width={150} height={100} />
                    <div className='w-1/2 flex justify-end items-end cursor-pointer' onClick={hammenu} >
                        <Image
                            src={menu}
                            alt=""
                            width={30}
                            height={30}
                        />
                    </div>
                </div>
            </div>
            {open && (
                <aside className={`lg:hidden flex justify-start items-start left-0 p-[1.4rem] flex-col gap-10 bg-aside font-mon absolute z-[100] transition-transform transform ${open ? 'translate-x-0' : '-translate-x-full'}`}>
                    <div className='flex flex-col gap-10 justify-start items-start ml-[1rem]'>
                        <div className='flex justify-between w-full items-center'>
                            <Image src={logo} alt='logo' width={130} height={100} />
                            <div className='p-3 bg-gray-300 rounded-full ' onClick={hammenu}>
                            <Image src={close} alt='close' width={20} height={20} />
                            </div>
                        </div>

                        <div className='bg-color1 text-white px-10 py-3 rounded-md mt-[-15px] cursor-pointer'>
                            <p>Admin Dashboard</p>
                        </div>
                        <div className='flex flex-col gap-5 justify-start items-start '>
                            <div
                                className={`flex gap-3 font-[500] text-[19px] cursor-pointer relative`}
                                onClick={() => handleTabClick('order')}
                            >
                                <Image src={order} alt='order' width={17} height={17} />
                                <h1>Orders</h1>
                                {activeTab === 'order' && (
                                    <div className='absolute w-full left-[270%]'>
                                        <div className='w-2 h-6 bg-color1 rounded-md'></div>
                                    </div>
                                )}
                            </div>
                            <div
                                className={`flex gap-3 font-[500] text-[19px] cursor-pointer relative`}
                                onClick={() => handleTabClick('product')}
                            >
                                <Image src={products} alt='order' width={17} height={17} />
                                <h1>Products</h1>
                                {activeTab === 'product' && (
                                    <div className='absolute w-full left-[220%]'>
                                        <div className='w-2 h-6 bg-color1 rounded-md'></div>
                                    </div>
                                )}
                            </div>
                            <div
                                className={`flex gap-3 font-[500] text-[19px] cursor-pointer relative`}
                                onClick={() => handleTabClick('customer')}
                            >
                                <Image src={customers} alt='order' width={17} height={17} />
                                <h1>Customers</h1>
                                {activeTab === 'customer' && (
                                    <div className='absolute w-full left-[190%]'>
                                        <div className='w-2 h-6 bg-color1 rounded-md'></div>
                                    </div>
                                )}
                            </div>
                            <div
                                className={`flex gap-3 font-[500] text-[19px] cursor-pointer relative`}
                                onClick={() => handleTabClick('message')}
                            >
                                <Image src={messages} alt='order' width={17} height={17} />
                                <h1>Messages</h1>
                                {activeTab === 'message' && (
                                    <div className='absolute w-full left-[205%]'>
                                        <div className='w-2 h-6 bg-color1 rounded-md'></div>
                                    </div>
                                )}
                            </div>
                            <div
                                className={`flex gap-3 font-[500] text-[19px] cursor-pointer relative`}
                                onClick={() => handleTabClick('settings')}
                            >
                                <Image src={settings} alt='order' width={17} height={17} />
                                <h1>Settings</h1>
                                {activeTab === 'settings' && (
                                    <div className='absolute w-full left-[235%]'>
                                        <div className='w-2 h-6 bg-color1 rounded-md'></div>
                                    </div>
                                )}
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

            <aside className='lg:flex justify-start items-start left-0 p-[1.4rem] flex-col gap-10 bg-aside font-mon  hidden'>
                <div className='flex flex-col gap-10 justify-start items-start ml-[1rem]'>
                    <Image src={logo} alt='logo' width={170} height={100} />
                    <div className='bg-color1 text-white px-10 py-3 rounded-md mt-[-15px] cursor-pointer'>
                        <p>Admin Dashboard</p>
                    </div>
                    <div className='flex flex-col gap-5 justify-start items-start '>
                        <div
                            className={`flex gap-3 font-[500] text-[19px] cursor-pointer relative`}
                            onClick={() => handleTabClick('order')}
                        >
                            <Image src={order} alt='order' width={17} height={17} />
                            <h1>Orders</h1>
                            {activeTab === 'order' && (
                                <div className='absolute w-full left-[270%]'>
                                    <div className='w-2 h-6 bg-color1 rounded-md'></div>
                                </div>
                            )}
                        </div>
                        <div
                            className={`flex gap-3 font-[500] text-[19px] cursor-pointer relative`}
                            onClick={() => handleTabClick('product')}
                        >
                            <Image src={products} alt='order' width={17} height={17} />
                            <h1>Products</h1>
                            {activeTab === 'product' && (
                                <div className='absolute w-full left-[220%]'>
                                    <div className='w-2 h-6 bg-color1 rounded-md'></div>
                                </div>
                            )}
                        </div>
                        <div
                            className={`flex gap-3 font-[500] text-[19px] cursor-pointer relative`}
                            onClick={() => handleTabClick('customer')}
                        >
                            <Image src={customers} alt='order' width={17} height={17} />
                            <h1>Customers</h1>
                            {activeTab === 'customer' && (
                                <div className='absolute w-full left-[190%]'>
                                    <div className='w-2 h-6 bg-color1 rounded-md'></div>
                                </div>
                            )}
                        </div>
                        <div
                            className={`flex gap-3 font-[500] text-[19px] cursor-pointer relative`}
                            onClick={() => handleTabClick('message')}
                        >
                            <Image src={messages} alt='order' width={17} height={17} />
                            <h1>Messages</h1>
                            {activeTab === 'message' && (
                                <div className='absolute w-full left-[205%]'>
                                    <div className='w-2 h-6 bg-color1 rounded-md'></div>
                                </div>
                            )}
                        </div>
                        <div
                            className={`flex gap-3 font-[500] text-[19px] cursor-pointer relative`}
                            onClick={() => handleTabClick('settings')}
                        >
                            <Image src={settings} alt='order' width={17} height={17} />
                            <h1>Settings</h1>
                            {activeTab === 'settings' && (
                                <div className='absolute w-full left-[235%]'>
                                    <div className='w-2 h-6 bg-color1 rounded-md'></div>
                                </div>
                            )}
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

        </section>

    )
}

export default Aside
