import React from 'react'
import Sidebar from '../components/Sidebar.jsx'
import Banner from '../components/Banner.jsx'
import Product from '../components/Product.jsx'

function Home() {
  return (
    <div className='hidden md:flex max-w-[1500px] mx-auto w-full mt-4 gap-4'>
            <aside className="w-80 p-4 shrink-0 hidden md:block">
              <Sidebar />
            </aside>
            <main className='flex-1 p-4'>
              <Banner />
              <Product />
            </main>
       </div>
  )
}

export default Home