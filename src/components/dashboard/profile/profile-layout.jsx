import { SidebarProvider } from '@/components/ui/sidebar';
import { Outlet } from 'react-router';
import { Sidebar } from './sidebar';

export default function ProfileLayout() {
  return (
    <SidebarProvider>
      <div className="flex h-[calc(100svh-98px)] overflow-y-hidden">
        <Sidebar />
        <div className="px-[45px] min-h-[calc(100svh-98px)] overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </SidebarProvider>
  );
}
