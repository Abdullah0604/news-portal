"use client";

import { fetchNews } from "@/lib/fetchNews";
import { NewsItem } from "@/types/news";
import { useEffect, useState } from "react";
import NewsCard from "../shared/NewsCard";
import { Button } from "../ui/button";
import Searchbar from "./Searchbar";
import CategoryFilter from "./CategoryFilter";

const NewsList = () => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [search, setSearch] = useState<string>("");
  const [category, setCategory] = useState<string>("");

  useEffect(() => {
    const getNews = async () => {
      const data = await fetchNews(category, search);
      setNews(data);
    };
    getNews();
  }, [category, search]);
  return (
    <div>
      <div className="my-8 flex  justify-between items-center gap-8">
        <Searchbar onSearch={setSearch} />
        <CategoryFilter onCategory={setCategory} />
      </div>
      <div>
        {news.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {news.map((item: NewsItem) => (
              <NewsCard key={item._id} item={item} />
            ))}
          </div>
        ) : (
          <div className="w-full h-[calc(100vh-100px)] flex justify-center items-center ">
            <Button variant="outline" className="text-lg" size="lg">
              Loading......
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsList;
