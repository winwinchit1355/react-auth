
import 'bootstrap/dist/css/bootstrap.css';
import { environment } from '../../../environment';
import './App.css';
import {useForm} from 'react-hook-form';
import { useState } from 'react';
import { apiCall } from '../../../service/apiService';
import { useNavigate } from 'react-router';
const Login = () => {
    const [showPassword,setShowPassword] = useState(true);
    const navigate=useNavigate();
    const {register,handleSubmit, watch, formState: { errors } } = useForm();
    const toggleShowPassword=()=>{
        setShowPassword(!showPassword);
    }
    const onSubmit=async(d)=>{
        console.log(d.email);
        const url=environment.API+'user/login';
        const data={
            'email':d.email,
            'password':d.password
            };
        const response=await apiCall(url,"post",data);
        const accessToken=response.data.access_token;
        const tokenType=response.data.token_type;
        navigate("/");
    }
    return ( 
        <section className='' >
            <div className="row h-100 d-flex justify-content-center align-items-center">
                <div className="col col-xl-10">
                    <div className="card rounded-0">
                        <div className="row g-0">
                            <div className="col-md-6 col-lg-5 d-none d-md-block  m-auto">
                                <img src={`${environment.URL}/src/assets/login.jpg`} alt="" className='img-fluid' />
                            </div>
                            {/* end col */}
                            <div className="col-md-6 col-lg-7 ">
                                <div className="card-body p-2 p-lg-3 text-black">
                                    <form className='text-start' onSubmit={handleSubmit(onSubmit)}>
                                        <div className=" mb-3 pb-1">
                                            <i className='fas fa-cubes fa-2x me-3'></i>
                                            <span className='h3 fw-bold mb-0'>Logo</span>
                                        </div>
                                        <h5 className="fw-normal mb-3 pb-3 text-start" style={{letterSpacing: '1px'}}>Sign into your account</h5>
                                        <div className='form-outline mb-4'>
                                            <input type="email" className='form-control'  placeholder='Email Address' {...register("email",{ required: true })} />
                                            {errors.email && <span className="text-danger">Email is required</span>}
                                        </div>
                                        <div className='form-outline mb-2'>
                                            <input type={showPassword?'password':'text'} className='form-control'  placeholder='Password' {...register("password",{ required: true })} />
                                            {errors.password && <span className="text-danger">Password is required</span>}
                                        </div>
                                        <div className="custom-control custom-checkbox mb-2 text-end">
                                            <input type="checkbox" className="custom-control-input" id="show_password" />
                                            <label className="custom-control-label" style={{paddingLeft:'5px'}} htmlFor="show_password" onClick={toggleShowPassword}> Show Password</label>
                                        </div>
                                        <div className='form-outline mb-4'>
                                            <button type="submit" className='btn btn-dark btn-lg btn-block rounded-0 w-100 small'>Login</button>
                                        </div>
                                        
                                        <a href="#!" className="small text-muted d-block " >Forget Password?</a>
                                        <p className="mb-5 pb-lg-2" style={{color: '#393f81'}} >Don&apos;t have an account? <a href="/register"
                                        style={{color: '#393f81'}}>Register here</a></p>
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
 
export default Login;