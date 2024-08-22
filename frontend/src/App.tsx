import React from 'react';
import HomeSong from './pages/homePage/HomeSong';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './pages/layout/Layout';
import AddSong from "../src/pages/addSongsPage/AddSong"
import SongDetail from './pages/songdetail/SongDetail';
import UpdateSong from './components/homecomponents/UpdateSong';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <BrowserRouter>
    <ToastContainer/>
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<HomeSong/>}/>
        <Route path='/add' element={<AddSong/>}/>
        <Route path='/songdetail' element={<SongDetail/>}/>
        <Route path='/update' element={<UpdateSong/>}/>

      </Route>
    </Routes>
    
    </BrowserRouter>
   
  );
}

export default App;
