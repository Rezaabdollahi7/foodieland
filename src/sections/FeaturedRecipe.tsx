'use client';
import HumanImage from '@/assets/images/HeroSection/human.png';
import HeroImage from '@/assets/images/HeroSection/heroImg.webp';
import Image from 'next/image';
import HandPickedIcon from '@/assets/icons/HandPicked.svg';
import LetterImage from '@/assets/images/HeroSection/letter.png';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import TimerIcon from '@/assets/icons/Timer.svg';
import ForkKnifeIcon from '@/assets/icons/ForkKnife.svg';
import PlayIcon from '@/assets/icons/PlayCircle.svg';
export const recipes = [
  {
    id: '1',
    tags: ['hot', 'handpicked'],
    category: 'chicken',
    duration: '30',
    publish_date: new Date('15 March 2022'),
    image: HeroImage.src,
    name: 'Spicy delicious chicken wings',
    description:
      'Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim ',
    user: {
      name: 'John Smith',
      avatar: HumanImage.src,
    },
  },
  {
    id: '2',
    tags: ['hot', 'handpicked'],
    category: 'chicken',
    duration: '30',
    publish_date: new Date('15 March 2022'),
    image: HeroImage.src,
    name: 'Spicy delicious chicken wings',
    description:
      'Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim ',
    user: {
      name: 'John Smith',
      avatar: HumanImage.src,
    },
  },
  {
    id: '3',
    category: 'chicken',
    duration: '30',
    publish_date: new Date('15 March 2022'),
    image: HeroImage.src,
    name: 'Spicy delicious chicken wings',
    description:
      'Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim ',
    user: {
      name: 'John Smith',
      avatar: HumanImage.src,
    },
  },
];

export function FeaturedRecipeSection() {
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
    },
    [Autoplay()]
  );
  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla-container">
        {recipes.map((recipe) => (
          <section
            key={recipe.id}
            className="embla-slide mx-10 flex h-[640px] max-w-[1280px] overflow-hidden rounded-4xl"
          >
            <div className="bg-accent relative flex min-w-0 flex-[620] flex-col p-12">
              <Image
                src={HandPickedIcon}
                alt="hand picked recipe"
                className="absolute top-12 -right-24 z-10"
              />

              <div className="bg-background flex w-fit gap-2 rounded-full px-5 py-2.5 font-semibold shadow-xl">
                <Image
                  src={LetterImage}
                  width={24}
                  height={24}
                  alt="decorative image"
                />
                Hot Recipes
              </div>
              <h1 className="mt-8 text-6xl font-semibold">{recipe.name}</h1>
              <p className="mt-6 opacity-60">{recipe.description}</p>
              <div className="mt-7 flex gap-4">
                <div className="text-black-60 bg-black-5 flex gap-2 rounded-full px-4 py-2.5">
                  <Image
                    src={TimerIcon}
                    alt="decorative"
                    width={18}
                    height={18}
                  />
                  {recipe.duration} Minutes
                </div>
                <div className="text-black-60 bg-black-5 flex gap-2 rounded-full px-4 py-2.5 capitalize">
                  <Image
                    src={ForkKnifeIcon}
                    alt="decorative"
                    width={18}
                    height={18}
                  />

                  {recipe.category}
                </div>
              </div>

              <div className="mt-auto flex justify-between">
                <div className="flex items-center gap-4">
                  <Image
                    src={recipe.user.avatar}
                    width={50}
                    height={50}
                    alt={recipe.user.name}
                    className="rounded-full"
                  />

                  <div>
                    <h3 className="text-base font-bold">{recipe.user.name}</h3>
                    <h4 className="text-black-60">
                      {recipe.publish_date.getFullYear()}
                    </h4>
                  </div>
                </div>

                <button className="flex cursor-pointer gap-4 rounded-2xl bg-black px-9 py-[18px] font-bold text-white">
                  View Recipes{' '}
                  <Image
                    src={PlayIcon}
                    width={24}
                    height={24}
                    alt="decorative"
                  />
                </button>
              </div>
            </div>
            <figure className="relative flex-[660] flex-shrink-0 p-12">
              <Image
                src={recipe.image}
                alt={recipe.name}
                fill
                className="object-cover object-[position:80%_center]"
              />
            </figure>
          </section>
        ))}
      </div>
    </div>
  );
}
