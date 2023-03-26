import React from 'react'

function Footer() {
  return (
    <>
    <div className="footer-container">
        <ul className="footer-categories">
            <li>Copyright © 2021 All rights reserved.</li>
            <li>
                <ul className="icon-categories">
                    <li><a href=""><i className="fa-brands fa-github fa-flip"></i></a></li>
                    <li><a href=""><i className="fa-brands fa-twitter fa-bounce fa-xs" ></i></a></li>
                    <li><a href=""><i className="fa-solid fa-basketball fa-spin"></i></a></li>
                </ul>
            </li>
            <li>Source code available</li>

        </ul>
    </div>
    </>
  )
}

export default Footer