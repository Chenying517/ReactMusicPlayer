import React, { Component } from 'react'
import { render } from 'react-dom';
import Progress from './progress'

let duration = null;

class Player extends Component {
    constructor(props) {
        super(props)
        this.state = {
            progress: 0,
            volume: 0
        }
    }
    onchangeProgressHandle(progress) {
        var changeTime = duration * progress / 100;
        console.log(duration + " " + "" + progress)
        $('#player').jPlayer('play', changeTime);
    }
    onchangevolumeHandle(progress) {
        $('#player').jPlayer('volume', progress/100)
    }
    render() {
        return (
            <div>
                <h1 className="caption">我的私人音乐坊 &gt;</h1>
                <div className="mt20 row">
                    <div>
                        <p>{this.props.MusicListState.title}</p>
                        <p>{this.props.MusicListState.artist}</p>
                        <div>
                            <span>时间</span>
                            <div>音量
                                <div style={{ height: 10, lineHeight: '10px' }}>
                                    <Progress
                                        progress={this.state.volume}
                                        onProgressChange={this.onchangevolumeHandle}
                                    >
                                    </Progress>
                                </div>
                            </div>
                        </div>
                        <div style={{ height: 10, lineHeight: '10px' }}>
                            <Progress
                                progress={this.state.progress}
                                onProgressChange={this.onchangeProgressHandle}
                            >
                            </Progress>
                        </div>
                        <div>
                            <i className="icon prev" onClick={this.prev}></i>
                            <i className={`icon ml20 ${this.state.isPlay ? 'pause' : 'play'}`} onClick={this.play}></i>
                            <i className="icon next ml20" onClick={this.next}></i>
                        </div>
                    </div>
                    <div>
                        <img src={this.props.MusicListState.cover} />
                    </div>
                </div>
            </div>
        )
    }
    componentDidMount() {
        $("#player").bind($.jPlayer.event.timeupdate, (e) => {
            duration = e.jPlayer.status.duration;
            this.setState({
                progress: e.jPlayer.status.currentPercentAbsolute,
                volume: e.jPlayer.options.volume * 100
            });
        });
    }
    componentWillUnmount() {
        $('#jplayer').unbind($.jPlayer.event.timeupdate)
    }
}
export default Player;
