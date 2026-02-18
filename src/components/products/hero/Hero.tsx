"use client";
import { Link } from "@/src/i18n/routing";
import { HERO_CONTENT } from "./constants";
import { useTranslations } from "next-intl";
import Image from "next/image";

const ProductsHero = () => {
    const t = useTranslations();
    return (
        <main className="w-full max-w-7xl  relative mx-auto px-4 md:px-6">
            <div className="grid grid-cols-2 gap-7 md:mb-15 md:my-0 my-15 ">
                <div className="flex flex-col gap-5 md:col-span-1 col-span-2 relative justify-center ">
                    <h1 className="md:text-6xl text-[43px]">
                        {t(HERO_CONTENT.title)}
                    </h1>
                    <p className="md:text-xl text-md text-gray-400">
                        {t(HERO_CONTENT.desc)}
                    </p>
                </div>

                <div className="md:col-span-1 col-span-2 relative items-center justify-center ">
                    <Image
                        src="/ProductsHero.png"
                        alt="hero"
                        width={400}
                        height={400}
                        className="md:h-full h-80 object-cover w-full"
                    />
                    <span className="absolute top-0 md:bg-linear-to-r bg-linear-to-b z-10 from-white to-transparent w-full h-full"></span>
                    {/*PARSA plz let me know if this is ugly i might forget to ask  */}
                </div>
                <div className="md:flex grid md:col-span-1 col-span-2 gap-5 md:bottom-30 md:absolute text-center text-xl">
                    <Link
                        href={HERO_CONTENT.button1.href}
                        className="bg-green-900 p-3 rounded-md text-amber-50 hover:bg-green-950"
                    >
                        {t(HERO_CONTENT.button1.label)}
                    </Link>
                    <Link
                        href={HERO_CONTENT.button2.href}
                        className="bg-amber-50 p-3 rounded-md text-green-900 hover:bg-amber-100"
                    >
                        {t(HERO_CONTENT.button2.label)}
                    </Link>
                </div>
            </div>
            <span className="absolute md:flex hidden justify-self-center -bottom-5 ml-38 rotate-17 h-137 w-70 bg-white [clip-path:polygon(-8%_0%,0%_17%,100%_2%,100%_91%,40%_100%)]"></span>
        </main>
    );
};
export default ProductsHero;
