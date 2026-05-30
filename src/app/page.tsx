import BrandSection from "@/components/BrandSection";
import CategoryCards from "@/components/CategoryCards";
import Footer from "@/components/Footer";
import HeroSlider from "@/components/HeroSlider";
import ProductCard from "@/components/ProductCard";
import RecentNews from "@/components/RecentNews";
import SaleBanner from "@/components/SaleBanner";
import Services from "@/components/Services";
import WatchBanner from "@/components/WatchBanner";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-white dark:bg-gray-900 overflow-x-hidden">
      <HeroSlider />
      <CategoryCards />
      <Services />
      <SaleBanner />
      <ProductCard />
      <WatchBanner />
      <RecentNews />
      <BrandSection />
      <Footer />
    </div>
  );
}

