import { z } from "zod";

export const contactFormSchema = z.object({
	firstName: z.string().min(1, { message: "First name is required" }),
	lastName: z.string().min(1, { message: "Last name is required" }),
	email: z.string().email({ message: "Please enter a valid email address" }),
	company: z.string().min(1, { message: "Company name is required" }),
	interest: z.string().min(1, { message: "Please select an interest" }),
	message: z
		.string()
		.min(10, { message: "Message must be at least 10 characters" }),
	privacyPolicy: z.literal(true, {
		message: "You must agree to the privacy policy",
	}),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
