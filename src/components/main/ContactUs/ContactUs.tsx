import { useTranslations } from "next-intl";
import Link from "next/link";
import { CONTACTUS_CONTENT } from "./constants";

export default function ContactUs() {
    const t = useTranslations();

    return (
        <section className="relative overflow-hidden bg-[#2f5d44] py-20">

            <div className="relative mx-auto flex max-w-4xl flex-col items-center px-4 text-center">
                <h2 className="font-serif text-4xl font-semibold tracking-tight text-white md:text-5xl">
                    {t(CONTACTUS_CONTENT.header)}
                </h2>

                <p className="mt-4 max-w-2xl text-base leading-relaxed text-emerald-100 md:text-lg">
                    {t(CONTACTUS_CONTENT.subheader)}
                </p>

                <Link
                    href={t(CONTACTUS_CONTENT.button.href)}
                    className="mt-10 inline-flex items-center justify-center rounded-md bg-[#c49f4f] px-8 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#CA8A04] focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 focus-visible:ring-offset-2 focus-visible:ring-offset-emerald-950"
                >
                    {t(CONTACTUS_CONTENT.button.lable)}
                </Link>
            </div>
        </section>
    );
}