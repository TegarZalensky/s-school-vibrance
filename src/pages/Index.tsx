
import { MainLayout } from "@/components/layout/MainLayout";
import { Hero } from "@/components/home/Hero";
import { FeaturedEkskul } from "@/components/home/FeaturedEkskul";

const Index = () => {
  return (
    <MainLayout>
      <Hero />
      <FeaturedEkskul />
    </MainLayout>
  );
};

export default Index;
