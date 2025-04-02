import Navbar from '@/components/Navbar';
import Categories from './Sections/Categories';
import CookWithUs from './Sections/CookWithUs';
import DeliciousRecipe from './Sections/DeliciousRecipe';
import Footer from '@/components/Footer';
export default function Home() {
  return (
    <>
      <Navbar />
      <Categories />
      <CookWithUs />
      <DeliciousRecipe />
      <Footer />
    </>
  );
}
