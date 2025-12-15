import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import nccLogo from "@assets/ncc-flag.jpg";
import vguLogo from "@assets/vgu-logo.png";
import { Menu, X, Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";
import { useState } from "react";

export function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Resources", path: "/resources" },
    { label: "Selection Process", path: "/process" },
    { label: "Apply Now", path: "/apply" },
    { label: "Check Status", path: "/status" },
    { label: "Admin", path: "/admin" },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-2 text-sm hidden md:block border-b border-primary-foreground/10">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex gap-6">
            <span className="flex items-center gap-2"><Phone className="h-3 w-3" /> +91 123 456 7890</span>
            <span className="flex items-center gap-2"><Mail className="h-3 w-3" /> ncc@vgu.ac.in</span>
          </div>
          <div className="flex gap-4">
            <span className="text-primary-foreground/80">Unity and Discipline</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white border-b border-border sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            {/* Logos */}
            <Link href="/" className="flex items-center gap-4 group cursor-pointer">
              <img src={nccLogo} alt="NCC Logo" className="h-12 w-20 md:h-16 md:w-24 object-cover rounded-sm drop-shadow-sm group-hover:scale-105 transition-transform" />
              <div className="hidden md:block h-12 w-px bg-border mx-2"></div>
              <img src={vguLogo} alt="VGU Logo" className="h-12 w-12 md:h-16 md:w-16 object-contain drop-shadow-sm group-hover:scale-105 transition-transform" />
              <div className="flex flex-col ml-2">
                <h1 className="text-lg md:text-2xl font-serif font-bold text-primary leading-tight">VGU NCC COMPANY</h1>
                <p className="text-xs md:text-sm text-muted-foreground uppercase tracking-wider font-medium">Vivekananda Global University</p>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <Link key={item.path} href={item.path}>
                  <Button 
                    variant={location === item.path ? "default" : "ghost"} 
                    className={cn(
                      "font-medium transition-all",
                      location === item.path 
                        ? "bg-primary text-primary-foreground hover:bg-primary/90 shadow-md" 
                        : "text-foreground/80 hover:text-primary hover:bg-primary/5"
                    )}
                  >
                    {item.label}
                  </Button>
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Toggle */}
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-border bg-background animate-in slide-in-from-top-2">
            <nav className="flex flex-col p-4 gap-2">
              {navItems.map((item) => (
                <Link key={item.path} href={item.path} onClick={() => setIsMobileMenuOpen(false)}>
                  <Button 
                    variant={location === item.path ? "default" : "ghost"} 
                    className="w-full justify-start text-lg"
                  >
                    {item.label}
                  </Button>
                </Link>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow bg-slate-50">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground pt-12 pb-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img src={nccLogo} alt="NCC" className="h-12 w-20 object-cover rounded-sm brightness-90 opacity-90" />
                <div>
                  <h3 className="text-xl font-serif font-bold">VGU NCC</h3>
                  <p className="text-xs opacity-70 uppercase tracking-widest">Unity & Discipline</p>
                </div>
              </div>
              <p className="text-primary-foreground/70 text-sm leading-relaxed max-w-xs">
                Developing character, comradeship, discipline, a secular outlook, the spirit of adventure and ideals of selfless service amongst young citizens.
              </p>
            </div>
            
            <div>
              <h4 className="font-serif font-bold text-lg mb-4 text-secondary">Quick Links</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li><Link href="/process" className="hover:text-white transition-colors">Selection Process</Link></li>
                <li><Link href="/apply" className="hover:text-white transition-colors">Apply Online</Link></li>
                <li><Link href="/status" className="hover:text-white transition-colors">Check Status</Link></li>
                <li><Link href="/resources" className="hover:text-white transition-colors">Cadet Resources</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-serif font-bold text-lg mb-4 text-secondary">Contact Us</h4>
              <ul className="space-y-3 text-sm text-primary-foreground/80">
                <li className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 shrink-0 text-secondary" />
                  <span>Vivekananda Global University,<br/>Sector 36, NRI Road, Jagatpura,<br/>Jaipur, Rajasthan 303012</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-secondary" />
                  <span>+91 123 456 7890</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-secondary" />
                  <span>ncc@vgu.ac.in</span>
                </li>
              </ul>
              <div className="flex gap-4 mt-6">
                <a href="https://www.instagram.com/vivekananda_ncc_coy_jaipur/" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-2 rounded-full hover:bg-secondary hover:text-white transition-all"><Instagram className="h-4 w-4" /></a>
                <a href="https://www.linkedin.com/in/krishna-nandan-4b671825a/" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-2 rounded-full hover:bg-secondary hover:text-white transition-all" title="Lt. Krishna Nandan (ANO)"><Linkedin className="h-4 w-4" /></a>
                 <a href="https://www.linkedin.com/in/rakshita-rathore-75b267206/" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-2 rounded-full hover:bg-secondary hover:text-white transition-all" title="Rakshita Rathore (CTO)"><Linkedin className="h-4 w-4" /></a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-primary-foreground/10 pt-6 mt-6 text-center text-xs text-primary-foreground/50">
            <p className="mb-2">© {new Date().getFullYear()} VGU NCC Company. All rights reserved.</p>
            <p>Disclaimer: This website is for information and application purposes only. Final selection is subject to NCC and university authorities.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
