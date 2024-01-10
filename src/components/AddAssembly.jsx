import React from 'react'
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { addProjectAPI } from '../services/allAPi';

function AddAssembly({ dispaydata }) {
    const [project, setProject] = useState({
        slNo: dispaydata.slNo, assemblyName: dispaydata.name, length: "", quantity: ""
    })
    console.log(project);
    const [show, setShow] = useState(false);

    const handleClose = () => {

        setShow(false)
        setProject({
            slNo: dispaydata.slNo, assemblyName: dispaydata.name, length: "", quantity: ""

        })
    };
    const handleShow = () => setShow(true);
// add project
    const addProject = async () => {
        const {  length, quantity } = project
        if (length || quantity) {
            const result = await addProjectAPI(project)
            if (result.status ===200) {
                handleClose()
            } else {
                alert(result?.response?.data)
                handleClose()
            }
        } else {
            alert('please fill the form')
        }
    }


    return (
        <div>
            <i onClick={handleShow} class="fa-solid fa-circle-plus mt-1" style={{ color: "green" }}></i>
            <Modal show={show} onHide={handleClose} size='lg' centered>

                <Modal.Body className='md:pl-16 md:pr-16'>
                    <h1 className='md:text-xl text-sm text-center mb-5 pt-4 font-bold'>Add Assembly to the project</h1>
                    <div className='mt-3 flex'>
                        <p className='md:text-sm text-xs brightness-200'>Assembly Name</p>
                        <p className='text-sm ml-5 font-semibold'>{project.assemblyName}</p>
                    </div>
                    <div className='md:flex justify-between pt-4'>
                        <div className='flex md:mb-0 mb-4'><p className='brightness-200 text-sm mt-1'>Count</p> <input onChange={(e) => setProject({ ...project, quantity: e.target.value })} type="text" className=' ml-4 w-[230px] h-[35px] rounded border' placeholder='1250' name="" id="" /></div>
                        <div className='flex '><p className='brightness-200 text-sm mt-1'>Length in M</p> <input onChange={(e) => setProject({ ...project, length: e.target.value })} type="text" className='ml-4 w-[230px] h-[35px] rounded border' placeholder='1250' name="" id="" /></div>

                    </div>
                    <div className='pt-5'>
                        <h1 className='md:text-sm text-xs brightness-200'>Assembly Description</h1>
                        <table style={{ marginTop: '10px' }} className='table md:bg-slate-400 md:w-[100%] w-[300px]'>
                            <thead>
                                <tr>
                                    <th className='font-normal text-sm brightness-200'>Sl No</th>
                                    <th className='font-normal text-sm brightness-200'>Description</th>
                                    <th className='font-normal text-sm brightness-200'>Quantity</th>
                                    <th className='font-normal text-sm brightness-200'>Fct 1</th>
                                    <th className='font-normal text-sm brightness-200'>Fct 2</th>
                                    <th className='font-normal text-sm brightness-200'>Catalog Number</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{project.slNo}</td>
                                    <td>{dispaydata.description}</td>
                                    <td>{dispaydata.quantity}</td>
                                    <td>{dispaydata.fct1}</td>
                                    <td>{dispaydata.fct2}</td>
                                    <td className='flex'>{dispaydata.catalog} <i class="fa-solid fa-pencil pl-3 pt-1"></i></td>

                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className='flex justify-center pt-5 pb-3'>
                        <button onClick={handleClose} className='border-blue-600 border text-sm w-[120px] h-[30px] rounded text-blue-600 shadow'>Cancel</button>
                        <button onClick={() => addProject()} className='w-[120px] h-[30px] rounded bg-blue-600 text-sm text-white ml-10 shadow cursor-pointer hover:brightness-110'>Add</button>

                    </div>
                </Modal.Body>

            </Modal>
        </div>
    )
}

export default AddAssembly