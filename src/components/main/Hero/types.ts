export interface HeroData {
    header: string;
    subheader: string;
    image: { src: string; alt: string };

    buttons: HeroButton[];
}

export interface HeroButton {
    label: string;
    href: string;
}