import React from 'react'
import './Footer.css'

export default function Footer() {
    return (
        <footer className='footer bg-dark p5' id='contact'>
            <div className='container grid grid-3'>
                <div>
                    <h3>A Site</h3>
                    <p>Copyrights &copy; {new Date().getFullYear()}</p>
                </div>
                <nav>
                    <ul>
                        <li><a href='#showcase'>Home</a></li>
                        <li><a href='#stats'>Portfolio</a></li>
                        <li><a href='#cli'>Cli</a></li>
                    </ul>
                </nav>
                <div className='social'>
                    <a href='#showcase'><i className='fab fa-twitter fa-2x'></i></a>
                    <a href='#showcase'><i className='fab fa-facebook fa-2x'></i></a>
                    <a href='#showcase'><i className='fab fa-linkedin fa-2x'></i></a>
                    <a href='#showcase'><i className='fab fa-github fa-2x'></i></a>
                </div>
            </div>

        </footer>
    )
}
