import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

export default function Component() {
  return (
    <Card className="w-full max-w-md h-[70vh] bg-yellow-200">
      <CardHeader>
        <CardTitle>Upcoming Appointments</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="flex items-center gap-4">
          <div className="bg-secondary rounded-md p-2 flex items-center justify-center">
            <CalendarIcon className="w-5 h-5 text-secondary-foreground" />
          </div>
          <div className="flex-1">
            <div className="font-medium">Dentist Checkup</div>
            <div className="text-muted-foreground text-sm">Today, 2:00 PM</div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="bg-secondary rounded-md p-2 flex items-center justify-center">
            <CalendarIcon className="w-5 h-5 text-secondary-foreground" />
          </div>
          <div className="flex-1">
            <div className="font-medium">Dermatologist Appointment</div>
            <div className="text-muted-foreground text-sm">Tomorrow, 10:30 AM</div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="bg-secondary rounded-md p-2 flex items-center justify-center">
            <CalendarIcon className="w-5 h-5 text-secondary-foreground" />
          </div>
          <div className="flex-1">
            <div className="font-medium">Physical Therapy</div>
            <div className="text-muted-foreground text-sm">Friday, 4:00 PM</div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="bg-secondary rounded-md p-2 flex items-center justify-center">
            <CalendarIcon className="w-5 h-5 text-secondary-foreground" />
          </div>
          <div className="flex-1">
            <div className="font-medium">Optometrist Checkup</div>
            <div className="text-muted-foreground text-sm">Next Monday, 9:00 AM</div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

function CalendarIcon(props) {
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
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  )
}