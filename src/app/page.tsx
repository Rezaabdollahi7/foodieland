import Navbar from '@/components/Navbar';
import Categories from './Sections/Categories';
import CookWithUs from './Sections/CookWithUs';
import DeliciousRecipe from './Sections/DeliciousRecipe';
import Footer from '@/components/Footer';
import { FeaturedRecipeSection } from '@/app/Sections/FeaturedRecipe';
export default function Home() {
  return (
    <>
      <Navbar />
      <FeaturedRecipeSection />
      <Categories />
      <CookWithUs />
      <DeliciousRecipe />
      <Footer />
    </>
  );
}
