import { CircleDot, CircleIcon, DotIcon } from "lucide-react";
import { FormsContent } from "./types";
export const FORMS_CONTENT: FormsContent = {
    title: "Products.Forms.title",
    desc: "Products.Forms.desc",
    cards: [
        {
            img: { src: "/forms.card1.png", alt: "ghj" },
            title: "Products.Forms.cards.1.title",
            desc: {
                tagTextColor: "text-green-800",
                tagBgColor: "bg-green-900/20",
                tag: "Products.Forms.cards.1.desc.tag",
                size: "Products.Forms.cards.1.desc.size",
                desc: "Products.Forms.cards.1.desc.desc",
            },
            List: [
                "Products.Forms.cards.1.List.listItem1",
                "Products.Forms.cards.1.List.listItem2",
            ],
            icon: CircleIcon,
        },
        {
            img: { src: "/forms.card2.png", alt: "ghj" },
            title: "Products.Forms.cards.2.title",
            desc: {
                tagTextColor: "text-orange-800",
                tagBgColor: "bg-[#fef6e5]",
                tag: "Products.Forms.cards.2.desc.tag",
                size: "Products.Forms.cards.2.desc.size",
                desc: "Products.Forms.cards.2.desc.desc",
            },
            List: [
                "Products.Forms.cards.2.List.listItem1",
                "Products.Forms.cards.2.List.listItem2",
            ],
            icon: CircleIcon,
        },
    ],
};
