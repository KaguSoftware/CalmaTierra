import type { ComponentType, SVGProps } from "react";

export type AboutFeature = {
    title: string;
    description: string;
    Icon: ComponentType<SVGProps<SVGSVGElement>>;
};

export type AboutUsContent = {
    badge: string;
    heading: string; // you can include \n for line breaks
    description: string;
    features: AboutFeature[];
    cta: {
        label: string;
        href: string;
    };
    image: {
        src: string;
        alt: string;
    };
};