import React from "react";

export default function Header({ head }) {
  return (
    <>
      <header className="header">
        <div className="header__container">
          <ul>
            {head.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </header>
      <header className="header-mobile">
        <nav className="nav-mobile">
          <ul>
            <li className="drop">
              <div className="basked-menu ">
                   <div className="black black-top"></div>
                   <div className="black black-center"></div>
                   <div className="black black-bottom"></div>
              </div>
              <div className="dorps hidden">
                 <ul className="drop-categories"  >
                <li>Home</li>
                <li>Contact</li>
                <li>Portfolios</li>
                <li>Journey</li>
                <li>Block</li>
              </ul>
              </div>
             
            </li>
            <li>About</li>
          </ul>
        </nav>
      </header>
    </>
  );
}
