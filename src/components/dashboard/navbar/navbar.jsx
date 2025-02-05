import { Input } from '@/components/ui/input';
import { SearchIcon } from 'lucide-react';
import { DatePicker } from './date-picker';

export default function Navbar() {
  return (
    <header className="px-6 h-[98px] flex items-center justify-between">
      <div className="relative">
        <Input
          className="w-[376px] h-[50px] rounded-full bg-background border-none pl-12 pr-4"
          placeholder="Search"
        />
        <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
      </div>
      <div className="flex gap-4 items-center">
        <DatePicker />

        <div className="size-[50px] rounded-full bg-background"></div>
        <div className="size-[50px] rounded-full bg-background"></div>
        <div className="size-[50px] rounded-full bg-background"></div>
      </div>
    </header>
  );
}
