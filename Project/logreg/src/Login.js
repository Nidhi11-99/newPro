import { Link } from 'react-router-dom'
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css'
 
function Login() {
    return (
        <>
            <div><br></br>
            <center><i><h3> Login Here!</h3></i></center>
            <div className="container" >
                <div className="row" style={{ justifyContent: 'center'}}>
                    <div className="col-mg-6">
                        <img src="https://cdn-icons-png.flaticon.com/512/10892/10892514.png" alt=''style={{height:'80px', width:'80px', marginLeft:'600px', marginTop:'20px'}}/>
                    <div className="card" style={{width:'450px' , marginLeft:'420px', borderRadius:'50px', height:'450px', marginTop:'20px', boxShadow:'5px 5px 5px', marginBottom:'30px'}}>
                            <div className="card-body bg-secondary bg-gradient" style={{borderRadius:"52px"}} >
                                <div className="col-lg-12 mt-5 mb-5">
                                    <input type="text" name="name" className="form-control" placeholder="Enter Your Name" />
                                </div>
                                <div className="col-lg-12 mt-5 mb-5">
                                    <input type="number" name="name" className="form-control" placeholder="Enter Your Roll.No" />
                                </div>
                                <div className="col-lg-12 mt-5 mb-5">
                                    <input type="password" name="name" className="form-control" placeholder="Enter Your Password"/>
                                </div>
                                <div className="col-lg-12 mt-5 mb-5 t3" style={{backgroundColor:'rgb(69, 65, 65)'}}>
                                    <input type="submit" name="name" className="form-control btn" />
                                </div>
                                <p style={{marginLeft:"250px"}}><b>New User..</b><Link to='/register' style={{color:'black' , textDecoration:'none'}}>Register</Link></p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        </>
    )
}

export default Login