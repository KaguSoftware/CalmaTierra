import { Mail, MapPin, Phone } from "lucide-react";
import type { FooterBrand, FooterContactItem, FooterContents } from "./types";

export const FOOTER_BRAND: FooterBrand = {
    name: "Footer.name",
    description: "Footer.description",
    image: {
        src: "/CalmaTierraLogo.jpeg",
        alt: "CalmaTierra Logo"
    },
};

export const FOOTER_CONTACTS: FooterContactItem[] = [
    {
        label: "Footer.location",
        Icon: MapPin
    },
    {
        label: "Footer.email",
        Icon: Mail
    },
    {
        label: "Footer.phone",
        Icon: Phone
    },
];

export const FOOTER_CONTENTS: FooterContents = {
    year: "Footer.year",
    bottomText: "Footer.text",
    bottomLinks: [
        {
            label: "Footer.link.labelOne",
            href: "/privacy"
        },
        {
            label: "Footer.link.labelTwo",
            href: "/terms"
        },
    ],
};