import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import {useEffect, useState} from 'react';
import House from './components/House';
import Search from './components/Search';
import {Routes, Route} from 'react-router-dom'
import SearchResults from './components/SearchResults';
import SearchedHouse from './components/SearchedHouse';
import Login from './components/Login';
import SignUp from './components/SignUp';
import EnquiryList from './components/EnquiryList';
import axios from 'axios';

import { useLocation } from 'react-router-dom';
import PageNotFound from './components/PageNotFound';

function App() {
let [houseData, setHouseData] = useState([]);
let location = useLocation();

  useEffect(
    ()=> {
      console.log(process.env.REACT_APP_URL)
      let fetchData = async() => {
      let response = await axios.get(process.env.REACT_APP_URL+'houses');
      console.log(response)
      setHouseData(response.data);
      }
      fetchData();
    }, [])

  return (
    <div className="container-fluid">
      <Header/>
      {(location.pathname !== '/login' && location.pathname !== '/signup') && <Search allhouses={houseData}/>}

      <Routes>
        <Route path="/" element={<House houseInfo={houseData[3]}/>}/>
        <Route path='/searchresults/:county' element={<SearchResults allhouses={houseData}/> } />
        <Route path='/searchedhouse/:id' element={<SearchedHouse allhouses={houseData}/> } />
        <Route path='/enquiries' element={<EnquiryList /> } />
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
         <Route path='/*' element={<PageNotFound/>}/>
      </Routes>
    
      <Footer/>
    </div>
  );
}

export default App;
