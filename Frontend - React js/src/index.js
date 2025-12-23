import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import MyNavbar from './Components/MyNavbar';
import Home from './Components/Home';
import PgdacPage from './Components/PgdacPage';
import PgdbdaPage from './Components/PgdbdaPage';
import PreCat from './Components/PreCat';
import MscitPage from './Components/MscitPage';
import BatchwisePlacementPage from './Components/BatchwisePlacementPage';
import ContactUs from './Components/ContactUs';
import GetInTouch from './Components/GetInTouch';
import FacultyPage from './Components/FacultyPage';
import OurRecruitersPage from './Components/OurRecruitersPage'
import CampusLife from './Components/CampusLife';
import Company from './Components/CompanyList';
import LoginPage from './Components/LoginPage';
import AdminDashboard from './Components/AdminDashboard';
import StaffDashboard from './Components/StaffDashboard';
import Dashboard from './Components/Dashboard';
import FollowUp from './Components/FollowUp';
import PagingComponent from './Components/PagingComponent';
import Login from './Components/Login';
import Logout from './Components/Logout';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <MyNavbar/>
    <Routes>
      <Route path='/' element={<App/>}>
        

      </Route>
      <Route path='/' element={<Home/>}/>
        <Route path="Home" element={<App/>}/>
        <Route path='PgdacPage' element={<PgdacPage/>}/>
        <Route path='PgdbdaPage' element={<PgdbdaPage/>}/>
        <Route path='PreCat' element={<PreCat/>}/>
        <Route path='MscitPage' element={<MscitPage/>}/> 
        <Route path='ContactUs' element={<ContactUs/>}/> 
        <Route path='BatchwisePlacementPage' element={<BatchwisePlacementPage/>}/> 
        <Route path="OurRecruitersPage" element={<OurRecruitersPage/> }/>
        <Route path="GetInTouch" element={<GetInTouch/> }/>
        <Route path="FacultyPage" element={<FacultyPage/> }/>
        <Route path="CampusLife" element={<CampusLife/> }/>
        <Route path="Company" element={<Company/> }/>
        <Route path="LoginPage" element={<LoginPage/> }/>
        <Route path="AdminDashboard" element={<AdminDashboard/> }/>
        <Route path="StaffDashboard" element={<StaffDashboard/> }/>
        <Route path="Dashboard" element={<Dashboard/> }/>
        <Route path="FollowUp" element={<FollowUp/> }/>
        <Route path="PagingComponent" element={<PagingComponent/> }/>

        <Route path="Login" element={<Login/> }/>

        <Route path="Logout" element={<Logout/> }/>
















    </Routes>
  </BrowserRouter>
);


reportWebVitals();
