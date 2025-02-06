import ServiceCards from '@/components/dashboard/service/ServiceCards';

export default function Service() {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-12">
        <ServiceCards cardClassName="basis-1/5" />
      </div>
    </div>
  );
}
