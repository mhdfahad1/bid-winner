import React, { useEffect, useState } from 'react'
import Menu from './Menu'
import arrow from '../images/ArrowFatRight.png'
import Rarrow from '../images/ArrowFatRightblue.png'
import { getAssembliesAPI, getCategoryAPI, getSubcategoryAPI } from '../services/allAPi';
import AddAssembly from './AddAssembly';
import './Categories.css'

function Categories() {
  const [searchkey, setSearchKey] = useState("")
  const [keyword, setKeyword] = useState("")
  const [search, setSearch] = useState("")

  const [category, setCategory] = useState([])
  const [assembly, setAssembly] = useState([])
  const [subCats, setSubcats] = useState([])
  // console.log(assembly);
  const [value, setValue] = useState(1)
  const decrement = () => {
    setValue(value - 1)
  }
  const increment = () => {
    setValue(value + 1)
  }

// get assemblies
  const getAssemby = async () => {
    const result = await getAssembliesAPI(keyword)
    console.log(result);
    if (result.status === 200) {
      setAssembly(result?.data)
    } else {
      alert(result?.response?.data)
    }
  }

  // get categories
  const getCatogory = async () => {
    const result = await getCategoryAPI(searchkey)
    console.log(result);
    if (result.status === 200) {
      setCategory(result?.data)
    } else {
      alert(result?.response?.data)
    }
  }
  // get sub categories
  const getSubcats = async () => {
    const result = await getSubcategoryAPI(search)
    console.log(result);
    if (result.status === 200) {
      setSubcats(result?.data)
    } else {
      alert(result?.response?.data)
    }
  }

  useEffect(() => {
    getAssemby()
    getCatogory()
    getSubcats()
  }, [searchkey, search, keyword])
  return (

    <div className='flex'>
      <Menu setValue={setValue}/>
      {value === 1 ?
        <div className=' p-7 w-[500px] h-[879px]'>
          <div className='md:flex md:justify-between'>
            <div className='flex'>
              <img onClick={decrement} width={'20px'} src={arrow} alt="" />
              <h2 className='text-sm md:text-xl mt-2 ml-0 md:ml-2 font-bold'>Categories</h2>
            </div>
            <div className='relative md:mt-0 mt-3'>
              <i class="fa-solid fa-magnifying-glass absolute mt-2 pl-1"></i>
              <input onChange={(e) => setSearchKey(e.target.value)} type="text" className='rounded-lg pl-8 w-[250px] h-[30px]' placeholder='Search Categories' name="" id="" />
            </div>

          </div>
          <div className='bg-white rounded-lg w-[300px] md:w-[450px] md:h-[100%] h-[780px] mt-7 pl-4'>
            <table className='table '>
              <tr>
                <th className='font-normal text-sm'>Sl No</th>
                <th className='font-normal text-sm pl-3 md:pl-10'>Name</th>
                <th className='font-normal text-sm md:pl-10'>Type</th>
              </tr>
              {category.length > 0 ?
                category.map(item => (
                  <tr>
                    <td>{item.id}</td>
                    <td className='pl-3 md:pl-10'>{item.name}</td>
                    <td className='flex md:pl-10'><span>{item.type}</span> <img onClick={increment} src={Rarrow} alt="" /></td>
                  </tr>
                )) : <p className='text-center text-danger text-xl mt-10'>Categories Not Available</p>
              }

            </table>
          </div>
        </div>
        : value === 2 ?
          <div className=' p-7 w-[500px] h-[879px]'>
            <div className='md:flex md:justify-between'>
              <div className='flex '>
                <img onClick={decrement} width={'20px'} src={arrow} alt="" />
                <h2 className='text-sm md:text-xl mt-2 ml-0 md:ml-2 font-bold'>sub Categories</h2>
              </div>
              <div className='relative md:mt-0 mt-3'>
                <i class="fa-solid fa-magnifying-glass absolute mt-2 pl-1"></i>
                <input type="text" onChange={(e) => setSearch(e.target.value)} className='rounded-lg pl-8 w-[250px] h-[30px]' placeholder='Search sub Categories' name="" id="" />
              </div>

            </div>
            <div className='bg-white rounded-lg w-[300px] md:w-[450px] md:h-[100%] h-[780px] mt-7 pl-4'>
              <table className='table '>
                <tr>
                  <th className='font-normal text-sm'>Sl No</th>
                  <th className='font-normal text-sm pl-3 md:pl-10'>Name</th>
                  <th className='font-normal text-sm md:pl-10'>Type</th>
                </tr>
                {subCats.length > 0 ?
                  subCats.map(item => (
                    <tr>
                      <td>{item.id}</td>
                      <td className='pl-3 md:pl-10'>{item.name}</td>
                      <td className='flex md:pl-10'><span>{item.type}</span> <img onClick={increment} src={Rarrow} alt="" /></td>
                    </tr>
                  )) : <p className='text-center text-danger text-xl mt-10'>Sub Categories Not Available</p>
                }

              </table>
            </div>
          </div>
          : value === 3 ?
            <div className=' p-7 w-[500px] h-[879px]'>
              <div className='md:flex md:justify-between'>
                <div className='flex '>
                  <img onClick={decrement} width={'20px'} src={arrow} alt="" />
                  <h2 className='text-sm md:text-xl mt-2 ml-0 md:ml-2 font-bold'>Assemblies</h2>
                </div>
                <div className='relative md:mt-0 mt-3'>
                  <i class="fa-solid fa-magnifying-glass absolute mt-2 pl-1"></i>
                  <input type="text" onChange={(e) => setKeyword(e.target.value)} className='rounded-lg pl-8 w-[250px] h-[30px]' placeholder='Search Assemblies' name="" id="" />
                </div>

              </div>
              <div className='bg-white rounded-lg w-[300px] md:w-[450px] md:h-[100%] h-[780px] mt-7 pl-4'>
                <table className='table '>
                  <tr>
                    <th className='font-normal text-sm'>Sl No</th>
                    <th className='font-normal text-sm pl-3 md:pl-10'>Name</th>
                    <th className='font-normal text-sm md:pl-10'>Type</th>
                  </tr>
                  {assembly.length > 0 ?
                    assembly.map(item => (
                      <tr>
                        <td>{item.slNo}</td>
                        <td className='pl-3 md:pl-10'>{item.name}</td>
                        <td className='flex md:pl-10'><span>{item.type}</span> <AddAssembly dispaydata={item} /></td>
                      </tr>
                    )) : <p className='text-center text-danger text-xl mt-10'>Assemblies Not Available</p>
                  }

                </table>
              </div>
            </div>
            : ""}
    </div>
  )
}

export default Categories