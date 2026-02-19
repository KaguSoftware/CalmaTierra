import ContactForm from "./ContactForm";

const ContactCard = () => {
	return (
		<div className="w-full flex justify-end py-16 px-4 md:px-24">
			<div className="max-w-md w-full relative">
				<ContactForm />
			</div>
		</div>
	);
};

export default ContactCard;
