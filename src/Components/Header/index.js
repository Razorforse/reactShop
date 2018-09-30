import React from 'react';
import Contacts from './Contacts.js';
import Search from './Search.js';
import Section from './Section.js'
import Subsection from './Subsecton.js'
import './header.css'


class Header extends React.Component {

    render(){

        return(
            <header className="header">
                <Contacts/>
                <Search basket={this.props.basket} />
                <Section/>
                <Subsection/>
            </header>
        )
    }
}


export default Header