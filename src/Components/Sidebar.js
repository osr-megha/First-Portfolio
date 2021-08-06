import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import female_image from '../Images/female_image.jpeg';
import VerticalAlignBottomIcon from '@material-ui/icons/VerticalAlignBottom';
import resume_dummy from '../Images/resume_dummy.pdf';
import {motion} from 'framer-motion';


const Sidebar = () => {

    const handleEmailMe = () => {
        window.open("mailto:megha.sh@protonmail.com")
    }

    const sidebar_variant = {
        hidden: {
            x : '-20vw'
        },
        visible:{
            x : 0,
            transition : {
                delay : 0.1, duration: 0.5, type: 'spring'
            }
        }
        
    }

    return (
        <React.Fragment>
        <motion.div className="sidebar"
            variants = {sidebar_variant}
            initial = 'hidden'
            animate = 'visible'
        >
        
        
        <img src={female_image} alt="snap" className="sidebar_my_image"/>
        <div className="sidebar_name">Megha Sharma</div>
          
        
        <div classname="sidebar_item sidebar_title">Developer</div>

        <a href={resume_dummy} download="resume_dummy.pdf">
        <div className="sidebar_item sidebar_resume"> <VerticalAlignBottomIcon />Resume
        </div>
        </a>

        <div className="sidebar_social_icons">
        <a href="https://www.linkedin.com/" target="blank" className="sidebar_item sidebar_social"> <LinkedInIcon /> </a>
        <br/><br/>
        <a href="https://github.com/osr-megha" target="blank" className="sidebar_item sidebar_social"><GitHubIcon/> </a>
        </div>

        <div className="sidebar_contact">
        {/*<div className="sidebar_item sidebar__email">megha.sh@protonmail.com</div>*/}
        <div className="sidebar_item">9876543210</div>
        </div>

        <div className="sidebar_item sidebar_location"><LocationOnIcon/>Goa, 
        <br />India</div>


        <div className="sidebar_item sidebar_email" onClick={handleEmailMe}><EmailIcon />Email Me</div>
        </motion.div>


        </React.Fragment>
    )
}

export default Sidebar
