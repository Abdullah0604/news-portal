import Banner from "@/components/shared/Banner";
import NewsCard from "@/components/shared/NewsCard";
import NewsLetter from "@/components/shared/NewsLetter";
import { NewsItem } from "@/types/news";

export default async function Home() {
  const data = await fetch(
    "https://news-api-next-js-virid.vercel.app/api/news"
  );
  const news = await data.json();
  console.log(news);
  return (
    <div className="py-12">
      <Banner />

      <div className="my-12">
        <h4 className="font-bold text-2xl text-gray-900 mb-8">Latest News</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {news.slice(0, 3).map((item: NewsItem) => (
            <NewsCard key={item._id} item={item} />
          ))}
        </div>
      </div>
      <NewsLetter />
    </div>
  );
}
