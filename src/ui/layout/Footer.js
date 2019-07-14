import React from "react"
import {NavLink} from "react-router-dom"

class Footer extends React.Component {
    render(){
        let {links} = this.props
        return(
            <footer>
                <p>&copy; Copyright 2019</p>
                <h3>Mapa Del Sitio</h3>
                <nav>
                    {links.map((link,i)=>
                        <NavLink key={i} to={`/${link}`}>{link}</NavLink>
                    )}
                </nav>
            </footer>
        )
    }
}

export default Footer