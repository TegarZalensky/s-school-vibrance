
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScheduleCard } from "./ScheduleCard";
import { eskulData } from "@/data/eskul";

const DAYS_OF_WEEK = ["Senin", "Selasa", "Rabu", "Kamis", "Jumat"];

export function ScheduleMobile() {
  const today = new Date().getDay(); 
  // Convert JavaScript day (0 = Sunday, 6 = Saturday) to our array index
  const todayIndex = today === 0 ? 4 : today - 1; // Default to Friday if weekend
  const currentDay = today >= 1 && today <= 5 ? DAYS_OF_WEEK[todayIndex] : DAYS_OF_WEEK[0];

  return (
    <Tabs defaultValue={currentDay}>
      <TabsList className="grid grid-cols-5 mb-4">
        {DAYS_OF_WEEK.map((day) => (
          <TabsTrigger key={day} value={day} className="text-xs sm:text-sm">
            {day}
          </TabsTrigger>
        ))}
      </TabsList>
      {DAYS_OF_WEEK.map((day) => {
        const dayEskul = eskulData.filter((eskul) => 
          eskul.schedule.some((schedule) => schedule.day === day)
        );
        
        return (
          <TabsContent key={day} value={day}>
            <ScheduleCard day={day} eskul={dayEskul} />
          </TabsContent>
        );
      })}
    </Tabs>
  );
}
