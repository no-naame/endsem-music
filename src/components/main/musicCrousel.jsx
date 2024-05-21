import * as React from "react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

import {MusicPlayer} from "@/components/main/music.jsx";

export function CustomCarousel({list}) {

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
                            <MusicPlayer image={item.thumbnail} name={item.title} artist={item.artist[0].name} id={item._id}/>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    );
}
