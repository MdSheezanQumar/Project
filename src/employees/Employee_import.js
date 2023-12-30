
function  Employee_import(){


    return(
       <div className="container-fluid">
        <div className="row" >
                 <form className="formlabel m-5 w-75 form1" >
                  <div className="px-3 py-5">
                    <label> Date<span className='text-danger'>*</span></label>
                    <input type='date' className='mb-3 empimport  w-25'/>
                    <label>Attach Excel<span className='text-danger'>*</span></label>
                     <input className="w-50" type="file"/><br/><br/>
                      <p>Sample file format&nbsp;<span className="text-danger"><i class="fa fa-download" aria-hidden="true"></i> click here</span></p>
                      <button className="btn btn-secondary mt-2 mr-2 mx-1">Cancel</button>
                      <button className="btn btn-warning mt-2 mr-2 mx-1" >Reset</button>
                      <button className="btn btn-dark mt-2 mr-2 mx-1">Import</button>
                      </div>
                 </form>

        </div>
       </div>
    )

}


export default Employee_import;