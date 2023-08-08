import React , {useState} from 'react'
import GlobalContext from './GlobalContext'
import dayjs from 'dayjs'
import  isoWeek from 'dayjs/plugin/isoWeek'
export default function ContextWrapper(props) {
    const [monthIndex, setMonthIndex] = useState(dayjs().month())
    const [smallMonthIndex, setSmallMonthIndex] = useState(dayjs().month())

    const initialState = [
        {
            days : 3 ,
            endDate : "2023-08-08",
            name : "Student Fest 2023",
            startDate : "2023-08-06"
        },
        {
            days : 2 ,
            endDate : "2023-08-17",
            name : "Laracon 2023",
            startDate : "2023-08-16"
        },
        {
            days : 6 ,
            endDate : "2023-08-26",
            name : "Student Examination",
            startDate : "2023-08-21"
        }
    ]
    const [tasks,setTasks] = useState(initialState)

    const addTasks = (item) => setTasks((tasks) => [...tasks, item]);
    const deleteTasks = (id) => setTasks((tasks) => tasks.filter((item) => item.id !== id));

    const [showModal, setShowModal] = useState(false)

    dayjs.extend(isoWeek)
    const [weekIndex, setWeekIndex] = useState(dayjs().isoWeek())
    const value = {
        monthIndex,
        setMonthIndex,
        smallMonthIndex,
        setSmallMonthIndex,
        tasks,
        addTasks,
        deleteTasks,
        showModal,
        setShowModal,
        weekIndex,
        setWeekIndex,
    }
  return (
      <GlobalContext.Provider value={value}>
        {props.children}
      </GlobalContext.Provider>
  )
}
