"use server";

import { Resend } from "resend";
import { contactFormSchema, ContactFormValues } from "@/src/lib/schemas";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(data: ContactFormValues) {
	const result = contactFormSchema.safeParse(data);

	if (!result.success) {
		return { error: "Invalid data provided" };
	}

	const { firstName, lastName, email, company, interest, message } = result.data;

	try {
		const { data: emailData, error } = await resend.emails.send({
			from: "Contact Form <onboarding@resend.dev>",
			to: ["parsamanes@yahoo.com"],
			replyTo: email,
			subject: `New message from ${firstName} ${lastName} (${company})`,
			text: `Name: ${firstName} ${lastName}\nEmail: ${email}\nCompany: ${company}\nInterest: ${interest}\n\nMessage:\n${message}`,
		});

		if (error) {
			return { error: error.message };
		}

		return { success: true, data: emailData };
	} catch (error) {
		return { error: "Failed to send email" };
	}
}
