
import { useState } from "react";
import { MainLayout } from "@/components/layout/MainLayout";
import { EskulFilter } from "@/components/ekstrakurikuler/EskulFilter";
import { EskulGrid } from "@/components/ekstrakurikuler/EskulGrid";
import { eskulData } from "@/data/eskul";

const Ekstrakurikuler = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredEskul = eskulData.filter((eskul) => {
    const matchesCategory = activeCategory === "all" || eskul.category === activeCategory;
    const matchesSearch = eskul.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                        eskul.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });

  return (
    <MainLayout>
      <div className="container py-8 md:py-12">
        <div className="space-y-8">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Ekstrakurikuler</h1>
            <p className="text-muted-foreground">
              Temukan dan bergabung dengan berbagai kegiatan ekstrakurikuler di sekolah kami.
            </p>
          </div>
          
          <EskulFilter 
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
          
          <EskulGrid eskul={filteredEskul} />
        </div>
      </div>
    </MainLayout>
  );
};

export default Ekstrakurikuler;
