import { Calendar, Home, Inbox, LogOutIcon, Search } from 'lucide-react';

import {
  Sidebar as CnSidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';

import logo from '@/assets/logo.svg';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Link, useLocation } from 'react-router';

// Menu items.
const items = [
  {
    title: 'Dashboard',
    url: '/',
    icon: Home,
  },
  {
    title: 'Service',
    url: '/service',
    icon: Inbox,
  },
  {
    title: 'Booking',
    url: '/booking',
    icon: Calendar,
  },
  {
    title: 'Profile',
    url: '/profile/general',
    icon: Search,
  },
];

export function Sidebar() {
  const { pathname } = useLocation();

  return (
    <CnSidebar>
      <SidebarHeader className="px-6 pt-10 pb-[60px]">
        <img src={logo} alt="Relaxa Logo" className="w-[153px]" />
      </SidebarHeader>
      <SidebarContent className="px-6">
        <SidebarGroup className="p-0">
          <SidebarGroupContent>
            <SidebarMenu className="gap-4">
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    className={cn('h-14 rounded-[20px] p-[18px]', {
                      'bg-primary hover:bg-primary/95 text-primary-foreground hover:text-primary-foreground':
                        item.url === pathname,
                    })}
                  >
                    <Link to={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="p-6">
        <Button
          variant="secondary"
          className="h-14 rounded-[20px] p-[18px] border border-[#EFEFF4] text-muted-foreground justify-start gap-[18px]"
        >
          <LogOutIcon className="size-5" />
          Logout
        </Button>
      </SidebarFooter>
    </CnSidebar>
  );
}
