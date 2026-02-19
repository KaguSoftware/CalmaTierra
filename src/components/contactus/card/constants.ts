import { InfoGrid, Header, Carousel, ContactForm } from "./types";
import { Mail, Phone, Computer, HomeIcon } from "lucide-react";

export const HEADERCONTENT: Header = {
    title: "Our Headquarters",
    desc: "Located in the heart of Spain's agricultural innovation hub, our Marbella office manages our international logistics and client relations. We are open Monday through Friday, 9:00 AM to 6:00 PM CET.",
};

export const CAROUSELCONTENT: Carousel = {
    image: { src: "/BY4.jpeg", alt: "Contact Background" },
};

export const GRIDCONTENT: InfoGrid[] = [
    {
        title: "Office Address",
        desc: "Calle de la Agricultura, 45 Polígono Industrial Nueva Andalucía 29660 Marbella, Málaga, Spain",
        icon: HomeIcon
    },
    {
        title: "Email Us", desc: "info@calmatierra.com",
        icon: Mail
    },
    {
        title: "Website", desc: "www.calmatierra.com",
        icon: Computer
    },
    {
        title: "Phone", desc: "+34 952 00 00 00",
        icon: Phone
    },
];

// NEW: The Form Configuration
export const FORMCONTENT: ContactForm = {
    title: "Contact.Form.title",
    buttonText: "Contact.Form.buttonText",
    fields: [
        {
            label: "Contact.Form.fields.fullName.label",
            name: "fullName",
            placeholder: "Contact.Form.fields.fullName.placeholder",
            type: "text",
        },
        {
            label: "Contact.Form.fields.email.label",
            name: "email",
            placeholder: "Contact.Form.fields.email.placeholder",
            type: "email",
        },
        {
            label: "Contact.Form.fields.message.label",
            name: "message",
            placeholder: "Contact.Form.fields.message.placeholder",
            type: "textarea",
        },
    ],
};
