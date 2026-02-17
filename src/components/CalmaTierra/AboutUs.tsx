import { Factory, ChartCandlestick } from "lucide-react";
import Image from "next/image";

export default function About() {
    return (
        <main className="bg-white">
            <div className="mx-auto max-w-6xl px-6 py-20">
                <div className="grid items-center gap-14 lg:grid-cols-2">
                    <div>
                        <span className="rounded-full border border-[#bfa15a3f] bg-[#e0d4b452] px-2 py-2 text-sm font-bold text-[#BFA05A]">
                            ABOUT US
                        </span>

                        <h2 className="mt-6 text-5xl font-bold text-emerald-900">
                            Empowering Global <br /> Agriculture
                        </h2>

                        <p className="mt-6 text-lg text-gray-800 text-justify">
                            At CalmaTierra, we understand that agriculture is the backbone of
                            civilization. Based in the strategic hub of Marbella, Spain, we
                            operate as a vital link in the global supply chain, ensuring that
                            high-quality fertilizers reach farmers and distributors
                            efficiently and reliably.
                        </p>

                        <div className="mt-10 space-y-6">
                            <div className="flex gap-4">
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-900 text-white">
                                    <Factory className="h-6 w-6" />
                                </div>
                                <div>
                                    <p className="font-semibold text-slate-900">
                                        Direct access to reliable refineries
                                    </p>
                                    <p className="mt-1 text-sm text-gray-600">
                                        We cut out unnecessary intermediaries to provide competitive pricing and guaranteed quality.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-900 text-white">
                                    <ChartCandlestick className="h-5 w-5" />
                                </div>

                                <div>
                                    <p className="font-bold text-slate-900">
                                        Profound market knowledge
                                    </p>
                                    <p className="mt-1 text-sm text-gray-600">
                                        Decades of combined experience navigating the volatile fertilizer commodity landscape.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Grid */}
                    <div className="flex justify-center lg:block">
                        <div className="relative">
                            <div className="absolute -right-8 -top-5 hidden h-full w-full rounded-xl border-2 border-[#BFA05A] lg:block" />

                            <Image
                                src="/unnamed.png"
                                alt="farmer"
                                width={514}
                                height={514}
                                className="relative rounded-xl"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}