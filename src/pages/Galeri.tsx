
import { MainLayout } from "@/components/layout/MainLayout";
import { GalleryGrid } from "@/components/galeri/GalleryGrid";

const Galeri = () => {
  return (
    <MainLayout>
      <div className="container py-8 md:py-12">
        <div className="space-y-8">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Galeri Kegiatan</h1>
            <p className="text-muted-foreground">
              Dokumentasi kegiatan ekstrakurikuler dan prestasi siswa.
            </p>
          </div>
          
          <GalleryGrid />
        </div>
      </div>
    </MainLayout>
  );
};

export default Galeri;
