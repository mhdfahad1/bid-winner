import React from 'react'
import './Jobs.css'

function Jobs() {
    return (
        <div>
            <div className='flex justify-between pt-7'>
                <h2 className='text-xl mt-1 ml-2 font-bold'>Job</h2>
                <div className='flex justify-between'>
                    <h1 className='mt-2'>Quote Status</h1>
                    <select className='btn btn-success'>
                        <option value="Accepted" selected hidden>Accepted</option>
                    </select>
                </div>

            </div>
            <div className='w-[600px] h-[206px] bg-white mt-7 pl-4 rounded'>
                <div className='flex justify-between'>
                    <div>
                        <div className='flex justify-between'>
                            <p className='brightness-200'>Job Name</p>
                            <p className='font-semibold'>Test Project 1</p>
                        </div>
                        <div className='flex justify-between mt-6'>
                            <p className='brightness-200'>Job Number</p>
                            <p className='font-semibold'>#ABV3265413</p>
                        </div>
                        <div className='flex justify-between mt-6'>
                            <p className='brightness-200'>Unit</p>
                            <div className='w-[150px] h-[28px] bg-white rounded-xl border flex p-1'>
                                <div className='w-[80px] bg-blue-600 h-[100%] rounded-xl text-sm  text-center text-white'>Metric</div>
                                <div className='w-[50px] h-[100%] rounded-xl text-sm text-center '>Us</div>

                            </div>
                        </div>
                        <div className='flex justify-between mt-6'>
                            <p className='brightness-200'>Diffivulty Level</p>
                            <select className='w-[150px] border ml-7' name="" id="">
                                <option value="High" selected>High</option>
                            </select>
                        </div>
                    </div>
                    <div className='p-2'>
                        <button className='w-[140px] rounded h-[30px] text-sm bg-blue-700 text-white shadow mt-2 mb-9'>Job Details</button><br />
                        <button className='w-[140px] rounded h-[30px] text-sm bg-blue-700 text-white shadow mb-8'>Button 2</button><br />
                        <button className='w-[140px] rounded h-[30px] text-sm text-blue-700 shadow border'>Button 3</button>
                    </div>
                </div>

            </div>

            <div className='pt-6 flex'>
                <input type="text" placeholder='Search Projects' className='w-[250px] p-2 rounded-xl' />
                <p className='text-sm brightness-200 ml-12 pt-2'>Sort by</p>
                <select name="" id="" className='text-black w-[100px] h-[30px] p-1 rounded ml-2'>
                    <option value="Name" selected hidden>Name</option>

                </select>
                <button className='ml-2 w-[140px] rounded h-[30px] text-sm bg-white shadow border text-blue-700'>import<i class="fa-solid fa-arrow-down ml-2"></i></button>
            </div>

            <div className='w-[600px] h-[500px] bg-white mt-7 pl-3 rounded'>
                <table style={{width:'100%'}}>
                    <thead>
                        <tr>
                            <th className='brightness-200 font-medium' >Sl No</th>
                            <th className='brightness-200 font-medium'>Assembly Name</th>
                            <th className='brightness-200 font-medium'>Length</th>
                            <th className='brightness-200 font-medium'>Quantity</th>
                        </tr>
                    </thead>
                    <tbody className=' border-b'>
                        <tr>
                            <td>1</td>
                            <td>2"x"4 Drop-in T-Bar (1/2" Flex)</td>
                            <td className='text-blue-600'>100 M</td>
                            <td className='text-blue-600'>- <i class="fa-solid fa-trash ml-10"></i></td>
                        </tr>
                    </tbody>
                </table>

            </div>
        </div>
    )
}

export default Jobs