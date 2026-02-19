import Forms from "@/src/components/products/Forms/Forms";
import ProductsHero from "@/src/components/products/hero/Hero";
import Logistics from "@/src/components/products/Logistics/Logistics";
import TechSpec from "@/src/components/products/TechSpec/TechSpec";

export default function ProductsPage() {
    return (
        <main>
            <ProductsHero />
            <TechSpec />
            <Forms />
            <Logistics />
        </main>
    );
}
