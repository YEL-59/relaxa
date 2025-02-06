import { Ellipsis } from 'lucide-react';
import { Link } from 'react-router';

const NextBookingSummary = () => {
  const bookings = [
    {
      id: 1,
      name: 'Gerard Fabiano',
      time: '12:00 PM',
      date: '15 Jun 2027',
      avatar: 'https://i.pravatar.cc/56',
    },
    {
      id: 2,
      name: 'Sarah Parker',
      time: '1:30 PM',
      date: '16 Jun 2027',
      avatar: 'https://i.pravatar.cc/57',
    },
    {
      id: 3,
      name: 'John Doe',
      time: '2:00 PM',
      date: '17 Jun 2027',
      avatar: 'https://i.pravatar.cc/58',
    },
    {
      id: 4,
      name: 'Emily Turner',
      time: '3:15 PM',
      date: '18 Jun 2027',
      avatar: 'https://i.pravatar.cc/59',
    },
    // {
    //   id: 5,
    //   name: 'Michael Green',
    //   time: '4:45 PM',
    //   date: '19 Jun 2027',
    //   avatar: 'https://i.pravatar.cc/60',
    // },
  ];

  return (
    <div className="bg-background rounded-xl p-3 shadow-md">
      <div className="flex items-center justify-between mb-4">
        <h5 className="text-[#666] font-poppins text-sm font-normal leading-normal">
          Next Booking
        </h5>
        <Link
          to={''}
          className="text-[#666] font-poppins text-sm font-normal leading-normal hover:text-primary transition-colors"
        >
          View all
        </Link>
      </div>

      {/* Map over the bookings array */}
      <div className="space-y-4 max-h-[360px] overflow-y-auto">
        {bookings.map((booking) => (
          <div
            key={booking.id}
            className="flex items-center bg-muted rounded-2xl p-5 shadow-md space-x-2"
          >
            <div className="w-16 h-16 rounded-full bg-accent flex justify-center items-center cursor-pointer hover:bg-accent-dark transition-colors">
              <img
                src={booking.avatar}
                alt={`${booking.name} Avatar`}
                className="w-14 h-14 rounded-lg object-cover"
              />
            </div>

            <div className="flex-1 space-y-2">
              <p className="text-sm font-poppins font-semibold leading-tight truncate">
                {booking.name}
              </p>
              <p className="text-[#666] font-poppins text-xs leading-normal">
                Time: <span className="text-[#000]">{booking.time}</span>
              </p>
            </div>

            <div className="flex flex-col items-end space-y-2">
              <Ellipsis className="text-[#666] w-5 h-5" />
              <p className="text-[#666] font-poppins text-xs leading-normal">
                Date: <span className="text-[#000]">{booking.date}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NextBookingSummary;
