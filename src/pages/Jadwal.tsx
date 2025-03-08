
import { MainLayout } from "@/components/layout/MainLayout";
import { ScheduleTable } from "@/components/jadwal/ScheduleTable";
import { ScheduleMobile } from "@/components/jadwal/ScheduleMobile";
import { useIsMobile } from "@/hooks/use-mobile";

const Jadwal = () => {
  const isMobile = useIsMobile();

  return (
    <MainLayout>
      <div className="container py-8 md:py-12">
        <div className="space-y-8">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Jadwal Ekstrakurikuler</h1>
            <p className="text-muted-foreground">
              Lihat jadwal kegiatan ekstrakurikuler sekolah untuk minggu ini.
            </p>
          </div>
          
          {isMobile ? <ScheduleMobile /> : <ScheduleTable />}
        </div>
      </div>
    </MainLayout>
  );
};

export default Jadwal;
