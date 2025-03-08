
import { Eskul } from "@/data/eskul";
import { Card, CardContent } from "@/components/ui/card";
import { CalendarDays, Clock, MapPin, User } from "lucide-react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";

interface EskulDetailProps {
  eskul: Eskul;
}

export function EskulDetail({ eskul }: EskulDetailProps) {
  return (
    <div className="space-y-6">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to="/">Beranda</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to="/ekstrakurikuler">Ekstrakurikuler</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{eskul.name}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-6">
          <div className="relative">
            <img 
              src={eskul.image} 
              alt={eskul.name}
              className="w-full aspect-video rounded-lg object-cover"
            />
            <div className="absolute top-4 left-4">
              <span className="inline-flex items-center rounded-full bg-primary/90 px-3 py-1 text-sm font-medium text-primary-foreground backdrop-blur">
                {eskul.category}
              </span>
            </div>
          </div>

          <div>
            <h1 className="text-3xl font-bold mb-4">{eskul.name}</h1>
            <p className="text-muted-foreground whitespace-pre-line">
              {eskul.description}
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <Card>
            <CardContent className="p-6 space-y-4">
              <h3 className="text-xl font-semibold">Informasi Kegiatan</h3>

              <div className="space-y-4 mt-4">
                <div className="flex items-start">
                  <User className="h-5 w-5 mr-3 mt-0.5 text-muted-foreground" />
                  <div>
                    <h4 className="font-medium">Pembina</h4>
                    <p className="text-sm text-muted-foreground">{eskul.coach}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="h-5 w-5 mr-3 mt-0.5 text-muted-foreground" />
                  <div>
                    <h4 className="font-medium">Lokasi</h4>
                    <p className="text-sm text-muted-foreground">{eskul.location}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CalendarDays className="h-5 w-5 mr-3 mt-0.5 text-muted-foreground" />
                  <div>
                    <h4 className="font-medium">Jadwal</h4>
                    <div className="space-y-1 mt-1">
                      {eskul.schedule.map((item, index) => (
                        <div key={index} className="flex items-center text-sm text-muted-foreground">
                          <span className="w-24">{item.day}</span>
                          <Clock className="h-3 w-3 mx-1" />
                          <span>{item.time}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
