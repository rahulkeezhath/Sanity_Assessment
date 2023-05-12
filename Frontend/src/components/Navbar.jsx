import React from 'react'
import {BsSearch} from 'react-icons/bs'


function Navbar() {
  return (
    <div>
      <nav class="bg-white dark:bg-white fixed w-full z-20 top-0 left-0">
        <div className="bg-black h-12">
          <h1 className="text-white text-center pt-2.5">
            Introducing Visual Editing - Join CTOs from Sanity and Vercel Live <span style={{color:'red'}}>&#8594;</span>
          </h1>
        </div>
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="#" class="flex items-center mr-11">
            <img
              src="https://cdn.worldvectorlogo.com/logos/sanity.svg"
              class="h-8"
              alt="Flowbite Logo"
            />
            <span class="self-center font-medium whitespace-nowrap dark:text-black ms-4">
              Product
            </span>
            <span class="self-center font-medium whitespace-nowrap dark:text-black ms-4">
              Solutions
            </span>
            <span class="self-center  font-medium whitespace-nowrap dark:text-black ms-4">
              Developers
            </span>
            <span class="self-center font-medium whitespace-nowrap dark:text-black ms-4">
              Resources
            </span>
            <span class="self-center font-medium whitespace-nowrap dark:text-black ms-4">
              Enterprise
            </span>
            <span class="self-center font-medium whitespace-nowrap dark:text-black ms-4">
              Pricing
            </span>
          </a>
          <div class="flex md:order-2">
            <div className="text-center mt-3 mr-4">
              <BsSearch />
            </div>
            <button
              type="button"
              class="text-black  hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm px-4 py-2 text-center mr-2 md:mr-2"
            >
              Log in
            </button>
            <button
              type="button"
              class="text-black  hover:bg-red-100 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm px-4 py-2 text-center mr-2 md:mr-2 border-red-300 border"
            >
              Contact Sales
            </button>
            <button
              type="button"
              class="text-white bg-black hover:text-green-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm px-4 py-2 text-center mr-3 md:mr-0"
            >
              Get started
            </button>
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span class="sr-only">Open main menu</span>
              <svg
                class="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar