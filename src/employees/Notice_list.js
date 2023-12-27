
function  Notice_list(){


    return(
       <div className="container-fluid py-4 px-4">
        <div className="row">
        
                <h3 style={{textAlign:'center'}}>Notice List</h3>
                <div className="row py-4 px-3">
               
                <table className="table table-sm border tab3 " > 
                    <thead style={{textAlign:'center'}}>
                        <th className="px-2">sno</th>
                    <th>Title</th>
                    <th>description</th>
                    <th className="px-2">status</th>
                    <th>created on</th>
                    </thead>
                    <tr>
                        <td className="px-2">1</td>
                        <td>company invocation award function</td>
                        <td ><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                            ut labore et dolore magna aliqua. Duis convallis convallis tellus id interdum velit laoreet id donec.
                             Volutpat consequat mauris nunc congue nisi. Erat nam at lectus urna duis convallis co. Diam
                              phasellus vestibulum lorem sed risus. Purus in massa tempor nec feugiat nisl pretium fusce id.</p></td>
                              <td>active</td>
                              <td>2021/08/31</td>
                    </tr>
                    <tr>
                        <td className="px-2">2</td>
                        <td>Attention: WFH User Attendance verification</td>
                        <td ><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                            ut labore et dolore magna aliqua. Duis convallis convallis tellus id interdum velit laoreet id donec.
                             Volutpat consequat mauris nunc congue nisi. Erat nam at lectus urna duis convallis co. Diam
                              phasellus vestibulum lorem sed risus. Purus in massa tempor nec feugiat nisl pretium fusce id.</p></td>
                              <td>active</td>
                              <td>2021/04/18</td>         
                    </tr>
                </table>

                </div>

            </div>

  

       </div>
    )

}


export default Notice_list;