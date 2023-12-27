
function Employee_loan(){
    // Retrieve all user data from the centralized array
    const allUserDataArray2 = JSON.parse(localStorage.getItem('allUserData2')) || [];
   
    if (allUserDataArray2.length === 0) {
      return <div className='cl1 py-5' style={{textAlign:'center'}}>No data found for any user.</div>;
    }
   
     const handleClearLocalStorage5 = () => {
       localStorage.clear();
       alert('Local storage cleared.');
     };
   
    return (
      <div className='container-fluid py-5'>
        <h2 style={{textAlign:'center'}}>Salary Process</h2>
        <div className='row mx-4 my-5'>
        <table className='table table-sm border tab1'>
          <thead>
            <tr>
              <th className="px-2">EmpName</th>
              <th>EmpCode</th>
              <th>CardNo</th>
              <th>LoanName</th>
              <th>Amount</th>
              <th>IntRate</th>
              <th>EmiPay</th>
              <th>LoanDate</th>
              <th>LoanType</th>
              <th>LoanStatus</th>
            
            </tr>
          </thead>
          <tbody>
            {allUserDataArray2.map(({ userKey2, formdata }, index) => (
              <tr key={index}>
                
                
                <td className="px-2">{formdata.Empname}</td>
                <td>{formdata.Empcode}</td>
                <td>{formdata.cardno}</td>
                <td>{formdata.loanName}</td>
                <td>{formdata.amount}</td>
                <td>{formdata.intRate}</td>
                <td>{formdata.emiPay}</td>
                <td>{formdata.loanDate}</td>
                <td>{formdata.loanType}</td>
                <td>{formdata.loanStatus}</td>
                
                
                
               
                     
              </tr>
            ))}
          </tbody>
        </table>
        <button className='btn btn-danger bt1 w-25' onClick={handleClearLocalStorage5}>clear</button>
      </div>
      </div>
    );
   }
   
   export default Employee_loan;