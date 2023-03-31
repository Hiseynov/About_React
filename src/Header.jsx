import React, { useState } from "react";

export default function Header({ head, setPageSelector }) {
  const [showMenu, setShowMenu] = useState(false)
  const [selected, setSelected] =  useState('')

 
  return (
    <>
      <header className="header">
        <div className="header__container">
          <ul>
           { console.log('salam',head[0])}


             {head.map((item,index)=> <li className={`${selected ==""?setSelected(head[0]):''} ${selected==item ? 'header-active':''}`} onClick={()=>{setPageSelector(item); setSelected(item)}} key={index}>{item}</li>)}
          </ul>
        </div>
      </header>
      <header className="header-mobile ">
        <nav className="nav-mobile">
          <ul>
            <li className="drop">
              <div onClick={()=> setShowMenu(!showMenu)} className={`basked-menu ${showMenu?'rotate':''}` }>
                   <div className="black black-top"></div>
                   <div className="black black-center"></div>
                   <div className="black black-bottom"></div>
              </div>
             <div style={{transition: '.4s'}} className={`dorps ${showMenu?'':'hidden'}`}>
                <ul className="drop-categories"  >
                {head.map((item,index)=> <li  onClick={()=>{ setSelected(item); setPageSelector(item)}} key={index}>{`${selected==item?'':item}`}</li>)} 
             </ul>
             </div>
                      
            </li>
            <li>{selected==''?"Home":selected}</li>
          </ul>
        </nav>
        <div className={`shoder-mobile ${showMenu?'':'hidden'}`}></div>
      </header>
    </>
  );
}

