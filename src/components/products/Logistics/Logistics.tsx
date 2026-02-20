"use client";
import { Link } from "@/src/i18n/routing";
import { LOGISTICS_CONTENT } from "./constants";
import { useTranslations } from "next-intl";
import Image from "next/image";

const Logistics = () => {
    const t = useTranslations();
    return (
        <>
            <div className="w-full max-w-7xl  relative mx-auto px-4 md:px-6">
                <div className="md:grid grid-cols-2 my-15">
                    <div className="flex flex-col gap-9  ">
                        <div className="grid gap-4">
                            <h2 className="text-[#c49f4f] text-lg">
                                {t(LOGISTICS_CONTENT.header.header)}
                            </h2>
                            <h1 className="text-3xl font-serif font-bold">
                                {t(LOGISTICS_CONTENT.header.title)}
                            </h1>
                            <p className="text-gray-500">
                                {t(LOGISTICS_CONTENT.header.desc)}
                            </p>
                        </div>
                        {LOGISTICS_CONTENT.Box.map((Box) => (
                            <div
                                key={Box.title}
                                className={`p-4 flex gap-2 rounded-2xl shadow-xs border-l-5 ${Box.borderColor}`}
                            >
                                <Box.icon className="self-center size-10 text-green-950" />
                                <div>
                                    <h1 className="text-xl">{t(Box.title)}</h1>{" "}
                                    <p className="text-[17px] text-gray-400  max-w-100">
                                        {t(Box.desc)}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="rounded-2xl relative shadow-2xl md:mt-0 mt-10">
                        <Image
                            src={LOGISTICS_CONTENT.img.src}
                            alt={LOGISTICS_CONTENT.img.alt}
                            width={512}
                            height={512}
                            className="rounded-2xl w-full h-full"
                        />
                        <span className="bg-gray-300 w-full h-full absolute top-0 rounded-2xl rotate-2 -z-10"></span>
                        <span className="bg-amber-200 w-full h-full absolute top-0 rounded-2xl -rotate-2 -z-10"></span>
                        <div className="absolute bg-white md:-bottom-4 -bottom-10 md:-left-6 shadow-2xl grid rounded-2xl md:p-6 p-4 justify-self-center">
                            <div className="flex gap-2">
                                <LOGISTICS_CONTENT.reach.icon className="text-[#c49f4f]" />
                                <h1 className="font-bold">
                                    {t(LOGISTICS_CONTENT.reach.header)}
                                </h1>
                            </div>
                            <p className="text-gray-500 max-w-70">
                                {t(LOGISTICS_CONTENT.reach.desc)}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" bg-green-900 w-12xl md:py-15 py-10">
                <div className="w-full max-w-7xl md:grid grid-cols-2 justify-between relative mx-auto px-4 md:px-6">
                    <div className="font-bold text-3xl font-serif text-center md:text-start">
                        <h1 className="text-white ">
                            {t(LOGISTICS_CONTENT.ready.Q)}
                        </h1>
                        <h2 className="text-[#c49f4f]">
                            {t(LOGISTICS_CONTENT.ready.get)}
                        </h2>
                    </div>
                    <div className="  flex md:place-content-end place-content-center mt-5">
                        <Link
                            className="p-3 px-7 w-full md:w-70 bg-amber-100 rounded-lg text-green-800 place-self-end"
                            href={"#"}
                        >
                            <h1 className="text-center text-lg font-bold">
                                {t(LOGISTICS_CONTENT.ready.contact)}
                            </h1>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Logistics;
