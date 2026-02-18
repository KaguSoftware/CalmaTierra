import { SPEC_CONTENT } from "./constants";
import { useTranslations } from "next-intl";

const TechSpec = () => {
    const t = useTranslations();

    return (
        <main className="w-full max-w-7xl mx-auto px-4 md:px-6">
            <div className="md:grid grid-cols-2 gap-15 relative">
                <div className="col-span-2 text-center grid gap-4 justify-center">
                    <h3 className="text-amber-500 text-xl">
                        {t(SPEC_CONTENT.header.header)}
                    </h3>
                    <h1 className="text-5xl">{t(SPEC_CONTENT.header.title)}</h1>
                    <p className="text-2xl max-w-180 text-gray-400">
                        {t(SPEC_CONTENT.header.desc)}
                    </p>
                </div>
                <div className="border-2 flex flex-col p-7 gap-2 border-gray-100 shadow-xl m-3 rounded-2xl">
                    <h1 className="text-[30px] text-green-900">
                        {t(SPEC_CONTENT.lcard.title)}
                    </h1>
                    {SPEC_CONTENT.lcard.list.map((list) => (
                        <div key={list} className="flex gap-2 items-center">
                            <SPEC_CONTENT.lcard.icon className="bg-neutral-400 rounded-full text-white" />
                            <h1 className="text-lg">{t(list)}</h1>
                        </div>
                    ))}
                </div>
                <div className=" absolute right-158 top-55 rotate-15 rounded-full py-8 px-4.5 text-xl text-white bg-amber-950 max-w-fit">
                    46%N
                </div>
                <div className="grid grid-cols-2 gap-6 ">
                    <div className="col-span-2 grid gap-5">
                        <h1 className="text-[30px] font-[550]">
                            {t(SPEC_CONTENT.desc.header)}
                        </h1>
                        <p className="text-lg text-gray-400 font-bold">
                            {t(SPEC_CONTENT.desc.desc)}
                        </p>
                    </div>
                    {SPEC_CONTENT.Box.map((Box) => (
                        <div
                            key={Box.title}
                            className={`p-4 bg-gray-50 flex flex-col rounded-2xl border-l-5 ${Box.borderColor}`}
                        >
                            <h1 className="text-xl">{t(Box.title)}</h1>{" "}
                            <p className="text-[17px] text-gray-400 max-w-55">
                                {t(Box.desc)}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
            ;
        </main>
    );
};
export default TechSpec;
