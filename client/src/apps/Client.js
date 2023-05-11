
import Navbar from './../layouts/Navbar';
import Footer from './../layouts/Footer';
import { Outlet } from 'react-router-dom';

function Client() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer/>
    </div>
  );
}

export default Client;
