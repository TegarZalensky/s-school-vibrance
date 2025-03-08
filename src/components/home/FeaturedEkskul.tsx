
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export function FeaturedEkskul() {
  const featuredEkskul = [
    {
      id: 1,
      title: "Basket",
      description: "Kembangkan kemampuan bermain basket dan sportivitas dalam tim.",
      image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=300&q=80",
    },
    {
      id: 2,
      title: "Robotik",
      description: "Pelajari teknologi robotik dan pemrograman dengan peralatan modern.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=300&q=80",
    },
    {
      id: 3,
      title: "Fotografi",
      description: "Ekspresikan kreativitasmu melalui lensa kamera dan teknik fotografi.",
      image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&w=300&q=80",
    },
  ];

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
              Ekstrakurikuler Unggulan
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Pilihan Eskull Populer
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Bergabunglah dengan ekstrakurikuler yang paling diminati di sekolah kami.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          {featuredEkskul.map((ekskul) => (
            <Card key={ekskul.id} className="transform transition-all duration-200 hover:scale-105">
              <CardHeader className="p-0">
                <img
                  src={ekskul.image}
                  alt={ekskul.title}
                  className="aspect-video w-full object-cover rounded-t-lg"
                  width={300}
                  height={200}
                />
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle>{ekskul.title}</CardTitle>
                <CardDescription className="mt-2">{ekskul.description}</CardDescription>
              </CardContent>
              <CardFooter>
                <Link to={`/ekstrakurikuler/${ekskul.id}`} className="w-full">
                  <Button variant="outline" className="w-full justify-between">
                    Selengkapnya <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="flex justify-center">
          <Link to="/ekstrakurikuler">
            <Button>
              Lihat Semua Ekstrakurikuler
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
