import ProfileLayout from '@/components/dashboard/profile/profile-layout';
import AuthLayout from '@/layouts/auth-layout';
import DashboardLayout from '@/layouts/dashboard-layout';
import About from '@/pages/auth/about';
import ProfessionalInfo from '@/pages/auth/professional-info';
import Review from '@/pages/auth/review';
import SignIn from '@/pages/auth/sign-in';
import SignUp from '@/pages/auth/sign-up';
import Booking from '@/pages/dashboard/booking';
import Dashboard from '@/pages/dashboard/dashboard';
import ProfileGeneral from '@/pages/dashboard/profile-general';
import ProfileSettings from '@/pages/dashboard/profile-settings';
import Service from '@/pages/dashboard/service';
import { createBrowserRouter } from 'react-router';

export const router = createBrowserRouter([
  {
    path: '/auth',
    element: <AuthLayout />,
    children: [
      {
        path: 'sign-in',
        element: <SignIn />,
      },
      {
        path: 'sign-up',
        element: <SignUp />,
      },
      {
        path: 'create-profile/about',
        element: <About />,
      },
      {
        path: 'create-profile/professional-info',
        element: <ProfessionalInfo />,
      },
      {
        path: 'create-profile/review',
        element: <Review />,
      },
    ],
  },
  {
    path: '/',
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: 'service',
        element: <Service />,
      },
      {
        path: 'booking',
        element: <Booking />,
      },
      {
        path: 'profile',
        element: <ProfileLayout />,
        children: [
          {
            path: 'general',
            element: <ProfileGeneral />,
          },
          {
            path: 'settings',
            element: <ProfileSettings />,
          },
        ],
      },
    ],
  },
]);
