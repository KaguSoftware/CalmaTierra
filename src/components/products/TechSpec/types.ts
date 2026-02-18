import { LucideIcon } from "lucide-react";
export interface specContent {
    header: { header: string; title: string; desc: string };
    lcard: { title: string; icon: LucideIcon; list: string[] };
    desc: {
        header: string;
        desc: string;
    };
    Box: box[];
}
export interface box {
    title: string;
    desc: string;
    borderColor: string;
}
