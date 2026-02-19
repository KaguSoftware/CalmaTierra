import { FORMS_CONTENT } from "./constants";
import Image from "next/image";
import { useTranslations } from "next-intl";

const Forms = () => {
    const t = useTranslations();

    return (
        <main className=" bg-gray-100 p-1 w-10xl">
            <div className="md:grid grid-cols-2 gap-10 w-full max-w-7xl mx-auto px-4  md:px-6">
                <div className="col-span-2 text-center mt-15 grid gap-3">
                    <h1 className="text-4xl font-bold font-serif">
                        {t(FORMS_CONTENT.title)}
                    </h1>
                    <p className="text-lg text-neutral-400 md:mb-0 mb-4">
                        {t(FORMS_CONTENT.desc)}
                    </p>
                </div>
                {FORMS_CONTENT.cards.map((cards) => (
                    <div
                        key={cards.title}
                        className="w-full justify-between gap-6 grid rounded-2xl mb-20 bg-white shadow-xl"
                    >
                        <div className="relative">
                            <Image
                                src={cards.img.src}
                                alt={cards.img.alt}
                                height={100}
                                width={400}
                                className="w-full h-60 relative object-cover rounded-t-2xl"
                            />
                            <div className="absolute bottom-0 flex items-end bg-linear-to-t from-black/50 to-black/10 w-full h-full rounded-t-2xl">
                                <h1 className="text-white m-3 font-semibold text-2xl">
                                    {t(cards.title)}
                                </h1>
                            </div>
                        </div>
                        <div className="flex justify-between mx-9">
                            <h1
                                className={`rounded-2xl py-1 px-3 ${cards.desc.tagBgColor} ${cards.desc.tagTextColor} `}
                            >
                                {t(cards.desc.tag)}
                            </h1>{" "}
                            <h2 className="text-neutral-400">
                                {t(cards.desc.size)}
                            </h2>
                        </div>
                        <div className="px-7 pb-7 gap-8  flex flex-col">
                            <p className="text-xl px-2 max-w-[96%] text-neutral-500">
                                {t(cards.desc.desc)}
                            </p>
                            <div>
                                {cards.List.map((item, index) => (
                                    <div
                                        key={`${item}-${index}`}
                                        className="flex gap-1 text-neutral-500 items-center"
                                    >
                                        <cards.icon className="-scale-50 text-[#c49f4f]" />
                                        <p className="text-[16px]">{t(item)}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
};
export default Forms;
