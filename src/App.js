import logo from './logo.svg';
import './App.css';
import Addproduct from './components/Addproduct';
import Search from './components/Search';
import Deletee from './components/Deletee';
import Favorites from './components/Favorites';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Viewall from './components/Viewall';


function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Addproduct/>}/>
    <Route path='/Search' element={<Search/>}/>
    <Route path='/delete' element={<Deletee/>}/>
    <Route path='/favorites' element={<Favorites/>}/>
    <Route path='/viewall' element={<Viewall/>}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
