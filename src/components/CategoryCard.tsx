import Image, { StaticImageData } from 'next/image';
import clsx from 'clsx';

type CategoriesCardProps = {
  id: number;
  imgsrc: StaticImageData;
  text: string;
  bgColor: string;
  photobgColor: string;
};

const CategoriesCard = ({
  imgsrc,
  text,
  bgColor,
  photobgColor,
}: CategoriesCardProps) => {
  return (
    <div
      className={clsx(
        'relative col-span-1 flex flex-col items-center gap-4 rounded-2xl bg-gradient-to-b py-6 transition hover:scale-105 hover:cursor-pointer md:gap-8',
        bgColor
      )}
    >
      <div
        className={clsx(
          'absolute -z-10 h-[100px] w-[100px] rounded-full opacity-30 blur-2xl',
          photobgColor
        )}
      />
      <Image src={imgsrc} alt={`${text}-img`} width={100} height={100} />
      <p className="font-semibold">{text}</p>
    </div>
  );
};

export default CategoriesCard;
