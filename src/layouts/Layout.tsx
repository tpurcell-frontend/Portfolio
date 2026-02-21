import { Outlet } from 'react-router';
import Header from '../components/Header';
import StarfieldBackground from '../components/StarfieldBackground'

export function Layout() {
  return (
    <>
    <StarfieldBackground />
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
}