
import { useParams, Navigate } from "react-router-dom";
import { MainLayout } from "@/components/layout/MainLayout";
import { EskulDetail } from "@/components/ekstrakurikuler/EskulDetail";
import { eskulData } from "@/data/eskul";

const EkstrakurikulerDetail = () => {
  const { id } = useParams<{ id: string }>();
  const eskul = eskulData.find((e) => e.id === Number(id));

  if (!eskul) {
    return <Navigate to="/ekstrakurikuler" replace />;
  }

  return (
    <MainLayout>
      <div className="container py-8 md:py-12">
        <EskulDetail eskul={eskul} />
      </div>
    </MainLayout>
  );
};

export default EkstrakurikulerDetail;
