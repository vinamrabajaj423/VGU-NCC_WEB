import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { useLocation } from "wouter";
import { Upload, CheckCircle } from "lucide-react";

// Form Schema
const formSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be 10 digits"),
  erpId: z.string().min(3, "ERP ID is required"),
  course: z.string().min(1, "Please select a course"),
  year: z.string().min(1, "Please select year"),
  gender: z.enum(["male", "female", "other"]),
  height: z.string().min(2, "Height is required"),
  weight: z.string().min(2, "Weight is required"),
  bloodGroup: z.string().min(1, "Blood group is required"),
  declaration: z.boolean().default(false).refine((val) => val === true, "You must agree to the declaration"),
});

export default function Apply() {
  const { toast } = useToast();
  const [, setLocation] = useLocation();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      erpId: "",
      declaration: false,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // In a real app, this would send data to backend
    console.log(values);
    
    toast({
      title: "Application Submitted Successfully",
      description: "Your application ID is VGU-NCC-2025-001. Please save this for future reference.",
      duration: 5000,
    });
    
    setTimeout(() => {
      setLocation("/status");
    }, 2000);
  }

  return (
    <Layout>
      <div className="bg-muted/30 py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-serif font-bold text-primary mb-2">NCC Enrollment Form 2025</h1>
            <p className="text-muted-foreground">Fill in your details accurately. Incomplete forms will be rejected.</p>
          </div>

          <Card className="border-t-4 border-t-secondary shadow-lg">
            <CardHeader className="bg-primary/5 border-b border-border">
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-full bg-secondary text-white flex items-center justify-center font-bold">1</div>
                <CardTitle className="text-xl">Student Details</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="p-6 md:p-8">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                  
                  {/* Personal Info Grid */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="fullName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name (as per 10th marksheet)</FormLabel>
                          <FormControl>
                            <Input placeholder="RAJESH KUMAR" {...field} className="uppercase" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="erpId"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>University ERP ID</FormLabel>
                          <FormControl>
                            <Input placeholder="21BCA001" {...field} className="uppercase" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address</FormLabel>
                          <FormControl>
                            <Input placeholder="student@vgu.ac.in" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Mobile Number</FormLabel>
                          <FormControl>
                            <Input placeholder="9876543210" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="course"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Course / Branch</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select Course" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="btech_cse">B.Tech CSE</SelectItem>
                              <SelectItem value="btech_me">B.Tech ME</SelectItem>
                              <SelectItem value="bca">BCA</SelectItem>
                              <SelectItem value="bba">BBA</SelectItem>
                              <SelectItem value="bsc">B.Sc</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="year"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Current Year</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select Year" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="1">1st Year</SelectItem>
                              <SelectItem value="2">2nd Year</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* Physical Details */}
                  <div className="pt-6 border-t border-border">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="h-8 w-8 rounded-full bg-secondary text-white flex items-center justify-center font-bold">2</div>
                      <h3 className="text-xl font-bold text-primary">Physical Standards</h3>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                      <FormField
                        control={form.control}
                        name="gender"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Gender</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="male">Male</SelectItem>
                                <SelectItem value="female">Female</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="height"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Height (cm)</FormLabel>
                            <FormControl>
                              <Input placeholder="175" type="number" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="weight"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Weight (kg)</FormLabel>
                            <FormControl>
                              <Input placeholder="65" type="number" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                       <FormField
                        control={form.control}
                        name="bloodGroup"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Blood Group</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="a+">A+</SelectItem>
                                <SelectItem value="a-">A-</SelectItem>
                                <SelectItem value="b+">B+</SelectItem>
                                <SelectItem value="b-">B-</SelectItem>
                                <SelectItem value="o+">O+</SelectItem>
                                <SelectItem value="o-">O-</SelectItem>
                                <SelectItem value="ab+">AB+</SelectItem>
                                <SelectItem value="ab-">AB-</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>

                  {/* Documents Mockup */}
                  <div className="pt-6 border-t border-border">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="h-8 w-8 rounded-full bg-secondary text-white flex items-center justify-center font-bold">3</div>
                      <h3 className="text-xl font-bold text-primary">Document Upload</h3>
                    </div>
                    
                    <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:bg-muted/50 transition-colors cursor-pointer">
                      <Upload className="h-10 w-10 text-muted-foreground mx-auto mb-2" />
                      <p className="font-medium text-foreground">Click to upload Passport Photo</p>
                      <p className="text-xs text-muted-foreground mt-1">JPG, PNG up to 2MB</p>
                    </div>
                  </div>

                  {/* Declaration */}
                  <FormField
                    control={form.control}
                    name="declaration"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 bg-primary/5">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel>
                            I hereby declare that the information provided above is true to the best of my knowledge. I understand that false information will lead to rejection of my application.
                          </FormLabel>
                        </div>
                      </FormItem>
                    )}
                  />

                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-lg h-12 shadow-lg">
                    Submit Application <CheckCircle className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
}
