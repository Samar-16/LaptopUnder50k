import React, { Component } from 'react'
import './HomePage.css'
import Nav from './Navbar.js'
import Footer from './Footer.js'
import Content from './Content.js'
export default class HomePage extends Component {
    render() {
        return (
            <div>
            <Nav/>
            <Content/>
            </div>
        )
    }
}
