import { Route, Routes } from 'react-router-dom';
 import '../components/styles/App.css';
 import Home from './MainPage';
 import Users from './UsersPage';
 import Reservation from './ReservationPage';
 import Request from './RequestPage';


 function App() {
 return (
    <div className="App">
       <Routes>
         <Route path='/' element={<Home/>} />
         <Route path='/user' element={<Users/>} />
         <Route path='/reservation' element={<Reservation/>} />
         <Route path='/request' element={<Request/>} />
       </Routes>
     </div>
   );
 }
 export default App