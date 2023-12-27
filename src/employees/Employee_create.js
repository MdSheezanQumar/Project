
import { useState } from 'react';
import {useForm} from 'react-hook-form';
import{useNavigate} from 'react-router-dom';

function  Employee_create(){
    
const navigate1 = useNavigate();
   

    const[formdata,setformdata]=useState({
      
        EmpNo:'',
        CardNo:'',
        Name:'',
        Fathername:'',
        Email:'',
        PresentAdd:'',
        Awardname:'',
        Gift:'',
        Awarddate:'',
        Company:''


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
        const allUserDataArray=JSON.parse(localStorage.getItem('allUserData')) || [];
        const userKey=Math.random().toString(36).substring(7);
        allUserDataArray.push({userKey,formdata});
        localStorage.setItem('allUserData',JSON.stringify(allUserDataArray));
        console.log(e);
        navigate1('/emplist');

    }



    return(
        <div className='container-fluid  '>
           
                <form onSubmit={submitHandler} className='first w-75  rounded  'style={{marginLeft:'15%'}} >
                    <div className='row my-3'>
                          <div className='col-sm-6 py-3 '>
                            <input className='form-control m-auto w-75'  type='text' placeholder='Emp No' name='EmpNo' value={formdata.EmpNo} onChange={handleChange}></input><br/>
                            <input className='form-control m-auto w-75' type='text' placeholder='Card No' name='CardNo' value={formdata.CardNo} onChange={handleChange}></input><br/>
                            <input className='form-control m-auto w-75' type='text' placeholder='Full Name' name='Name'value={formdata.Name} onChange={handleChange} ></input><br/>
                            <input className='form-control m-auto w-75' type='text' placeholder='Father Name' name='Fathername' value={formdata.Fathername} onChange={handleChange}></input><br/>
                            <input className='form-control m-auto w-75' type='email' placeholder='Email' name='Email' value={formdata.Email} onChange={handleChange}></input>
                        </div>
                        <div className='col-sm-6 py-3'>
                            <div className='mx-1'>
                            <input className='form-control m-auto w-75' type='text' placeholder='Present Address' name='PresentAdd' value={formdata.PresentAdd} onChange={handleChange}></input><br/>
                            <input className='form-control m-auto w-75' type='text' placeholder='AwardName' name='Awardname' value={formdata.Awardname} onChange={handleChange}></input><br/>
                            <input className='form-control m-auto w-75' type='text' placeholder='Gift ' name='Gift' value={formdata.Gift} onChange={handleChange}></input><br/>
                            <input className='form-control m-auto w-75' type='text' placeholder='Company Name'  name='Company' value={formdata.Company} onChange={handleChange}></input><br/>
                             <input className='form-control m-auto w-75' type='date' placeholder='AwardDate' name='Awarddate' value={formdata.Awarddate} onChange={handleChange}></input>
                             </div>
                                                
                        </div>
                    </div>
                    <div className='text-center py-1' >
                         <button className='btn btn-primary' >Submit</button>
                    </div>
                </form>
           
           </div>
       
    )

}


export default Employee_create;