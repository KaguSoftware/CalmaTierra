"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "motion/react";
import { Loader2, CheckCircle2 } from "lucide-react";

import { contactFormSchema, ContactFormValues } from "@/src/lib/schemas";
import { sendContactEmail } from "@/src/app/actions";

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
			privacyPolicy: undefined,
		},
	});

	const onSubmit = async (data: ContactFormValues) => {
		console.log("Form Data:", data);
		const result = await sendContactEmail(data);

		if (result?.success) {
			setStatus("success");
			reset();
			setTimeout(() => setStatus("idle"), 5000);
		} else {
			console.error(result?.error);
			setStatus("error");
			setTimeout(() => setStatus("idle"), 5000);
		}
	};

	return (
		<div className="bg-white p-6 md:p-8 rounded-3xl shadow-xl border border-neutral-100 h-fit w-full overflow-hidden relative">
			<AnimatePresence mode="wait">
				{status === "success" ? (
					<motion.div
						key="success"
						initial={{ opacity: 0, scale: 0.95 }}
						animate={{ opacity: 1, scale: 1 }}
						exit={{ opacity: 0, scale: 0.95 }}
						className="flex flex-col items-center justify-center text-center py-12"
					>
						<CheckCircle2 className="w-16 h-16 text-[#3c5b45] mb-4" />
						<h3 className="text-2xl font-bold text-[#3c5b45] mb-2">Message Sent!</h3>
						<p className="text-neutral-600">
							Thank you for reaching out. Our team will get back to you shortly.
						</p>
					</motion.div>
				) : (
					<motion.div
						key="form"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
					>
						<div className="mb-8">
							<h2 className="text-3xl font-serif font-bold text-neutral-900 mb-2">
								Send us a Message
							</h2>
							<p className="text-neutral-600">
								Please fill out the form below. Our team typically responds within 24 hours.
							</p>
						</div>

						<form
							onSubmit={handleSubmit(onSubmit)}
							className="grid grid-cols-1 md:grid-cols-2 gap-6"
						>
							{/* Row 1: First and Last Name */}
							<div className="flex flex-col gap-2">
								<label className="text-sm font-semibold text-neutral-700">First Name</label>
								<input
									{...register("firstName")}
									placeholder="John"
									className="border border-neutral-300 rounded-lg p-3 focus:ring-2 focus:ring-[#3c5b45] focus:outline-none transition-all"
								/>
								{errors.firstName && (
									<span className="text-red-500 text-xs">{errors.firstName.message}</span>
								)}
							</div>

							<div className="flex flex-col gap-2">
								<label className="text-sm font-semibold text-neutral-700">Last Name</label>
								<input
									{...register("lastName")}
									placeholder="Doe"
									className="border border-neutral-300 rounded-lg p-3 focus:ring-2 focus:ring-[#3c5b45] focus:outline-none transition-all"
								/>
								{errors.lastName && (
									<span className="text-red-500 text-xs">{errors.lastName.message}</span>
								)}
							</div>

							{/* Row 2: Work Email */}
							<div className="flex flex-col gap-2 md:col-span-2">
								<label className="text-sm font-semibold text-neutral-700">Work Email</label>
								<input
									type="email"
									{...register("email")}
									placeholder="john@company.com"
									className="border border-neutral-300 rounded-lg p-3 focus:ring-2 focus:ring-[#3c5b45] focus:outline-none transition-all"
								/>
								{errors.email && (
									<span className="text-red-500 text-xs">{errors.email.message}</span>
								)}
							</div>

							{/* Row 3: Company Name */}
							<div className="flex flex-col gap-2 md:col-span-2">
								<label className="text-sm font-semibold text-neutral-700">Company Name</label>
								<input
									{...register("company")}
									placeholder="Your Company"
									className="border border-neutral-300 rounded-lg p-3 focus:ring-2 focus:ring-[#3c5b45] focus:outline-none transition-all"
								/>
								{errors.company && (
									<span className="text-red-500 text-xs">{errors.company.message}</span>
								)}
							</div>

							{/* Row 4: Interested In */}
							<div className="flex flex-col gap-2 md:col-span-2">
								<label className="text-sm font-semibold text-neutral-700">I am interested in</label>
								<select
									{...register("interest")}
									className="border border-neutral-300 rounded-lg p-3 bg-white focus:ring-2 focus:ring-[#3c5b45] focus:outline-none transition-all appearance-none"
								>
									<option value="">Select an option</option>
									<option value="Bulk Fertilizer Order">Bulk Fertilizer Order</option>
									<option value="Technical Support">Technical Support</option>
									<option value="Partnership Inquiry">Partnership Inquiry</option>
									<option value="Other">Other</option>
								</select>
								{errors.interest && (
									<span className="text-red-500 text-xs">{errors.interest.message}</span>
								)}
							</div>

							{/* Row 5: Message */}
							<div className="flex flex-col gap-2 md:col-span-2">
								<label className="text-sm font-semibold text-neutral-700">Message</label>
								<textarea
									{...register("message")}
									placeholder="Tell us about your needs..."
									rows={4}
									className="border border-neutral-300 rounded-lg p-3 focus:ring-2 focus:ring-[#3c5b45] focus:outline-none transition-all resize-none"
								/>
								{errors.message && (
									<span className="text-red-500 text-xs">{errors.message.message}</span>
								)}
							</div>

							{/* Row 6: Privacy Policy */}
							<div className="flex flex-col gap-2 md:col-span-2">
								<label className="flex items-center gap-3 cursor-pointer">
									<input
										type="checkbox"
										{...register("privacyPolicy")}
										className="w-5 h-5 rounded border-neutral-300 text-[#3c5b45] focus:ring-[#3c5b45]"
									/>
									<span className="text-sm text-neutral-600">
										I agree to the privacy policy and processing of my data.
									</span>
								</label>
								{errors.privacyPolicy && (
									<span className="text-red-500 text-xs">{errors.privacyPolicy.message}</span>
								)}
							</div>

							{/* Submit Button */}
							<div className="md:col-span-2 mt-4">
								<button
									type="submit"
									disabled={isSubmitting}
									className="w-full bg-[#3c5b45] hover:bg-[#2d4534] text-white font-bold py-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 uppercase tracking-wider disabled:opacity-70"
								>
									{isSubmitting ? (
										<>
											<Loader2 className="w-5 h-5 animate-spin" />
											Sending...
										</>
									) : (
										"Send Message"
									)}
								</button>
								{status === "error" && (
									<p className="text-red-500 text-sm text-center mt-2">
										Failed to send message. Please try again.
									</p>
								)}
							</div>
						</form>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};

export default ContactForm;
