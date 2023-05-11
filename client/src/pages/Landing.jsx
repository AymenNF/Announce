import React from 'react'
import {announce} from "../images";
import { Link } from 'react-router-dom';
 
function Landing() {
  return (
    <div className="w-full h-20  font-titleFont sticky top-0 z-50">
      <div className="max-w-screen-xl h-full mx-auto flex items-center justify-between">
        <img className="w-28" src={announce} alt="" />
        <div className="actions">
          <button className="SignUp hover:scale-125"><Link to="/signup">Sign Up</Link></button>
          <button className="SignIn hover:scale-125"><Link to="/signin">Sign In</Link></button>
        </div>
      </div>
      <div className="landing CTA">
        <h1 className="text-3xl">Sell Whatever, Whenever</h1>
        <p class="pt-4">
          We provide secure experience to all our customers<br></br>
          (sellers and buyers), Our service is appreciated<br></br> all over the
          world.
        </p>
        <button className="cta flex justify-center items-center  mt-4 bg-[#60a5fa] ">
          <Link to="/signup">Try it now!</Link>
        </button>
      </div>
    </div>
  )
}

export default Landing
