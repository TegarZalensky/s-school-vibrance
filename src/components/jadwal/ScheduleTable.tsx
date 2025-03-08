
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { eskulData } from "@/data/eskul";

const DAYS_OF_WEEK = ["Senin", "Selasa", "Rabu", "Kamis", "Jumat"];
const TIME_SLOTS = ["14:00 - 15:00", "15:00 - 16:00", "16:00 - 17:00", "17:00 - 18:00"];

interface ScheduleEvent {
  name: string;
  start: string;
  end: string;
  id: number;
}

type ScheduleData = {
  [key: string]: {
    [key: string]: ScheduleEvent[];
  };
};

const generateScheduleData = (): ScheduleData => {
  const schedule: ScheduleData = {};

  // Initialize empty schedule
  DAYS_OF_WEEK.forEach((day) => {
    schedule[day] = {};
    TIME_SLOTS.forEach((slot) => {
      schedule[day][slot] = [];
    });
  });

  // Fill schedule with eskulData
  eskulData.forEach((eskul) => {
    eskul.schedule.forEach((scheduleItem) => {
      const [startTime] = scheduleItem.time.split(" - ");
      const [endTime] = scheduleItem.time.split(" - ").slice(-1);
      
      // Find the matching time slots
      TIME_SLOTS.forEach((slot) => {
        const [slotStart, slotEnd] = slot.split(" - ");
        
        // Simple check if eskul time overlaps with this slot
        if (startTime <= slotEnd && endTime >= slotStart) {
          schedule[scheduleItem.day][slot].push({
            name: eskul.name,
            start: startTime,
            end: endTime,
            id: eskul.id,
          });
        }
      });
    });
  });

  return schedule;
};

export function ScheduleTable() {
  const scheduleData = generateScheduleData();

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Waktu</TableHead>
            {DAYS_OF_WEEK.map((day) => (
              <TableHead key={day}>{day}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {TIME_SLOTS.map((slot) => (
            <TableRow key={slot}>
              <TableCell className="font-medium">{slot}</TableCell>
              {DAYS_OF_WEEK.map((day) => (
                <TableCell key={`${day}-${slot}`} className="p-2">
                  <div className="flex flex-col gap-1">
                    {scheduleData[day][slot].map((event, idx) => (
                      <Link 
                        key={`${event.name}-${idx}`}
                        to={`/ekstrakurikuler/${event.id}`}
                        className="rounded bg-primary/10 p-1.5 text-xs hover:bg-primary/20 transition-colors"
                      >
                        <div className="font-medium">{event.name}</div>
                        <div className="text-muted-foreground">{event.start} - {event.end}</div>
                      </Link>
                    ))}
                  </div>
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

import { Link } from "react-router-dom";
