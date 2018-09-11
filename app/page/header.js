import React, { Component } from 'react'
import Styles from '../../static/css/style.css'

class Header extends Component {
    render() {
        return (
            <div style={{backgroundColor:'#fff', padding:10}}>
                <img src={ require('../../static/images/logo.png')} className='headerPic' width="40" alt="" className="-col-auto"/>
                <h1 className="caption">Music Player Build By React</h1>
            </div>
        );
    }
}
export default Header

