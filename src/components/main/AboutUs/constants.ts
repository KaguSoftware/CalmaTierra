import { Factory, ChartCandlestick } from "lucide-react";
import type { AboutFeature, AboutUsKeys } from "./types";

export const ABOUT_US_KEYS: AboutUsKeys = {
    badge: "badge",
    heading: "heading",
    description: "description",
    ctaLabel: "cta",
    features: "features",
};

export const ABOUT_US_FEATURES: AboutFeature[] = [
    { Icon: Factory },
    { Icon: ChartCandlestick },
];

export const ABOUT_US_ASSETS = {
    ctaHref: "/about",
    imageSrc: "/farmer.webp",
    imageAlt: "A farmer inspecting crops in a field",
} as const;
