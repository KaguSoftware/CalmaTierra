// src/app/[...]/types.ts
import { LucideIcon } from "lucide-react";

export interface Header {
    title: string;
    desc: string;
}

export interface Carousel {
    image: {
        src: string;
        alt: string;
    };
}

export interface InfoGrid {
    title: string;
    desc: string;
    icon: LucideIcon;
}

/** Field config used to render the Contact form */
export type ContactField =
    | {
          name: "firstName" | "lastName" | "email" | "company";
          labelKey: string;
          placeholderKey: string;
          type: "text" | "email";
          fullWidth?: boolean;
      }
    | {
          name: "interest";
          labelKey: string;
          placeholderKey: string;
          type: "select";
          fullWidth?: boolean;
          options: string[]; // translation keys
      }
    | {
          name: "message";
          labelKey: string;
          placeholderKey: string;
          type: "textarea";
          fullWidth?: boolean;
          rows?: number;
      };

export interface ContactForm {
    title: string; // translation key
    desc: string; // translation key
    fields: ContactField[];
    agree: string;
    send: string;
}
