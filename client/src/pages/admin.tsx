import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Shield, Users, FileText, Bell, Search, Check, X, Calendar } from "lucide-react";

export default function Admin() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const { toast } = useToast();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock login
    setIsAuthenticated(true);
    toast({
      title: "Welcome, Officer",
      description: "You have successfully logged in to the admin panel.",
    });
  };

  if (!isAuthenticated) {
    return (
      <Layout>
        <div className="flex items-center justify-center min-h-[70vh] bg-slate-50">
          <Card className="w-full max-w-md shadow-xl border-t-4 border-t-primary">
            <CardHeader className="text-center">
              <div className="mx-auto bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-2xl font-serif font-bold text-primary">Admin Login</CardTitle>
              <CardDescription>Restricted access for NCC Officers & ANO only</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleLogin} className="space-y-4">
                <div className="space-y-2">
                  <Label>Username</Label>
                  <Input placeholder="admin" />
                </div>
                <div className="space-y-2">
                  <Label>Password</Label>
                  <Input type="password" placeholder="••••••••" />
                </div>
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90">Login to Dashboard</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-serif font-bold text-primary">Command Center</h1>
            <p className="text-muted-foreground">Manage applications, notices, and company activities.</p>
          </div>
          <Button variant="outline" onClick={() => setIsAuthenticated(false)}>Logout</Button>
        </div>

        <Tabs defaultValue="applications" className="space-y-6">
          <TabsList className="bg-white border border-border p-1 h-auto grid grid-cols-3 md:w-[600px]">
            <TabsTrigger value="applications" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground py-2">
              <Users className="h-4 w-4 mr-2" /> Applications
            </TabsTrigger>
            <TabsTrigger value="notices" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground py-2">
              <Bell className="h-4 w-4 mr-2" /> Notices
            </TabsTrigger>
            <TabsTrigger value="activities" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground py-2">
              <Calendar className="h-4 w-4 mr-2" /> Activities
            </TabsTrigger>
          </TabsList>

          <TabsContent value="applications">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>Student Applications</CardTitle>
                  <div className="flex gap-2">
                    <Input placeholder="Search by ID or Name" className="w-[300px]" />
                    <Button variant="secondary"><Search className="h-4 w-4" /></Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>ID</TableHead>
                      <TableHead>Name</TableHead>
                      <TableHead>Course</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[
                      { id: "VGU-NCC-001", name: "Rahul Sharma", course: "B.Tech CSE", status: "pending" },
                      { id: "VGU-NCC-002", name: "Priya Singh", course: "BCA", status: "shortlisted" },
                      { id: "VGU-NCC-003", name: "Amit Verma", course: "B.Sc", status: "rejected" },
                    ].map((student) => (
                      <TableRow key={student.id}>
                        <TableCell className="font-medium">{student.id}</TableCell>
                        <TableCell>{student.name}</TableCell>
                        <TableCell>{student.course}</TableCell>
                        <TableCell>
                          <Badge variant={student.status === "pending" ? "outline" : student.status === "shortlisted" ? "default" : "destructive"}>
                            {student.status}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end gap-2">
                            <Button size="sm" variant="outline" className="h-8 w-8 p-0 text-green-600 border-green-200 hover:bg-green-50"><Check className="h-4 w-4" /></Button>
                            <Button size="sm" variant="outline" className="h-8 w-8 p-0 text-red-600 border-red-200 hover:bg-red-50"><X className="h-4 w-4" /></Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="notices">
            <Card>
              <CardHeader className="flex flex-row justify-between items-center">
                <CardTitle>Manage Notices</CardTitle>
                <Button className="bg-primary hover:bg-primary/90">Post New Notice</Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[1, 2].map((i) => (
                    <div key={i} className="flex justify-between items-start p-4 border rounded-lg bg-muted/20">
                      <div>
                        <h4 className="font-bold text-primary">NCC Enrollment Drive 2025-26</h4>
                        <p className="text-sm text-muted-foreground mb-2">Posted on: 12 Dec 2025</p>
                        <p className="text-sm">Applications are invited from first year students...</p>
                      </div>
                      <Button variant="outline" size="sm">Edit</Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="activities">
            <Card>
              <CardHeader className="flex flex-row justify-between items-center">
                <CardTitle>Upcoming & Past Activities</CardTitle>
                <Button className="bg-primary hover:bg-primary/90">Add Activity</Button>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                   <div className="p-4 border rounded-lg">
                     <Badge className="mb-2">Upcoming</Badge>
                     <h4 className="font-bold">Republic Day Parade</h4>
                     <p className="text-sm text-muted-foreground">26 Jan 2026</p>
                   </div>
                   <div className="p-4 border rounded-lg opacity-75">
                     <Badge variant="secondary" className="mb-2">Completed</Badge>
                     <h4 className="font-bold">Blood Donation Camp</h4>
                     <p className="text-sm text-muted-foreground">15 Nov 2025</p>
                   </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
}
