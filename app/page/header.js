import React, { Component } from 'react'

class Header extends Component {
    render() {
        return (
            <div>
                <img src={require('../../static/images/logo.png')}  />
                <div> React Music Player</div>
            </div>
        );
    }
}
export default Header

