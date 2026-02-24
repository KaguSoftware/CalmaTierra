import Card from "@/src/components/contactus/card/Card";
import HeroContactUs from "@/src/components/contactus/hero/hero";

export default function ContactPage() {
	return (
		<main className="grid gap-10 mt-5">
			<HeroContactUs />
			<Card />
		</main>
	);
}
