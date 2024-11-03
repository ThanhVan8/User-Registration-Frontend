import { useLocation } from "react-router-dom";

const Home = () => {
  const location = useLocation();
  const { user } = location.state || {};

  return (
    <>
      <h1 className="text-slate-800 text-2xl font-semibold">Hi <span className='text-primary'>{user?.email}</span></h1>
    </>
  );
}

export default Home;
