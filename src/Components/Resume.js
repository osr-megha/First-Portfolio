import React from 'react'
import circle from '../Icons/circle.png';
import Bar from './Bar';
import { motion } from 'framer-motion';


const languages = [
    {
        icon:circle,
        name:"JavaScript",
        level:"75"
    },

    {
        icon:circle,
        name:"React JS",
        level:"70"
    },
    {
        icon:circle,
        name:"React Native",
        level:"40"
    }
]

const tools = [
    {
        icon:circle,
        name:"Node JS & Express JS",
        level:"60"
    },

    {
        icon:circle,
        name:"Mongo DB",
        level:"55"
    },
    {
        icon:circle,
        name:"Bootstrap",
        level:"45"
    },
    {
        icon:circle,
        name:"Material UI",
        level:"65"
    }
]

const Resume = () => {

    const resume_variants = {
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

        <motion.div className="container resume"
            variants={resume_variants}
            initial="hidden"
            animate="visible"
        >

        <div className="row">

        <div className="col-lg-6 resume-card">

            <h4 className="resume-card__heading">Education</h4>
        
            <div className="resume-card__body">
                <h5 className="resume-card__title">B.Sc & MBA</h5>
                <p className="resume-card__name">BU, Bhopal</p>
                <p className="resume-card__details">I am currently learning Javascript, ReactJS</p>
            </div>

        </div>

        <div className="col-lg-6 resume-card">

            <h4 className="resume-card__heading">Experience</h4>
        
            <div className="resume-card__body">
                <h5 className="resume-card__title">Intern</h5>
                <p className="resume-card__name">Appler</p>
                <p className="resume-card__details">Want to </p>
            </div>

        </div>
        
        </div>

        <div className="row">
            <div className="col-lg-6 resume-language">
                <h5 className="resume-language__heading">Language & Framework</h5>
                <div className="resume-language__body mt-3">
                    {
                        languages.map(language=>
                            <Bar value = {language}/>
                            )
                        
                    }
                </div>
            </div>

            <div className="col-lg-6 resume-language">
                <h5 className="resume-language__heading">Tools & Software</h5>
                <div className="resume-language__body mt-3">
                    {
                        tools.map(tool=>
                            <Bar value = {tool}/>
                            )
                    }
                </div>
            </div>
        
        </div>
        
        </motion.div>
        
        </React.Fragment>
    )
}

export default Resume;
