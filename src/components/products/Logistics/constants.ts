import { BoxesIcon, Globe2, Ship, Truck } from "lucide-react";
import { LogisticsContent } from "./types";

export const LOGISTICS_CONTENT: LogisticsContent = {
    header: {
        header: "Products.Log.header.header",
        title: "Products.Log.header.title",
        desc: "Products.Log.header.desc",
    },
    reach: {
        header: "Products.Log.reach.header",
        desc: "Products.Log.reach.desc",
        icon: Globe2,
    },
    img: { src: "/Logistics.webp", alt: "big ship" },
    Box: [
        {
            title: "Products.Log.Box.1.title",
            desc: "Products.Log.Box.1.desc",
            borderColor: "border-green-900",
            icon: BoxesIcon,
        },
        {
            title: "Products.Log.Box.2.title",
            desc: "Products.Log.Box.2.desc",
            borderColor: "border-[#c49f4f]",
            icon: Truck,
        },
        {
            title: "Products.Log.Box.3.title",
            desc: "Products.Log.Box.3.desc",
            borderColor: "border-green-900",
            icon: Ship,
        },
    ],
    ready: {
        Q: "Products.Log.ready.Q",
        get: "Products.Log.ready.get",
        contact: "Products.Log.ready.contact",
    },
};
