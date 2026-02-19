import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { ABOUT_US_ASSETS, ABOUT_US_FEATURES, ABOUT_US_KEYS } from "./constants";
import type { AboutFeatureText } from "./types";

export default function AboutUs() {
    const t = useTranslations("AboutUs");
    const featureText = t.raw(ABOUT_US_KEYS.features) as AboutFeatureText[];

    return (
        <section className="bg-white py-16 sm:py-20">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
                    {/* Left */}
                    <div>
                        {/* Pill */}
                        <div className="inline-flex rounded-full border border-[#bfa15a3f] bg-[#e0d4b452] px-2 py-1.5 text-sm font-semibold text-[#BFA05A]">
                            {t(ABOUT_US_KEYS.badge)}
                        </div>

                        {/* Heading */}
                        <h2 className="mt-5 whitespace-pre-line text-4xl font-semibold leading-tight text-emerald-900 sm:text-5xl">
                            {t(ABOUT_US_KEYS.heading)}
                        </h2>

                        {/* Description */}
                        <p className="mt-5 max-w-prose text-base leading-7 text-slate-600 sm:text-[17px]">
                            {t(ABOUT_US_KEYS.description)}
                        </p>

                        {/* Features */}
                        <div className="mt-10 space-y-8">
                            {featureText.map((text, idx) => {
                                const Icon = ABOUT_US_FEATURES[idx]?.Icon;

                                return (
                                    <div
                                        key={text.title}
                                        className="flex gap-4"
                                    >
                                        <div className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-emerald-900">
                                            {Icon ? (
                                                <Icon
                                                    className="h-5 w-5 text-white"
                                                    aria-hidden="true"
                                                />
                                            ) : null}
                                        </div>

                                        <div>
                                            <h3 className="text-base font-semibold text-slate-900">
                                                {text.title}
                                            </h3>
                                            <p className="mt-1 text-sm leading-6 text-slate-600">
                                                {text.description}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* CTA */}
                        <div className="mt-10">
                            <Link
                                href={ABOUT_US_ASSETS.ctaHref}
                                className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-900 hover:text-emerald-800"
                            >
                                {t(ABOUT_US_KEYS.ctaLabel)}
                                <span aria-hidden="true" className="text-base">
                                    →
                                </span>
                            </Link>
                        </div>
                    </div>

                    {/* Right */}
                    <div className="relative md:p-0 p-3 ">
                        <div className="absolute -right-2 md:-right-1 p-3  md:-top-5 -top-1  md:h-full h-[95%] md:w-full w-[95%] rounded-md border-2 border-[#BFA05A] " />

                        <div className="relative overflow-hidden rounded-md shadow-2xl bg-slate-100">
                            <div className="relative aspect-4/3 w-full">
                                <Image
                                    src={ABOUT_US_ASSETS.imageSrc}
                                    alt={ABOUT_US_ASSETS.imageAlt}
                                    className="object-cover"
                                    height={1000}
                                    width={1000}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
