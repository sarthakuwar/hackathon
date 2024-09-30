import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import VideoCard1 from "@/components/VideoCard1"
import VideoCard2 from "@/components/VideoCard2"
import VideoCard3 from "@/components/VideoCard3"
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
              <VideoCard1/>
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
              <VideoCard2/>
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
              <VideoCard3/>
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