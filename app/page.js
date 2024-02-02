"use client"
import React, { useState } from 'react'

const page = () => {
  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")
  const [mainTask, setmainTask] = useState([])

  const submitHandler =(e)=>{ 
     e.preventDefault()
    setmainTask([...mainTask, {title,desc}])
     settitle("")
     setdesc("")
     console.log(mainTask)
  }

  const deleteHandler=(i)=>{
    let copyTask = [...mainTask]
    copyTask.splice(i,1)
    setmainTask(copyTask)

  }


  let renderTask = <h2 className='text-black font-bold text-xl'>No Task Available</h2>

  if (mainTask.length>0) {
    renderTask = mainTask.map((t,i)=>{
      return (
        <li key={i} className='flex items-center justify-between mb-8'>
          <div className='flex items-center justify-between  text-black mb-5 w-2/3'>
        <h5 className='text-xl font-semibold'>{t.title}</h5>
        <h6 className='text-xl font-semibold'>{t.desc}</h6>
      </div>
      <button onClick ={()=>{
        deleteHandler(i)
      }} className='bg-red-600 px-4 py-3 rounded-md mr-5'>Delete</button>
        </li>
    )})
  }


  return (
    <>
    <h1 className=' text-black  p-5 text-5xl font-bold text-center'>Shripad's Todo List</h1>
    <form onSubmit={submitHandler}>
      <input type='text' className='text-2xl border-zinc-500 border-4 m-8 text-black px-4 py-2 rounded-md' 
      placeholder='Enter Task Here'  
      value={title}
      onChange={(e)=>{
        settitle(e.target.value)
      }}>
      </input>
      <input type='text' className='text-2xl border-zinc-500 border-4 m-8 text-black px-4 py-2 rounded-md' 
      placeholder='Enter Description Here' value={desc} onChange={(e)=>{
        setdesc(e.target.value)
      }}></input>
      <button className=' bg-green-400 text-black px-4 py-3 m-5 text-2xl  font-bold rounded '>Add Task</button>

    </form>
    <hr></hr><br></br>
    <div className='p-8 bg-purple-200'>
      <ul>
        {renderTask}
      </ul>
    </div>
    </>
  )
}

export default page