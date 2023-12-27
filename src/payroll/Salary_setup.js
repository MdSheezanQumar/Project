
import { useState } from 'react';

import{useNavigate} from 'react-router-dom';

function Salary_setup(){
    const navigate3 = useNavigate();
   

    const[formdata,setformdata]=useState({
      
        Empname:'',
        Empcode:'',
        cardno:'',
        department:'',
        company:'',
        salary:'',
        effdate:'',
        loanName:'',
        amount:'',
        intRate:'',
        emiPay:'',
        loanDate:'',
        loanType:'',
        loanStatus:'',
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
        const allUserDataArray2=JSON.parse(localStorage.getItem('allUserData2')) || [];
        const userKey2=Math.random().toString(36).substring(7);
        allUserDataArray2.push({userKey2,formdata});
        localStorage.setItem('allUserData2',JSON.stringify(allUserDataArray2));
        console.log(e);
        navigate3('/salaryprocess');

    }



    return(
        <div className='container-fluid '>
           
                
                <form onSubmit={submitHandler} className='first w-75  rounded m-5' >
                    <div className='row py-3'>
                    <div className='col-sm-6 '>
                            <input  className='form-control m-auto w-75' type='text' placeholder='Emp Name' name='Empname' value={formdata.Empname} onChange={handleChange}></input><br/>
                            <input  className='form-control m-auto w-75' type='text' placeholder='Emp Code' name='Empcode' value={formdata.Empcode} onChange={handleChange}></input><br/>
                            <input className='form-control m-auto w-75' type='text' placeholder='Card No' name='cardno'value={formdata.cardno} onChange={handleChange} ></input><br/>
                            <input className='form-control m-auto w-75' type='text' placeholder='Department' name='department' value={formdata.department} onChange={handleChange}></input><br/>
                            <input  className='form-control m-auto w-75' type='text' placeholder='Company' name='company' value={formdata.company} onChange={handleChange}></input><br/>
                            <input className='form-control m-auto w-75' type='text' placeholder='Salary'  name='salary' value={formdata.salary} onChange={handleChange}></input>
                            <div className='text-center'><label>Effective date</label></div>
                            <input className='form-control m-auto w-75' type='date' placeholder='Effective Date'  name='effdate' value={formdata.effdate} onChange={handleChange}></input>
                             
                        </div>
                        <div className='col-sm-6 '>
                            <input className='form-control m-auto w-75' type='text' placeholder='Loan Name' name='loanName' value={formdata.loanName} onChange={handleChange}></input><br/>
                            <input className='form-control m-auto w-75' type='text' placeholder='Amount' name='amount' value={formdata.amount} onChange={handleChange}></input><br/>
                            <input className='form-control m-auto w-75' type='text' placeholder='Int. Rate' name='intRate'value={formdata.intRate} onChange={handleChange} ></input><br/>
                            <input className='form-control m-auto w-75' type='text' placeholder='Emi Pay' name='emiPay' value={formdata.emiPay} onChange={handleChange}></input>
                            <div className='text-center'><label>Loan Date</label></div>
                            <input className='form-control m-auto w-75' type='date' placeholder='Loan Date' name='loanDate' value={formdata.loanDate} onChange={handleChange}></input><br/>
                            <input className='form-control m-auto w-75' type='text' placeholder='Loan Type'  name='loanType' value={formdata.loanType} onChange={handleChange}></input><br/>
                            <input className='form-control m-auto w-75' type='text' placeholder='Loan Status'  name='loanStatus' value={formdata.loanStatus} onChange={handleChange}></input><br/>
                        </div>
                        <div className='text-center'>
                        <button className='btn btn-primary' >Submit</button>
                        </div>
                    </div>
                </form>
           
           </div>
       
    )
}

export default Salary_setup;