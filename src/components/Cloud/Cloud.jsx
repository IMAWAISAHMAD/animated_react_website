import React from 'react'
import './Cloud.css'
import CloudImage from '../../images/cloud.png'

export default function Cloud() {
    return (
        <section className='cloud bg-primary my-2 py-2' id='cloud'>
            <div className='container grid'>
                <div className='text-center'>
                    <h2 className='lg'>Extream Cloud Hosting</h2>
                    <p className='lead my-1'>Easy to use cross platform cli for cloud hosting.</p>
                    <a href='/' className='btn btn-dark'>Read More</a>
                </div>
                <img src={CloudImage} alt=''/>
            </div>
        </section>
    )
}
