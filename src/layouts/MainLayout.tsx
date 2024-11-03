import { Button } from '@mui/material';
import { Link, Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-main-bg bg-cover bg-center">
      <header className="flex items-center justify-between px-5 py-4">
        <nav>
          <p className='font-semibold text-slate-800'>Home</p>
        </nav>
        <Link to='/login'>
          <Button
            variant="outlined"
            color="primary"
            className="bg-primary hover:bg-primary-400"
          >
            Login
          </Button>
        </Link>
      </header>
      <main className="flex flex-grow p-5 items-center justify-center">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;