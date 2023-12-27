import { useEffect, useState } from  'react';

function Award_list(){

 // Retrieve all user data from the centralized array
 const allUserDataArray = JSON.parse(localStorage.getItem('allUserData')) || [];

 if (allUserDataArray.length === 0) {
   return <div className='py-5' style={{textAlign:'center'}}>No data found for any user.</div>;
 }

  const handleClearLocalStorage2 = () => {
    localStorage.clear();
    alert('Local storage cleared.');
  };

 return (
   <div className='container-fluid py-5'>
     <h2 style={{textAlign:'center'}}>Award list</h2>
     <div className='row px-5 py-5'>
     <table  className='table table-sm border tab2'>
       <thead >
         <tr>
           <th>EmpNo</th>
           <th>CardNo</th>
           <th>Awardname</th>
           <th>Gift</th>
           <th>Awarddate</th>
           
         </tr>
       </thead>
       <tbody>
         {allUserDataArray.map(({ userKey, formdata }, index) => (
           <tr key={index}>
             
             
             <td>{formdata.EmpNo}</td>
             <td>{formdata.CardNo}</td>
             <td>{formdata.Awardname}</td>
             <td>{formdata.Gift}</td>
             <td>{formdata.Awarddate}</td> 
                  
           </tr>
         ))}
       </tbody>
     </table>
    
          <button className='btn btn-danger w-25 bt2' onClick={handleClearLocalStorage2}>clear</button>
  </div>
   </div>
 );
  
}
export default Award_list;