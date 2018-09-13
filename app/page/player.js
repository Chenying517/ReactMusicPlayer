import React, { Component } from 'react'
import { render } from 'react-dom';
import Progress from './progress'
import { link } from 'react-router'

let duration = null;

class Player extends Component {
    constructor(props) {
        super(props)
        this.state = {
            progress: 0,
            volume: 0,
            isplay: true
        }
        this.play = this.play.bind(this)
    }
    onchangeProgressHandle(progress) {
        var changeTime = duration * progress / 100;
        console.log(duration + " " + "" + progress)
        $('#player').jPlayer('play', changeTime);
    }
    onchangevolumeHandle(progress) {
        $('#player').jPlayer('volume', progress / 100)
    }
    play() {
        if (this.state.isplay) {
            $('#player').jPlayer('pause');
        } else {
            $('#player').jPlayer('play');
        }
        this.setState({ isplay: !this.state.isplay });
    }
    render() {
        return (
            <div className="player">
                <h1 className="caption">
                    我的私人音乐坊 &gt;
                    <Link to="/listItem">我的私人音乐坊 &gt;</Link>
                </h1>
                <div className="mt20 row">
                    <div className="musicfomt">
                        <p className='muscNmae'>{this.props.MusicListState.title}</p>
                        <p>{this.props.MusicListState.artist}</p>
                        <div className='row'>
                            <span>-3:20</span>
                            <div style={{ height: 30 }}>
                                <div style={{ height: 10, lineHeight: '10px' }}>
                                    <i className="icon-volume rt" style={{ top: 5, left: -20 }}></i>
                                    <Progress
                                        progress={this.state.volume}
                                        onProgressChange={this.onchangevolumeHandle}
                                        barColor={'#aaa'}
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
                            <i className={`icon ml20 ${this.state.isplay ? 'pause' : 'play'}`} onClick={this.play}></i>
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
