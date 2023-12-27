
function Manual_punching(){
  // Retrieve all user data from the centralized array
  const allUserDataArray1 = JSON.parse(localStorage.getItem('allUserData1')) || [];
 
  if (allUserDataArray1.length === 0) {
    return <div className='cl1 py-5' style={{textAlign:'center'}}>No data found for any user.</div>;
  }
 
   const handleClearLocalStorage3 = () => {
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
            <th>PunchDate</th>
            <th>InTime</th>
            <th>OutTime</th>
          
          </tr>
        </thead>
        <tbody>
          {allUserDataArray1.map(({ userKey1, formdata }, index) => (
            <tr key={index}>
              
              
              <td className="px-2">{formdata.EmpName}</td>
              <td>{formdata.EmpCode}</td>
              <td>{formdata.Cardno}</td>
              <td>{formdata.PunchDate}</td>
              <td>{formdata.InTime}</td>
              <td>{formdata.OutTime}</td>
              
              
              
             
                   
            </tr>
          ))}
        </tbody>
      </table>
      <button className='btn btn-danger bt1 w-25' onClick={handleClearLocalStorage3}>clear</button>
    </div>
    </div>
  );
 }
 
 export default Manual_punching;