import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  useCarousel,
} from '@/components/ui/carousel';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { SearchIcon, SlidersHorizontalIcon } from 'lucide-react';
import { Link } from 'react-router';

export default function BookingCards() {
  return (
    <Carousel
      opts={{
        align: 'start',
      }}
      className="bg-background rounded-xl p-6"
    >
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-semibold text-2xl">Booking</h3>
        <CarouselControls />
      </div>

      <Tabs defaultValue="new-request">
        <div className="mb-[18px] flex items-center justify-between">
          <TabsList className="rounded-full h-10 p-0 border-[#EFEFF4]">
            <TabsTrigger
              value="new-request"
              className="rounded-full h-10 px-4 py-2 text-base data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-none text-muted-foreground"
            >
              New Request
            </TabsTrigger>
            <TabsTrigger
              value="completed"
              className="rounded-full h-10 px-4 py-2 text-base data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-none text-muted-foreground"
            >
              Completed
            </TabsTrigger>
            <TabsTrigger
              value="canceled"
              className="rounded-full h-10 px-4 py-2 text-base data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-none text-muted-foreground"
            >
              Canceled
            </TabsTrigger>
          </TabsList>
          <div className="flex gap-4 items-center">
            <div className="relative">
              <Input
                className="w-[288px] rounded-full bg-background border border-[#EFEFF4] pl-12 pr-4 py-0"
                placeholder="Search"
              />
              <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground size-5" />
            </div>
            <div className="size-[40px] border border-[#EFEFF4] rounded-full bg-background flex justify-center items-center cursor-pointer hover:bg-accent">
              <SlidersHorizontalIcon className="text-muted-foreground" />
            </div>
          </div>
        </div>
        <TabsContent value="new-request">
          <Bookings data={Array.from({ length: 10 })} />
        </TabsContent>
        <TabsContent value="completed">
          <Bookings data={Array.from({ length: 3 })} />
        </TabsContent>
        <TabsContent value="canceled">
          <Bookings data={Array.from({ length: 2 })} />
        </TabsContent>
      </Tabs>
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

function Bookings({ data = [] }) {
  return (
    <div>
      <div className="mb-4 flex justify-end">
        <Button variant="link" className="px-0 text-muted-foreground">
          <Link to="/booking">View All</Link>
        </Button>
      </div>

      <CarouselContent className="-ml-4">
        {data.map((_, index) => (
          <CarouselItem key={index} className="basis-1/4 pl-4">
            <Card className="bg-muted border border-[#EFEFF4]">
              <CardHeader className="flex-row gap-2 items-center p-4">
                <img
                  src="https://i.pravatar.cc/56"
                  alt=""
                  className="size-14 rounded-lg"
                />
                <h4 className="max-w-[113px]">Gerard Fabiano</h4>
              </CardHeader>
              <CardContent className="p-4">
                <div className="bg-background border border-[#EFEFF4] rounded-[20px] p-4">
                  <div className="flex justify-between mb-[10px]">
                    <div>
                      <p className="text-muted-foreground text-sm">Time</p>
                      <p>12:00 PM</p>
                    </div>
                    <div className="text-right">
                      <p className="text-muted-foreground text-sm">
                        Booking Date
                      </p>
                      <p>15 June 2027</p>
                    </div>
                  </div>
                  <Button
                    className="w-full rounded-full h-6 text-xs font-light"
                    variant="light"
                  >
                    Show Details
                  </Button>
                </div>
              </CardContent>
              <CardFooter className="px-4 pb-4 justify-between">
                <Button variant="outline" className="rounded-full w-[88px] h-8">
                  Approve
                </Button>
                <Button
                  variant="outline"
                  className="rounded-full border-muted-foreground text-muted-foreground w-[88px] h-8"
                >
                  Decline
                </Button>
              </CardFooter>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
    </div>
  );
}
