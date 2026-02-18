import { Handshake, ShieldCheck, Truck } from "lucide-react";

export const CARD_FEATURES = [
    {
        title: "home.cardOne.title",
        desc: "home.cardOne.desc",
        Icon: Truck,
        accent: "#2f5d44",
        iconColor: "#b68b2d",
    },
    {
        title: "home.cardTwo.title",
        desc: "home.cardTwo.desc",
        Icon: ShieldCheck,
        accent: "#2f5d44",
        iconColor: "#b68b2d",
    },
    {
        title: "home.cardThree.title",
        desc: "home.cardThree.desc",
        Icon: Handshake,
        accent: "#2f5d44",
        iconColor: "#b68b2d",
    }
] as const;