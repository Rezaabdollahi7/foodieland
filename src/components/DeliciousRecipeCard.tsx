import React from 'react';
import { MdTimer } from 'react-icons/md';
import { GoHeart } from 'react-icons/go';
import { IoHeart } from 'react-icons/io5';
import { ImSpoonKnife } from 'react-icons/im';
import Image, { StaticImageData } from 'next/image';
import { useState } from 'react';

type DeliciousRecipeCardProps = {
  id: number;
  imgSrc: StaticImageData;
  name: string;
  time: string;
  category: string;
};

const CategoriesCard = ({
  imgSrc,
  name,
  time,
  category,
}: DeliciousRecipeCardProps) => {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div className="food-item relative col-span-1 flex flex-col gap-4 rounded-2xl border border-gray-200 p-2">
      {/* like button */}
      <div
        className="like-wrapper absolute top-4 right-4 flex size-10 items-center justify-center rounded-full bg-white"
        onClick={() => setIsLiked(!isLiked)}
        aria-label={isLiked ? 'Unlike recipe' : 'Like recipe'}
      >
        {isLiked ? (
          <IoHeart className="size-5 text-red-500" />
        ) : (
          <GoHeart className="size-5" />
        )}
      </div>
      {/* food image */}
      <div className="img-container mx-auto">
        <Image
          src={imgSrc}
          alt={name}
          className="rounded-2xl object-cover"
          width={350}
          height={250}
          priority={false}
          placeholder="blur"
        />
      </div>
      {/* food information */}
      <div className="food-info flex flex-col gap-4 p-2">
        <h3 className="food-name line-clamp-2 text-lg font-semibold">{name}</h3>
        <div className="food-meta flex gap-6">
          <div className="food-time flex items-end gap-1 md:flex-col md:items-center xl:flex-row">
            <MdTimer className="size-6" />
            <span className="text-sm text-black/60">{time}</span>
          </div>
          <div className="food-category flex items-end gap-1 md:flex-col md:items-center xl:flex-row">
            <ImSpoonKnife className="size-5" />
            <span className="text-sm text-black/60">{category}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoriesCard;
