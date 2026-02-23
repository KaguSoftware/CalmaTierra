"use client";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { INDEX_HERO_CONTENT } from "./constants";
import { motion } from "motion/react";
import { fadeInUp } from "@/src/lib/animations";

type RouteParams = { locale: "en" | "es" };

export default function Hero() {
	const t = useTranslations();
	const { locale } = useParams<RouteParams>();

	const withLocale = (path: string) => `/${locale}${path}`;
	return (
		<main className="relative min-h-[80vh] text-white overflow-hidden">
			{/* background image and overlay */}
			<motion.div
				initial={{ scale: 1.1, opacity: 0 }}
				animate={{ scale: 1, opacity: 1 }}
				transition={{ duration: 1.5 }}
			>
				<Image
					src={INDEX_HERO_CONTENT.image.src}
					alt={INDEX_HERO_CONTENT.image.alt}
					fill
					priority
					className="object-cover"
				/>
				<div className="absolute inset-0 bg-black/60" />
			</motion.div>

			{/* content */}
			<div className="flex relative mx-auto items-center justify-center md:max-w-6xl min-h-[70vh] px-6 py-20 ">
				<motion.div
					initial="initial"
					animate="animate"
					variants={fadeInUp}
					className="text-center text-white mt-30"
				>
					<h1 className="font-serif font-semibold md:text-6xl text-3xl ">
						{t(INDEX_HERO_CONTENT.headerOne)}
						<br />
						<span className="italic font-semibold text-[#BFA05A]">
							{t(INDEX_HERO_CONTENT.headerTwo)}
						</span>
					</h1>

					<p className="mx-auto text-xl text-center m-6 max-w-2xl">
						{t(INDEX_HERO_CONTENT.description)}
					</p>

					<div className="flex flex-col items-center justify-center gap-4 sm:flex-row font-bold text-lg ">
						<Link
							href={withLocale(INDEX_HERO_CONTENT.buttonOne.href)}
							className="transition bg-white hover:-translate-y-1 text-black rounded-sm px-6 py-3 items-center justify-center hover:bg-white/80 "
						>
							{t(INDEX_HERO_CONTENT.buttonOne.label)}
						</Link>

						<Link
							href={withLocale(INDEX_HERO_CONTENT.buttonTwo.href)}
							className="transition border-2 rounded-sm px-6 py-2.5 hover:bg-white hover:text-black"
						>
							{t(INDEX_HERO_CONTENT.buttonTwo.label)}
						</Link>
					</div>
				</motion.div>
			</div>
		</main>
	);
}
