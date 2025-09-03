import React from "react";
import { Input } from "../ui/input";

interface SearchProps {
  onSearch: (search: string) => void;
}
const Searchbar = ({ onSearch }: SearchProps) => {
  return (
    <div className="w-full md:w-3/5">
      <h3 className="text-gray-800 font-bold text-lg mb-3">Search News</h3>

      <Input
        type="text"
        placeholder="Search news....."
        className="p-1  rounded-md w-full"
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
};

export default Searchbar;
