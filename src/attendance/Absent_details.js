
import { useState } from 'react';

import{useNavigate} from 'react-router-dom';

function Absent_details(){
    const navigate2 = useNavigate();
   

    const[formdata,setformdata]=useState({
      
        EmpName:'',
        EmpCode:'',
        Cardno:'',
        PunchDate:'',
        InTime:'',
        OutTime:'',
        Department:'',
        FromDate:'',
        ToDate:'',
        NoDaysLeave:'',
        LeaveType:'',
        LeaveStatus:''


    })
    const handleChange = (e) => {
     
        const {name,value} =e.target;
        setformdata((prevData) =>({
            ...prevData,
            [name]:value,
            
        }));  
    };
    const submitHandler =  (e) => {
        e.preventDefault();
        const allUserDataArray1=JSON.parse(localStorage.getItem('allUserData1')) || [];
        const userKey1=Math.random().toString(36).substring(7);
        allUserDataArray1.push({userKey1,formdata});
        localStorage.setItem('allUserData1',JSON.stringify(allUserDataArray1));
        console.log(e);
        navigate2('/manualpunching');

    }



    return(
        <div className='container-fluid '>
           
                
                <form onSubmit={submitHandler} className='first w-75  rounded m-auto ' >
                    <div className='row m-3' >
                    <div className='col-sm-6 my-3'>
                            <input className='form-control m-auto w-75' type='text' placeholder='Emp Name' name='EmpName' value={formdata.EmpName} onChange={handleChange}></input><br/>
                            <input className='form-control m-auto w-75' type='text' placeholder='Emp Code' name='EmpCode' value={formdata.EmpCode} onChange={handleChange}></input><br/>
                            <input className='form-control m-auto w-75' type='text' placeholder='Card No' name='Cardno'value={formdata.Cardno} onChange={handleChange} ></input><br/>
                            <input className='form-control m-auto w-75' type='text' placeholder='Department' name='Department' value={formdata.Department} onChange={handleChange}></input><br/>
                            <input className='form-control m-auto w-75' type='text' placeholder='No Days Leave' name='NoDaysLeave' value={formdata.NoDaysLeave} onChange={handleChange}></input><br/>
                            <input className='form-control m-auto w-75' type='text' placeholder='Leave Type'  name='LeaveType' value={formdata.LeaveType} onChange={handleChange}></input><br/>
                            
                        </div>
                        <div className='col-sm-6 my-3'>
                           <input className='form-control m-auto w-75' type='text' placeholder='Leave Status'  name='LeaveStatus' value={formdata.LeaveStatus} onChange={handleChange}></input>
                            <div className='text-center'>
                                <label>From Date</label>
                            </div>
                            <input className='form-control m-auto w-75' type='date' placeholder='From Date' name='FromDate' value={formdata.FromDate} onChange={handleChange}></input>
                            <div className='text-center'>
                                <label>To Date</label>
                            </div>
                            <input className='form-control m-auto w-75' type='date' placeholder='To Date ' name='ToDate' value={formdata.ToDate} onChange={handleChange}></input>
                            <div className='text-center'>
                                <label>Punch Date</label>
                            </div>
                            <input className='form-control m-auto w-75' type='date' placeholder='Punch Date' name='PunchDate' value={formdata.PunchDate} onChange={handleChange}></input>
                            <div className='text-center'>
                                <label>In-Time</label>
                            </div>
                            <input className='form-control m-auto w-75' type='time' placeholder='In Time' name='InTime' value={formdata.InTime} onChange={handleChange}></input>
                            <div className='text-center'>
                                <label>Out-Time</label>
                            </div>
                            <input className='form-control m-auto w-75' type='time' placeholder='Out Time' name='OutTime' value={formdata.OutTime} onChange={handleChange}></input>
                            
                        </div > 
                        <div className='text-center'>
                        <button className='btn btn-primary  m-1' >Submit</button>
                        </div>
                    </div>
                </form>
           
           </div>
       
    )
}

export default Absent_details;