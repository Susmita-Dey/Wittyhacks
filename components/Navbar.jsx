import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    return (
        <header className="container mx-auto shadow-sm">
            <nav className="flex justify-between mx-10 py-3">
                <div className="flex">
                    <Image src='logo.svg' alt='logo' width={50} height={50} className='flex' />
                    <h2 className="text-lg md:text-3xl m-2">Calorine</h2>
                </div>
                <ul className="flex list-none md:gap-5 md:text-xl text-lg gap-3 mt-2">
                    <Link href='/'><li className="hover:underline">Home</li></Link>
                    <Link href='/about'><li className="hover:underline">About</li></Link>
                    <Link href='/contact'><li className="hover:underline">Contact</li></Link>
                </ul>
            </nav>
        </header>
    )
}