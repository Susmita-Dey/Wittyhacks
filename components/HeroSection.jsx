import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
    const [team, setTeam] = useState('')
    const [count, setCount] = useState(0)
    return (
        <section className="container mx-auto h-screen">
            <div className="flex flex-col flex-wrap justify-center items-center m-5 text-center">
                <div className="flex flex-col justify-center items-center gap-6">
                    <Image src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80' alt="photo" className="rounded-md" width={200} height={200} />
                    <h2 className="text-3xl text-pink-800 font-bold">Calorine Gomes</h2>
                    <p className="text-base text-gray-700 font-medium underline">Full Stack Web Developer</p>
                    <p className="text-xl text-pink-500 font-bold">I'm participating in <Link href="https://wittyhacks.in/" className="underline text-pink-700">WittyHacks</Link> Hackathon</p>
                    <button className="p-4 text-xl italic" onClick={() => setCount(count + 1)}>We might score  <span className="p-2 font-semibold bg-yellow-200">{count}</span> together as a team and win the hackathon</button>
                    <p className="text-xl text-blue-700 font-bold">Wanna team up?</p>
                    <Link href='/contact'>
                        <button className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 font-semibold text-white rounded-md">Contact Me</button>
                    </Link>
                </div>
            </div>
        </section>

    )
}