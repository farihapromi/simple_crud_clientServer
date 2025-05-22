import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';

const Login = () => {
  const navigate=useNavigate()
   const {signInUser}=useContext(AuthContext)

  const handleLogin=e=>{
    e.preventDefault()
    const email=e.target.email.value;
    const password=e.target.password.value
    signInUser(email,password)
    .then(result=>{
      console.log(result.user)
      e.target.reset()
      navigate('/')
    })
    .catch(error=>console.log(error))
  }
  return (
    <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col ">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
     
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form className="card-body" onSubmit={handleLogin}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name='email'
           className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered"
          name="password"
           required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button  
   
          className="btn btn-primary rounded-lg">Login</button>
        </div>
      </form>
      <p className="mb-4 ml-4">
        Don't have an account?
        <Link className='p-2 m-2 bg-blue-500 rounded-lg' to='/signup'>SignUp</Link>
      </p>
    </div>
  </div>
</div>
  )
}

export default Login
