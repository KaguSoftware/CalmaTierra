import { LucideIcon } from "lucide-react";

export interface FooterBrand {
    name: string;
    description: string;
    logoSrc: string;
}

export interface FooterContactItem {
    label: string;
    Icon: LucideIcon;
}

export interface FooterContents {
    description: string;
}