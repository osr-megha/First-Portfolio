import React from 'react';
import atom from '../Icons/atom.png'
import Skillcard from './Skillcard';
import { motion } from 'framer-motion';

const skills = [
    {
        icon: atom,
        title:"Frontend Development",
        about:"can build SPA using HTML, CSS, ReactJS"
    },
    {
        icon: atom,
        title:"Backend Development",
        about:"Handle database using Mongodb"
    },
    {
        icon: atom,
        title:"UI/UX designer",
        about:"User interface designer using Framer,Saas, Bootstrap, Material UI "
    }
    
]


const About = () => {

    const about_variant = {
        hidden:{
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {
                delay: 0.2, duration : 0.6
            }
        }
    }

    return (
        <React.Fragment>
        <motion.div className="about"
            variants={about_variant}
            initial="hidden"
            animate="visible"
        >
            <div className="about__intro">
                <p>Learning & implementing </p>
            </div>

        <div className="container about__container">
        <h6 className="about__heading">What i offer</h6>

        <div className="row">
            {
                skills.map(skill=>
                    <Skillcard skill={skill} />
                    )
            }
        </div>
        </div>


        </motion.div>
        
        </React.Fragment>
    )
}

export default About;
