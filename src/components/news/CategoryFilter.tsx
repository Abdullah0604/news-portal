import React from "react";

interface CategoryProps {
  onCategory: (category: string) => void;
}
const CategoryFilter = ({ onCategory }: CategoryProps) => {
  return (
    <div className="w-1/4">
      <h3 className="text-gray-800 font-bold text-lg mb-3">News Category</h3>
    </div>
  );
};

export default CategoryFilter;
