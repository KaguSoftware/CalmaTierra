import { DotIcon } from "lucide-react";
import { FormsContent } from "./types";
export const FORMS_CONTENT: FormsContent = {
    title: "Products.Forms.title",
    desc: "Products.Forms.desc",
    cards: [
        {
            img: { src: "/kagulogo.JPG", alt: "ghj" },
            title: "Products.Forms.cards.1.title",
            desc: {
                tag: "Products.Forms.cards.1.desc.tag",
                size: "Products.Forms.cards.1.desc.size",
                desc: "Products.Forms.cards.1.desc.desc",
            },
            List: [
                "Products.Forms.cards.1.List.listItem1",
                "Products.Forms.cards.1.List.listItem2",
            ],
            icon: DotIcon,
        },
        {
            img: { src: "/kagulogo.JPG", alt: "ghj" },
            title: "Products.Forms.cards.2.title",
            desc: {
                tag: "Products.Forms.cards.2.desc.tag",
                size: "Products.Forms.cards.2.desc.size",
                desc: "Products.Forms.cards.2.desc.desc",
            },
            List: [
                "Products.Forms.cards.2.List.listItem1",
                "Products.Forms.cards.2.List.listItem2",
            ],
            icon: DotIcon,
        },
    ],
};
