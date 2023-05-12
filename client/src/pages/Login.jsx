import React, { useEffect, useState } from 'react'
import { announce } from '../images'
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios"




function Login() {
  const history = useNavigate();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function submit(e) {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/signup", {  
        email, password
      })
        .then(res => {
          if (res.data == "exists") {
            history("/home")
          }
          else if (res.data == "not exists") {
            alert("User have not sign up")
          }
        })
        .catch(err => {
          alert("something is wrong")
          console.log(err);
        })
    }
    catch (err) {
      console.log(err);
    }
  }
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <Link to="/"><img
          className="absolute mx-auto h-10 w-auto left-5 cursor-pointer"
          src={announce}
          alt="Your Company"
        />
        </Link>
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" method="POST">
          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                onChange={(e) => { setEmail(e.target.value) }} placeholder='Email'
                autoComplete="email"
                value={email}
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password"  className="block text-sm font-medium leading-6 text-gray-900">
                Password
              </label>
              <div className="text-sm">
                <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                  Forgot password?
                </a>
              </div>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                onChange={(e) => { setPassword(e.target.value) }} placeholder='Password'
                autoComplete="current-password"
                value={password}
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              onClick={submit}
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign in
            </button>
          </div>
        </form>
        <p class="text-sm font-light">
          Don't have an account? <a href="/signup" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up here</a>
        </p>

      </div>
    </div>
  )
}

export default Login

