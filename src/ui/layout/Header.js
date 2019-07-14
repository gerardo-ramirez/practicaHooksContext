import React from "react"
import {NavLink} from "react-router-dom"

class Header extends React.Component {
    render(){
        let {links} = this.props
        return(
            <header>
                <NavLink to="/" exact>
                    <h1>React Avanzado</h1>
                </NavLink>
                <nav>
                    {links.map((link,i)=>
                        <NavLink key={i} to={`/${link}`}>{link}</NavLink>
                    )}
                </nav>
            </header>
        )
    }
}

export default Header