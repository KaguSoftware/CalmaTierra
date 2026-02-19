import type { AboutUsContent } from "./types";
import { Factory, Sprout } from "lucide-react";

export const ABOUT_US_CONTENT: AboutUsContent = {
    badge: "ABOUT US",
    heading: "Empowering Global\nAgriculture",
    description:
        "At CalmaTierra, we understand that agriculture is the backbone of civilization. Based in the strategic hub of Marbella, Spain, we operate as a vital link in the global supply chain, ensuring that high-quality fertilizers reach farmers and distributors efficiently and reliably.",
    features: [
        {
            title: "Direct access to reliable refineries",
            description:
                "We cut out unnecessary intermediaries to provide competitive pricing and guaranteed quality.",
            Icon: Factory,
        },
        {
            title: "Profound market knowledge",
            description:
                "Decades of combined experience navigating the volatile fertilizer commodity landscape.",
            Icon: Sprout,
        },
    ],
    cta: {
        label: "Learn more about our mission",
        href: "/about",
    },
    image: {
        // put your image at: /public/images/about-us.jpg
        src: "/farmer.png",
        alt: "A farmer inspecting crops in a field",
    },
};