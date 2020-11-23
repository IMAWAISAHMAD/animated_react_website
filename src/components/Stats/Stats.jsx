import React from 'react'
import './Stats.css'

export default function Stats() {
    return (
    <section className='stats' id='stats'>
      <div className='container'>
        <h3 className='stats-heading text-center'>
          Welcome  Ipsum is simply dummy text of the printing and typesetting industry.
        </h3>
        <div className='grid grid-3 text-center my-4'>
          <div>
            <i className='fas fa-server fa-2x'></i>
            <h3>10,123,25</h3>
            <p>Deployments</p>
          </div>
          <div>
            <i className='fas fa-upload fa-2x'></i>
            <h3>10 TB</h3>
            <p>Published</p>
          </div>
          <div>
            <i className='fas fa-project-diagram fa-2x'></i>
            <h3>2,323,250</h3>
            <p>Projects</p>
          </div>
        </div>
      </div>
    </section>
    )
}
