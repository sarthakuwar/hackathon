"use client"

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { useSession } from "next-auth/react"
import { useGetElderProfile } from "../services/queries"

export default function Component() {
  const { data, status } = useSession();
  if (!data) return null;
  const { isSuccess, data: datas } = useGetElderProfile(data.user?.email)
  console.log(data)
  return (
    <div className="w-full max-w-3xl mx-auto p-4 md:p-6 lg:p-8">
      <div className="bg-background rounded-lg text-black shadow-lg overflow-hidden">
        <div className="bg-secondary border-2 py-6 px-4 md:px-6 lg:px-8">
          <div className="flex items-center gap-4">
            {/* <Avatar className="w-16 h-16 md:w-20 md:h-20">
              <AvatarImage src="/placeholder-user.jpg" alt="Patient Avatar" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar> */}
            <img src={`https://api.dicebear.com/9.x/pixel-art/svg?seed=sarthak`} className="w-[50px] h-[50px]" alt="" />
            <div className="flex-1">
              <h1 className="text-2xl font-bold text-primary-foreground text-black">John Doe</h1>
              <p className="text-sm text-primary-foreground text-black">john.doe@example.com</p>
            </div>
          </div>
        </div>
        <div className="p-4 md:p-6 lg:p-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <MapPinIcon className="w-5 h-5 text-muted-foreground" />
                <div>
                  <p className="text-sm font-medium">Address</p>
                  <p className="text-base text-muted-foreground">123 Main St, Anytown USA</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <CrossIcon className="w-5 h-5 text-muted-foreground" />
                <div>
                  <p className="text-sm font-medium">Medical Issues</p>
                  <p className="text-base text-muted-foreground">Diabetes, High Blood Pressure</p>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <GroupIcon className="w-5 h-5 text-muted-foreground" />
                <div>
                  <p className="text-sm font-medium">Gender</p>
                  <p className="text-base text-muted-foreground">Male</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <CalendarIcon className="w-5 h-5 text-muted-foreground" />
                <div>
                  <p className="text-sm font-medium">Age</p>
                  <p className="text-base text-muted-foreground">65</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <HospitalIcon className="w-5 h-5 text-muted-foreground" />
            <div>
              <p className="text-sm font-medium">Assigned Nurse</p>
              <p className="text-base text-muted-foreground">Jane Smith, RN</p>
            </div>
          </div>
          <Separator />
          <div className="space-y-4">
            <h2 className="text-xl font-bold">Edit Profile</h2>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="address">Address</Label>
                  <Input id="address" defaultValue="123 Main St, Anytown USA" className="text-base" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="medical-issues">Medical Issues</Label>
                  <Textarea id="medical-issues" defaultValue="Diabetes, High Blood Pressure" className="text-base" />
                </div>
              </div>
              <Button type="submit" className="w-full">
                Save Changes
              </Button>
            </form>
          </div>
        </div>
      </div>
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


function CrossIcon(props) {
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
      <path d="M11 2a2 2 0 0 0-2 2v5H4a2 2 0 0 0-2 2v2c0 1.1.9 2 2 2h5v5c0 1.1.9 2 2 2h2a2 2 0 0 0 2-2v-5h5a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-5V4a2 2 0 0 0-2-2h-2z" />
    </svg>
  )
}


function GroupIcon(props) {
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
      <path d="M3 7V5c0-1.1.9-2 2-2h2" />
      <path d="M17 3h2c1.1 0 2 .9 2 2v2" />
      <path d="M21 17v2c0 1.1-.9 2-2 2h-2" />
      <path d="M7 21H5c-1.1 0-2-.9-2-2v-2" />
      <rect width="7" height="5" x="7" y="7" rx="1" />
      <rect width="7" height="5" x="10" y="12" rx="1" />
    </svg>
  )
}


function HospitalIcon(props) {
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
      <path d="M12 6v4" />
      <path d="M14 14h-4" />
      <path d="M14 18h-4" />
      <path d="M14 8h-4" />
      <path d="M18 12h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2h2" />
      <path d="M18 22V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v18" />
    </svg>
  )
}


function MapPinIcon(props) {
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
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}