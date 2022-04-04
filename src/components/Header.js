import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <header className="App-header">
            <div className='header-top'>
                <Link to='/'>
                    <div className='title'>
                        Crypto Direct
                    </div>
                </Link>
                <div className='nav'>
                    <a href='https://www.linkedin.com/in/ebaby-benold-11216325/'><div className='nav-btn'><div className='linked-in'></div></div></a>
                    <Link to='/'><div className='nav-btn'>Home</div></Link>
                </div>
            </div>
            <div className='header-main'>
                <div className='logo-top' alt='crypto-coin-top' />
                <div className='logo-bottom' alt='crypto-coin-bottom' />
            </div>
        </header>
    )
}
