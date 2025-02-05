import Navbar from '@/components/auth/navbar/navbar';
import { Outlet } from 'react-router';

export default function AuthLayout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
}
