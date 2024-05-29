import { Category } from "@prisma/client";

type CategoryIconProps = {
    category: Category;
};
export default function CategoryIcon({ category }: CategoryIconProps) {
    return <div>{category.name}</div>;
}
