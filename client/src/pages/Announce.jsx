import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import axios from "axios"

function Announce() {
    const navigate = useNavigate();
    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [imageUrl, setImageurl] = useState('')
    const [description, setDescription] = useState('')

    async function submit(e) {
        e.preventDefault();

        try {
            await axios.post("http://localhost:5000/announce", {
                name, price, imageUrl, description
            })
                .then(
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
        <div>
            <Header/>
            <h1 className='flex justify-center font-titleFont text-black-700 text-xl font-bold mb-2 p-2'>Announce</h1>
            <form class="relative left-28 w-full max-w-lg p-6">
                <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full px-3">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                            Product name
                        </label>
                        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" onChange={(e) => { setName(e.target.value) }} id="name" type="text" name='name' value={name} />
                        <p class="text-gray-600 text-xs italic">Required</p>
                    </div>
                </div>
                <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full px-3">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                            E-mail
                        </label>
                        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="email" name='email' />
                        <p class="text-gray-600 text-xs italic">Required</p>
                    </div>
                </div>
                <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full px-3">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                            Price
                        </label>
                        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="price" type="number" name='price' onChange={(e) => { setPrice(e.target.value) }} value={price} />
                        <p class="text-gray-600 text-xs italic">Required</p>
                    </div>
                </div>
                <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full px-3">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                            Image URL
                        </label>
                        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="imageUrl" name='imageUrl' type="text" onChange={(e) => { setImageurl(e.target.value) }} value={imageUrl} />
                        <p class="text-gray-600 text-xs italic">Required</p>
                    </div>
                </div>
                <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full px-3">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                            Description
                        </label>
                        <textarea class=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none" id="description" name='description' onChange={(e) => { setDescription(e.target.value) }} value={description}></textarea>
                    </div>
                    <p class="text-gray-600 text-xs italic">Optional</p>
                </div>
                <div class="md:flex md:items-center">
                    <div class="md:w-1/3">
                        <button class="shadow bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type='submit' onClick={submit}>
                            Announce
                        </button>
                    </div>
                    <div class="md:w-2/3"></div>
                </div>
            </form>
            <Footer/>
        </div>
    )
}

export default Announce
