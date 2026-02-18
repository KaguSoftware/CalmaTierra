"use client";
import { useState } from "react";
import { LucideMenu, X } from "lucide-react";
import Image from "next/image";
import { NAVBAR_PAGES } from "./constants";
import Link from "next/link";
export default function Navbar() {
	const [IsOpen, SetIsOpen] = useState(false);
	const toggleMenu = () => SetIsOpen((prev) => !prev);
	return (
		<main>
			<nav className="w-full h-20 z-999 flex items-center gap-8 px-10 bg-white fixed">
				<Link className="flex items-center gap-10 " href={"/Home"}>
					<Image
						src={"/tree.png"}
						width={40}
						height={40}
						alt={"Tree"}
					/>
					<h1 className="text-2xl font-bold text-green-900 tracking-tighter italic">
						CalmaTierra
					</h1>
				</Link>
				<div className=" md:flex hidden items-center ml-auto gap-8">
					{NAVBAR_PAGES.map((item, index) => (
						<Link
							className=" text-green-900 font-semibold"
							key={index}
							href={item.href}
						>
							{item.page}
						</Link>
					))}
					<Link href={"/ContactUs"}>
						<button className="px-4 hover:bg-green-800 font-semibold py-2 rounded-md bg-green-900">
							{" "}
							Contact Us{" "}
						</button>
					</Link>
				</div>

				<button
					onClick={toggleMenu}
					className={`md:hidden ml-auto duration-200 relative text-green-900 ${IsOpen ? "rotate-0" : "rotate-90"}`}
				>
					{IsOpen ? <LucideMenu /> : <X className="rotate:45" />}
				</button>

				<div className="relative md:hidden">
					<div className="bg-amber-400">
						{NAVBAR_PAGES.map(
							(item, index) =>
								IsOpen && (
									<div className="text-bold text-xl px-6 py-6 bg-white h-screen w-screen  flex flex-col gap-4">
										<Link
											className=" text-green-900 font-semibold"
											onClick={() => SetIsOpen(false)}
											key={index}
											href={item.href}
										>
											{item.page}
										</Link>
									</div>
								),
						)}
					</div>
				</div>
			</nav>
		</main>
	);
}
