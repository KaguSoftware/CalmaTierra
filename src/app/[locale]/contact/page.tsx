import Card from "@/src/components/contactus/card/Card";
import Maplocation from "@/src/components/contactus/card/location/location";

export default function ContactPage() {
	return (
		<main className="grid gap-10 mt-5">
			<Card />
			<Maplocation />
		</main>
	);
}
