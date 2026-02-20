import Image from "next/image";
import { FOOTER_BRAND, FOOTER_CONTACTS, FOOTER_CONTENTS } from "./constants";
import { useTranslations } from "next-intl";

export default function Footer() {
    const t = useTranslations();

    return (
        <footer className="bg-[#071426] text-white">
            <div className="mx-auto w-full max-w-6xl px-6 py-14">
                <div className="grid gap-10 md:grid-cols-2 md:gap-16">
                    {/* Brand */}
                    <div className="max-w-xl">
                        <div className="flex items-center gap-3">
                            <Image
                                src={FOOTER_BRAND.image.src}
                                alt={FOOTER_BRAND.image.alt}
                                width={36}
                                height={36}
                                className="h-9 w-9 rounded border border-white/15 bg-white/5 object-contain p-1"
                                priority
                            />

                            <div className="text-2xl font-semibold tracking-tight">
                                {t(FOOTER_BRAND.name)}
                            </div>
                        </div>

                        <p className="mt-5 text-sm leading-6 text-white/60">
                            {t(FOOTER_BRAND.description)}
                        </p>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold text-[#D7B56A]">
                            {t("Footer.contactTitle")}
                        </h3>

                        <ul className="mt-5 space-y-4 text-sm text-white/70">
                            {FOOTER_CONTACTS.map((item) => {
                                const Icon = item.Icon;
                                return (
                                    <li key={item.label} className="flex items-start gap-3">
                                        <Icon className="mt-0.5 h-4 w-4 text-white/45" />
                                        <span className="leading-5">{t(item.label)}</span>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>

                <div className="mt-12 h-px w-full bg-white/10" />

                <div className="mt-8 flex flex-col gap-4 text-sm text-white/45 md:flex-row md:items-center md:justify-between">
                    <div>
                        © {t(FOOTER_CONTENTS.year)} {t(FOOTER_BRAND.name)}.{" "}
                        {t(FOOTER_CONTENTS.bottomText)}
                    </div>

                    <div className="flex items-center gap-6">
                        {FOOTER_CONTENTS.bottomLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="transition-colors duration-200 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
                            >
                                {t(link.label)}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}