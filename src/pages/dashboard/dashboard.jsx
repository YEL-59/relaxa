export default function Dashboard() {
  return (
    <div className="grid grid-cols-12 gap-4">
      <div className="col-span-9 space-y-4">
        {/* Booking */}
        <div className="bg-background h-60 rounded-xl"></div>
        {/* Service */}
        <div className="bg-background h-60 rounded-xl"></div>
      </div>
      {/* Reports */}
      <div className="col-span-3 space-y-4">
        {/* Todays earnings */}
        <div className="bg-background h-20 rounded-xl"></div>
        {/* New Booking (Total Number) */}
        <div className="bg-background h-20 rounded-xl"></div>
        {/* Earning History */}
        <div className="bg-background h-40 rounded-xl"></div>
        {/* New Booking */}
        <div className="bg-background h-56 rounded-xl"></div>
      </div>
    </div>
  );
}
