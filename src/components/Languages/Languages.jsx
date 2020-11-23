import React from 'react'
import './Languages.css'
import Node from '../../images/logos/node.png'
import Python from '../../images/logos/python.png'
import Go from '../../images/logos/go.png'
import Php from '../../images/logos/php.png'
import Scala from '../../images/logos/scala.png'
import Clojure from '../../images/logos/clojure.png'
import Csharp from '../../images/logos/csharp.png'

export default function Languages() {
    return (
        <section className='languages' id='stack'>
            <h2 className='md text-center my-2'>
                Supported Languages
            </h2>
            <div className='container flex'>
                <div className='card'>
                    <h4 className='lead'>Node</h4>
                    <img src={Node} alt='Node'/>
                </div>
                <div className='card'>
                    <h4 className='lead'>Python</h4>
                    <img src={Python} alt='Python'/>
                </div>
                <div className='card'>
                    <h4 className='lead'>Go</h4>
                    <img src={Go} alt='Go'/>
                </div>
                <div className='card'>
                    <h4 className='lead'>Php</h4>
                    <img src={Php} alt='Php'/>
                </div>
                <div className='card'>
                    <h4 className='lead'>Scala</h4>
                    <img src={Scala} alt='Scala'/>
                </div>
                <div className='card'>
                    <h4 className='lead'>Clojure</h4>
                    <img src={Clojure} alt='Clojure'/>
                </div>
                <div className='card'>
                    <h4 className='lead'>C#</h4>
                    <img src={Csharp} alt='Csharp'/>
                </div>

            </div>

        </section>
    )
}
