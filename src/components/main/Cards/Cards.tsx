"use client";
import { useTranslations } from "next-intl";
import { CARD_FEATURES } from "./constants";
import { motion } from "motion/react";
import { fadeInUp, staggerContainer } from "@/src/lib/animations";

export default function Cards() {
    const t = useTranslations();

    return (
        <main className="bg-[#f7f4ee] py-16 sm:py-20 overflow-hidden">
            <div className="mx-auto w-full max-w-6xl px-6">
                {/* this is header part */}
                <motion.div 
                    className="text-center"
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeInUp}
                >
                    <h2 className="italic font-semibold text-3xl">
                        {t("CardMain.title")}
                    </h2>
                    <div className="mx-auto mt-3 h-0.75 w-28 rounded-full bg-[#b68b2d]"></div>
                </motion.div>

                {/* cards section */}
                <motion.div 
                    className="grid grid-cols-1 gap-6 md:grid-cols-3  mt-12"
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={staggerContainer}
                >
                    {CARD_FEATURES.map(
                        ({ title, desc, Icon, accent, iconColor }) => (
                            <motion.div
                                key={title}
                                variants={fadeInUp}
                                className={`rounded-md bg-white transition border-t-4 ${accent} rounded-t-xl hover:-translate-y-1 hover:shadow-2xl`}
                            >
                                <div className="p-8">
                                    <div className="mb-5">
                                        <Icon
                                            size={34}
                                            style={{ color: iconColor }}
                                        />
                                    </div>

                                    <h3 className="text-lg font-semibold text-[#1b1b1b]">
                                        {t(title)}
                                    </h3>

                                    <p className="mt-3 text-sm leading-6 text-[#5b5b5b]">
                                        {t(desc)}
                                    </p>
                                </div>
                            </motion.div>
                        )
                    )}
                </motion.div>
            </div>
        </main>
    );
}
