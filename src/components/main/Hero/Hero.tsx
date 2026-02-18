import Image from "next/image";
import Link from "next/link";
import { HERO_CONTENT } from "./constants";

export default function Hero() {
    return (
        <main className="relative min-h-[80vh] text-white">
            {/* background image and overlay */}
            <div>
                <Image
                    src={HERO_CONTENT.image.src}
                    alt={HERO_CONTENT.image.alt}
                    fill
                />
                <div className="absolute inset-0 bg-black/60" />
            </div>

            {/* content */}
            <div className="flex relative mx-auto items-center justify-center md:max-w-6xl min-h-[70vh] px-6 py-20 ">
                <div className="text-center text-white">
                    <h1 className="font-serif font-semibold md:text-6xl text-3xl ">
                        Reliable Name in the <br />
                        <span className="italic font-semibold text-[#BFA05A]">World of Fertilizer <br /></span>
                    </h1>

                    <p className="mx-auto text-xl text-center m-6 max-w-2xl">
                        CalmaTierra is an internationally successful fertilizer distributor located in Marbella, Spain, bridging the gap between premiumrefineries and global agriculture.
                    </p>

                    <div className="flex flex-col items-center justify-center gap-4 sm:flex-row font-bold text-lg ">
                        <Link
                            href="/products"
                            className="transition bg-white text-black rounded-sm px-6 py-3 items-center justify-center hover:bg-white/80 "
                        >
                            Explore Our Products
                        </Link>

                        <Link
                            href="/products"
                            className="transition border-2 rounded-sm px-6 py-2.5 hover:bg-white hover:text-black"
                        >
                            Get in Touch
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
}
