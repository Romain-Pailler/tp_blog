import { Route, Routes } from 'react-router-dom';
import './App.css';
import Banniere from './component/Banniere';
import Footer from './component/Footer';
import UserCard from './component/UserCard';
function App() {
  return(
    <div>
      <Banniere/>
      <Routes>
        <Route path="/" element={<UserCard/>}/> 
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
