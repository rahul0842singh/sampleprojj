import './App.css';
import Navbar from './components/Navbar';
import Home from './home/Home';
import Register from './components/Register';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './components/Footer';
import Login from './components/Login';
import StudentDashboard from './components/StudentDashboard';
import LeaveReport from './components/LeaveReport';
import Profile from './components/Profile';
import SalaryReport from './components/SalaryReport';
import Signin from './Admin/Signin';
import AdminDash from "./Admin/dashboard/AdminDash"
import 'semantic-ui-css/semantic.min.css'
import Leave from './Admin/Leave';
import Salary from './Admin/Salary';
import AddAdmin from './Admin/AddAdmin';


function App() {
  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path='/' exact element={<Home/>}   />
      <Route path='/register' element={<Register/>}  />
      <Route path='/studentdashboard' element={<StudentDashboard/>}  />
      <Route path='/leavereport' element={<LeaveReport/>}  />
      <Route path='/login' element={<Login/>}  />
      <Route path='/profile' element={<Profile/>}  />
      <Route path='/salaryreport' element={<SalaryReport/>}  />
      <Route path='/adminlogin' element={<Signin/>}  />
      <Route path='/admindash' element={<AdminDash/>}  />
      <Route path='/leave' element={<Leave/>}  />
      <Route path='/salary' element={<Salary/>}  />
      <Route path='/addadmin' element={<AddAdmin/>}  />
     </Routes>
    
     </BrowserRouter>
    </>
  );
}

export default App;
