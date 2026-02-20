// src/app/[...]/constants.ts
import { InfoGrid, Header, Carousel, ContactForm } from "./types";
import { Mail, Phone, Computer, HomeIcon } from "lucide-react";

export const HEADERCONTENT: Header = {
    title: "Contact.header.title",
    desc: "Contact.header.desc",
};

export const CAROUSELCONTENT: Carousel = {
    image: { src: "/BY4.jpeg", alt: "Contact Background" },
};

export const GRIDCONTENT: InfoGrid[] = [
    {
        title: "Contact.grid.office.title",
        desc: "Contact.grid.office.desc",
        icon: HomeIcon,
    },
    {
        title: "Contact.grid.email.title",
        desc: "Contact.grid.web.desc",
        icon: Mail,
    },
    {
        title: "Contact.grid.web.title",
        desc: "Contact.grid.web.desc",
        icon: Computer,
    },
    {
        title: "Contact.grid.phone.title",
        desc: "Contact.grid.phone.desc",
        icon: Phone,
    },
];

export const FORMCONTENT: ContactForm = {
    title: "Contact.Form.title",
    desc: "Contact.Form.desc",
    fields: [
        {
            name: "firstName",
            labelKey: "Contact.Form.label.FN",
            placeholderKey: "Contact.Form.example.FN",
            type: "text",
        },
        {
            name: "lastName",
            labelKey: "Contact.Form.label.LN",
            placeholderKey: "Contact.Form.example.LN",
            type: "text",
        },
        {
            name: "email",
            labelKey: "Contact.Form.label.WE",
            placeholderKey: "Contact.Form.example.WE",
            type: "email",
            fullWidth: true,
        },
        {
            name: "company",
            labelKey: "Contact.Form.label.CN",
            placeholderKey: "Contact.Form.example.CN",
            type: "text",
            fullWidth: true,
        },
        {
            name: "interest",
            labelKey: "Contact.Form.label.IAIN",
            placeholderKey: "Contact.Form.selectPlaceholder",
            type: "select",
            fullWidth: true,
            options: [
                "Contact.Form.interest.bulk",
                "Contact.Form.interest.support",
                "Contact.Form.interest.partner",
                "Contact.Form.interest.other",
            ],
        },
        {
            name: "message",
            labelKey: "Contact.Form.label.M",
            placeholderKey: "Contact.Form.example.M",
            type: "textarea",
            fullWidth: true,
            rows: 3,
        },
    ],
    agree: "Contact.Form.agree",
    send: "Contact.Form.send",
};
