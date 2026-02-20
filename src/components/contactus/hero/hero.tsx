import { HERO_CONTENT } from "./constants";
import { useTranslations } from "next-intl";

const HeroContactUs = () => {
    const t = useTranslations();

    return (
        <div className="w-full h-80 gap-4 flex flex-col items-center justify-center bg-green-900">
            <h1 className="text-5xl text-white font-semibold">
                {t(HERO_CONTENT.header)}
            </h1>
            <p className="text-xl max-w-162.5 text-center text-white">
                {t(HERO_CONTENT.desc)}
            </p>
        </div>
    );
};
export default HeroContactUs;
