import React from 'react'
import back from '../images/ArrowUUpLeft.png'
import note from '../images/Vector.png'

function Menu({setValue}) {
    return (
        <div className='w-[75px] md:w-[82px] h-[910px] bg-white'>
            <div onClick={()=>setValue(1)} className='bg-blue-600 w-100 h-[58px]'>
                <img src={back} alt="" className='ml-6 pt-2'/>
                <p className=' text-xs md:text-sm text-white'>Back to Jobs</p>
            </div>
            <hr />
            <div className=' w-100 h-[78px] bg-white'>
                <img src={note} alt="" className='ml-6 pt-4'/>
                <p className='text-xs md:text-sm text-black ml-4 pt-1'>Notes</p>
            </div>
            <hr />
            <div className=' w-100 h-[58px] bg-slate-200'>
                <img src={note} alt="" className='ml-6 pt-3'/>
                <p className='text-xs md:text-sm text-black ml-4 pt-1'>Take off</p>
            </div>
            <hr />
            <div className=' w-100 h-[58px] bg-white'>
                <img src={note} alt="" className='ml-6 pt-3'/>
                <p className='text-xs md:text-sm text-black ml-4 pt-1'>Extension</p>
            </div>
            <hr />
            <div className=' w-100 h-[58px] bg-white'>
                <img src={note} alt="" className='ml-6 pt-3'/>
                <p className='text-xs md:text-sm text-black ml-5 pt-1'>DiLb</p>
            </div>
            <hr />
            <div className=' w-100 h-[58px] bg-white'>
                <img src={note} alt="" className='ml-6 pt-3'/>
                <p className='text-xs md:text-sm text-black ml-5 pt-1'>IncLb</p>
            </div>
            <hr />
            <div className=' w-100 h-[58px] bg-white'>
                <img src={note} alt="" className='ml-6 pt-3'/>
                <p className='text-xs md:text-sm text-black ml-5 pt-1'>LbFac</p>
            </div>
            <hr />
            <div className=' w-100 h-[58px] bg-white'>
                <img src={note} alt="" className='ml-6 pt-3'/>
                <p className='text-xs md:text-sm text-black ml-5 pt-1'>LbEsc</p>
            </div>
            <hr />
            <div className=' w-100 h-[58px] bg-white'>
                <img src={note} alt="" className='ml-6 pt-3'/>
                <p className='text-xs md:text-sm text-black ml-5 pt-1'>IndLb</p>
            </div>
            <hr />
            <div className=' w-100 h-[58px] bg-white'>
                <img src={note} alt="" className='ml-6 pt-3'/>
                <p className='text-xs md:text-sm text-black ml-5 pt-1'>Sbcon</p>
            </div>
            <hr />
            <div className=' w-100 h-[58px] bg-white'>
                <img src={note} alt="" className='ml-6 pt-3'/>
                <p className='text-xs md:text-sm text-black ml-5 pt-1'>Gen Exp</p>
            </div>
            <hr />
            <div className=' w-100 h-[58px] bg-white'>
                <img src={note} alt="" className='ml-6 pt-3'/>
                <p className='text-xs md:text-sm text-black ml-5 pt-1'>Qt Mat</p>
            </div>
            <hr />
            <div className=' w-100 h-[58px] bg-white'>
                <img src={note} alt="" className='ml-6 pt-3'/>
                <p className='text-xs md:text-sm text-black ml-5 pt-1'>Brk Dwn</p>
            </div>
            <hr />
            <div className=' w-100 h-[58px] bg-white'>
                <img src={note} alt="" className='ml-6 pt-3'/>
                <p className='text-xs md:text-sm text-black ml-5 pt-1'>DiLb</p>
            </div>
        </div>
    )
}

export default Menu