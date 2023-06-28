import React from 'react';
import './About.scss';
import ContactMailOutlinedIcon from '@mui/icons-material/ContactMailOutlined';

export default function About(){
    return (
        <div className="components h-screen border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t ">
            <h1>Hi, my name is Tyler Tran.</h1>   

            <div className='font-bold text-xl mb-2'>
                <p className='text-gray-700 text-base'>
                I'm an aspiring Software Engineer hoping to earn some industry experience in the near future. 
                Currently, I am an incoming third-year undergraduate student at the <a href="https://www.ucla.edu/">University of California, 
                Los Angeles </a>pursuing a degree in Computer Science and Linguistics, minoring in Data Science Engineering. 
                <br />
                My main interests in the realm of Computer Science and Software Engineering lie in the fields of 
                Cloud Computing and Database Systems. My hope is to work somewhere in the intersection between 
                software engineering, cloud computing and database systems.
                <br />
                Aside from Computer Science, I love playing tennis, going on spontaneous adventures, cooking Asian 
                Food at home, and traveling the world.  I am always looking for new opportunities to learn and grow 
                not just in my technical skills but also as a person. If you would like to get in touch with me,
                please feel free to reach out to me via email or connect with me on LinkedIn. 
                </p>
            </div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
            {/* <button className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-50"> */}
                <a href="mailto:tylerduytran@gmail.com" target='_blank' rel="noreferrer">
                    <ContactMailOutlinedIcon /> Contact Me
                </a>
            </button>
            <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                Resume
            </button>
 
        </div>
    );
}