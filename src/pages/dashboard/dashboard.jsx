import BookingCards from '@/components/dashboard/booking/BookingCards';
import { EarningHistoryChart } from '@/components/dashboard/booking/EarningHistoryChart';
import BookingSummary from '@/components/dashboard/dashboard/BookingSummary';
import EarningSummary from '@/components/dashboard/dashboard/EarningSummary';
import NextBookingSummary from '@/components/dashboard/dashboard/NextBookingSummary';
import ServiceCards from '@/components/dashboard/service/ServiceCards';

export default function Dashboard() {
  return (
    <div className="grid grid-cols-12 gap-4">
      <div className="col-span-9 space-y-4 max-h-min">
        <BookingCards />
        <ServiceCards />
      </div>
      {/* Reports */}
      <div className="col-span-3 space-y-4">
        <EarningSummary />
        <BookingSummary />
        <EarningHistoryChart />
        <NextBookingSummary />
      </div>
    </div>
  );
}
