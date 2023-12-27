
function Leave_application(){
  // Retrieve all user data from the centralized array
  const allUserDataArray1 = JSON.parse(localStorage.getItem('allUserData1')) || [];
 
  if (allUserDataArray1.length === 0) {
    return <div className='cl1 py-5' style={{textAlign:'center'}}>No data found for any user.</div>;
  }
 
   const handleClearLocalStorage4 = () => {
     localStorage.clear();
     alert('Local storage cleared.');
   };
 
  return (
    <div className='container-fluid py-5'>
      <h2 style={{textAlign:'center'}}>Manual punching List</h2>
      <div className='row mx-4 my-5'>
      <table className='table table-sm border tab1'>
        <thead>
          <tr>
           <th className="px-2">EmpName</th>
           <th>EmpCode</th>
           <th>CardNo</th>
           <th>Department</th>
           <th>FromDate</th>
           <th>ToDate</th>
           <th>NoDaysLeave</th>
           <th>LeaveType</th>
           <th>LeaveStatus</th>
          
          </tr>
        </thead>
        <tbody>
          {allUserDataArray1.map(({ userKey1, formdata }, index) => (
            <tr key={index}>
              
              
              <td className="px-2">{formdata.EmpName}</td>
             <td>{formdata.EmpCode}</td>
             <td>{formdata.Cardno}</td>
             <td>{formdata.Department}</td>
             <td>{formdata.FromDate}</td>
             <td>{formdata.ToDate}</td> 
             <td style={{textAlign:'center'}}>{formdata.NoDaysLeave}</td>
             <td>{formdata.LeaveType}</td> 
             <td>{formdata.LeaveStatus}</td>            
            </tr>
          ))}
        </tbody>
      </table>
      <button className='btn btn-danger bt1 w-25' onClick={handleClearLocalStorage4}>clear</button>
    </div>
    </div>
  );
 }
 
 export default Leave_application;