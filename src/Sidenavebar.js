
import Image2 from './Image2.jpeg'
import Image3 from './Image3.jpg'
import { useState } from 'react';
import { Link } from 'react-router-dom';


function Sidenavbar(){

   const[isOpen, setIsOpen]=useState(false);
   const[isOpen1,setIsOpen1]=useState(false);
   const[isOpen2,setIsOpen2]=useState(false);
   const[isOpen3,setIsOpen3]=useState(false);
   const[isOpen4,setIsOpen4]=useState(false);
   const[isOpen5,setIsOpen5]=useState(false);
   const[isOpen6,setIsOpen6]=useState(false);


   
   const toggleDropDown =() =>{
    setIsOpen(!isOpen);
   }

   const toggleDropDown1 =() =>{
    setIsOpen1(!isOpen1);
   }

   const toggleDropDown2 =() =>{
    setIsOpen2(!isOpen2);
   }

   const toggleDropDown3 =() =>{
     setIsOpen3(!isOpen3);
   }

   const toggleDropDown4 =() =>{
       setIsOpen4(!isOpen4);
   }

   const toggleDropDown5 =() =>{
    setIsOpen5(!isOpen5);
}
 
const toggleDropDown6 =() =>{
    setIsOpen6(!isOpen6);
}



    return(
<div>
<div className="row   py-4" >
            <div className="col-sm-12 sidenav py-4  " style={{boxShadow:'2px 2px 2px 2px silver'}}  >
                
                <div className="d-flex "  >
                    <img src={Image2} className='three'></img>
                    </div>
                    <div className="d-flex" >
                    <img src={Image3} className='four'></img>
                    </div>

                     <div className='d-flex'>
                    <ul class="nav flex-column px-4 py-1 " >
                    <li className="bg-dark-subtle rounded mb-1 "><Link to='/dashboard' style={{textDecoration:'none', color:'black'}}><div><i class="fa fa-desktop px-1" aria-hidden="true"></i> Dashboard</div></Link></li>
                    <li className="bg-dark-subtle rounded mb-1" onClick={toggleDropDown}><div><i class="fa fa-user px-1" aria-hidden="true"></i> Employees { isOpen==false?<i class="fa fa-plus px-2" aria-hidden="true" ></i>: <i class="fa fa-minus px-2" aria-hidden="true" ></i>}</div></li>
                       {isOpen && (
                        <ul style={{listStyle:'none'}}>
                            <li className="bg-dark-subtle rounded mb-1"><Link to='/empcreate' style={{textDecoration:'none'}}>Employee Create</Link></li>
                            <li className="bg-dark-subtle rounded mb-1"><Link to='/emplist' style={{textDecoration:'none'}}>Employee List</Link></li>
                            <li className="bg-dark-subtle rounded mb-1"><Link to='/empimp' style={{textDecoration:'none'}}>Employee Import</Link></li>
                            <li className="bg-dark-subtle rounded mb-1"><Link to='/empaward' style={{textDecoration:'none'}}>Awards List</Link></li>
                            <li className="bg-dark-subtle rounded mb-1"><Link to='/empnotice' style={{textDecoration:'none'}}>Notice List</Link></li>
                            </ul>
                       )}

                    <li className="bg-dark-subtle rounded mb-1 " onClick={toggleDropDown1}><div><i class="fa fa-book px-1" aria-hidden="true"></i>Attendance { isOpen1==false?<i class="fa fa-plus px-2" aria-hidden="true" ></i>: <i class="fa fa-minus px-2" aria-hidden="true" ></i>}</div></li>
                         
                    {isOpen1 && (
                        <ul style={{listStyle:'none'}}>
                            <li  className="bg-dark-subtle rounded mb-1"><Link to='/absentdetails' style={{textDecoration:'none'}}>Absents Details</Link></li>
                            <li className="bg-dark-subtle rounded mb-1"><Link to='/manualpunching' style={{textDecoration:'none'}}>Manual Punching</Link></li>
                            <li className="bg-dark-subtle rounded mb-1"><Link to='/leaveapplication' style={{textDecoration:'none'}}>Leave Application</Link></li>
                            <li className="bg-dark-subtle rounded mb-1"><Link to='/attendanceimport' style={{textDecoration:'none'}}>Attendance Import</Link></li>
                            <li className="bg-dark-subtle rounded mb-1 "><Link to='/attendverification' style={{textDecoration:'none'}}>Attendance Verification</Link></li>
                            </ul>
                       )}

                    <li className="bg-dark-subtle rounded mb-1 px-1 " onClick={toggleDropDown2}><div><i class="fa fa-inr px-2" aria-hidden="true"></i> Payroll { isOpen2==false?<i class="fa fa-plus px-4" aria-hidden="true" ></i>:<i class="fa fa-minus px-4" aria-hidden="true" ></i>}</div></li>
                    
                    {isOpen2 && (
                        <ul style={{listStyle:'none'}}>
                            <li className="bg-dark-subtle rounded mb-1"><Link to='/payslip' style={{textDecoration:'none'}}>Payslip </Link></li>
                            <li className="bg-dark-subtle rounded mb-1"><Link to='/salarysetup' style={{textDecoration:'none'}}>Salary Setup </Link></li>
                            <li className="bg-dark-subtle rounded mb-1"><Link to='/salaryprocess' style={{textDecoration:'none'}}>Salary Process</Link></li>
                            <li className="bg-dark-subtle rounded mb-1"><Link to='/emploan' style={{textDecoration:'none'}}>Employee Loan</Link></li>
                            <li className="bg-dark-subtle rounded mb-1"><Link to='/taxfile' style={{textDecoration:'none'}}>Tax File Upload</Link></li>
                            </ul>
                       )}
                    
                   
             <li className="bg-dark-subtle rounded mb-1" onClick={toggleDropDown3}><div><i class="fa fa-bar-chart px-1" aria-hidden="true"></i> Reports { isOpen3==false?<i class="fa fa-plus px-4" aria-hidden="true" ></i>:<i class="fa fa-minus px-4" aria-hidden="true" ></i>}</div></li>
                       
                    {isOpen3 && (
                        <ul style={{listStyle:'none'}}>
                            <li className="bg-dark-subtle rounded mb-1">Attendance</li>
                            <li className="bg-dark-subtle rounded mb-1">Payslip Bulk Download</li>
                            <li className="bg-dark-subtle rounded mb-1">Monthly Salary</li>
                            <li className="bg-dark-subtle rounded mb-1">Yearly Salary</li>
                            <li className="bg-dark-subtle rounded mb-1">Salary Deduction Details</li>
                            </ul>
                       )}

                    <li className="bg-dark-subtle rounded mb-1" onClick={toggleDropDown4}><div><i class="fa fa-briefcase px-1" aria-hidden="true"></i> Job { isOpen4==false?<i class="fa fa-plus px-4" aria-hidden="true" ></i>:<i class="fa fa-minus px-4" aria-hidden="true" ></i>}</div></li>
                   
                      {isOpen4 && (
                        <ul style={{listStyle:'none'}}>
                           <li className="bg-dark-subtle rounded mb-1">Candidate Create</li> 
                           <li className="bg-dark-subtle rounded mb-1">Candidate List</li>
                           <li className="bg-dark-subtle rounded mb-1">Job Opening List</li>
                           <li className="bg-dark-subtle rounded mb-1">Job Application List</li>
                           <li className="bg-dark-subtle rounded mb-1">Training List</li>
                        </ul>
                      )

                      }

                    
                    <li className="bg-dark-subtle rounded mb-1" onClick={toggleDropDown5}><div><i class="fa fa-film px-1" aria-hidden="true"></i> Masters{ isOpen5==false?<i class="fa fa-plus px-2" aria-hidden="true" ></i>:<i class="fa fa-minus px-2" aria-hidden="true" ></i>}</div></li>

                     {isOpen5 &&(
                        <ul style={{listStyle:'none'}}>
                        <li className="bg-dark-subtle rounded mb-1">Company</li> 
                        <li className="bg-dark-subtle rounded mb-1">Location</li>
                        <li className="bg-dark-subtle rounded mb-1">Branch</li>
                        <li className="bg-dark-subtle rounded mb-1">Department</li>
                        <li className="bg-dark-subtle rounded mb-1">Leave</li>
                     </ul>

                     )}

                    <li className="bg-dark-subtle rounded mb-1" onClick={toggleDropDown6}><div><i class="fa fa-th px-1" aria-hidden="true"></i> App Masters { isOpen6==false?<i class="fa fa-plus px-2" aria-hidden="true" ></i>:<i class="fa fa-minus px-2" aria-hidden="true" ></i>}</div></li>
                       
                    {isOpen6 &&(
                        <ul style={{listStyle:'none'}}>
                        <li className="bg-dark-subtle rounded mb-1">Add Users</li> 
                        <li className="bg-dark-subtle rounded mb-1">List Users</li>
                        <li className="bg-dark-subtle rounded mb-1">Roles</li>
                        
                     </ul>

                     )}
                       

                    </ul>
                    </div>
                  
                  
                  
            </div>
            </div>
</div>)
}

export default Sidenavbar;