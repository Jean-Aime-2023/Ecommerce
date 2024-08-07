import React from 'react';
import { Link } from 'react-router-dom';
import { Sheet, SheetClose, SheetContent, SheetTrigger } from '../ui/sheet';
import { sidebarLinks } from '../../constants/index';
import { CiMenuBurger } from "react-icons/ci";

const MobileNav = () => {
    return (
        <section className="w-full max-w-[264px] flex justify-end">
            <Sheet>
                <SheetTrigger asChild>
                    <CiMenuBurger color='#0D111E' size={25} className='cursor-pointer' />
                </SheetTrigger>
                <SheetContent side="left" className="border-none">
                    <Link to={'/'}>
                        <h1 className='text-xl font-bold leading-[24px] text-[#474747] inter cursor-pointer'>Kigali Ceramics</h1>
                    </Link>
                    <div className="flex h-[calc(100vh-72px)] flex-col justify-between overflow-y-auto">
                        <SheetClose asChild>
                            <section className=" flex h-full flex-col gap-6 pt-16 text-black">
                                {sidebarLinks.map((item) => {
                                    return (
                                        <SheetClose asChild key={item.route}>
                                            <Link to={item.route} key={item.label}>
                                                <p className="font-semibold">{item.label}</p>
                                            </Link>
                                        </SheetClose>
                                    );
                                })}
                            </section>
                        </SheetClose>
                    </div>
                </SheetContent>
            </Sheet>
        </section>
    );
};

export default MobileNav;
