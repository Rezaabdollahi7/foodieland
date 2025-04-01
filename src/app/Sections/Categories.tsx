import CategoriesItems from '@/consts/CategoriesItems';
import CategoriesCard from '@/components/CategoryCard';
export default function Categories() {
  return (
    <section className="mx-auto flex flex-col gap-12 px-4 sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl">
      <div className="cat-header flex w-full items-center justify-between">
        <h3 className="text-xl font-semibold sm:text-3xl lg:text-4xl">
          Categories
        </h3>
        <span className="bg-lightblue rounded-lg p-2 text-sm font-semibold hover:cursor-pointer sm:rounded-2xl sm:text-base md:px-6 md:py-4">
          View All Categories
        </span>
      </div>
      <div className="cat-items grid grid-cols-2 gap-5 min-[600px]:grid-cols-3 md:gap-10 lg:grid-cols-4 xl:grid-cols-6">
        {CategoriesItems.map((item) => (
          <CategoriesCard key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
}
