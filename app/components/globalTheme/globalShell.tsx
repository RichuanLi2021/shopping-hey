import GlobalNavigationBar from './globalNavBar';
import GlobalFooter from './globalFooter';
import { Outlet } from 'react-router';

interface GlobalShellProps {
  
}

export default function GlobalShell(props: GlobalShellProps) {
  return (
    <>
      <GlobalNavigationBar/>
        <main>
          <Outlet/>
        </main>
      <GlobalFooter/>
    </>
  );
}