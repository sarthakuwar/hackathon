'use client'

import { useEffect, useState } from "react"
import Joyride, { Step } from "react-joyride"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Phone, Mail, DollarSign, Clock, Search, Calendar, MessageCircle, Heart, Star, MapPin } from "lucide-react"

function Component() {
  const [nurses, setNurses] = useState([])
  const [filteredNurses, setFilteredNurses] = useState([])
  const [filters, setFilters] = useState({
    specialization: "",
    experience: "",
    location: ""
  })
  const [currentStep, setCurrentStep] = useState(1)
  const [runTour, setRunTour] = useState(false)

  const Step = [
    {
      target: ".header",
      content: "Welcome to our Caretaker Marketplace! This is where you can find compassionate care for your loved ones.",
      disableBeacon: true,
    },
    // {
    //   target: ".nav-tabs",
    //   content: "Use these tabs to navigate between searching for nurses, scheduling appointments, and contacting us.",
    // },
    {
      target: ".search-card",
      content: "Follow these steps to find your ideal caretaker based on specialization, experience, and location.",
    },
    {
      target: ".nurse-grid",
      content: "Browse through our qualified caretakers here. Each card shows important information about the caretaker.",
    },
    {
      target: ".book-appointment",
      content: "Once you've found a suitable caretaker, click here to book an appointment.",
    },
  ]

  useEffect(() => {
    const fetchNurses = async () => {
      try {
        const response = await fetch("/api/nurses")
        const data = await response.json()
        setNurses(data)
        setFilteredNurses(data)
      } catch (error) {
        console.error("Error fetching nurse data:", error)
      }
    }
    fetchNurses()
  }, [])

  const handleFilterChange = (name, value) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      [name]: value
    }))
  }

  useEffect(() => {
    const applyFilters = () => {
      const filtered = nurses.filter((nurse) => {
        return (
          (filters.specialization ? nurse.specialization.toLowerCase().includes(filters.specialization.toLowerCase()) : true) &&
          (filters.experience ? nurse.experience >= parseInt(filters.experience) : true) &&
          (filters.location ? nurse.location.toLowerCase().includes(filters.location.toLowerCase()) : true)
        )
      })
      setFilteredNurses(filtered)
    }
    applyFilters()
  }, [filters, nurses])

  const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, 3))
  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 1))

  return (
    <div className="container w-[90vw] mx-auto px-4 my-[80px] py-[30px] text-lg bg-gradient-to-b from-blue-50 to-zinc-100">
      <header className="text-center mb-12 header">
        <h1 className="text-5xl font-bold mb-6 text-zinc-800">Find your Sahara</h1>
      </header>

      {/* <nav className="sticky top-0 bg-zinc-200 z-10 p-4 shadow-md mb-8 rounded-lg nav-tabs"> */}
        {/* <Tabs defaultValue="search" className="w-full"> */}
          {/* <TabsList className="grid w-full grid-cols-3 bg-zinc-900">
            <TabsTrigger value="search" className="text-lg data-[state=active]:text-zinc-900 data-[state=active]:text-zinc-900">
              <Search className="mr-2 h-5 w-5" /> 
            </TabsTrigger>
            <TabsTrigger value="schedule" className="text-lg data-[state=active]:text-zinc-900 data-[state=active]:text-zinc-900">
              <Calendar className="mr-2 h-5 w-5" /> 
            </TabsTrigger>
            <TabsTrigger value="contact" className="text-lg data-[state=active]:text-zinc-900 data-[state=active]:text-zinc-900">
              <MessageCircle className="mr-2 h-5 w-5" />    
            </TabsTrigger>
          </TabsList> */}
        {/* </Tabs> */}
      {/* </nav> */}

      <Card className="mb-12 bg-white shadow-lg border-2 border-zinc-200 search-card">
        <CardHeader className="text-zinc-900">
          <CardTitle className="text-3xl font-semibold">Find Your Ideal Caretaker</CardTitle>
          <CardDescription className="text-xl text-zinc-900">Follow these simple steps to find the perfect care provider.</CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="space-y-8">
            {currentStep === 1 && (
              <div className="space-y-6">
                <Label htmlFor="specialization" className="text-2xl mb-2 block text-zinc-900">What type of care do you need?</Label>
                <Select onValueChange={(value) => handleFilterChange("specialization", value)}>
                  <SelectTrigger id="specialization" className="text-xl p-6 border-2 border-zinc-300 focus:border-zinc-500">
                    <SelectValue placeholder="Select specialization" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Dementia Care">Dementia Care</SelectItem>
                    <SelectItem value="Palliative Care">Palliative Care</SelectItem>
                    <SelectItem value="General Elderly Care">General Elderly Care</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            )}
            {currentStep === 2 && (
              <div className="space-y-6">
                <Label htmlFor="experience" className="text-2xl mb-2 block text-zinc-900">Minimum years of experience?</Label>
                <Input
                  id="experience"
                  type="number"
                  value={filters.experience}
                  onChange={(e) => handleFilterChange("experience", e.target.value)}
                  className="text-xl p-6 border-2 border-zinc-300 focus:border-zinc-500"
                  placeholder="e.g., 5"
                />
              </div>
            )}
            {currentStep === 3 && (
              <div className="space-y-6">
                <Label htmlFor="location" className="text-2xl mb-2 block text-zinc-900">Preferred location?</Label>
                <Input
                  id="location"
                  value={filters.location}
                  onChange={(e) => handleFilterChange("location", e.target.value)}
                  className="text-xl p-6 border-2 border-zinc-300 focus:border-zinc-500"
                  placeholder="e.g., New York"
                />
              </div>
            )}
          </div>
        </CardContent>
        <CardFooter className="flex justify-between bg-zinc-50 p-6">
          {currentStep > 1 && (
            <Button size="lg" onClick={prevStep} className="text-xl text-zinc-100 hover:bg-zinc-700">
              Previous
            </Button>
          )}
          {currentStep < 3 ? (
            <Button size="lg" onClick={nextStep} className="text-xl ml-auto text-zinc-100 hover:bg-zinc-700">
              Next
            </Button>
          ) : (
            <Button size="lg" onClick={() => setCurrentStep(1)} className="text-xl ml-auto text-zinc-900 hover:bg-zinc-700">
              Finish
            </Button>
          )}
        </CardFooter>
      </Card>

      {filteredNurses.length === 0 ? (
        <Card className="p-8 text-center bg-white shadow-lg py-10 border-2 border-zinc-200">
          <CardTitle className="text-2xl text-zinc-800 mb-4">No nurses match the current filters.</CardTitle>
          <CardDescription className="text-xl text-zinc-900">
            Try adjusting your search criteria or contact us for assistance.
          </CardDescription>
        </Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 nurse-grid">
          {filteredNurses.map((nurse) => (
            <Card key={nurse.id} className="flex flex-col bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 border-2 border-zinc-200">
              <CardHeader className="pb-2 text-zinc-900 text-white">
                <div className="flex items-center space-x-4">
                  <Avatar className="w-24 h-24 border-4 border-white">
                    <AvatarImage src={nurse.image} alt={nurse.name} />
                    <AvatarFallback className="bg-zinc-300 text-zinc-800">{nurse.name.split(" ").map((n) => n[0]).join("")}</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-3xl">{nurse.name}</CardTitle>
                    <CardDescription className="text-xl text-zinc-100">{nurse.specialization}</CardDescription>
                    <div className="flex items-center mt-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-5 h-5 ${i < nurse.rating ? 'text-yellow-400' : 'text-zinc-200'}`} fill="currentColor" />
                      ))}
                      <span className="ml-2 text-lg text-zinc-100">({nurse.rating}/5)</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex-grow text-xl space-y-4 pt-4">
                <div className="flex items-center text-zinc-800">
                  <Clock className="w-6 h-6 mr-2 text-zinc-900" />
                  <span>Experience: {nurse.experience} years</span>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Phone className="w-6 h-6 mr-2 text-zinc-900" />
                    <span className="text-zinc-800">{nurse.phone}</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-6 h-6 mr-2 text-zinc-900" />
                    <span className="text-zinc-800">{nurse.email}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-6 h-6 mr-2 text-zinc-900" />
                    <span className="text-zinc-800">{nurse.location}</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between pt-4 bg-zinc-50">
                <Badge className="text-lg px-3 py-1 bg-zinc-200 text-zinc-800" variant="secondary">{nurse.specialization}</Badge>
                <Button className="text-lg text-zinc-900 hover:bg-zinc-700 text-white book-appointment">
                  Book Appointment
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}

      <div className="fixed bottom-[100px] z-10 right-4">
        <Button onClick={() => setRunTour(true)} className="text-zinc-900 hover:bg-zinc-700 text-white">
          Start Tour
        </Button>
      </div>

      <Joyride
        steps={Step}
        run={runTour}
        continuous={true}
        showSkipButton={true}
        showProgress={true}
        styles={{
          options: {
            primaryColor: "rgb(24 24 27)",
            textColor: "rgb(24 24 27)",
            backgroundColor: "#ffffff",
          },
        }}
        callback={(data) => {
          const { status } = data;
          if (["finished", "skipped"].includes(status)) {
            setRunTour(false);
          }
        }}
      />
    </div>
  )
}

export default Component