import React, {useState} from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function Contact() {
    const navigate = useNavigate();
    const [userName, setUserName] = useState("")
    const [userEmail, setUserEmail] = useState("")
    const [userMessage, setUserMessage] = useState("")
    async function submit(e) {
        e.preventDefault();
    
        try {
          await axios.post("http://localhost:5000/contact", {
            userName, userEmail, userMessage
          })
            .then(
              alert("Your message has been sent successfully"),
              navigate("/home")
            )
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
        <div className='w-screen overflow-x-hidden'>
            <Header/>
            <div className='relative left-28 p-8'>
                <h1 className='flex justify-center font-titleFont text-black-700 text-xl font-bold mb-2'>Contact</h1>
                <form className="inline-block w-full max-w-lg" action='POST' method='POST'>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                                Username
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="name" name='userName' type="text" onChange={(e) => { setUserName(e.target.value) }} />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                                E-mail
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" name='userEmail' type="email" onChange={(e) => { setUserEmail(e.target.value) }} />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                                Message
                            </label>
                            <textarea className=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none" id="message" name='userMessage' onChange={(e) => { setUserMessage(e.target.value) }}></textarea>
                        </div>
                    </div>
                    <div className="md:flex md:items-center">
                        <div className="md:w-1/3">
                            <button className="shadow bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit" onClick={submit}>
                                Send
                            </button>
                        </div>
                        <div className="md:w-2/3"></div>
                    </div>
                </form>
            </div>
            <Footer/>
        </div>
    )
}

export default Contact
