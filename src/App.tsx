
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./components/theme/ThemeProvider";

import Index from "./pages/Index";
import Ekstrakurikuler from "./pages/Ekstrakurikuler";
import EkstrakurikulerDetail from "./pages/EkstrakurikulerDetail";
import Jadwal from "./pages/Jadwal";
import Galeri from "./pages/Galeri";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="light">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/ekstrakurikuler" element={<Ekstrakurikuler />} />
            <Route path="/ekstrakurikuler/:id" element={<EkstrakurikulerDetail />} />
            <Route path="/jadwal" element={<Jadwal />} />
            <Route path="/galeri" element={<Galeri />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
