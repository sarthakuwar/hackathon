import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import AllCard from "@/components/AllCard"
import MedCard from "@/components/MedCard"
import AppCard from "@/components/AppCard"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function CarouselCard() {
  return (
    <Carousel className="w-full max-w-xs">
      <CarouselContent>
        
          <CarouselItem >
            <div className="p-1">
              {/* <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-4xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card> */}
              <div className="m-5">
              <AllCard/>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem >
            <div className="p-1">
              {/* <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-4xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card> */}
              <div className="m-5">
              <MedCard/>
            </div>
            </div>
          </CarouselItem>
          <CarouselItem >
            <div className="p-1">
              {/* <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-4xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card> */}
              <div className="m-5">
              <AppCard/>
              </div>
            </div>
          </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}


export default CarouselCard