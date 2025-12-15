import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { CheckCircle2, Ruler, CalendarClock, Info } from "lucide-react";

export default function Process() {
  return (
    <Layout>
      <div className="bg-primary/5 py-12">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-serif font-bold text-primary mb-4">Selection Process</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The NCC selection process is designed to identify candidates with the physical potential and mental aptitude to serve.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="border-t-4 border-t-secondary">
              <CardContent className="pt-6">
                <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary">
                  <Info className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">1. Eligibility</h3>
                <p className="text-sm text-muted-foreground">
                  First year students of any undergraduate course. Must be physically fit and willing to commit for 3 years.
                </p>
              </CardContent>
            </Card>
            <Card className="border-t-4 border-t-secondary">
              <CardContent className="pt-6">
                <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary">
                  <Ruler className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">2. Physical Test</h3>
                <p className="text-sm text-muted-foreground">
                  Running (1600m), Push-ups, Sit-ups, and general physical assessment test.
                </p>
              </CardContent>
            </Card>
            <Card className="border-t-4 border-t-secondary">
              <CardContent className="pt-6">
                <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">3. Interview</h3>
                <p className="text-sm text-muted-foreground">
                  Personal interview with the ANO and PI Staff to assess general awareness and dedication.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8 mb-12">
            <h2 className="text-2xl font-serif font-bold text-primary mb-6 flex items-center gap-2">
              <CalendarClock className="h-6 w-6" /> Important Dates
            </h2>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Event</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Venue</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Online Application Start</TableCell>
                  <TableCell>1 Dec 2025</TableCell>
                  <TableCell>Website</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Application Deadline</TableCell>
                  <TableCell>20 Dec 2025</TableCell>
                  <TableCell>Website</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Physical Test (Boys)</TableCell>
                  <TableCell>22 Dec 2025</TableCell>
                  <TableCell>University Sports Ground</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Physical Test (Girls)</TableCell>
                  <TableCell>23 Dec 2025</TableCell>
                  <TableCell>University Sports Ground</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Final Interview</TableCell>
                  <TableCell>25 Dec 2025</TableCell>
                  <TableCell>NCC Office, Block B</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>

          <div className="text-center">
            <p className="mb-4 text-muted-foreground">Have you checked the eligibility criteria?</p>
            <Button className="bg-secondary hover:bg-secondary/90 text-white" size="lg" onClick={() => window.location.href='/apply'}>
              Proceed to Apply Online
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
