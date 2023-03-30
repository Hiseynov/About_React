import React from 'react'

function TimeItem() {
    const MesageData =[
        {
            time:'2 Juanary 2021',
            question:'The resolution, What am i gonna do?',
            info:'It’s all about the new year and works i have to do'
        },
        {
            time:'28 March 2021',
            question:'Gow - command line tool to manage works',
            info:'Gow is cli tool written in golang using cobra'
        },
        {
            time:'2 February 2021',
            question:'Started designing what you are seeing right now!',
            info:'Yes in 2th of february i started designing this site'
        },
        {
            time:'25 September 2021',
            question:'Maybe it’s time to deploy...!',
            info:'Maybe in this day i completed the front and backend of this'
        },
    ]
  return (
   <>
   <h1>Time line</h1>
   <select  id="Timeselect">
    <option value="">2021</option>
    <option value="">2022</option>
    <option value="">2023</option>
   </select>
   <ul className="Timelist-categories">
    {MesageData.map((item,index)=><li key={index}>
        <h3>{item.time}</h3>
        <div className="Timetext">
            <h5>{item.question}</h5>
            <p>{item.info}</p>
            </div>
    </li>)}
   </ul>
   </>
  )
}

export default TimeItem