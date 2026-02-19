import { specContent } from "./types";
import { Check } from "lucide-react";
export const SPEC_CONTENT: specContent = {
    header: {
        header: "Products.Spec.header.header",
        title: "Products.Spec.header.title",
        desc: "Products.Spec.header.desc",
    },
    lcard: {
        title: "Products.Spec.lcard.title",
        icon: Check,
        list: [
            "Products.Spec.lcard.list.1",
            "Products.Spec.lcard.list.2",
            "Products.Spec.lcard.list.3",
            "Products.Spec.lcard.list.4",
        ],
    },
    desc: {
        header: "Products.Spec.desc.header",
        desc: "Products.Spec.desc.desc",
    },
    Box: [
        {
            title: "Products.Spec.box.1.title",
            desc: "Products.Spec.box.1.desc",
            borderColor: "border-green-900",
        },
        {
            title: "Products.Spec.box.2.title",
            desc: "Products.Spec.box.2.desc",
            borderColor: "border-[#c49f4f]",
        },
    ],
};
