import React from "react";

const GlobalContext = React.createContext({
    monthIndex : 0,
    setMonthIndex : (index) => {},
    smallMonthIndex: 0,
    setSmallMonthIndex : (index) => {},
    tasks: [],
    addTasks: ()=>{},
    deleteTasks: ()=>{},
    showModal:false,
    setShowModal: () => {},
    weekIndex: 0,
    setWeekIndex: (index) => {},
})

export default GlobalContext