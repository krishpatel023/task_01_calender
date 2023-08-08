import React from 'react'
import {useContext, useState} from 'react'
import GlobalContext from '../context/GlobalContext';

export default function Modal() {

    const { addTasks , setShowModal } = useContext(GlobalContext);

    const [taskName, setTaskName] = useState()
    const [startDate, setStartDate] = useState()
    const [endDate, setEndDate] = useState()
    const addTask = () =>{
        if ((Date.parse(startDate) >= Date.parse(endDate))) {
            alert("End date should be greater than Start date");
        }
        else{
            var numOfDays = ((Date.parse(endDate) - Date.parse(startDate)) / (24*60*60*1000)) + 1
            addTasks({
                name : taskName,
                startDate : startDate,
                endDate : endDate,
                days : numOfDays
            })
            setShowModal(false)
        }
    }
  return (
    <div className="w-screen min-h-screen overflow-hidden absolute bg-[#F1F5F9] flex justify-center items-center">
        <div className="w-80 min-h-[25rem] bg-white flex flex-col items-center justify-evenly rounded-xl">
            <div className="w-[90%] h-8 flex justify-end">
                <button onClick={()=>{setShowModal(false)}}><i className="fa-solid fa-xmark fa-xl"></i></button>
            </div>
            <div className="w-[90%] h-64 flex flex-col">
                <span>TASK</span>
                <input type="text" placeholder="Type here" onChange={(e)=>{setTaskName(e.target.value)}} className="input h-12 input-bordered w-full max-w-xs mb-3" />
                <span>START DATE</span>
                <input type="date" onChange={(e)=>{setStartDate(e.target.value)}} className='h-12 border-2 rounded-md py-4 mb-3'/>
                <span>END DATE</span>
                <input type="date" onChange={(e)=>{setEndDate(e.target.value)}} className='h-12 border-2 rounded-md py-4 mb-3'/>

            </div>
            <button onClick={()=>{addTask()}} className='bg-[#1E40AF] text-white w-24 h-8 rounded'>
                ADD TASK
            </button>
        </div>
    </div>
  )
}
