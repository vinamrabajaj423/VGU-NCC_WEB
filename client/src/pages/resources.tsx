import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Book, Shield, User, Download, ExternalLink, Info, AlertTriangle } from "lucide-react";

export default function Resources() {
  return (
    <Layout>
      <div className="bg-slate-50 min-h-screen py-12">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-serif font-bold text-primary mb-4">Cadet Resources</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Essential guidelines, handbooks, and knowledge for every VGU NCC cadet.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Uniform Section */}
            <div className="md:col-span-2 space-y-8">
              <Card className="border-t-4 border-t-primary shadow-md">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <User className="h-6 w-6 text-primary" />
                    <CardTitle className="text-xl font-serif">Uniform Guidelines</CardTitle>
                  </div>
                  <CardDescription>Correct way to wear the NCC uniform with pride.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  
                  <div>
                    <h3 className="font-bold text-primary mb-3 flex items-center gap-2">
                      <Shield className="h-4 w-4" /> General Rules
                    </h3>
                    <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground ml-2">
                      <li>Uniform must be washed, ironed, and starch-stiffened.</li>
                      <li>No loose threads or missing buttons.</li>
                      <li>Hair must be neatly cut (for boys) or tied in a bun (for girls).</li>
                      <li>Shaving is mandatory for male cadets before every parade.</li>
                    </ul>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="bg-muted/30 p-4 rounded-lg border border-border">
                      <h4 className="font-bold text-primary mb-2 text-sm uppercase">Beret (Headgear)</h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        The beret band should be horizontal on the forehead, 1 inch above the eyebrows. The badge must be centered over the left eye.
                      </p>
                      <Badge variant="outline" className="text-xs bg-white">Hackle: Red Plume (if applicable)</Badge>
                    </div>
                    <div className="bg-muted/30 p-4 rounded-lg border border-border">
                      <h4 className="font-bold text-primary mb-2 text-sm uppercase">Shirt & Belt</h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        Shirt tucked in tight. The belt buckle must be centered. The "Gig Line" (shirt button placket, belt buckle, and trouser fly) must form a straight line.
                      </p>
                    </div>
                    <div className="bg-muted/30 p-4 rounded-lg border border-border">
                      <h4 className="font-bold text-primary mb-2 text-sm uppercase">Footwear</h4>
                      <p className="text-sm text-muted-foreground">
                        Black DMS boots, polished to a mirror shine. Black socks are mandatory. Laces should be tied in a hidden knot.
                      </p>
                    </div>
                    <div className="bg-muted/30 p-4 rounded-lg border border-border">
                      <h4 className="font-bold text-primary mb-2 text-sm uppercase">Accessories</h4>
                      <p className="text-sm text-muted-foreground">
                        Name plate on the right chest. Rank chevrons on the right sleeve. Lanyard on the left shoulder (depending on regiment).
                      </p>
                    </div>
                  </div>

                  <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-md flex items-start gap-3">
                    <AlertTriangle className="h-5 w-5 text-yellow-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-yellow-800 text-sm">Inspection Tip</h4>
                      <p className="text-xs text-yellow-700 mt-1">
                        Before falling in, check your buddy's turnout. Ensure pockets are buttoned down and no personal items (phones, keys) are visible or bulging.
                      </p>
                    </div>
                  </div>

                </CardContent>
              </Card>

              <Card className="border-t-4 border-t-secondary shadow-md">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Book className="h-6 w-6 text-secondary" />
                    <CardTitle className="text-xl font-serif">Syllabus & Subjects</CardTitle>
                  </div>
                  <CardDescription>Core topics for 'B' and 'C' Certificate Exams.</CardDescription>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger className="font-bold text-primary">Common Subjects (All Wings)</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        <ul className="list-disc list-inside space-y-1">
                          <li>NCC Organization & History</li>
                          <li>National Integration and Awareness</li>
                          <li>Drill (Foot Drill, Arms Drill)</li>
                          <li>Weapon Training (.22 Rifle)</li>
                          <li>Personality Development & Leadership</li>
                          <li>Disaster Management</li>
                          <li>Social Awareness & Community Development</li>
                          <li>Health & Hygiene</li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger className="font-bold text-primary">Specialized Subjects (Army Wing)</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        <ul className="list-disc list-inside space-y-1">
                          <li>Armed Forces History</li>
                          <li>Map Reading & Navigation</li>
                          <li>Field Craft & Battle Craft (FCBC)</li>
                          <li>Introduction to Infantry Weapons</li>
                          <li>Military History</li>
                          <li>Communication (Radio Telephony)</li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                      <AccordionTrigger className="font-bold text-primary">Specialized Subjects (Air Wing)</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        <ul className="list-disc list-inside space-y-1">
                          <li>General Service Knowledge</li>
                          <li>Air Campaigns</li>
                          <li>Principles of Flight</li>
                          <li>Airmanship</li>
                          <li>Navigation & Meteorology</li>
                          <li>Aero Engines & Airframes</li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
            </div>

            {/* Downloads Sidebar */}
            <div className="space-y-6">
              <Card className="bg-primary text-primary-foreground shadow-xl">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2 text-white">
                    <Download className="h-5 w-5" /> Digital Handbook
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-primary-foreground/80 mb-6">
                    Download the official NCC Cadet Handbook (PDF). Contains comprehensive study material for all subjects.
                  </p>
                  <Button variant="secondary" className="w-full font-bold" asChild>
                    <a href="https://nccorissa.org/old/Doc/Ncc-CadetHandbook.pdf" target="_blank" rel="noopener noreferrer">
                      Download PDF <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="shadow-md">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Info className="h-5 w-5 text-primary" /> Useful Links
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <a href="https://indiancc.nic.in/" target="_blank" rel="noopener noreferrer" className="block p-3 rounded-md bg-muted/40 hover:bg-muted transition-colors text-sm font-medium text-primary flex justify-between items-center">
                    Official NCC India Website <ExternalLink className="h-3 w-3" />
                  </a>
                  <a href="https://joinindianarmy.nic.in/" target="_blank" rel="noopener noreferrer" className="block p-3 rounded-md bg-muted/40 hover:bg-muted transition-colors text-sm font-medium text-primary flex justify-between items-center">
                    Join Indian Army <ExternalLink className="h-3 w-3" />
                  </a>
                  <a href="https://afcat.cdac.in/" target="_blank" rel="noopener noreferrer" className="block p-3 rounded-md bg-muted/40 hover:bg-muted transition-colors text-sm font-medium text-primary flex justify-between items-center">
                    Indian Air Force (AFCAT) <ExternalLink className="h-3 w-3" />
                  </a>
                </CardContent>
              </Card>
            </div>

          </div>
        </div>
      </div>
    </Layout>
  );
}
