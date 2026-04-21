import { Outlet } from 'react-router';
import { Navigation } from './Navigation';
import { Footer } from './Footer';

export function MainLayout() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#004680] to-[#4484ba]">
      <Navigation />
      <Outlet />
      <Footer />
    </div>
  );
}
