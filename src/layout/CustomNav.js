import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
// Toggle, Nav,
// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import React from 'react'

function CustomNav() {
    return (
        <div className='z-index-10'>
            <SideNav onSelect={selected => { console.log(selected) }}

            >
                <SideNav.Toggle className="toggle-icon" />
                <SideNav.Nav defaultSelected="home" >
                    <NavItem   >
                        <NavIcon ><i className='fa fa-fw fa-user' style={{ fontSize: "1.5em", color: "black" }} /></NavIcon>
                        <NavText style={{ backgroundColor: "" }}>Hello & Welcome! </NavText>
                    </NavItem>
                    <NavItem>
                        <NavIcon><i className='fa fa-fw fa-right-to-bracket' style={{ fontSize: "1.5em", color: "black" }} /></NavIcon>
                        <NavText> Login </NavText>
                    </NavItem>
                    <NavItem>
                        <NavIcon><i className='fa fa-fw fa-user-shield' style={{ fontSize: "1.5em", color: "black" }} /></NavIcon>
                        <NavText> Employer Login </NavText>
                    </NavItem>
                    <NavItem>
                        <NavIcon><i className='fa fa-fw fa-servicestack' style={{ fontSize: "1.5em", color: "black" }} /></NavIcon>
                        <NavText>Premium Services </NavText>
                    </NavItem>
                </SideNav.Nav>
            </SideNav>
        </div>
    )
}

export default CustomNav