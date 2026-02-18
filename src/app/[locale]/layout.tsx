import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import Navbar from "@/src/components/test/navbar/page";

export default async function LocaleLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const messages = await getMessages();

    return (
        <NextIntlClientProvider messages={messages}>
            <Navbar />
            {children}
        </NextIntlClientProvider>
    );
}
