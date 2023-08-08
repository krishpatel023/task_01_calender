import {useContext, useState} from 'react'
import GlobalContext from '../context/GlobalContext';

export default function Tasks() {
    const { tasks, setShowModal } = useContext(GlobalContext);

  return (
    <div className='w-full bg-white flex flex-col items-center rounded-lg gap-2'>
        <button onClick={()=>{setShowModal(true)}} className='h-10 rounded bg-[#1E40AF] text-white w-[85%] mt-8'><i className="fa-solid fa-pen fa-xs"></i>Add New Schedule</button>
        <div className='min-h-[1px] w-[85%] bg-gray-200 mt-3'></div>
        {
            tasks?
                tasks.map((data,i)=>
                    <div key={i} className='w-[90%] h-16 rounded hover:bg-[#F1F5F9] flex justify-between items-center'>
                        <span className='w-[10%] text-xs text-orange-600 flex justify-center'><i className="fa-solid fa-circle fa-xs"></i></span>
                        <div className='w-[80%] flex flex-col items-start'>
                            <span>{data.name}</span>
                            <span className='text-xs text-gray-600'>{data.days} Days  {data.startDate}-{data.endDate}</span>
                        </div>
                        <span className='w-[10%] text-sm text-gray-500'><i className="fa-regular fa-pen-to-square"></i></span>
                    </div>
                )
            :null
        } 
        <div className='min-h-[1px] w-[85%] bg-gray-100 mt-3'></div> 
        <div className="form-control w-[80%] mb-4">
            <label className="cursor-pointer label">
            <span>Remove After Drop</span>
            <input type="checkbox" className="toggle bg-[#1E40AF]" />
            </label>
        </div>
    </div>
  )
}
