import '../common/template/dependencies'
import React from 'react'
import { HashRouter } from 'react-router-dom'
import Header from '../common/template/header'
import SideBar from '../common/template/sideBar'
import Footer from '../common/template/footer'
import Messages from '../common/msg/messages'

import Routes from './routes'

export default props => (
    <div className='wrapper'>
        <Header />
        <SideBar />
        <div className='content-wrapper'> 
            {props.children}
        </div>
        <Footer />
        <Messages />
    </div>
)