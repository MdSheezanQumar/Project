
function Payslip(){

    return(
        <div className="container-fluid py-5">
            <div className="d-flex row m-4 p-3 ver2">
                <div className="col-sm-2 text-center">
                    <div className="text-start"><label className="mb-2">Year</label></div>
                    <select className="w-100" >
                    <option value="2002">2015</option>
                    <option value="2003">2016</option>
                    <option value="2004">2017</option>
                    <option value="2005">2018</option>
                    <option value="2006">2019</option>
                    <option value="2007">2020</option>
                    <option value="2008">2021</option>
                    <option value="2009">2022</option>
                    <option value="2010">2023</option>
                </select>
                </div>
                <div  className="col-sm-3 text-center">
                <div className="text-start"><label className="mb-2">Month Upto</label></div>
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
                    <option value="July">October</option>
                    <option value="August">November</option>
                    <option value="September">December</option>
                </select>
                </div>
                <div  className="col-sm-3 text-center">
                <div className="text-start"><label className="mb-2">Employee</label></div>
                <select className="w-100 " >
                     <option value="IPTS">123-Sheezan</option>
                     <option value="TCS">124-Verababbu</option>
                     <option value="HP">125-Shadan</option>
                     <option value="WIPRO">126-Ayan</option>
                </select>
                </div>
                <div className="col-sm-4 d-flex align-self-end">
                    <button className="btn btn-sm btn-dark m-2">Filter</button>
                    <button className="btn btn-secondary m-1"><i class="fa fa-file-pdf-o px-1" aria-hidden="true"/>PDF</button>
                    <button btn className="btn btn-secondary m-1"><i class="fa fa-print px-1" aria-hidden="true"/>Print</button>
                </div>
                <h5 className="text-danger m-3">Please Select the Employee..!</h5>
            </div>
        </div>
    )

}

export default Payslip