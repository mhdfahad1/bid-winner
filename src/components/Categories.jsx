import React, { useEffect, useState } from 'react'
import Menu from './Menu'
import arrow from '../images/ArrowFatRight.png'
import Rarrow from '../images/ArrowFatRightblue.png'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { getAssembliesAPI } from '../services/allAPi';

function Categories() {
  const [assembly, setAssembly] = useState([])
  const [value, setValue] = useState(1)
  console.log(value);
  const decrement = () => {
    setValue(value - 1)
  }
  const increment = () => {
    setValue(value + 1)
  }

  const getAssemby = async () => {
    const result = await getAssembliesAPI()
    if (result.status == 200) {
      setAssembly(result.data)
    } else {
      alert(result.response.data)
    }
  }
  useEffect(() => {
    getAssemby()
  }, [])
  return (
    <div className='flex'>
      <Menu />
      {value === 1 ?
        <div className=' p-7 w-[500px]'>
          <div className='flex justify-between'>
            <div className='flex '>
              <img onClick={decrement} width={'20px'} src={arrow} alt="" />
              <h2 className='text-xl mt-1 ml-2 font-bold'>Categories</h2>
            </div>
            <div className='relative'>
              <i class="fa-solid fa-magnifying-glass absolute mt-2"></i>
              <input type="text" className='rounded-lg p-2 w-[250px]' placeholder='Search Categories' name="" id="" />
            </div>

          </div>
          <div className='bg-white rounded-lg w-[450px] h-[100%] mt-7 pl-4'>
            <table className='table '>
              <tr>
                <th className='font-normal text-sm'>Sl No</th>
                <th className='font-normal text-sm pl-10'>Name</th>
                <th className='font-normal text-sm pl-10'>Type</th>
              </tr>
              <tr>
                <td>1</td>
                <td className='pl-10'>Fixtures</td>
                <td className='flex pl-10'><span>C</span> <img onClick={increment} src={Rarrow} alt="" /></td>
              </tr>

            </table>
          </div>
        </div>
        : value === 2 ?
          <div className=' p-7 w-[500px]'>
            <div className='flex justify-between'>
              <div className='flex '>
                <img onClick={decrement} width={'20px'} src={arrow} alt="" />
                <h2 className='text-xl mt-1 ml-2 font-bold'>sub Categories</h2>
              </div>
              <div className='relative'>
                <i class="fa-solid fa-magnifying-glass absolute mt-2"></i>
                <input type="text" className='rounded-lg p-2 w-[250px]' placeholder='Search sub Categories' name="" id="" />
              </div>

            </div>
            <div className='bg-white rounded-lg w-[450px] h-[100%] mt-7 pl-4'>
              <table className='table '>
                <tr>
                  <th className='font-normal text-sm'>Sl No</th>
                  <th className='font-normal text-sm pl-10'>Name</th>
                  <th className='font-normal text-sm pl-10'>Type</th>
                </tr>
                <tr>
                  <td>1</td>
                  <td className='pl-10'>Fixtures</td>
                  <td className='flex pl-10'><span>C</span> <img onClick={increment} src={Rarrow} alt="" /></td>
                </tr>

              </table>
            </div>
          </div>
          : value === 3 ?
            <div className=' p-7 w-[500px]'>
              <div className='flex justify-between'>
                <div className='flex '>
                  <img onClick={decrement} width={'20px'} src={arrow} alt="" />
                  <h2 className='text-xl mt-1 ml-2 font-bold'>Assemblies</h2>
                </div>
                <div className='relative'>
                  <i class="fa-solid fa-magnifying-glass absolute mt-2"></i>
                  <input type="text" className='rounded-lg p-2 w-[250px]' placeholder='Search assemblies' name="" id="" />
                </div>

              </div>
              <div className='bg-white rounded-lg w-[450px] h-[100%] mt-7 pl-4'>
                <table className='table '>
                  <tr>
                    <th className='font-normal text-sm'>Sl No</th>
                    <th className='font-normal text-sm pl-10'>Name</th>
                    <th className='font-normal text-sm pl-10'>Type</th>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td className='pl-10'>Fixtures</td>
                    <td className='flex pl-10'><span>C</span> <i class="fa-solid fa-circle-plus mt-1" style={{ color: "green" }}></i></td>
                  </tr>

                </table>
              </div>
            </div>
            : ""}
    </div>
  )
}

export default Categories