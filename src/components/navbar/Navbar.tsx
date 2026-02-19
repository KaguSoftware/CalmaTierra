"use client";
import { useState, useEffect } from "react";
import { LucideMenu, X, Globe } from "lucide-react";
import Image from "next/image";
import { NAVBAR_PAGES } from "./constants";
import { Link, usePathname, useRouter } from "@/src/i18n/routing";
import { useParams } from "next/navigation";
import { useTranslations } from "next-intl";

export default function Navbar() {
	const t = useTranslations();
	const [isOpen, setIsOpen] = useState(false);
	const pathname = usePathname();
	const router = useRouter();
	const params = useParams();
	const locale = params.locale as string;
    
	// Lock body scroll when menu is open
	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "auto";
		}
		return () => {
			document.body.style.overflow = "auto";
		};
	}, [isOpen]);

	// Close menu on route change
	useEffect(() => {
		// eslint-disable-next-line react-hooks/set-state-in-effect
		setIsOpen(false);
	}, [pathname]);

	const toggleMenu = () => setIsOpen((prev) => !prev);

	const toggleLanguage = () => {
		const newLocale = locale === "en" ? "es" : "en";
		router.replace(pathname, { locale: newLocale });
	};

	return (
		<div className="h-20">
			<nav
				className={`w-full h-20 z-[9999] flex items-center gap-8 md:px-10 px-4 fixed top-0 left-0 border-b border-neutral-100 transition-colors duration-200 ${
					isOpen ? "bg-white" : "bg-white/90 backdrop-blur-lg"
				}`}
			>
				<Link className="flex items-center gap-3" href="/">
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

				<div className="md:flex hidden items-center ml-auto gap-6">
					{NAVBAR_PAGES.map((item, index) => (
						<Link
							className="text-green-900 font-semibold hover:text-green-700 transition-colors"
							key={index}
							href={item.href}
						>
							{t(item.page)}
						</Link>
					))}

					{/* Single Button Language Switcher Desktop */}
					<button
						onClick={toggleLanguage}
						className="flex items-center gap-2 px-4 py-2 rounded-full border border-neutral-200 text-sm font-bold text-green-900 hover:bg-neutral-50 hover:border-green-900 transition-all active:scale-95 ml-2"
					>
						<Globe className="w-4 h-4" />
						{locale === "en" ? "EN" : "ES"}
					</button>

					<Link href="/contact">
						<button className="px-6 text-white hover:bg-green-800 font-semibold py-2.5 rounded-full bg-green-900 transition-all shadow-sm active:scale-95">
							{t("Navigation.contact")}
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
					<div className="md:hidden fixed inset-x-0 top-20 bottom-0 bg-white z-[9998]">
						<div className="flex flex-col gap-6 px-6 py-8 border-t border-neutral-100 h-full overflow-y-auto">
							{NAVBAR_PAGES.map((item, index) => (
								<Link
									key={index}
									href={item.href}
									className="text-xl text-green-900 font-bold border-b border-neutral-50 pb-4"
									onClick={() => setIsOpen(false)}
								>
									{t(item.page)}
								</Link>
							))}

							{/* Single Button Language Switcher Mobile */}
							<button
								onClick={() => {
									toggleLanguage();
									setIsOpen(false);
								}}
								className="flex items-center justify-center gap-2 w-full py-3 rounded-xl border border-neutral-200 text-lg font-bold text-green-900 bg-neutral-50 active:bg-neutral-100 transition-all"
							>
								<Globe className="w-5 h-5" />
								{locale === "en"
									? "Switch to Español"
									: "Cambiar a English"}
							</button>

							<Link
								href="/contact"
								onClick={() => setIsOpen(false)}
								className="mt-2"
							>
								<button className="w-full px-4 py-4 rounded-xl bg-green-900 text-white text-lg font-bold shadow-md">
									{t("Navigation.contact")}
								</button>
							</Link>
						</div>
					</div>
				)}
			</nav>
		</div>
	);
}
