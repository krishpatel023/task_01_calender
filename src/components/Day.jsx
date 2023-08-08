import dayjs from 'dayjs'
import React, { useContext, useEffect, useState } from 'react'
import GlobalContext from '../context/GlobalContext'

export default function Day({day}) {
    function getCurrentDayClass (){
        return day.format("DD-MM-YYYY") === dayjs().format("DD-MM-YYYY") 
        ? "bg-[#1E40AF] text-white rounded-full w-7" 
        : " ";
    }
    function getCurrentMonthClass(){
        if(monthIndex < 0){
            var multiplier = Math.ceil( (-1 * monthIndex) / 12)
            var val = (12*multiplier) + monthIndex + 1;
            return  Number(day.format("MM")) === val
            ? "" 
            : "bg-[#F8FAFC] text-gray-300"
        }
        else{
            return  Number(day.format("MM")) === ((monthIndex%12)+1)
            ? "" 
            : "bg-[#F8FAFC] text-gray-300"
        }
    }
    const {monthIndex , tasks} = useContext(GlobalContext)

    const [start, setStarts] = useState([])
    useEffect(()=>{
        doesTaskStart()
    },[])
    const doesTaskStart = ()=>{
        tasks.map((data)=>{
            if(data.startDate === day.format("YYYY-MM-DD")){
                addToStart(data)
            }
        })
    }
    const addToStart = (item) => setStarts((tasks) => [...tasks, item]);
  return (
    <div className={`h-[7.5rem]  border overflow-hidden border-gray-100 flex flex-col items-end ${getCurrentMonthClass()}`}>
        <p className={`text-sm p-1 my-1 text-center ${getCurrentDayClass()}`}>
            {day.format('DD')}
        </p>
        <div className="w-full flex flex-col justify-center items-center">
        {
            start?.length > 0 ?
                start.map((data,i)=>
                <div key={i} className='w-[90%] bg-[#1E40AF] text-white rounded text-center'>{data.name}</div>
                )
            :null
        }
        </div>
    </div>
  )
}
