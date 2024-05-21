import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import {ContextVar} from "@/components/context/MusicContext.jsx";
import {useContext} from "react";
import {MusicPlayer} from "@/components/main/music.jsx";

export function CustomCarousel({list}) {

    const trendingSongs = useContext(ContextVar)

    console.log(list)
    return (
        <Carousel
            opts={{
                align: "start",
                loop: true,
            }}
            className="w-[95%]"
        >
            <CarouselContent>
                {list.map((item, index) => (
                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                        <div className="p-1">
                            <MusicPlayer image={item.thumbnail} name={item.title} artist={item.artist[0].name}/>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    );
}
function PlayIcon(props) {
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
            <polygon points="6 3 20 12 6 21 6 3" />
        </svg>
    )
}