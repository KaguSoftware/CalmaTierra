"use client";
import { useState } from "react";
import { LucideMenu, X } from "lucide-react";
import Image from "next/image";
import { NAVBAR_PAGES } from "./constants";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);
	const params = useParams();
	const locale = params.locale as string;

	const toggleMenu = () => setIsOpen((prev) => !prev);

	return (
		<div className="h-20">
			<nav className="w-full h-20 z-[9999] flex items-center gap-8 md:px-10 px-4 bg-white/90 backdrop-blur-lg fixed top-0 left-0 border-b border-neutral-100">
				<Link className="flex items-center gap-3" href={`/${locale}`}>
					<div className="relative w-10 h-10 overflow-hidden rounded-full border border-green-900/10">
						<Image
							src={"/CalmaTierraLogo.jpeg"}
							fill
							className="object-cover"
							alt={"Logo"}
						/>
					</div>
					<h1 className="text-2xl font-bold text-green-900 tracking-tighter italic">
						CalmaTierra
					</h1>
				</Link>

				<div className="md:flex hidden items-center ml-auto gap-8">
					{NAVBAR_PAGES.map((item, index) => (
						<Link
							className="text-green-900 font-semibold hover:text-green-700 transition-colors"
							key={index}
							href={`/${locale}${item.href}`}
						>
							{item.page}
						</Link>
					))}
					<Link href={`/${locale}/contact`}>
						<button className="px-6 text-white hover:bg-green-800 font-semibold py-2.5 rounded-full bg-green-900 transition-all shadow-sm active:scale-95">
							Contact Us
						</button>
					</Link>
				</div>

				<button
					onClick={toggleMenu}
					className="md:hidden ml-auto p-2 text-green-900 transition-transform active:scale-90"
				>
					{isOpen ? <X size={28} /> : <LucideMenu size={28} />}
				</button>

				{/* Mobile Menu */}
				{isOpen && (
					<div className="md:hidden fixed inset-x-0 top-20 bottom-0 bg-white z-[9998] animate-in fade-in slide-in-from-top-2 duration-200">
						<div className="flex flex-col gap-6 px-6 py-8 border-t border-neutral-100">
							{NAVBAR_PAGES.map((item, index) => (
								<Link
									key={index}
									href={`/${locale}${item.href}`}
									className="text-xl text-green-900 font-bold border-b border-neutral-50 pb-4"
									onClick={() => setIsOpen(false)}
								>
									{item.page}
								</Link>
							))}
							<Link
								href={`/${locale}/contact`}
								onClick={() => setIsOpen(false)}
								className="mt-4"
							>
								<button className="w-full px-4 py-4 rounded-xl bg-green-900 text-white text-lg font-bold shadow-md">
									Contact Us
								</button>
							</Link>
						</div>
					</div>
				)}
			</nav>
		</div>
	);
}
