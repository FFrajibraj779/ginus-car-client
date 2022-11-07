import './App.css';
import router from '../src/Routes/Routes';
import {RouterProvider} from 'react-router-dom';

function App() {
  return (
    <div className='w-4/5 mx-auto'>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
