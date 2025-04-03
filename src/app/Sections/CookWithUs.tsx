import Image from 'next/image';
import cheefImg from '@/assets/images/chef.webp';
import lettuceImg from '@/assets/icons/CookWithUs/img1.png';
import meatImg from '@/assets/icons/CookWithUs/img2.png';
import onionImg from '@/assets/icons/CookWithUs/img4.png';
import tomatoImg from '@/assets/icons/CookWithUs/img3.png';

export default function CookWithUs() {
  return (
    <section className="mx-auto my-32 flex flex-col justify-between gap-16 px-4 sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg lg:flex-row xl:max-w-screen-xl">
      {/* left section */}
      <div className="left order-1 flex flex-1 flex-col items-center justify-center gap-8 lg:-order-1 lg:items-start">
        <h5 className="text-center text-xl font-semibold tracking-tight md:text-2xl lg:text-start xl:text-5xl xl:leading-14">
          Everyone can be a chef in their own kitchen
        </h5>
        <p className="text-justify text-black/60">
          Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqut enim ad minim{' '}
        </p>
        <a
          href="#"
          className="rounded-xl bg-black px-8 py-3 text-sm font-semibold text-white"
        >
          Learn More
        </a>
      </div>

      {/* Right section - Chef image with floating elements */}
      <div className="right relative">
        {/* back gradient */}
        <div className="absolute top-0 -z-20 h-full w-full rounded-2xl bg-gradient-to-b from-sky-50/10 to-sky-200"></div>

        <Image
          src={cheefImg}
          alt="Chef cooking in kitchen"
          width={700}
          priority
        />

        {/* Circular rotating elements */}
        <div className="circle absolute top-0 -z-10 ms-[25%] h-[95%] w-[65%] animate-[spin_10s_linear_5] rounded-full">
          <div className="relative h-full w-full">
            <Image
              src={onionImg}
              alt="test"
              className="absolute top-5 right-12 w-[40px] sm:w-[50px]"
              width={50}
              height={50}
            />

            <Image
              src={lettuceImg}
              alt="lettuce-img"
              className="absolute top-[35%] left-3 w-[40px] sm:w-[50px]"
              width={50}
              height={50}
            />

            <Image
              src={meatImg}
              alt="meat-img"
              className="absolute right-[16%] bottom-[0%] -z-10 w-[50px] sm:w-[70px]"
              width={70}
              height={70}
            />
          </div>
        </div>

        {/* tomato */}
        <Image
          src={tomatoImg}
          alt="tomato-img"
          className="absolute top-[70%] -left-4 w-[40px] animate-bounce sm:w-[50px]"
          width={50}
          height={50}
        />
      </div>
    </section>
  );
}
