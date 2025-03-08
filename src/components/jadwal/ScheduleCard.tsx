
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Eskul } from "@/data/eskul";
import { CalendarDays, Clock } from "lucide-react";

interface ScheduleCardProps {
  day: string;
  eskul: Eskul[];
}

export function ScheduleCard({ day, eskul }: ScheduleCardProps) {
  return (
    <Card>
      <CardHeader className="bg-muted/50 rounded-t-lg pb-2">
        <CardTitle>{day}</CardTitle>
      </CardHeader>
      <CardContent className="pt-4">
        {eskul.length === 0 ? (
          <p className="text-muted-foreground text-sm text-center py-4">
            Tidak ada kegiatan
          </p>
        ) : (
          <div className="space-y-3">
            {eskul.map((item) => {
              const schedule = item.schedule.find((s) => s.day === day);
              if (!schedule) return null;
              
              return (
                <Link 
                  key={item.id} 
                  to={`/ekstrakurikuler/${item.id}`}
                  className="block p-3 rounded-md hover:bg-muted transition-colors"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-medium">{item.name}</h4>
                      <p className="text-sm text-muted-foreground">{item.location}</p>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="h-3 w-3 mr-1" />
                      <span>{schedule.time}</span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
