import { useNavigate } from 'react-router-dom'
import Image from './Image.jpg'
import Image2 from './Image2.jpeg'

function Login(){
  document.body.style.overflow='hidden';

    const nav=useNavigate();
    function submit(){
        nav('/dashboard')
    }
    

    return (
        <div className='container-fluid log' >
            <div className='row g-0' >
                <div className='col-sm-6' style={{marginRight:0}} >
                    <img src={Image} className='one ' ></img>
                </div>
                 <div className='col-sm-6' >
                    
                  <div className='row'>
                    <div className='col-sm-6  py-4 ' style={{marginTop:80}}>
                
                    <form className='shadow-lg p-3 mb-5 bg-white rounded py-4 '> 
                    <img src={Image2} className='two'></img>
             <div  className='my-5  '>
                    
                  <h3 style={{marginLeft:'30%'}}>Login</h3>
                
        <input type="email" className=" form-control  rounded-pill" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/><br/>
        <input type="password" className=" form-control rounded-pill" id="exampleInputPassword1" placeholder="Password" /><br/>
         
        <button type="submit" className="btn btn-success loginbutton"  onClick={submit}>Submit</button>
      </div>
      
        </form>

                    </div>

                  </div>

                    </div>

                </div>

              </div>

           
        
    )

}

export default Login;