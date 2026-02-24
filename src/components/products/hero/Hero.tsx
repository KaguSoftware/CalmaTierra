"use client";
import { Link } from "@/src/i18n/routing";
import { HERO_CONTENT } from "./constants";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { motion } from "motion/react";
import { fadeInUp, fadeInRight, staggerContainer } from "@/src/lib/animations";

const ProductsHero = () => {
    const t = useTranslations();
    return (
        <motion.main
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="w-full max-w-7xl  relative mx-auto px-4 md:px-6"
        >
            <div className="grid grid-cols-2 gap-7 md:mb-15 md:my-0 my-15 ">
                <motion.div
                    variants={fadeInUp}
                    className="flex flex-col gap-5 md:col-span-1 col-span-2 relative justify-center "
                >
                    <h1 className="md:text-6xl text-[40px] font-serif text-center md:text-start font-bold">
                        {t(HERO_CONTENT.title)}
                    </h1>
                    <p className="md:text-xl text-md md:text-start text-center text-gray-400">
                        {t(HERO_CONTENT.desc)}
                    </p>
                </motion.div>

                <motion.div
                    variants={fadeInRight}
                    className="md:col-span-1 col-span-2 relative items-center justify-center "
                >
                    <Image
                        src="/ProductsHero.webp"
                        alt="hero"
                        width={400}
                        height={400}
                        className="md:h-full h-80 object-cover w-full"
                        priority
                    />
                    <span className="absolute top-0 md:bg-linear-to-r bg-linear-to-b z-10 from-white to-transparent w-full h-full"></span>
                    {/*PARSA plz let me know if this is ugly i might forget to ask  */}
                </motion.div>
                <motion.div
                    variants={fadeInUp}
                    className="md:flex grid md:col-span-1 col-span-2 gap-5 md:bottom-20 md:absolute text-center text-xl"
                >
                    <Link
                        href={HERO_CONTENT.button1.href}
                        className="bg-green-900 p-3 rounded-md text-white hover:bg-green-950"
                    >
                        {t(HERO_CONTENT.button1.label)}
                    </Link>
                    <Link
                        href={HERO_CONTENT.button2.href}
                        className="bg-[#f5ead2] p-3 rounded-md text-green-900 hover:bg-[#ebddbe]"
                    >
                        {t(HERO_CONTENT.button2.label)}
                    </Link>
                </motion.div>
            </div>
            <span className="absolute md:flex hidden right-120 -bottom-9 rotate-17 h-137 w-40 bg-white [clip-path:polygon(-8%_0%,0%_17%,100%_8%,100%_91%,0%_100%)]"></span>
        </motion.main>
    );
};
export default ProductsHero;
