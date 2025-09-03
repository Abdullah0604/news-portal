import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface CategoryProps {
  onCategory: (category: string) => void;
}
const CategoryFilter = ({ onCategory }: CategoryProps) => {
  const categories: string[] = ["all", "tech", "health", "sports", "business"];
  return (
    <div className="w-full md:w-2/5 flex flex-col lg:flex-row lg:justify-end lg:items-center gap-3  lg:mt-8">
      <h3 className="text-gray-800 font-bold text-lg  ">Filter Category: </h3>

      <Select
        onValueChange={(value) => onCategory(value === "all" ? "" : value)}
      >
        <SelectTrigger className=" w-full lg:w-[180px]">
          <SelectValue placeholder="Select Category" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>News Category</SelectLabel>
            {categories.map((text, i) => (
              <SelectItem className="capitalize" key={i} value={text}>
                {text}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default CategoryFilter;
