import React from 'react'


const Card = (props) => {
  return (
    
      <div class="relative flex h-96 p-3 flex-col rounded-xl bg-gray-300 bg-clip-border text-gray-700 shadow-lg">
        <div class="relative mx-4 mt-4 h-96 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
          <img
            src={props.imageUrl}
            class="h-full w-full object-cover"
            alt=''
          />
        </div>
        <div class="p-6">
          <div class="mb-2 flex items-center justify-between">
            <p class="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
              {props.name}
            </p>
            <p class="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
               {props.price} $
            </p>
          </div>
          <p class="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">
            {props.description}
          </p>
        </div>
        <div class="pt-0">
          <button
            class="block w-full select-none rounded-lg bg-blue-gray-900/10 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            Consulter
          </button>
        </div>
      </div>
    

  )
}

export default Card

//"https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=927&amp;q=80"
