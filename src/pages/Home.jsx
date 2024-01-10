import React from 'react'
import Header from '../components/Header'
import Categories from '../components/Categories'
import Jobs from '../components/Jobs'
import './Home.css'
function Home() {
    return (
        <div>
            <Header />
            <div className='w-100 md:flex bg-slate-200'>
                <div className="col-lg-6 firstside"><Categories /></div>
                <div className="col-lg-6 md:-ml-5"><Jobs/></div>
            </div>
        </div>
    )
}

export default Home