import { useEffect, useState } from  'react';

function Employee_list(){

 // Retrieve all user data from the centralized array
 const allUserDataArray = JSON.parse(localStorage.getItem('allUserData')) || [];

 if (allUserDataArray.length === 0) {
   return <div className='cl1 py-5' style={{textAlign:'center'}}>No data found for any user.</div>;
 }

  const handleClearLocalStorage = () => {
    localStorage.clear();
    alert('Local storage cleared.');
  };

 return (
   <div className='container-fluid py-5'>
     <h2 style={{textAlign:'center'}}>Employee list</h2>
     <div className='row mx-4 my-5'>
     <table className='table table-sm border tab1'>
       <thead>
         <tr>
           <th>EmpNo</th>
           <th>CardNo</th>
           <th>Name</th>
           <th>Fathername</th>
           <th style={{textAlign:'center'}}>Email</th>
           <th>PresentAdd</th>
           <th>Awardname</th>
           <th>Gift</th>
           <th>Awarddate</th>
           <th>Company</th>
         </tr>
       </thead>
       <tbody>
         {allUserDataArray.map(({ userKey, formdata }, index) => (
           <tr key={index}>
             
             
             <td>{formdata.EmpNo}</td>
             <td>{formdata.CardNo}</td>
             <td>{formdata.Name}</td>
             <td>{formdata.Fathername}</td>
             <td>{formdata.Email}</td>
             <td>{formdata.PresentAdd}</td>
             <td>{formdata.Awardname}</td>
             <td>{formdata.Gift}</td>
             <td>{formdata.Awarddate}</td>
             <td>{formdata.Company}</td>
             
             
            
                  
           </tr>
         ))}
       </tbody>
     </table>
     <button className='btn btn-danger bt1 w-25' onClick={handleClearLocalStorage}>clear</button>
   </div>
   </div>
 );
  
}
export default Employee_list;