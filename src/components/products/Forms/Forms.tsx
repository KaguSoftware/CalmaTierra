import { FORMS_CONTENT } from "./constants";
import Image from "next/image";

const Forms = () => {
    return (
        <main className="w-full max-w-7xl mx-auto px-4  md:px-6">
            <div className="grid grid-cols-2 bg-amber-800 gap-10">
                <div className="col-span-2 text-center">
                    <h1>{FORMS_CONTENT.title}</h1>
                    <p>{FORMS_CONTENT.desc}</p>
                </div>
                {FORMS_CONTENT.cards.map((cards) => (
                    <div
                        key={cards.title}
                        className="w-full justify-between rounded-2xl bg-amber-400 shadow-xl"
                    >
                        <div className="relative">
                            <Image
                                src={cards.img.src}
                                alt={cards.img.alt}
                                height={100}
                                width={400}
                                className="w-full h-50 relative object-cover rounded-t-2xl"
                            />
                            <h1 className="absolute bottom-0 mx-5">
                                {cards.title}
                            </h1>
                        </div>
                        <div className="flex justify-between m-5">
                            <h1 className="rounded-2xl p-1 bg-amber-100">
                                {cards.desc.tag}
                            </h1>{" "}
                            <h2>{cards.desc.size}</h2>
                        </div>
                        <div className="gap-4 flex flex-col">
                            <p>{cards.desc.desc}</p>
                            {cards.List.map((item, index) => (
                                <div
                                    key={`${item}-${index}`}
                                    className="flex items-center"
                                >
                                    <cards.icon className="size-10 text-blue-300" />
                                    <p>{item}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
};
export default Forms;
