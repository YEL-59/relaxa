/* eslint-disable react/display-name */
import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { ChartContainer, ChartTooltip } from '@/components/ui/chart';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { cn } from '@/lib/utils';
import { MoveUpIcon } from 'lucide-react';
import React, { useState } from 'react';
import { Area, AreaChart, CartesianGrid, XAxis } from 'recharts';
const chartData = {
  weekly: [
    { day: 'Sunday', earning: 186 },
    { day: 'Monday', earning: 305 },
    { day: 'Tuesday', earning: 237 },
    { day: 'Wednesday', earning: 73 },
    { day: 'Thursday', earning: 209 },
    { day: 'Friday', earning: 214 },
  ],
  yearly: [
    { day: 'January', earning: 186 },
    { day: 'February', earning: 305 },
    { day: 'March', earning: 237 },
    { day: 'April', earning: 73 },
    { day: 'May', earning: 209 },
    { day: 'June', earning: 214 },
    { day: 'July', earning: 85 },
    { day: 'August', earning: 61 },
    { day: 'September', earning: 25 },
    { day: 'October', earning: 115 },
    { day: 'November', earning: 220 },
    { day: 'December', earning: 230 },
  ],
};

const chartConfig = {
  earning: {
    label: 'Earning',
    color: 'hsl(var(--primary))',
  },
};

export function EarningHistoryChart() {
  const [range, setRange] = useState('weekly');

  return (
    <Card className="border-none rounded-xl">
      <CardHeader className="p-6 flex-row justify-between items-start">
        <div>
          <CardDescription className="text-base">
            Earning History
          </CardDescription>
          <div className="flex gap-4 items-center">
            <CardTitle className="font-medium text-2xl">724,928</CardTitle>
            <Badge variant="success-fill" className="w-16 h-6 px-[10px] gap-2">
              <MoveUpIcon className="size-4" />
              27%
            </Badge>
          </div>
        </div>
        <div>
          <Select value={range} onValueChange={setRange}>
            <SelectTrigger className="w-[115px] h-8 bg-muted text-muted-foreground border border-[#EFEFF4] rounded-full">
              <SelectValue placeholder="Select time" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="weekly">Weekly</SelectItem>
                <SelectItem value="yearly">Yearly</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </CardHeader>
      <CardContent className="px-0 pt-0 pb-6">
        <ChartContainer config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={chartData[range]}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid horizontal={false} />
            <XAxis
              dataKey="day"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 1).toUpperCase()}
            />
            <ChartTooltip
              cursor={false}
              content={
                <TooltipContent
                  indicator="line"
                  hideLabel
                  hideIndicator
                  className="bg-foreground text-foreground"
                />
              }
            />
            <Area
              dataKey="earning"
              type="natural"
              fill="var(--color-earning)"
              fillOpacity={0.2}
              stroke="#CB78F7"
              //   dot={{ strokeWidth: 2 }}
              activeDot={{ strokeWidth: 1, r: 6 }}
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}

const TooltipContent = React.forwardRef(
  ({ payload, className, labelKey }, ref) => {
    const [item] = payload;

    const key = `${labelKey || item?.dataKey || item?.name || 'value'}`;
    const value = item?.payload?.[key];

    return (
      <div
        ref={ref}
        className={cn(
          'w-[73px] h-[35px] bg-foreground rounded-full flex justify-center items-center relative',
          className
        )}
      >
        <span className="text-background text-lg">{value}</span>
        <div className="absolute size-3 bg-foreground top-full left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-45"></div>
      </div>
    );
  }
);
