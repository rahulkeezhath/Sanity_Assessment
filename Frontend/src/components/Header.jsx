import React from 'react'

function Header() {
  return (
    <div className="mt-52">
      <h1 class="mb-12 text-center text-7xl font-bold leading-5 tracking-tight text-black md:text-7xl lg:text-7xl dark:text-black mt-20">
        The Composable <br />
        Content Cloud
      </h1>
      <p class="mb-6 text-center text-5xl font-normal text-gray-500 lg:text-2xl sm:px-16 xl:px-48 dark:text-gray-500">
        Build remarkable experiences at scale. Sanity is a <br />
        customizable solution that treats content as data to power <br />
        your digital business.
      </p>
      <div className="text-center mt-12">
        <button
          type="button"
          class="text-white  mr-4 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-sm text-xl px-6 py-3.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Start Building
        </button>
        <button
          type="button"
          class="text-gray-600 bg-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-sm text-xl px-6 py-3.5 text-center dark:bg-white dark:hover:bg-gray-100 dark:focus:ring-white border-gray-300 border"
        >
          Contact Sales
        </button>
      </div>
    </div>
  );
}

export default Header