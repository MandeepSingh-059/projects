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
  import {
    NavLink as RRNavLink
  } from "react-router-dom";

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
            <div >
                <Navbar color="dark" dark expand="md" >
                <div className="container-fluid">
                    <NavbarBrand tag={RRNavLink} exact to="/">NewsFill</NavbarBrand>
                    <NavbarToggler onClick={this.handleToggle} />
                    <Collapse isOpen={this.state.isOpenVal} navbar>
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
}

export default NavBar