

function Employee_conveyance(){

    return(
        <div className="container-fluid">
            <div className="row">
                <form className="formlabel m-5 w-75 form3">
                    <div className="m-5">
                        <label>Year<span className="text-danger">*</span></label>
                        <select className="w-50">
                            <option value="2002">2016</option>
                            <option value="2003">2017</option>
                            <option value="2004">2018</option>
                            <option value="2005">2019</option>
                            <option value="2006">2020</option>
                            <option value="2007">2021</option>
                            <option value="2008">2022</option>
                            <option value="2009">2023</option>
                        </select><br/><br/>
                        <label>Employee Name<span className="text-danger">*</span></label>
                        <select className="w-50">
                           <option value="IPTS">123-Sheezan</option>
                           <option value="TCS">124-Verababbu</option>
                           <option value="HP">125-Shadan</option>
                           <option value="WIPRO">126-Ayan</option>
                        </select><br/><br/>
                        <label>Attach File<span className="text-danger">*</span></label>
                        <input className="w-50" type="file"/><br/><br/>

                        <button className="btn btn-secondary mt-2 mr-2 mx-1">Cancel</button>
                        <button className="btn btn-warning mt-2 mr-2 mx-1">Reset</button>
                        <button className="btn btn-dark mt-2 mr-2 mx-1">Upload</button>

                        

                    </div>
                </form>
            </div>
        </div>
    )

}

export default Employee_conveyance