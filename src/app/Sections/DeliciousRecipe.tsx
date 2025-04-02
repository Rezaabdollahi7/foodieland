'use client';

import DeliciousRecipeItems from '@/consts/DeliciousRecipeItems';
import DeliciousRecipeCard from '@/components/DeliciousRecipeCard';

export default function DeliciousRecipe() {
  return (
    <section className="mx-auto my-32 flex flex-col justify-between gap-16 px-4 sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl">
      {/*  DeliciousRecipe header*/}
      <div className="head-section flex flex-col items-start justify-between gap-8 md:gap-5 lg:flex-row">
        <h3 className="w-full text-center text-2xl font-semibold md:text-start md:text-3xl lg:text-5xl">
          Try this delicious recipe to make your day
        </h3>
        <p className="text-center text-black/60">
          Lorem ipsum dolor sit amet, consectetu ipisicing elit, sed do eiusmod
          tempor incididu ut labore et dolore magna aliqut enim ad minim
        </p>
      </div>
      {/* food items wrapper */}
      <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {DeliciousRecipeItems.map((food) => (
          <DeliciousRecipeCard key={food.id} {...food} />
        ))}
      </div>
    </section>
  );
}
