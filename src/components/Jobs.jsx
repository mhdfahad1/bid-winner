import React, { useEffect, useState } from 'react'
import './Jobs.css'
import { deleteProjectAPI, getProjectsAPI } from '../services/allAPi'

function Jobs() {
    const [search, setSearch] = useState("")
    const [projects, setProjects] = useState([])
    const getProjects = async () => {
        const result = await getProjectsAPI(search)
        console.log(result);
        if (result.status === 200) {
            setProjects(result?.data)
        } else {
            alert(result?.response?.data)
        }

    }
    // delete project
    const deleteProject = async (item) => {
        const result = await deleteProjectAPI(item)
        if (result.status === 200) {
            alert('deleted successfully')
        } else {
            alert(result?.response?.data)
        }
    }
    useEffect(() => {
        getProjects()
    }, [projects])
    return (
        <div>
            <div className='md:flex md:justify-between md:pt-10 pt-5 md:p-0 p-4'>
                <h2 className='text-sm md:text-xl mt-1 ml-2 font-bold'>Job</h2>
                <div className='flex justify-between'>
                    <h1 className='mt-2 text-sm brightness-200 mr-4 mb-2'>Quote Status</h1>
                    <select className='bg-green-600 w-[150px] rounded-2xl text-sm pl-10 text-white'>
                        <option value="Accepted" selected hidden>Accepted</option>
                    </select>
                </div>

            </div>
            <div className='md:w-[630px] w-[380px] md:ml-0 ml-3 h-[206px] bg-white mt-7 pl-4 rounded'>
                <div className='flex justify-between'>
                    <div>
                        <div className='flex md:justify-between '>
                            <p className='brightness-200 text-xs md:text-base'>Job Name</p>
                            <p className='font-semibold text-xs md:text-base md:ml-0 ml-3'>Test Project 1</p>
                        </div>
                        <div className='flex md:justify-between mt-6'>
                            <p className='brightness-200 text-xs md:text-base'>Job Number</p>
                            <p className='font-semibold text-xs md:text-base md:ml-0 ml-3'>#ABV3265413</p>
                        </div>
                        <div className='flex md:justify-between mt-6'>
                            <p className='brightness-200 text-xs md:text-base'>Unit</p>
                            <div className='md:w-[150px] h-[28px] bg-white rounded-xl border flex p-1 md:ml-0 ml-3 '>
                                <div className='w-[80px] bg-blue-600 h-[100%] rounded-xl text-sm  text-center text-white'>Metric</div>
                                <div className='w-[50px] h-[100%] rounded-xl text-sm text-center '>Us</div>

                            </div>
                        </div>
                        <div className='flex justify-between mt-6'>
                            <p className='brightness-200 text-xs md:text-base'>Diffivulty Level</p>
                            <select className='md:w-[150px] w-[100px] border ml-3 md:ml-7' name="" id="">
                                <option value="High" selected>High</option>
                                <option value="Medium" >Medium</option>
                                <option value="Low" >Low</option>

                            </select>
                        </div>
                    </div>
                    <div className='p-2'>
                        <button className='md:w-[140px] w-[100px] rounded h-[30px] text-sm bg-blue-700 text-white shadow mt-2 mb-9'>Job Details</button><br />
                        <button className='md:w-[140px] w-[100px] rounded h-[30px] text-sm bg-blue-700 text-white shadow mb-8'>Button 2</button><br />
                        <button className='md:w-[140px] w-[100px] rounded h-[30px] text-sm text-blue-700 shadow border'>Button 3</button>
                    </div>
                </div>

            </div>

            <div className='pt-6 md:flex md:ml-0 ml-16'>
                <div className='relative'>
                    <i class="fa-solid fa-magnifying-glass absolute mt-2 pl-1"></i>
                    <input type="text" onChange={(e) => setSearch(e.target.value)} className='rounded-lg pl-8 w-[250px] h-[30px]' placeholder='Search Projects' name="" id="" />
                </div>                <p className='text-sm brightness-200 ml-12 pt-2'>Sort by</p>
                <select name="" id="" className='text-black w-[100px] h-[30px] p-1 rounded ml-2'>
                    <option value="Name" selected hidden>Name</option>
                    <option value="Name">Sl No</option>
                    <option value="Name">Length</option>
                </select>
                <button className='ml-2 w-[140px] rounded h-[30px] text-sm bg-white shadow border text-blue-700'>import<i class="fa-solid fa-arrow-down ml-2"></i></button>
            </div>

            <div className='md:w-[630px] md:h-[530px] h-[500px] bg-white mt-7 md:pl-3 pl-5 md:p-0 p-4 rounded'>
                <table className='w-100' style={{ width: '100%' }}>
                    <thead>
                        <tr>
                            <th className='brightness-200 font-medium md:text-sm text-xs' >Sl No</th>
                            <th className='brightness-200 font-medium md:text-sm text-xs'>Assembly Name</th>
                            <th className='brightness-200 font-medium md:text-sm text-xs md:pl-0 -pl-10'>Length</th>
                            <th className='brightness-200 font-medium md:text-sm text-xs'>Quantity</th>
                        </tr>
                    </thead>
                    <tbody className='border-b '>
                        {projects.length > 0 ?
                            projects.map(item => (
                                <tr className='mt-6'>
                                    <td className='md:text-sm text-xs pt-3'>{item.slNo}</td>
                                    <td className='md:text-sm text-xs'>{item.assemblyName}</td>
                                    <td className='text-blue-600 md:text-sm text-xs '>{item.length ? item.length : "-"} M</td>
                                    <td className='text-blue-600 md:text-sm text-xs flex justify-between'>{item.quantity ? item.quantity : "-"}
                                        <div className='flex'>
                                            <i onClick={() => deleteProject(item)} class="cursor-pointer hover:brightness-150 fa-solid fa-trash md:-ml-5 ml-3 absolute"></i>
                                        </div>
                                    </td>
                                </tr>
                            )) : <p className='text-red-700 text-center text-xl'>No projects</p>
                        }
                    </tbody>
                </table>

            </div>
        </div>
    )
}

export default Jobs