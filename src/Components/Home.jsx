import React from 'react'
import { Link } from 'react-router-dom'
import "./Home.css"
import About from './About'

const Home = () => {
    return (
        <div className='App'>

            <p className="mornia " >Hello, my name is Idrees Abdulmujeeb </p>

            <div className="boy ">
                I am asked to design a project using tailwind & Navigation,here you go..!

                <img />
                <Link className='kit' to="/About" element={<About />}> GO TO ABOUT PAGE</Link>
            </div>
        </div>
    )
}

export default Home