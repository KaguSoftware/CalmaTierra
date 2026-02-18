import { HeroData } from "./types";

export const HERO_CONTENT: HeroData = {
    header: "Hero.header",
    subheader: "Hero.subheader",
    image: { src: "/Farm.png", alt: "farm" },

    buttons: [
        {
            label: "Hero.buttons.viewProduct",
            href: "/products",
        },
        {
            label: "Hero.buttons.contactMe",
            href: "/contact",
        },
    ],
};