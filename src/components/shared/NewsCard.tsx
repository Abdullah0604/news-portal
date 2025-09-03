import Image from "next/image";
import Link from "next/link";
import React from "react";

import { Button } from "../ui/button";
import { NewsCardProps } from "@/types/news";

const NewsCard = ({ item }: NewsCardProps) => {
  const {
    title,
    description,
    imageUrl,
    _id,
    // snippet,
    // url,
    // language,
    // published_at,
    // source,
    // categories,
    // relevance_score,
  } = item;
  return (
    <div className="border p-6 rounded-md shadow-md">
      <Link href={`/news/${_id}`}>
        <Image
          src={imageUrl}
          alt="card image"
          width={500}
          height={500}
          className="mb-5 md:h-56 rounded hover:scale-105 cursor-pointer transition-all duration-200"
        />
      </Link>
      <div className="flex flex-col gap-y-3">
        <h3 className="text-xl font-bold text-gray-800 ">
          {title.slice(0, 50)}.....
        </h3>
        <p className="text-gray-500 text-sm mb-2">
          {description.slice(0, 90)}....
        </p>

        <Link href={`/news/${_id}`}>
          <Button variant="default">Read More</Button>
        </Link>
      </div>
    </div>
  );
};

export default NewsCard;
