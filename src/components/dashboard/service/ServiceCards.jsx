import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  useCarousel,
} from '@/components/ui/carousel';
import { cn } from '@/lib/utils';
import { Heart } from 'lucide-react';

export default function ServiceCards({ cardClassName, containerClassName }) {
  return (
    <Carousel
      opts={{
        align: 'start',
      }}
      className="bg-background rounded-xl p-6"
    >
      {/* Heading */}
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-semibold text-2xl">Service</h3>
        <CarouselControls />
      </div>

      <CarouselContent className={cn('-ml-4 max-w-full', containerClassName)}>
        {Array.from({ length: 10 }).map((_, index) => (
          <CarouselItem
            key={index}
            className={cn('basis-1/4 pl-4', cardClassName)}
          >
            {/* Card with Background Image */}
            <Card
              className="relative bg-cover bg-center rounded-2xl text-white overflow-hidden aspect-[258/357] w-full"
              style={{
                backgroundImage: `url(https://i.pravatar.cc/300?img=${
                  index + 1
                })`,
              }}
            >
              <div
                className="absolute inset-0"
                style={{
                  opacity: 0.5,
                  background:
                    'linear-gradient(180deg, rgba(0, 0, 0, 0.5) 1%, #000 37%)',
                }}
              ></div>

              <CardContent className="relative  h-full flex flex-col justify-between">
                <div className="py-4 flex justify-between items-center ">
                  <div>
                    <h4 className="text-sm font-thin text-white">
                      Service {index + 1}
                    </h4>
                    <p className="text-md font-bold text-white">
                      $ {20 + index}.00
                    </p>
                  </div>
                  <button className="text-white">
                    <Heart className="w-5 h-5" />
                  </button>
                </div>

                <div>
                  <div className="flex gap-2  justify-between items-center bg-primary p-2 rounded-full max-w-full">
                    <div>
                      <img
                        className="w-6 h-6 rounded-full"
                        src="https://i.pravatar.cc/300?img=20"
                        alt="Extra small avatar"
                      />
                    </div>
                    <div>
                      {' '}
                      <p className="text-xs font-normal truncate">
                        Audrey Williams
                      </p>
                    </div>
                    <div className="flex items-center">
                      <svg
                        className="w-4 h-4 text-yellow-300 me-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                      <p className=" text-sm  text-white font-thin">5.0(20)</p>
                    </div>
                  </div>
                  <div className="mt-2">
                    <h1>Haarschnitte und Styling</h1>
                  </div>
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}

function CarouselControls() {
  const { canScrollPrev, canScrollNext } = useCarousel();

  return (
    <div className="relative w-20 h-12 bg-muted p-[11px] rounded-full flex justify-between items-center">
      <CarouselPrevious
        className="static inset-0 translate-x-0 translate-y-0 size-[26px]"
        variant={canScrollPrev ? 'default' : 'ghost'}
      />
      <CarouselNext
        className="static inset-0 translate-x-0 translate-y-0 size-[26px]"
        variant={canScrollNext ? 'default' : 'ghost'}
      />
    </div>
  );
}
