import { specContent } from "./types";
import { CheckCheck } from "lucide-react";
export const SPEC_CONTENT: specContent = {
    header: {
        header: "Spec.header.header",
        title: "Spec.header.title",
        desc: "Spec.header.desc",
    },
    lcard: {
        title: "Spec.lcard.title",
        icon: CheckCheck,
        list: ["Spec.lcard.list1", "Spec.lcard.list2"],
    },
    desc: { header: "Spec.desc.header", desc: "Spec.desc.desc" },
    Box: [
        {
            title: "Spec.box.1.title",
            desc: "Spec.box.1.desc",
            borderColor: "border-green-300",
        },
        {
            title: "Spec.box.2.title",
            desc: "Spec.box.2.des",
            borderColor: "border-blue-300",
        },
    ],
};
