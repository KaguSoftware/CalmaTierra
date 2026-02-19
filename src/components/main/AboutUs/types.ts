import type { LucideIcon } from "lucide-react";

export interface AboutFeatureText {
    title: string;
    description: string;
}

export interface AboutFeature {
    Icon: LucideIcon;
}

export interface AboutUsKeys {
    badge: "badge";
    heading: "heading";
    description: "description";
    ctaLabel: "cta";
    features: "features";
}
