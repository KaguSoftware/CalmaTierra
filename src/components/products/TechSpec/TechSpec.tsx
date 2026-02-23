"use client";
import { SPEC_CONTENT } from "./constants";
import { useTranslations } from "next-intl";
import { motion } from "motion/react";
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from "@/src/lib/animations";

const TechSpec = () => {
    const t = useTranslations();

    return (
        <motion.main 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="w-full max-w-7xl mx-auto px-4 md:px-6"
        >
            <div className="md:grid grid-cols-2 gap-15 relative mb-15">
                <motion.div 
                    variants={fadeInUp}
                    className="col-span-2 text-center grid gap-10 justify-center"
                >
                    <h3 className="text-[#c49f4f] text-xl">
                        {t(SPEC_CONTENT.header.header)}
                    </h3>
                    <h1 className="text-5xl font-serif font-bold">
                        {t(SPEC_CONTENT.header.title)}
                    </h1>
                    <p className="text-2xl max-w-180 text-gray-400">
                        {t(SPEC_CONTENT.header.desc)}
                    </p>
                </motion.div>
                <motion.div 
                    variants={fadeInLeft}
                    className="border flex flex-col p-7 gap-2 border-gray-100 shadow-xl m-3 rounded-2xl"
                >
                    <h1 className="text-[30px] text-green-900">
                        {t(SPEC_CONTENT.lcard.title)}
                    </h1>
                    {SPEC_CONTENT.lcard.list.map((list) => (
                        <div key={list} className="flex gap-2 items-center">
                            <SPEC_CONTENT.lcard.icon className="bg-[#c49f4f] rounded-full text-white" />
                            <h1 className="text-lg">{t(list)}</h1>
                        </div>
                    ))}
                </motion.div>
                <motion.div 
                    variants={fadeInUp}
                    className=" absolute md:right-158 -right-2 md:top-63 top-75 rotate-15 rounded-full md:py-8 py-7.5 px-4 text-xl md:text-2xl text-white bg-[#c49f4f] max-w-fit"
                >
                    46%N
                </motion.div>
                <motion.div 
                    variants={fadeInRight}
                    className="grid grid-cols-2 gap-6 md:mt-0 mt-15 md:text-start text-center"
                >
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
                            className={`md:p-4 bg-gray-50 justify-center items-center grid grid-rows-2 md:col-span-1 col-span-2 rounded-2xl border-l-5 ${Box.borderColor}`}
                        >
                            <h1 className="md:text-xl text-2xl">
                                {t(Box.title)}
                            </h1>
                            <p className="md:text-[17px] text-2xl md:text-start text-center text-gray-400 md:max-w-60 md:h-fit h-27 max-w-80">
                                {t(Box.desc)}
                            </p>
                        </div>
                    ))}
                </motion.div>
            </div>
        </motion.main>
    );
};
export default TechSpec;
