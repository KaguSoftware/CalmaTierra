import Image from "next/image";
import { NAVBAR_PAGES } from "./constants";
import Link from "next/link";
export default function Navbar() {

    return (
        <main >
            <nav className="w-full h-20 flex items-center gap-8 px-10 bg-white fixed">
                <Link className="flex gap-10 " href={"/Home"}>
                    <Image src={"/tree.png"} width={40} height={40} alt={"Tree"} />
                    <h1 className="text-2xl font-bold text-green-900 tracking-tighter italic">CalmaTierra</h1>
                </Link>
                <div className=" md:flex hidden items-center ml-auto gap-8">
                    {NAVBAR_PAGES.map((item, index) => (
                        <Link className=" text-green-900 " key={index} href={item.href}> {item.page} </Link>
                    ))}
                    <Link href={"/ContactUs"}>
                        <button className="px-4 hover:bg-green-800 py-2 rounded-md bg-green-900">  Contact Us  </button>
                    </Link>
                </div>





            </nav>
        </main >
    )
}
