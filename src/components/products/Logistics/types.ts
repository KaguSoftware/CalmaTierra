import { LucideIcon } from "lucide-react";
export interface LogisticsContent {
    header: { header: string; title: string; desc: string };
    reach: {
        header: string;
        desc: string;
        icon: LucideIcon;
    };
    img: { src: string; alt: string };
    Box: Box[];
    ready: { Q: string; get: string; contact: string };
}
export interface Box {
    title: string;
    desc: string;
    borderColor: string;
    icon: LucideIcon;
}
