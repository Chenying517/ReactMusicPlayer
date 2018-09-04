import React, { Component } from 'react'
import Styles from '../../static/css/style.css'

class Progress extends Component {
    render() {
        return (
            <div> 
                已播放：{this.props.progress}
            </div>
        );
    }
}
export default Progress

