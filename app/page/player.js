import React, { Component } from 'react'
import { render } from 'react-dom';
import Progress from './progress'

let duration = null;

class Player extends Component {
    constructor(props) {
        super(props)
        this.state = {
            progress: '-'
        }
    }
    onChangeProgressHandle(progress) {
        var changeTime = duration * progress / 100;
        console.log(duration + " " + "" + progress)
        $('#player').jPlayer('play', changeTime);
    }
    render() {
        return (
            <div>
                <h1 className="caption">我的私人音乐坊 &gt;</h1>
                <div className="mt20 row">
                    <div style={{ height: 10, lineHeight: '10px' }}>
                        <Progress
                            progress={this.state.progress}
                            onProgressChange={this.changeProgressHandler}
                        >
                        </Progress>
                    </div>
                </div>
            </div>
        )
    }
    componentDidMount() {
        $("#player").bind($.jPlayer.event.timeupdate, (e) => {
            duration = e.jPlayer.status.duration;
            this.setState({
                progress: e.jPlayer.status.currentPercentAbsolute
            });
        });
    }
    componentWillUnmount() {
        $('#jplayer').unbind($.jPlayer.event.timeupdate)
    }
}
export default Player;
