import { LucideIcon } from "lucide-react";

export interface FormsContent {
    title: string;
    desc: string;
    cards: card[];
}
export interface card {
    img: { src: string; alt: string };
    title: string;
    desc: {
        tagTextColor: string;
        tagBgColor: string;
        tag: string;
        size: string;
        desc: string;
    };
    List: string[];
    icon: LucideIcon;
}
