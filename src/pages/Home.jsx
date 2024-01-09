import React from 'react'
import Header from '../components/Header'
import Categories from '../components/Categories'
import Jobs from '../components/Jobs'

function Home() {
    return (
        <div>
            <Header />
            <div className='w-100 row bg-slate-200'>
                <div className="col-lg-6 "><Categories /></div>
                <div className="col-lg-6 "><Jobs/></div>
            </div>
        </div>
    )
}

export default Home