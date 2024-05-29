import { prisma } from "@/src/lib/prisma";
import CategoryIcon from "../ui/CategoryIcon";

async function getCategories() {
    return prisma.category.findMany();
}
export default async function OrderSidebar() {
    const categories = await getCategories();
    return (
        <>
            <aside className="md:w-72 md:h-screen bg-white">
                <nav className="mt-10">
                    {categories.map((category) => (
                        <CategoryIcon key={category.id} category={category} />
                    ))}
                </nav>
            </aside>
        </>
    );
}
