import React, { Component } from 'react'

class Header extends Component {
    render() {
        return (
            <div>
                <img src={require('../../static/images/logo.png')}  />
                <div> React Music Player 哎</div>
            </div>
        );
    }
}
export default Header

