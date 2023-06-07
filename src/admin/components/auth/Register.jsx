
import 'bootstrap/dist/css/bootstrap.css';
const Register = () => {
    return ( 
        <section className='' style={{background:'#9A616D'}}>
            <div className="row  h-100 d-flex justify-content-center align-items-center">
                <div className="col col-xl-10">
                    <div className="card rounded-0">
                        <div className="row g-0">
                            <div className="col-md-6 col-lg-5 d-none d-md-block  m-auto">
                                <img src="../../../src/assets/login.jpg" alt="" className='img-fluid' />
                            </div>
                            {/* end col */}
                            <div className="col-md-6 col-lg-7  ">
                                <div className="card-body p-2 p-lg-3  text-black">
                                    <form className='text-start'>
                                        <div className="  mb-3 pb-1">
                                            <i className='fas fa-cubes fa-2x me-3'></i>
                                            <span className='h3 fw-bold mb-0'>Logo</span>
                                        </div>
                                        <h5 className="fw-normal mb-3 pb-3 text-start" style={{letterSpacing: '1px'}}>Create an account</h5>
                                        <div className='form-outline mb-4'>
                                            <input type="text" className='form-control'  placeholder='Username' />
                                        </div>
                                        <div className='form-outline mb-4'>
                                            <input type="text" className='form-control'  placeholder='Email Address' />
                                        </div>
                                        <div className='form-outline mb-4'>
                                            <input type="password" className='form-control'  placeholder='Password' />
                                        </div>
                                        <div className='form-outline mb-4'>
                                            <input type="submit" className='btn btn-dark btn-lg btn-block form-control rounded-0'  placeholder='Password' />
                                        </div>
                                        <p className="mb-5 pb-lg-2" style={{color: '#393f81'}} >Already have an account? <a href="/login"
                                        style={{color: '#393f81'}}>Login here</a></p>
                                    </form>
                                </div>
                                {/* end card */}
                            </div>
                            {/* end col  */}
                        </div>
                        {/* end row */}
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default Register;