'use client'

import { useState } from 'react'
import { signIn } from 'next-auth/react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function SignInPage() {
  const [activeTab, setActiveTab] = useState("elder")
  const [elderStep, setElderStep] = useState(0)
  const [nurseStep, setNurseStep] = useState(0)
  const [elderFormData, setElderFormData] = useState({
    email: '',
    password: '',
    name: '',
    age: '',
    address: '',
    phone: '',
    medicalIssues: ''
  })
  const [nurseFormData, setNurseFormData] = useState({
    email: '',
    password: '',
    username: '',
    fullName: '',
    licenseNumber: '',
    specialization: ''
  })

  const updateElderField = (field, value) => {
    setElderFormData(prev => ({ ...prev, [field]: value }))
  }

  const updateNurseField = (field, value) => {
    setNurseFormData(prev => ({ ...prev, [field]: value }))
  }

  const elderSteps = [
    { title: "Sign In", field: 'email', type: 'email', placeholder: 'Enter your email' },
    { title: "Enter Password", field: 'password', type: 'password', placeholder: 'Enter your password' },
    { title: "What's your name?", field: 'name', type: 'text', placeholder: 'Enter your full name' },
    { title: "What's your age?", field: 'age', type: 'number', placeholder: 'Enter your age' },
    { title: "What's your address?", field: 'address', type: 'text', placeholder: 'Enter your full address' },
    { title: "What's your phone number?", field: 'phone', type: 'tel', placeholder: 'Enter your phone number' },
    { title: "Any medical issues we should know about? (Optional)", field: 'medicalIssues', type: 'textarea', placeholder: 'Enter any medical issues (optional)' }
  ]

  const nurseSteps = [
    { title: "Sign In", field: 'email', type: 'email', placeholder: 'Enter your email' },
    { title: "Enter Password", field: 'password', type: 'password', placeholder: 'Enter your password' },
    { title: "Choose a username", field: 'username', type: 'text', placeholder: 'Enter your username' },
    { title: "What's your full name?", field: 'fullName', type: 'text', placeholder: 'Enter your full name' },
    { title: "What's your license number?", field: 'licenseNumber', type: 'text', placeholder: 'Enter your nursing license number' },
    { title: "What's your specialization?", field: 'specialization', type: 'text', placeholder: 'Enter your nursing specialization' }
  ]

  const currentElderStep = elderSteps[elderStep]
  const currentNurseStep = nurseSteps[nurseStep]

  const handleElderNext = async () => {
    if (elderStep < elderSteps.length - 1) {
      setElderStep(prev => prev + 1)
    } else {
      // Here you would typically send the data to your API to create a new user
      console.log('Elder sign-up data:', elderFormData)
      // For now, we'll just try to sign in with the provided email and password
      const result = await signIn('credentials', {
        email: elderFormData.email,
        password: elderFormData.password,
        redirect: false,
      })
      if (result?.error) {
        alert(result.error)
      } else {
        alert('Signed in successfully!')
      }
    }
  }

  const handleNurseNext = async () => {
    if (nurseStep < nurseSteps.length - 1) {
      setNurseStep(prev => prev + 1)
    } else {
      // Here you would typically send the data to your API to create a new user
      console.log('Nurse sign-up data:', nurseFormData)
      // For now, we'll just try to sign in with the provided email and password
      const result = await signIn('credentials', {
        email: nurseFormData.email,
        password: nurseFormData.password,
        redirect: false,
      })
      if (result?.error) {
        alert(result.error)
      } else {
        alert('Signed in successfully!')
      }
    }
  }

  const handleElderPrevious = () => {
    if (elderStep > 0) {
      setElderStep(prev => prev - 1)
    }
  }

  const handleNursePrevious = () => {
    if (nurseStep > 0) {
      setNurseStep(prev => prev - 1)
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: -20, scale: 0.95 }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-4xl font-bold text-center mb-6">Sign In / Sign Up</h1>
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full max-w-md mb-6">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="elder" className="text-lg py-3">Elder</TabsTrigger>
          <TabsTrigger value="nurse" className="text-lg py-3">Care taker</TabsTrigger>
        </TabsList>
      </Tabs>
      <AnimatePresence mode="wait">
        <motion.div
          key={`${activeTab}-${activeTab === 'elder' ? elderStep : nurseStep}`}
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="w-full max-w-md"
        >
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold">
                {activeTab === 'elder' ? currentElderStep.title : currentNurseStep.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              {activeTab === 'elder' ? (
                <>
                  <Label htmlFor={currentElderStep.field} className="sr-only">
                    {currentElderStep.title}
                  </Label>
                  {currentElderStep.type === 'textarea' ? (
                    <Textarea
                      id={currentElderStep.field}
                      value={elderFormData[currentElderStep.field]}
                      onChange={(e) => updateElderField(currentElderStep.field, e.target.value)}
                      placeholder={currentElderStep.placeholder}
                      className="w-full p-3 text-lg"
                      rows={4}
                    />
                  ) : (
                    <Input
                      type={currentElderStep.type}
                      id={currentElderStep.field}
                      value={elderFormData[currentElderStep.field]}
                      onChange={(e) => updateElderField(currentElderStep.field, e.target.value)}
                      placeholder={currentElderStep.placeholder}
                      className="w-full p-3 text-lg"
                      required={currentElderStep.field !== 'medicalIssues'}
                    />
                  )}
                </>
              ) : (
                <>
                  <Label htmlFor={currentNurseStep.field} className="sr-only">
                    {currentNurseStep.title}
                  </Label>
                  <Input
                    type={currentNurseStep.type}
                    id={currentNurseStep.field}
                    value={nurseFormData[currentNurseStep.field]}
                    onChange={(e) => updateNurseField(currentNurseStep.field, e.target.value)}
                    placeholder={currentNurseStep.placeholder}
                    className="w-full p-3 text-lg"
                    required
                  />
                </>
              )}
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button
                onClick={activeTab === 'elder' ? handleElderPrevious : handleNursePrevious}
                disabled={(activeTab === 'elder' && elderStep === 0) || (activeTab === 'nurse' && nurseStep === 0)}
                className="px-6 py-2 text-lg"
              >
                Previous
              </Button>
              <Button
                onClick={activeTab === 'elder' ? handleElderNext : handleNurseNext}
                className="px-6 py-2 text-lg"
              >
                {(activeTab === 'elder' && elderStep === elderSteps.length - 1) || 
                 (activeTab === 'nurse' && nurseStep === nurseSteps.length - 1) ? 'Submit' : 'Next'}
              </Button>
            </CardFooter>
          </Card>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}