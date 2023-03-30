import React from 'react'

function Home(props) {
  return (
    <section className="home">
        <div className="home-container">
            <div className="home-left">
               { props.image}
            </div>
            <div className="home-center">
                <h3>{props.logo}</h3>
                <p>{props.text}</p>
                <div className="contact-button">
                    <button className='button-about' >{props.about}</button>
                    <button className='button-portfolios'>{props.protfolious}</button>
                </div>
            </div>
            <div className="home-right">
                {props.images}
            </div>
        </div>
    </section>
  )
}

export default Home