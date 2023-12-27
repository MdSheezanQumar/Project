import logo from './logo.svg';
import './App.css';
import Login from './Login';
import { Route, Routes ,useLocation} from 'react-router-dom';
import Dashboard from './Dashboard';
import Sidenavbar from './Sidenavebar';
import { useState,useEffect } from 'react';
import Employee_create from '../src/employees/Employee_create';
import Employee_list from './employees/Employee_list';
import Employee_import from './employees/Employee_import';
import Award_list from './employees/Award_list';
import Notice_list from './employees/Notice_list';
import Absent_details from './attendance/Absent_details';
import Attendance_imports from './attendance/Attendance_imports';
import Attendance_verification from './attendance/Attendance_verification';
import Leave_application from './attendance/Leave_application';
import Manual_punching from './attendance/Manual_punching';
import Employee_loan from './payroll/Employee_loan';
import Payslip from './payroll/Payslip';
import Salary_process from './payroll/Salary_process';
import Salary_setup from './payroll/Salary_setup';
import Taxfile_upload from './payroll/Taxfile_upload'






function App() {

  const[log,setlog]=useState(false);
  const Location=useLocation();
  useEffect(()=>{
    setlog(Location.pathname !=='/')
  },[Location.pathname])
  return (
    <div className="App">
      {log && <Sidenavbar/>}
       <div style={{width:log? '80%':'100%'}}>     
      
      <Routes>
        
      <Route path='/' element={<Login/>}></Route>
      <Route path="/dashboard" element={<Dashboard/>}></Route>

      <Route path='/empcreate' element={<Employee_create/>}></Route>
      <Route path='/emplist' element={<Employee_list/>}></Route>
      <Route path='/empimp' element={<Employee_import/>}></Route>
      <Route path='/empaward' element={<Award_list/>}></Route>
      <Route path='/empnotice' element={<Notice_list/>}></Route>

      <Route path='/absentdetails' element={<Absent_details/>}></Route>
      <Route path='attendanceimport' element={<Attendance_imports/>}></Route>
      <Route path='attendverification' element={<Attendance_verification/>}></Route>
      <Route path='leaveapplication' element={<Leave_application/>}></Route>
      <Route path='manualpunching' element={<Manual_punching/>}></Route>
      
      <Route path='emploan' element={<Employee_loan/>}></Route>
      <Route path='payslip' element={<Payslip/>}></Route>
      <Route path='salaryprocess' element={<Salary_process/>}></Route>
      <Route path='salarysetup' element={<Salary_setup/>}></Route>
      <Route path='taxfile' element={<Taxfile_upload/>}></Route>

     </Routes>
     </div> 
    </div>
  );
}

export default App;
