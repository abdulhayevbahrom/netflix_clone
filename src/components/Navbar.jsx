import React, { useState, useEffect } from 'react'
import { auth } from '../firebase/config'
import logo from './assets/netflix-3.svg' 


function Navbar({ user }) {
    const [fixed, setFixed] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                setFixed(true)  // navbar 100 scrolldan  keyn style qowadi
            }
            else {
                setFixed(false)
            }
        })
    })

    return (
        <div className={'navbar ${fixed && "fixedNav"}'}>
            <a href='#' className='brand' >
                <img src={logo} alt="logo" />
            </a>

            <button className='authButton' onClick={() => auth.signOut()}>
                <img src="https://lh3.googleusercontent.com/a/AATXAJymFEvLxQ5b4thidTnfSw7tq3vv4joujqqa6y_A=s96-c" alt="auth user" className='userImage' />
            </button>
        </div>
    )
}

export default Navbar