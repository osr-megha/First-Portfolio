import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom';

const Navbar = () => {

    const [active, setActive] = useState('');

    useEffect(() => {
        let currURL = window.location.href

        console.log(currURL);

        if(currURL.endsWith('/'))
            setActive('About');
            
        else if(currURL.endsWith('/projects'))
            setActive('Projects');

        else if(currURL.endsWith('/resume'))
                    setActive('Resume');


    }, [active])

    return (
        <React.Fragment>

        <div className="navbar">

        <div className="navbar__active">
            {active}
        </div>

        <div className="navbar__items">
            {active !== 'About' && 
                <Link to ="/">
                    <div className="navbar__item" onClick={()=>setActive('About')}>About</div>
                </Link>
            }

            {active !== 'Resume'? 
                <Link to ="/resume">
                    <div className="navbar__item" onClick={()=>setActive('Resume')}>Resume</div>
                </Link>  : null   
            }

            {active !== 'Projects' &&  
                <Link to ="/projects">
                     <div className="navbar__item" onClick={()=>setActive('Projects')}>Projects</div>
                </Link>
            }

        </div>

        </div>
            
        </React.Fragment>
    )
}

export default Navbar;
