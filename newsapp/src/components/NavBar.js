import React, { Component } from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
  } from 'reactstrap';

export class NavBar extends Component {
    
    constructor(){
        super();
        this.state = {
            isOpenVal: false
        }
    }

    handleToggle = () => {
        if(this.state.isOpenVal === false){
            this.setState({
                isOpenVal: true
            })
        }
        else{
            this.setState({
                isOpenVal: false
            })
        }
    }

    render() {        
        return (
            <div>
                <Navbar color="dark" dark expand="md">
                    <NavbarBrand href="/">NewsFill</NavbarBrand>
                    <NavbarToggler onClick={this.handleToggle} />
                    <Collapse isOpen={this.state.isOpenVal} navbar>
                        <Nav className="mr-auto" navbar>
                            <NavItem>
                                <NavLink href="/">Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/about">About</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/">Business</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/">Entertainment</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/">General</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/">Health</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/">Science</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/">Sports</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/">Tech</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        )
    }
}

export default NavBar