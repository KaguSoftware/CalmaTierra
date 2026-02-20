"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "motion/react";
import { Loader2, CheckCircle2 } from "lucide-react";
import { useTranslations } from "next-intl";

// Colocated data and logic imports
import { HEADERCONTENT, GRIDCONTENT } from "./constants";
import { contactFormSchema, ContactFormValues } from "@/src/lib/schemas";
import { sendContactEmail } from "@/src/app/actions";

const FIELDS_CONFIG = [
    { name: "firstName", label: "First Name", placeholder: "John" },
    { name: "lastName", label: "Last Name", placeholder: "Doe" },
    {
        name: "email",
        label: "Work Email",
        type: "email",
        placeholder: "john@company.com",
        fullWidth: true,
    },
    {
        name: "company",
        label: "Company Name",
        placeholder: "Your Company",
        fullWidth: true,
    },
    {
        name: "interest",
        label: "I am interested in",
        type: "select",
        fullWidth: true,
        options: [
            "Bulk Fertilizer Order",
            "Technical Support",
            "Partnership Inquiry",
            "Other",
        ],
    },
    {
        name: "message",
        label: "Message",
        isTextArea: true,
        placeholder: "Tell us about your needs...",
        fullWidth: true,
    },
] as const;
const ContactForm = () => {
    const t = useTranslations();
    const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm<ContactFormValues>({
        resolver: zodResolver(contactFormSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            company: "",
            interest: "",
            message: "",
        },
    });
    const onSubmit = async (data: ContactFormValues) => {
        const result = await sendContactEmail(data);
        if (result?.success) {
            setStatus("success");
            reset();
            setTimeout(() => setStatus("idle"), 5000);
        } else {
            setStatus("error");
            setTimeout(() => setStatus("idle"), 5000);
        }
    };
    return (
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
                <div className="flex flex-col justify-between h-full text-green-900">
                    {/* Main Header */}
                    <div className="space-y-4">
                        <h1 className="font-black text-4xl md:text-6xl">
                            {t(HEADERCONTENT.title)}
                        </h1>
                        <p className="text-gray-600 max-w-150 text-lg">
                            {t(HEADERCONTENT.desc)}
                        </p>
                    </div>
                    {/* Info Grid */}
                    <div className="grid grid-cols-1 gap-8 mt-10">
                        {GRIDCONTENT.map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <div
                                    key={index}
                                    className="flex flex-col gap-2 "
                                >
                                    <div className="flex gap-4 ">
                                        <Icon
                                            className="text-[#c49f4f] mt-1"
                                            size={18}
                                        />
                                        <h3 className="text-xl font-bold">
                                            {t(item.title)}
                                        </h3>
                                    </div>
                                    <p className="text-neutral-400 ">
                                        {t(item.desc)}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
            <div className="bg-white p-6 md:p-8 rounded-3xl shadow-xl border border-neutral-100 h-fit w-full overflow-hidden relative">
                <AnimatePresence mode="wait">
                    {status === "success" ? (
                        <SuccessState />
                    ) : (
                        <motion.div
                            key="form"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            <FormHeader />
                            <form
                                onSubmit={handleSubmit(onSubmit)}
                                className="grid grid-cols-1 md:grid-cols-2 gap-5"
                            >
                                {FIELDS_CONFIG.map((field) => (
                                    <Field
                                        key={field.name}
                                        {...field}
                                        register={register}
                                        error={
                                            errors[
                                                field.name as keyof ContactFormValues
                                            ]?.message
                                        }
                                    />
                                ))}

                                <div className="md:col-span-2 flex flex-col gap-2">
                                    <label className="flex items-center gap-3 cursor-pointer group">
                                        <input
                                            type="checkbox"
                                            {...register("privacyPolicy")}
                                            className="w-4 h-4 rounded border-neutral-300 text-[#3c5b45] focus:ring-[#3c5b45] transition-all"
                                        />
                                        <span className="text-xs text-neutral-600 group-hover:text-neutral-900 transition-colors">
                                            I agree to the privacy policy and
                                            processing of my data.
                                        </span>
                                    </label>
                                    {errors.privacyPolicy && (
                                        <ErrorMessage
                                            message={
                                                errors.privacyPolicy
                                                    .message as string
                                            }
                                        />
                                    )}
                                </div>

                                <div className="md:col-span-2 mt-2">
                                    <SubmitButton isSubmitting={isSubmitting} />
                                </div>
                            </form>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};
// Sub-components
const FormHeader = () => (
    <div className="mb-6">
        <h2 className="text-2xl font-serif font-bold text-neutral-900 mb-1">
            Send us a Message
        </h2>
        <p className="text-sm text-neutral-600">
            Our team typically responds within 24 hours.
        </p>
    </div>
);
const SuccessState = () => (
    <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="flex flex-col items-center justify-center text-center py-12 h-full"
    >
        <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: 0.1,
            }}
            className="w-20 h-20 bg-[#e8f5e9] rounded-full flex items-center justify-center mb-6 shadow-sm"
        >
            <CheckCircle2
                className="w-10 h-10 text-[#3c5b45]"
                strokeWidth={3}
            />
        </motion.div>
        <motion.h3
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.4 }}
            className="text-2xl font-serif font-bold text-[#3c5b45] mb-2"
        >
            Message Sent!
        </motion.h3>
        <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.4 }}
            className="text-neutral-600 max-w-70"
        >
            Thank you for reaching out. We will get back to you within 24 hours.
        </motion.p>
    </motion.div>
);
const Field = ({
    label,
    name,
    register,
    error,
    type = "text",
    placeholder,
    fullWidth,
    isTextArea,
    options,
}: any) => {
    const commonClass =
        "border border-neutral-300 rounded-lg p-2.5 focus:ring-2 focus:ring-[#3c5b45] focus:outline-none transition-all w-full text-sm";

    return (
        <div
            className={`flex flex-col gap-1.5 ${fullWidth ? "md:col-span-2" : ""
                }`}
        >
            <label className="text-sm font-semibold text-neutral-700">
                {label}
            </label>
            {type === "select" ? (
                <select
                    {...register(name)}
                    className={`${commonClass} appearance-none bg-white`}
                >
                    <option value="">Select an option</option>
                    {options?.map((opt: string) => (
                        <option key={opt} value={opt}>
                            {opt}
                        </option>
                    ))}
                </select>
            ) : isTextArea ? (
                <textarea
                    {...register(name)}
                    placeholder={placeholder}
                    rows={3}
                    className={`${commonClass} resize-none`}
                />
            ) : (
                <input
                    type={type}
                    {...register(name)}
                    placeholder={placeholder}
                    className={commonClass}
                />
            )}
            {error && <ErrorMessage message={error} />}
        </div>
    );
};
const ErrorMessage = ({ message }: { message?: string }) => (
    <span className="text-red-500 text-[10px] font-medium ml-1">{message}</span>
);

const SubmitButton = ({ isSubmitting }: { isSubmitting: boolean }) => (
    <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-[#3c5b45] hover:bg-[#2d4534] text-white font-bold py-3.5 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 uppercase tracking-wider disabled:opacity-70 text-sm shadow-md active:scale-[0.98]"
    >
        {isSubmitting ? (
            <>
                <Loader2 className="w-4 h-4 animate-spin" /> Sending...
            </>
        ) : (
            "Send Message"
        )}
    </button>
);
export default ContactForm;
