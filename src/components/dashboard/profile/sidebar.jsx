import { cn } from '@/lib/utils';
import { Home, Inbox } from 'lucide-react';

import { NavLink, useLocation } from 'react-router';

// Menu items.
const items = [
  {
    title: 'General',
    url: '/profile/general',
    icon: Home,
  },
  {
    title: 'Privacy & Security',
    url: '/profile/settings',
    icon: Inbox,
  },
];

export function Sidebar() {
  const { pathname } = useLocation();

  return (
    <div className="w-[320px] h-[calc(100svh-98px)] pr-[35px] border-r space-y-4">
      {items.map((item) => (
        <NavLink
          to={item.url}
          key={item.url}
          className={({ isActive }) =>
            cn('p-4 w-full block rounded-full', {
              'bg-foreground/5': isActive,
            })
          }
        >
          {item.title}
        </NavLink>
      ))}
    </div>
  );
}
