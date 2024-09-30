import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen bg-muted/40">
      <header className="sticky top-0 z-30 flex items-center h-14 gap-4 px-4 border-b bg-background sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
        <div className="flex items-center gap-4">
          <h1 className="text-xl font-bold">Patient Care Dashboard</h1>
          <Badge variant="secondary">Caretaker View</Badge>
        </div>
        <div className="ml-auto flex items-center gap-2">
          <Button size="icon" variant="outline">
            <SearchIcon className="w-5 h-5" />
            <span className="sr-only">Search</span>
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button size="icon" variant="outline" className="overflow-hidden rounded-full">
                <img
                  src="/placeholder.svg"
                  width={36}
                  height={36}
                  alt="Avatar"
                  className="overflow-hidden rounded-full"
                  style={{ aspectRatio: "36/36", objectFit: "cover" }}
                />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>John Doe</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
      <main className="flex-1 grid gap-6 p-4 sm:px-6 sm:py-4">
        <div className="grid gap-6 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Normal Routine Tasks</CardTitle>
              <CardDescription>View, edit, and update daily tasks for your patient.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <CheckIcon className="w-5 h-5 text-green-500" />
                    <div>
                      <div className="font-medium">Brush Teeth</div>
                      <div className="text-sm text-muted-foreground">Completed at 8:00 AM</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button size="icon" variant="ghost">
                      <FilePenIcon className="w-5 h-5" />
                      <span className="sr-only">Edit</span>
                    </Button>
                    <Button size="icon" variant="ghost">
                      <TrashIcon className="w-5 h-5" />
                      <span className="sr-only">Delete</span>
                    </Button>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <ClockIcon className="w-5 h-5 text-yellow-500" />
                    <div>
                      <div className="font-medium">Eat Breakfast</div>
                      <div className="text-sm text-muted-foreground">Due at 9:00 AM</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button size="icon" variant="ghost">
                      <FilePenIcon className="w-5 h-5" />
                      <span className="sr-only">Edit</span>
                    </Button>
                    <Button size="icon" variant="ghost">
                      <TrashIcon className="w-5 h-5" />
                      <span className="sr-only">Delete</span>
                    </Button>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <XIcon className="w-5 h-5 text-red-500" />
                    <div>
                      <div className="font-medium">Take a Walk</div>
                      <div className="text-sm text-muted-foreground">Overdue since 10:00 AM</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button size="icon" variant="ghost">
                      <FilePenIcon className="w-5 h-5" />
                      <span className="sr-only">Edit</span>
                    </Button>
                    <Button size="icon" variant="ghost">
                      <TrashIcon className="w-5 h-5" />
                      <span className="sr-only">Delete</span>
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button size="sm">View All</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Medications to be Taken</CardTitle>
              <CardDescription>Review and manage your patient's medication schedule.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <CheckIcon className="w-5 h-5 text-green-500" />
                    <div>
                      <div className="font-medium">Aspirin</div>
                      <div className="text-sm text-muted-foreground">Taken at 8:00 AM</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button size="icon" variant="ghost">
                      <FilePenIcon className="w-5 h-5" />
                      <span className="sr-only">Edit</span>
                    </Button>
                    <Button size="icon" variant="ghost">
                      <TrashIcon className="w-5 h-5" />
                      <span className="sr-only">Delete</span>
                    </Button>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <ClockIcon className="w-5 h-5 text-yellow-500" />
                    <div>
                      <div className="font-medium">Ibuprofen</div>
                      <div className="text-sm text-muted-foreground">Due at 12:00 PM</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button size="icon" variant="ghost">
                      <FilePenIcon className="w-5 h-5" />
                      <span className="sr-only">Edit</span>
                    </Button>
                    <Button size="icon" variant="ghost">
                      <TrashIcon className="w-5 h-5" />
                      <span className="sr-only">Delete</span>
                    </Button>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <XIcon className="w-5 h-5 text-red-500" />
                    <div>
                      <div className="font-medium">Metformin</div>
                      <div className="text-sm text-muted-foreground">Overdue since 3:00 PM</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button size="icon" variant="ghost">
                      <FilePenIcon className="w-5 h-5" />
                      <span className="sr-only">Edit</span>
                    </Button>
                    <Button size="icon" variant="ghost">
                      <TrashIcon className="w-5 h-5" />
                      <span className="sr-only">Delete</span>
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button size="sm">View All</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Scheduled Appointments</CardTitle>
              <CardDescription>Review and manage your patient's upcoming appointments.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <CalendarIcon className="w-5 h-5 text-blue-500" />
                    <div>
                      <div className="font-medium">Doctor's Visit</div>
                      <div className="text-sm text-muted-foreground">Tomorrow at 2:00 PM</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button size="icon" variant="ghost">
                      <FilePenIcon className="w-5 h-5" />
                      <span className="sr-only">Edit</span>
                    </Button>
                    <Button size="icon" variant="ghost">
                      <TrashIcon className="w-5 h-5" />
                      <span className="sr-only">Delete</span>
                    </Button>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <CalendarIcon className="w-5 h-5 text-blue-500" />
                    <div>
                      <div className="font-medium">Physical Therapy</div>
                      <div className="text-sm text-muted-foreground">Friday at 10:00 AM</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button size="icon" variant="ghost">
                      <FilePenIcon className="w-5 h-5" />
                      <span className="sr-only">Edit</span>
                    </Button>
                    <Button size="icon" variant="ghost">
                      <TrashIcon className="w-5 h-5" />
                      <span className="sr-only">Delete</span>
                    </Button>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <CalendarIcon className="w-5 h-5 text-blue-500" />
                    <div>
                      <div className="font-medium">Dentist Appointment</div>
                      <div className="text-sm text-muted-foreground">Next Monday at 9:00 AM</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button size="icon" variant="ghost">
                      <FilePenIcon className="w-5 h-5" />
                      <span className="sr-only">Edit</span>
                    </Button>
                    <Button size="icon" variant="ghost">
                      <TrashIcon className="w-5 h-5" />
                      <span className="sr-only">Delete</span>
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button size="sm">View All</Button>
            </CardFooter>
          </Card>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Appointments</CardTitle>
              <CardDescription>Review your patient's upcoming appointments.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <CalendarIcon className="w-5 h-5 text-blue-500" />
                    <div>
                      <div className="font-medium">Doctor's Visit</div>
                      <div className="text-sm text-muted-foreground">Tomorrow at 2:00 PM</div>
                    </div>
                  </div>
                  <Button size="sm" variant="outline">
                    View Details
                  </Button>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <CalendarIcon className="w-5 h-5 text-blue-500" />
                    <div>
                      <div className="font-medium">Physical Therapy</div>
                      <div className="text-sm text-muted-foreground">Friday at 10:00 AM</div>
                    </div>
                  </div>
                  <Button size="sm" variant="outline">
                    View Details
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Medication Reminders</CardTitle>
              <CardDescription>Review your patient's upcoming medication schedule.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <ClockIcon className="w-5 h-5 text-yellow-500" />
                    <div>
                      <div className="font-medium">Ibuprofen</div>
                      <div className="text-sm text-muted-foreground">Due at 12:00 PM</div>
                    </div>
                  </div>
                  <Button size="sm" variant="outline">
                    Remind
                  </Button>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <XIcon className="w-5 h-5 text-red-500" />
                    <div>
                      <div className="font-medium">Metformin</div>
                      <div className="text-sm text-muted-foreground">Overdue since 3:00 PM</div>
                    </div>
                  </div>
                  <Button size="sm" variant="outline">
                    Remind
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
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


function CheckIcon(props) {
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
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}


function ClockIcon(props) {
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
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  )
}


function FilePenIcon(props) {
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
      <path d="M12 22h6a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v10" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
      <path d="M10.4 12.6a2 2 0 1 1 3 3L8 21l-4 1 1-4Z" />
    </svg>
  )
}


function SearchIcon(props) {
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
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}


function TrashIcon(props) {
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
      <path d="M3 6h18" />
      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
    </svg>
  )
}


function XIcon(props) {
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
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}