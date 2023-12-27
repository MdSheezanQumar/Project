

function Attendance_verification(){
    return( 
        
        <div className='container-fluid'>
            <div className="d-flex row m-5 p-3 ver1">
                <div className="col-sm-3 text-center">
                    <div className="text-start"><label className="mb-2">Year</label></div>
                    <select className="w-100" >
                            <option value="2002">2016</option>
                            <option value="2003">2017</option>
                            <option value="2004">2018</option>
                            <option value="2005">2019</option>
                            <option value="2006">2020</option>
                            <option value="2007">2021</option>
                            <option value="2008">2022</option>
                            <option value="2009">2023</option>
                </select>
                </div>
                <div  className="col-sm-3 text-center">
                <div className="text-start"><label className="mb-2">Month</label></div>
                <select className="w-100" >
                    <option value="January">January</option>
                    <option value="February">February</option>
                    <option value="March">March</option>
                    <option value="April">April</option>
                    <option value="May">May</option>
                    <option value="June">June</option>
                    <option value="July">July</option>
                    <option value="August">August</option>
                    <option value="September">September</option>
                </select>
                </div>
                <div  className="col-sm-3 text-center">
                <div className="text-start"><label className="mb-2">Select company</label></div>
                <select className="w-100 " >
                     <option value="IPTS">IPTS TECH INFO PVT LTD</option>
                     <option value="TCS">TCS</option>
                     <option value="HP">HP</option>
                     <option value="WIPRO">WIPRO</option>
                </select>
                </div>
                <div className="col-sm-3 d-flex align-self-end">
                    <button className="btn btn-sm btn-dark">Filter</button>
                </div>
                <h5 className='text-danger m-4'>Sorry, not generated, Please select Company Related Employee Details..!!</h5>
            </div>
        </div>
    )
 }

 export default Attendance_verification;