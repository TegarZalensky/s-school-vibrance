
import { useState } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

export function MainNav() {
  const isMobile = useIsMobile();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const items = [
    {
      title: "Beranda",
      href: "/",
    },
    {
      title: "Ekstrakurikuler",
      href: "/ekstrakurikuler",
    },
    {
      title: "Jadwal",
      href: "/jadwal",
    },
    {
      title: "Galeri",
      href: "/galeri",
    },
  ];

  return (
    <div className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="mr-4 flex">
          <Link 
            to="/" 
            className="flex items-center space-x-2 font-bold text-xl text-primary"
          >
            <span>S-School</span>
          </Link>
        </div>

        {isMobile ? (
          <>
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden"
              onClick={toggleMenu}
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
              <span className="sr-only">Toggle menu</span>
            </Button>

            {isMenuOpen && (
              <div className="fixed inset-0 top-16 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto p-6 pb-32 shadow-md animate-in slide-in-from-top-1 md:hidden bg-background">
                <div className="relative z-20 grid gap-6 p-4 rounded-md">
                  <nav className="grid grid-flow-row auto-rows-max text-sm">
                    {items.map((item, index) => (
                      <Link
                        key={index}
                        to={item.href}
                        className={cn(
                          "flex w-full items-center rounded-md p-2 text-sm font-medium hover:bg-accent",
                          item.href === window.location.pathname && "bg-accent"
                        )}
                        onClick={toggleMenu}
                      >
                        {item.title}
                      </Link>
                    ))}
                  </nav>
                </div>
              </div>
            )}
          </>
        ) : (
          <nav className="flex items-center space-x-6 text-sm font-medium">
            {items.map((item, index) => (
              <Link
                key={index}
                to={item.href}
                className={cn(
                  "transition-colors hover:text-foreground/80",
                  item.href === window.location.pathname
                    ? "text-foreground"
                    : "text-foreground/60"
                )}
              >
                {item.title}
              </Link>
            ))}
          </nav>
        )}

        <div className="flex items-center justify-end">
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
}
