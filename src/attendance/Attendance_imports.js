
function Attendance_imports(){
    return( 
       <div className='container-fluid'>
        <div className='row '>
            <form className="formlabel m-5 w-75 form2">
            <div className="px-3 py-5">
            <label> Year<span className='text-danger'>*</span></label>
            <select className='w-75' >
                    <option value="2002">2015</option>
                    <option value="2003">2016</option>
                    <option value="2004">2017</option>
                    <option value="2005">2018</option>
                    <option value="2006">2019</option>
                    <option value="2007">2020</option>
                    <option value="2008">2021</option>
                    <option value="2009">2022</option>
                    <option value="2010">2023</option>
            </select><br/><br/>
            <label>Month<span className='text-danger'>*</span></label>
            <select className='w-75'>
                    <option value="January">January</option>
                    <option value="February">February</option>
                    <option value="March">March</option>
                    <option value="April">April</option>
                    <option value="May">May</option>
                    <option value="June">June</option>
                    <option value="July">July</option>
                    <option value="August">August</option>
                    <option value="September">September</option>
                    <option value="July">October</option>
                    <option value="August">November</option>
                    <option value="September">December</option>

            </select><br/><br/>
            <label>Company Name<span className='text-danger'>*</span></label>
            <select className='w-75'>
                <option value="IPTS">IPTS TECH INFO PVT LTD</option>
                <option value="TCS">TCS</option>
                <option value="HP">HP</option>
                <option value="WIPRO">WIPRO</option>
            </select><br/><br/>
            <label>Attach Excel<span className='text-danger'>*</span></label>
            <input className="w-50" type="file"/><br/><br/>
            <p>Sample file format&nbsp;<span className="text-danger" ><i class="fa fa-download" aria-hidden="true"></i> click here</span></p>

            </div>

            </form>

        </div>

       </div>
    )
 }

 export default Attendance_imports;