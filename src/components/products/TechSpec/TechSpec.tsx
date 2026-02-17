import { SPEC_CONTENT } from "./constants";
const TechSpec = () => {
    return (
        <main className="w-full max-w-7xl mx-auto px-4 md:px-6">
            <div className="grid grid-cols-2 relative h-100 bg-amber-300">
                <div className="col-span-2 text-center">
                    <h3>{SPEC_CONTENT.header.header}</h3>
                    <h1>{SPEC_CONTENT.header.title}</h1>
                    <p>{SPEC_CONTENT.header.desc}</p>
                </div>
                <div className="border-2  border-gray-100 rounded-2xl">
                    <h1>{SPEC_CONTENT.lcard.title}</h1>
                    <div className=" absolute right-150 top-26 rotate-20 rounded-full py-7 px-4.5 text-white bg-amber-950 max-w-fit">
                        46%N
                    </div>
                    {SPEC_CONTENT.lcard.list.map((list) => (
                        <div key={list} className="flex">
                            <SPEC_CONTENT.lcard.icon />
                            {list}
                        </div>
                    ))}
                </div>
                <div className="grid grid-cols-2 gap-4 ">
                    <div className="col-span-2">
                        <h1>{SPEC_CONTENT.desc.header}</h1>{" "}
                        <p>{SPEC_CONTENT.desc.desc}</p>
                    </div>
                    {SPEC_CONTENT.Box.map((Box) => (
                        <div
                            key={null}
                            className={`h-40 bg-amber-400 flex flex-col rounded-2xl border-l-10 ${Box.borderColor}`}
                        >
                            <h1>{Box.title}</h1> <p>{Box.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
            ;
        </main>
    );
};
export default TechSpec;
