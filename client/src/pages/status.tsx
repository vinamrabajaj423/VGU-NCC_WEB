import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Search, Loader2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function Status() {
  const [searchId, setSearchId] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<null | {
    id: string;
    name: string;
    status: "pending" | "shortlisted" | "rejected" | "selected";
    date: string;
  }>(null);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchId) return;

    setLoading(true);
    // Mock API call
    setTimeout(() => {
      setLoading(false);
      // Dummy logic for demo
      setResult({
        id: searchId.toUpperCase(),
        name: "Mock Student Name",
        status: "shortlisted",
        date: "15 Dec 2025"
      });
    }, 1500);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "shortlisted": return "bg-blue-500 hover:bg-blue-600";
      case "selected": return "bg-green-500 hover:bg-green-600";
      case "rejected": return "bg-red-500 hover:bg-red-600";
      default: return "bg-yellow-500 hover:bg-yellow-600";
    }
  };

  return (
    <Layout>
      <div className="bg-slate-50 min-h-[80vh] flex items-center justify-center py-12">
        <div className="container mx-auto px-4 max-w-md">
          <Card className="shadow-xl border-t-4 border-t-secondary">
            <CardHeader className="text-center pb-2">
              <CardTitle className="text-2xl font-serif font-bold text-primary">Check Application Status</CardTitle>
              <p className="text-sm text-muted-foreground">Enter your Application ID or ERP ID</p>
            </CardHeader>
            <CardContent className="pt-6">
              <form onSubmit={handleSearch} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="appId">Application ID / ERP ID</Label>
                  <div className="relative">
                    <Input 
                      id="appId" 
                      placeholder="e.g. VGU-NCC-2025-001" 
                      value={searchId}
                      onChange={(e) => setSearchId(e.target.value)}
                      className="pl-10 uppercase"
                    />
                    <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                  </div>
                </div>
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90" disabled={loading}>
                  {loading ? <Loader2 className="h-4 w-4 animate-spin mr-2" /> : "Check Status"}
                </Button>
              </form>

              {result && (
                <div className="mt-8 p-4 bg-muted/30 rounded-lg border border-border animate-in fade-in slide-in-from-bottom-2">
                  <div className="text-center mb-4">
                    <h4 className="font-bold text-primary">{result.name}</h4>
                    <p className="text-xs text-muted-foreground">ID: {result.id}</p>
                  </div>
                  
                  <div className="flex justify-between items-center p-3 bg-white rounded border border-border shadow-sm mb-4">
                    <span className="text-sm font-medium">Current Status</span>
                    <Badge className={`${getStatusColor(result.status)} capitalize`}>{result.status}</Badge>
                  </div>

                  {result.status === "shortlisted" && (
                    <div className="text-xs text-muted-foreground text-center">
                      Congratulations! You have been shortlisted for the physical test. Please check the "Selection Process" page for dates.
                    </div>
                  )}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
}
