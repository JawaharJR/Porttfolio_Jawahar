import React from 'react'

function Info() {
  return (
    <div className="about__info grid">

        <div className="about__box">
            <i className='bx bx-award about__icon'></i>
            <h3 className="about__title">Experience</h3>
            <span className="about__subtitle"> Internship Experience in IconX Technologies </span>
        </div>

        <div className="about__box">
        <i className='bx bx-briefcase-alt about__icon'></i>
            <h3 className="about__title">Completed</h3>
            <span className="about__subtitle">2 Projects completed</span>
        </div>


    </div>
  )
}

export default Info
