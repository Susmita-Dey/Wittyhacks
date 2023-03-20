import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function AboutUs() {
    return (
        <section className="container mx-auto h-screen">
            <div className="flex justify-center items-center mx-12 mt-8 mb-5">
                <div className="flex flex-col gap-4">
                    <h2 className="text-3xl text-blue-600 mb-3 font-bold">Hi, I'm Calorine</h2>
                    <p className="text-lg">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores beatae nesciunt voluptatum eos? Perspiciatis corrupti dolore tenetur nisi adipisci alias quod voluptatem consequuntur porro quas atque, odio aspernatur, amet sapiente?</p>
                    <p className="text-lg">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores beatae nesciunt voluptatum eos? Perspiciatis corrupti dolore tenetur nisi adipisci alias quod voluptatem consequuntur porro quas atque, odio aspernatur, amet sapiente?</p>
                </div>
            </div>
        </section>

    )
}