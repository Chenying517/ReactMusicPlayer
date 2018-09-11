import React, { Component } from 'react'
import Styles from '../../static/css/style.css'


class Progress extends Component {
    constructor(props) {
        super(props);
        this.state = {
            progress: this.props.progress
        }
    }
  
    onchangeProgress(e) {
        var progressBar = this.refs.progressDom;
        var changeProgress = (e.clientX - progressBar.getBoundingClientRect().left) / progressBar.clientWidth * 100;
        console.log(changeProgress)
        this.props.onProgressChange(changeProgress)
    }

    render() {
        return (
            <div className='progress' ref='progressDom' onClick={this.onchangeProgress = this.onchangeProgress.bind(this)}>
                <div className='pro-top' style={{ width: `${this.props.progress}%`, backgroundColor: this.props.barColor }}></div>
            </div>
        );
    }
}
Progress.defaultProps = {
    barColor: '#2f98'
  };
export default Progress

