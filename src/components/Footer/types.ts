import { LucideIcon } from "lucide-react";

export interface FooterBrand {
    name: string;
    description: string;
    image: {
        src: string;
        alt: string;
    };
}

export interface FooterContactItem {
    label: string;
    Icon: LucideIcon;
}

export interface FooterBottomLink {
    label: string;
    href: string;
}
export interface FooterContents {
    year: string;
    bottomText: string;
    bottomLinks: FooterBottomLink[];
}
