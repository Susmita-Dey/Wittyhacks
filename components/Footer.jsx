import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsDiscord, BsTwitter } from 'react-icons/bs'

export default function Footer() {
    return (
        <footer className="container mx-auto shadow-sm absolute align-bottom">
            <div className="flex flex-col md:flex-row justify-between items-center mx-5 py-3">
                <div className="flex">
                    <Image src='logo.svg' alt='logo' width={30} height={30} className='flex' />
                    <h2 className="text-lg md:text-xl m-2">Calorine</h2>
                </div>
                <div className="flex flex-col md:flex-row md:mb-auto mt-2 mb-2 text-center gap-1">
                    <p>Copyright @Calorine, 2023.</p>
                    <p>All rights reserved.</p>
                </div>
                <div className="flex gap-2">
                    <Link href="https://github.com/" target="_blank">
                        <BsGithub className="w-8 h-8" />
                    </Link>
                    <Link href="https://twitter.com/" target="_blank">
                        <BsTwitter className="w-8 h-8" />
                    </Link>
                    <Link href="https://discord.com/" target="_blank">
                        <BsDiscord className="w-8 h-8" />
                    </Link>
                </div>
            </div>
        </footer>
    )
}