import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import Navbar from './Pages/Shared/Navbar/Navbar';
import router from './Routes/Routes/Routes';

function App() {
  return (
    <div className='max-w-[1440px] mx-auto bg-white dark:bg-black'>
      <RouterProvider router={router}></RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
