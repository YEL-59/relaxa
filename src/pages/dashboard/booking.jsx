import NextBookingSummary from '@/components/dashboard/dashboard/NextBookingSummary';
import ServiceCards from '@/components/dashboard/service/ServiceCards';

export default function Booking() {
  return (
    <div className="grid grid-cols-12 gap-4">
      <div className="col-span-9 space-y-4">
        <ServiceCards />
      </div>

      <div className="col-span-3 space-y-4">
        <NextBookingSummary />
      </div>
    </div>
  );
}
