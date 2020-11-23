import React from 'react'
import './Showcase.css'

export default function Showcase() {
    return (
    <section className='showcase' id='showcase'>
      <div className='container grid'>
        <div className='showcase-text'>
          <h1>Easier Deployment</h1>
          <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
          </p>
          <a href='features.html'className='btn btn-outline'>Read More</a>
        </div>
        <div className='showcase-form card'>
          <h2>Request A Demo</h2>
          <form>
            <div className='form-control'>
              <input type='text' name='name' placeholder='Name' required/>
            </div>
            <div className='form-control'>
              <input type='text'  name='company' placeholder='Company Name' required/>
            </div>
            <div className='form-control'>
              <input type='email'  name='email' placeholder='Email' required/>
            </div>
            <button type='submit' className='btn btn-pirmary'>Send</button>
          </form>
        </div> 
      </div>
    </section>
    )
}
