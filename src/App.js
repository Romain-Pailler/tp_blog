import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Banniere from './component/Banniere';
import Footer from './component/Footer';
import FormBlog from './component/FormBlog';
import UserCard from './component/UserCard';
function App() {
  const [input_name, setInputName]= useState('Michel');
  return(

    <div>
      <Banniere nom={input_name}/>
      <Routes>
        <Route path="/" element={<UserCard/>}/> 
      </Routes>
      <FormBlog input_name = {input_name} setInputName={setInputName}/>
      <Footer/>
    </div>
  );
}

export default App;
