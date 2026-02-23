import Image from "next/image";

export default function HeroContactUs() {
	return (
		<div className="w-full h-80 gap-4 flex flex-col items-center justify-center bg-green-700 px-5">
			<h1 className="md:text-5xl text-4xl text-center text-white font-semibold">
				Get in Touch with CalmaTierra
			</h1>
			<p className="md:text-xl text-lg max-w-162.5 text-center text-white">
				Expert agricultural solutions tailored to your soil. Contact our
				specialists for advice, partnerships, and global distribution
				quotations.
			</p>
		</div>
	);
}
