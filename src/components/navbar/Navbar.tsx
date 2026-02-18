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
			<nav className="w-full h-20 z-999 flex items-center gap-8 md:px-10 px-4 bg-white/80 backdrop-blur-lg fixed">
				<Link className="flex items-center gap-10 " href={"/home"}>
					<Image
						src={"/CalmaTierraLogo.jpeg"}
						width={40}
						height={40}
						alt={"Logo"}
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
					<Link href={"/contactus"}>
						<button className="px-4 text-white hover:bg-green-800 font-semibold py-2 rounded-md bg-green-900">
							Contact Us
						</button>
					</Link>
				</div>
				<button
					onClick={toggleMenu}
					className={`md:hidden ml-auto duration-200 relative text-green-900 ${IsOpen ? "rotate-0" : "rotate-90"}`}
				>
					{IsOpen ? <LucideMenu /> : <X className="rotate:45" />}
				</button>
				{IsOpen && (
					<div className="md:hidden absolute start-0 top-20 w-full bg-white border-t">
						<div className="flex flex-col gap-4 px-4 py-6">
							{NAVBAR_PAGES.map((item, index) => (
								<Link
									key={index}
									href={item.href}
									className="text-green-900 font-semibold"
									onClick={() => SetIsOpen(false)}
								>
									{item.page}
								</Link>
							))}
							<Link
								href="/contactus"
								onClick={() => SetIsOpen(false)}
							>
								<button className="px-4 py-2 rounded-md bg-green-900 text-white font-semibold">
									Contact Us
								</button>
							</Link>
						</div>
					</div>
				)}
			</nav>
		</main>
	);
}
