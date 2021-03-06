import React, {useState} from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';

import {
    NavLink as RRNavLink
} from "react-router-dom";

const NavBar = () => {

    const [isOpenVal, setIsOpenVal] = useState(false);
    
    const handleToggle = ()=> {
        setIsOpenVal(!isOpenVal);
    }

    return (
        <div >
            <Navbar color="dark" fixed-top dark expand="md" >
                <div className="container-fluid ">
                    <NavbarBrand className="Brand" tag={RRNavLink} exact to="/">NewsFill</NavbarBrand>
                    <NavbarToggler onClick={handleToggle} />
                    <Collapse isOpen={isOpenVal} navbar>
                        <Nav className="mr-auto" navbar>
                            <NavItem><NavLink tag={RRNavLink} exact to="/">Home</NavLink></NavItem>
                            <NavItem><NavLink tag={RRNavLink} to="/business">Business</NavLink></NavItem>
                            <NavItem><NavLink tag={RRNavLink} to="/entertainment">Entertainment</NavLink></NavItem>
                            <NavItem><NavLink tag={RRNavLink} to="/general">General</NavLink></NavItem>
                            <NavItem><NavLink tag={RRNavLink} to="/health">Health</NavLink></NavItem>
                            <NavItem><NavLink tag={RRNavLink} to="/science">Science</NavLink></NavItem>
                            <NavItem><NavLink tag={RRNavLink} to="/sports">Sports</NavLink></NavItem>
                            <NavItem><NavLink tag={RRNavLink} to="/technology">Tech</NavLink></NavItem>
                        </Nav>
                    </Collapse>
                </div>
            </Navbar>
        </div>
    )
}

export default NavBar