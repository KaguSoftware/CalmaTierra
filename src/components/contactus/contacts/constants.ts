import { contacts } from "./types";
import { Mail, Globe, Phone, LocateIcon } from "lucide-react";
export const CONTACTS_PROPS: contacts[] = [
    { title: " Office Address ", icon: LocateIcon, desc: " Calle de la Agricultura, 45 Polígono Industrial Nueva Andalucía 29660 Marbella, Málaga, Spain" },
    { title: "Email Us", icon: Mail, desc: "info@calmatierra.com" },
    { title: "Website", icon: Globe, desc: " www.calmatierra.com" },
    { title: "Phone", icon: Phone, desc: "+34 952 00 00 00" },
]