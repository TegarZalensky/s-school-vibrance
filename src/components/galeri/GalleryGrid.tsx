
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const galleryImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=800&q=80",
    alt: "Tim Basket",
    title: "Latihan Tim Basket",
    description: "Sesi latihan mingguan tim basket putra",
    size: "medium" as const,
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80",
    alt: "Kelas Robotik",
    title: "Kelas Robotik",
    description: "Siswa sedang merancang robot untuk kompetisi",
    size: "small" as const,
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&w=800&q=80",
    alt: "Workshop Fotografi",
    title: "Workshop Fotografi",
    description: "Guru tamu memberikan workshop fotografi kepada siswa",
    size: "large" as const,
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?auto=format&fit=crop&w=800&q=80",
    alt: "Paduan Suara",
    title: "Latihan Paduan Suara",
    description: "Persiapan paduan suara untuk acara tahunan sekolah",
    size: "medium" as const,
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1596496050827-8299e0220de1?auto=format&fit=crop&w=800&q=80",
    alt: "Kegiatan Pramuka",
    title: "Kegiatan Pramuka",
    description: "Siswa belajar keterampilan tali temali",
    size: "small" as const,
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?auto=format&fit=crop&w=800&q=80",
    alt: "Pertandingan Futsal",
    title: "Pertandingan Futsal",
    description: "Tim futsal sekolah bertanding melawan sekolah lain",
    size: "large" as const,
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1493612276216-ee3925520721?auto=format&fit=crop&w=800&q=80",
    alt: "Tim Jurnalistik",
    title: "Tim Jurnalistik",
    description: "Tim jurnalistik sedang menyusun konten majalah sekolah",
    size: "medium" as const,
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1504699570390-3cb588fd5e6b?auto=format&fit=crop&w=800&q=80",
    alt: "Penampilan Tari",
    title: "Penampilan Tari",
    description: "Siswa menampilkan tarian tradisional pada acara sekolah",
    size: "small" as const,
  }
];

export function GalleryGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {galleryImages.map((image) => (
        <Card 
          key={image.id} 
          className={cn(
            "overflow-hidden transition-all duration-200 hover:shadow-lg",
            image.size === "large" && "md:col-span-2 md:row-span-2",
            image.size === "medium" && "md:col-span-1 md:row-span-2",
            image.size === "small" && "md:col-span-1 md:row-span-1"
          )}
        >
          <CardContent className="p-0 relative group cursor-pointer">
            <img 
              src={image.src} 
              alt={image.alt} 
              className={cn(
                "w-full h-full object-cover transition-transform duration-500 group-hover:scale-105",
                image.size === "large" && "aspect-[4/3] md:aspect-auto md:h-[500px]",
                image.size === "medium" && "aspect-[4/3] md:aspect-auto md:h-[500px]",
                image.size === "small" && "aspect-[4/3] h-[250px]"
              )} 
            />
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
              <h3 className="text-white font-medium text-lg">{image.title}</h3>
              <p className="text-white/80 text-sm">{image.description}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
