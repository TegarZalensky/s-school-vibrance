
import { Eskul } from "@/data/eskul";
import { EskulCard } from "./EskulCard";

interface EskulGridProps {
  eskul: Eskul[];
}

export function EskulGrid({ eskul }: EskulGridProps) {
  if (eskul.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-xl font-medium">Tidak ada ekstrakurikuler yang ditemukan</h3>
        <p className="text-muted-foreground mt-2">
          Coba ubah filter atau kata kunci pencarian anda
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {eskul.map((item) => (
        <EskulCard key={item.id} eskul={item} />
      ))}
    </div>
  );
}
