import Link from "next/link";
import { HERO_CONTENT } from "./constants";
import Image from "next/image";

const ProductsHero = () => {
    return (
        <main className="w-full max-w-7xl mx-auto px-4 md:px-6">
            <div className="grid grid-cols-2 h-140 ">
                <div className="px-6 flex-col flex justify-center z-10 h-full">
                    <h1>{HERO_CONTENT.title}</h1>
                    <p>{HERO_CONTENT.desc}</p>
                    <div className="flex gap-2">
                        <Link
                            href={HERO_CONTENT.button1.href}
                            className="bg-teal-800 p-3 rounded-md text-amber-100 hover:bg-teal-900"
                        >
                            {HERO_CONTENT.button1.label}
                        </Link>
                        <Link
                            href={HERO_CONTENT.button2.href}
                            className="bg-amber-100 p-3 rounded-md text-teal-800 hover:bg-amber-200"
                        >
                            {HERO_CONTENT.button2.label}
                        </Link>
                    </div>
                </div>

                <div className="h-full w-full flex relative items-center justify-center bg-gray-300">
                    <Image
                        src="/ProductsHero.png"
                        alt="Kagu Logo"
                        width={400}
                        height={400}
                        className="h-full w-full"
                    />
                    <span className="absolute bg-linear-to-r from-white/60 to-transparent flex w-full h-full"></span>
                    {/*PARSA plz let me know if this is ugly i might forget to ask  */}
                </div>
            </div>
            <span className="absolute flex justify-self-center top-28 ml-45 rotate-17 h-120 w-40 bg-white [clip-path:polygon(-2%_0%,0%_13%,100%_1%,100%_90%,9%_100%)]"></span>
        </main>
    );
};
export default ProductsHero;
