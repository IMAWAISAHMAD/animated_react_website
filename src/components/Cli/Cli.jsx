import React from 'react'
import CliImage from '../../images/cli.png'
import './Cli.css'
export default function Cli() {
    return (
        <section className='cli' id='cli'>
            <div className='container grid'>
                <img src={CliImage} alt='cliimage'/>
                <div className='card'>
                    <h3>Easy to use cross platform cli</h3>
                </div>
                <div className='card'>
                    <h3>Easy to use cross platform cli</h3>
                </div>
            </div>
        </section>
    )
}
