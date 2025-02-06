import { format } from 'date-fns';
import { CalendarDaysIcon, ChevronDownIcon } from 'lucide-react';
import * as React from 'react';

import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { cn } from '@/lib/utils';

export function DatePicker() {
  const [date, setDate] = React.useState(new Date());

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={'outline'}
          className={cn(
            'h-[50px] rounded-full bg-background justify-start text-left font-normal border-none',
            !date && 'text-muted-foreground'
          )}
        >
          <CalendarDaysIcon className="text-muted-foreground" />
          {date ? format(date, 'PPPP') : <span>Pick a date</span>}
          <ChevronDownIcon className="text-muted-foreground" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}
