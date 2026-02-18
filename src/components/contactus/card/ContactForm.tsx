"use client";

import { useState } from "react";
import { useForm, UseFormRegister } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "motion/react";
import { Loader2, CheckCircle2 } from "lucide-react";

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
										message={errors.privacyPolicy.message}
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
	);
};

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
		initial={{ opacity: 0, scale: 0.95 }}
		animate={{ opacity: 1, scale: 1 }}
		className="flex flex-col items-center justify-center text-center py-10"
	>
		<CheckCircle2 className="w-12 h-12 text-[#3c5b45] mb-4" />
		<h3 className="text-xl font-bold text-[#3c5b45] mb-2">Message Sent!</h3>
		<p className="text-sm text-neutral-600">Thank you for reaching out.</p>
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
			className={`flex flex-col gap-1.5 ${fullWidth ? "md:col-span-2" : ""}`}
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
