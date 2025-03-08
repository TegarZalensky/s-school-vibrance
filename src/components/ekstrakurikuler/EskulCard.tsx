
import { Eskul } from "@/data/eskul";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

interface EskulCardProps {
  eskul: Eskul;
}

export function EskulCard({ eskul }: EskulCardProps) {
  return (
    <Card className="h-full flex flex-col transform transition-all duration-200 hover:scale-105">
      <CardHeader className="p-0">
        <img
          src={eskul.image}
          alt={eskul.name}
          className="w-full h-48 object-cover rounded-t-lg"
        />
      </CardHeader>
      <CardContent className="flex-grow pt-6 px-6">
        <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold mb-2">
          {eskul.category}
        </div>
        <CardTitle className="text-xl mb-2">{eskul.name}</CardTitle>
        <CardDescription className="line-clamp-3">
          {eskul.description}
        </CardDescription>

        <div className="mt-4 grid gap-2">
          <div className="flex items-center text-sm text-muted-foreground">
            <Calendar className="mr-1 h-4 w-4" />
            {eskul.schedule[0].day}, {eskul.schedule[0].time}
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <MapPin className="mr-1 h-4 w-4" />
            {eskul.location}
          </div>
        </div>
      </CardContent>
      <CardFooter className="px-6 pb-6 pt-0">
        <Link to={`/ekstrakurikuler/${eskul.id}`} className="w-full">
          <Button className="w-full">Lihat Detail</Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
