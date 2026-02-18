import { Handshake, ShieldCheck, Truck } from "lucide-react";

export const CARD_FEATURES = [
    {
        title: "CardMain.cardOne.title",
        desc: "CardMain.cardOne.desc",
        Icon: Truck,
        accent: "#2f5d44",
        iconColor: "#b68b2d",
    },
    {
        title: "CardMain.cardTwo.title",
        desc: "CardMain.cardTwo.desc",
        Icon: ShieldCheck,
        accent: "#2f5d44",
        iconColor: "#b68b2d",
    },
    {
        title: "CardMain.cardThree.title",
        desc: "CardMain.cardThree.desc",
        Icon: Handshake,
        accent: "#2f5d44",
        iconColor: "#b68b2d",
    }
] as const;