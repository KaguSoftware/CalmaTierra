import { div } from "motion/react-client";
import { CONTACTS_PROPS } from "./constants";

export default function Contacts() {
    return (

        <div className=" max-w-150 flex flex-col gap-6 px-10 md:ml-20">
            <h1 className="text-2xl text-green-900">Our Headquarters</h1>
            <p className="text-gray-500"> Located in the heart of Spain's agricultural innovation hub, our Marbella office manages our international logistics and client relations. We are open Monday through Friday, 9:00 AM to 6:00 PM CET.</p>
            {CONTACTS_PROPS.map((item, index) => {
                const Icon = item.icon;
                return (
                    <div key={index} className="gap-4 flex">
                        <Icon className="text-[#c49f4f] mt-1" size={18} />
                        <div className="flex flex-col">
                            <div className=" font-semibold">{item.title}</div>
                            <div className="max-w-75 text-gray-500">{item.desc}</div>
                        </div>
                    </div>
                );
            })}
        </div>

    )
}