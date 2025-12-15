import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import heroBg from "@assets/stock_images/indian_ncc_cadets_gr_6d7f107d.jpg";
import officerImg from "@assets/stock_images/indian_ncc_army_wing_926d9c6d.jpg";
import airWingImg from "@assets/stock_images/indian_ncc_air_wing__61076feb.jpg";
import firingImg from "@assets/stock_images/ncc_cadets_shooting__5716cc19.jpg";
import cultureImg from "@assets/stock_images/ncc_cadets_cultural__a6f91d9d.jpg";
import campusImg from "@assets/stock_images/university_campus_bu_9886126c.jpg";
import { ChevronRight, Calendar, Award, Users, ArrowRight, Flag, Target, Shield, Medal, Briefcase } from "lucide-react";

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[600px] md:h-[700px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBg})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/40 mix-blend-multiply" />
          <div className="absolute inset-0 bg-black/20" />
        </div>

        {/* Hero Content */}
        <div className="container relative z-10 px-4 text-center text-white">
          <Badge className="mb-6 bg-secondary text-white hover:bg-secondary/90 px-4 py-1 text-sm font-medium tracking-widest uppercase border-none">
            National Cadet Corps
          </Badge>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 drop-shadow-lg leading-tight">
            Unity and Discipline
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 text-white/90 font-light leading-relaxed">
            Welcome to VGU NCC Company. Forging the youth of today into the leaders of tomorrow through military training, social service, and character building.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/apply">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white border-none text-lg h-14 px-8 shadow-lg transition-transform hover:scale-105">
                Apply for NCC
              </Button>
            </Link>
            <Link href="/process">
              <Button size="lg" variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary text-lg h-14 px-8 shadow-lg backdrop-blur-sm">
                Selection Process
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Introduction Stats */}
      <section className="py-8 bg-white border-b border-border shadow-sm relative z-20 -mt-8 mx-4 md:mx-auto max-w-6xl rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border">
          <div className="p-6 text-center">
            <Flag className="h-10 w-10 text-primary mx-auto mb-3" />
            <h3 className="text-3xl font-bold text-primary mb-1">1948</h3>
            <p className="text-muted-foreground text-sm uppercase tracking-wide">Establishment</p>
          </div>
          <div className="p-6 text-center">
            <Users className="h-10 w-10 text-secondary mx-auto mb-3" />
            <h3 className="text-3xl font-bold text-primary mb-1">160+</h3>
            <p className="text-muted-foreground text-sm uppercase tracking-wide">Active Cadets</p>
          </div>
          <div className="p-6 text-center">
            <Shield className="h-10 w-10 text-primary mx-auto mb-3" />
            <h3 className="text-3xl font-bold text-primary mb-1">100%</h3>
            <p className="text-muted-foreground text-sm uppercase tracking-wide">Dedication</p>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 container mx-auto px-4">
        <div className="text-center mb-12">
           <span className="text-secondary font-bold uppercase tracking-widest text-sm mb-2 block">Leadership</span>
           <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">Commanding Officers</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Army Wing */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-border group">
            <div className="h-64 overflow-hidden relative">
              <img src={officerImg} alt="Lt. Krishna Nandan" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-3 py-1 m-4 rounded">Army Wing</div>
            </div>
            <div className="p-6 text-center">
               <h3 className="text-xl font-serif font-bold text-primary">Lt. Krishna Nandan</h3>
               <p className="text-secondary font-medium text-sm uppercase tracking-wide mb-4">Associate NCC Officer (ANO)</p>
               <div className="flex justify-center gap-2">
                 <a href="https://www.linkedin.com/in/krishna-nandan-4b671825a/" target="_blank" rel="noopener noreferrer">
                   <Button variant="outline" size="sm" className="h-8">View Profile</Button>
                 </a>
               </div>
            </div>
          </div>

          {/* Air Wing */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-border group">
             <div className="h-64 overflow-hidden relative">
               <img src={airWingImg} alt="CTO Rakshita Rathore" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
               <div className="absolute top-0 right-0 bg-sky-600 text-white text-xs font-bold px-3 py-1 m-4 rounded">Air Wing</div>
             </div>
             <div className="p-6 text-center">
                <h3 className="text-xl font-serif font-bold text-primary">Rakshita Rathore</h3>
                <p className="text-secondary font-medium text-sm uppercase tracking-wide mb-4">Caretaker Officer (CTO)</p>
                <div className="flex justify-center gap-2">
                  <a href="https://www.linkedin.com/in/rakshita-rathore-75b267206/" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm" className="h-8">View Profile</Button>
                  </a>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* NCC Club Section */}
      <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-secondary text-white hover:bg-secondary mb-4">Student Body</Badge>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">VGU NCC Club</h2>
              <p className="text-primary-foreground/80 leading-relaxed mb-6">
                The VGU NCC Club is the cadet-led body responsible for executing all activities, maintaining discipline, and coordinating events. It serves as the bridge between the command and the cadets.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4 bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                  <div className="h-12 w-12 rounded-full bg-secondary flex items-center justify-center text-xl font-bold text-white">P</div>
                  <div>
                    <h4 className="font-bold text-lg">Cadet Sergeant Anushkha</h4>
                    <p className="text-sm opacity-80">President</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                  <div className="h-12 w-12 rounded-full bg-white/20 flex items-center justify-center text-xl font-bold text-white">VP</div>
                  <div>
                    <h4 className="font-bold text-lg">Under Officer Diksha Bargava</h4>
                    <p className="text-sm opacity-80">Vice President</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-2xl border-4 border-white/20 transform md:rotate-2 hover:rotate-0 transition-transform duration-500">
               <img src={heroBg} alt="NCC Club" className="w-full h-full object-cover" />
               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-8">
                 <p className="font-serif italic text-lg">"Cadets leading Cadets"</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Notices & Updates */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-10">
            <div>
              <span className="text-secondary font-bold uppercase tracking-widest text-sm mb-2 block">Updates</span>
              <h2 className="text-3xl font-serif font-bold text-primary">Latest Notices</h2>
            </div>
            <Link href="/notices">
              <Button variant="outline" className="hidden md:flex">View All Notices</Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="bg-white border-none shadow-md hover:shadow-lg transition-shadow group">
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="outline" className="bg-primary/5 text-primary border-primary/20">New</Badge>
                    <span className="text-xs text-muted-foreground flex items-center"><Calendar className="h-3 w-3 mr-1" /> 12 Dec 2025</span>
                  </div>
                  <CardTitle className="font-serif text-lg leading-tight group-hover:text-secondary transition-colors">
                    NCC Enrollment Drive 2025-26 Registration Open
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Applications are invited from first year students for enrollment in NCC Senior Division/Wing.
                  </p>
                  <Button variant="ghost" className="w-full justify-between text-primary hover:text-secondary p-0 hover:bg-transparent">
                    Read Details <ChevronRight className="h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Activities Grid */}
      <section className="py-20 container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-secondary font-bold uppercase tracking-widest text-sm mb-2 block">Training</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">What We Do</h2>
          <p className="text-muted-foreground">Comprehensive training modules designed to test physical and mental endurance.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Drill Training", icon: Target, desc: "Inculcating discipline and bearing." },
            { title: "Weapon Training", icon: Shield, desc: "Basics of handling rifles and shooting." },
            { title: "Social Service", icon: Users, desc: "Community development and aid." },
            { title: "Adventure Camps", icon: Flag, desc: "Hiking, trekking and outdoor survival." },
          ].map((activity, i) => (
            <div key={i} className="bg-white p-8 rounded-xl border border-border hover:border-secondary/50 hover:shadow-lg transition-all text-center group">
              <div className="w-16 h-16 bg-primary/5 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-secondary group-hover:text-white transition-colors">
                <activity.icon className="h-8 w-8 text-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-serif font-bold text-primary mb-3">{activity.title}</h3>
              <p className="text-sm text-muted-foreground">{activity.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-20 bg-primary text-primary-foreground overflow-hidden">
         <div className="container mx-auto px-4">
            <div className="flex justify-between items-end mb-10">
              <div>
                <span className="text-secondary font-bold uppercase tracking-widest text-sm mb-2 block">Gallery</span>
                <h2 className="text-3xl font-serif font-bold text-white">Life as a Cadet</h2>
              </div>
            </div>

            <div className="grid md:grid-cols-4 gap-4 h-96">
                <div className="md:col-span-2 h-full rounded-lg overflow-hidden relative group">
                  <img src={firingImg} alt="Firing" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity">
                    <p className="text-white font-bold">Firing Range Training</p>
                  </div>
                </div>
                <div className="md:col-span-1 h-full rounded-lg overflow-hidden relative group">
                  <img src={cultureImg} alt="Culture" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity">
                    <p className="text-white font-bold">Cultural Events</p>
                  </div>
                </div>
                <div className="md:col-span-1 h-full rounded-lg overflow-hidden relative group">
                   <img src={campusImg} alt="Campus" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity">
                    <p className="text-white font-bold">Campus Activities</p>
                  </div>
                </div>
            </div>
         </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 text-primary">Ready to Serve?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
            Join the elite VGU NCC Company. Experience a life of adventure, discipline, and honor. Applications are now open for the 2025 batch.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/apply">
              <Button size="lg" className="bg-secondary text-white hover:bg-secondary/90 border-none text-lg px-10 h-14 shadow-xl">
                Start Application <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
