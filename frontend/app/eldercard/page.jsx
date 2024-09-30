import { Card, CardHeader, CardContent } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"

export default function Component() {
  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="bg-muted/20 p-6">
        <div className="flex items-center gap-4">
          <Avatar className="h-16 w-16">
            <AvatarImage src="/placeholder-user.jpg" alt="Patient Avatar" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div className="grid gap-1">
            <div className="flex items-center gap-2">
              <h2 className="text-2xl font-bold">John Doe</h2>
              <p className="text-muted-foreground">Assigned Nurse: Jane Smith</p>
            </div>
            <p className="text-muted-foreground">Patient</p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-6 grid gap-4">
        <div className="grid gap-2">
          <h3 className="text-lg font-semibold">About</h3>
          <p className="text-muted-foreground">
            John is a 35-year-old patient who has been under our care for the past 2 years. He is generally in good
            health, with a few minor conditions that we monitor regularly.
          </p>
        </div>
        <Separator />
        <div className="grid gap-2">
          <h3 className="text-lg font-semibold">Contact Information</h3>
          <div className="grid gap-2 text-muted-foreground">
            <div className="flex items-center gap-2">
              <MailOpenIcon className="w-5 h-5" />
              <span>john.doe@example.com</span>
            </div>
            <div className="flex items-center gap-2">
              <PhoneIcon className="w-5 h-5" />
              <span>+1 (555) 555-5555</span>
            </div>
          </div>
        </div>
        <Separator />
        <div className="grid gap-2">
          <h3 className="text-lg font-semibold">Medical Details</h3>
          <div className="grid gap-2 text-muted-foreground">
            <div className="flex items-center gap-2">
              <HeartPulseIcon className="w-5 h-5" />
              <span>Hypertension (Controlled)</span>
            </div>
            <div className="flex items-center gap-2">
              <PillIcon className="w-5 h-5" />
              <span>Taking Metformin for Diabetes (Type 2)</span>
            </div>
            <div className="flex items-center gap-2">
              <ClipboardIcon className="w-5 h-5" />
              <span>Last Checkup: June 15, 2023</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

function ClipboardIcon(props) {
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
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
    </svg>
  )
}


function HeartPulseIcon(props) {
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
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
      <path d="M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27" />
    </svg>
  )
}


function MailOpenIcon(props) {
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
      <path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z" />
      <path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10" />
    </svg>
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


function PillIcon(props) {
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
      <path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z" />
      <path d="m8.5 8.5 7 7" />
    </svg>
  )
}