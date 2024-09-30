import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Separator } from "@/components/ui/separator"

export default function Component() {
  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Avatar className="w-16 h-16">
              <AvatarImage src="/placeholder-user.jpg" alt="User Avatar" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div className="grid gap-1">
              <h2 className="text-2xl font-bold">John Doe</h2>
              <div className="text-muted-foreground">
                <span className="font-medium">Age:</span> 78
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline">Edit Profile</Button>
            <Button>Contact Nurse</Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="grid gap-6">
        <div className="flex flex-row justify-evenly">
          <div className="">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" defaultValue="john.doe@example.com" disabled />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="gender">Gender</Label>
            <Select id="gender" defaultValue="male" disabled>
              <SelectTrigger>
                <SelectValue placeholder="Select gender" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="male">Male</SelectItem>
                <SelectItem value="female">Female</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="grid gap-2">
            <Label htmlFor="address">Address</Label>
            <Textarea id="address" defaultValue="123 Main St, Anytown USA" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="medical-issues">Medical Issues</Label>
            <Textarea id="medical-issues" defaultValue="Arthritis, High Blood Pressure" />
          </div>
        </div>
        <Separator />
        <div className="grid gap-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium">Assigned Nurse</h3>
            <Button variant="outline" size="sm">
              Change Nurse
            </Button>
          </div>
          <div className="flex items-center gap-4">
            <Avatar className="w-12 h-12">
              <AvatarImage src="/placeholder-user.jpg" alt="Nurse Avatar" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div className="grid gap-1">
              <div className="font-medium">Jane Doe, RN</div>
              <div className="text-muted-foreground">
                <PhoneIcon className="w-4 h-4 mr-1 inline" />
                +1 (555) 555-5555
              </div>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-end gap-2">
        <Button variant="outline">Cancel</Button>
        <Button type="submit">Save Changes</Button>
      </CardFooter>
    </Card>
  )
}

function PhoneIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}