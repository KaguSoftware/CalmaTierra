import { Handshake, ShieldCheck, Truck } from "lucide-react";

export const CARD_FEATURES = [
    {
        title: "cardMain.cardOne.title",
        desc: "cardMain.cardOne.desc",
        Icon: Truck,
        accent: "#2f5d44",
        iconColor: "#b68b2d",
    },
    {
        title: "cardMain.cardTwo.title",
        desc: "cardMain.cardTwo.desc",
        Icon: ShieldCheck,
        accent: "#b68b2d",
        iconColor: "#b68b2d",
    },
    {
        title: "cardMain.cardThree.title",
        desc: "cardMain.cardThree.desc",
        Icon: Handshake,
        accent: "#2f5d44",
        iconColor: "#b68b2d",
    }
] as const;