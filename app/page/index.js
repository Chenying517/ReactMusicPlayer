import React, { Component } from 'react';
import { render } from 'react-dom';
import Header from './header';
import Player from './player'
import Progress from './progress'
import MusicList from '../../static/config'

let duration = null;
class Index extends Component {

    constructor(props) {
        super(props)
        this.state = {
            MusicListState: MusicList[1]
        }
    }

    render() {
        return (
            <div>
                <Header />
                <Player MusicListState={this.state.MusicListState} />
            </div>
        )
    }
    componentDidMount() {
        $("#player").jPlayer({
            ready: function () {
                $(this).jPlayer("setMedia", {
                    mp3: 'http://oj4t8z2d5.bkt.clouddn.com/%E9%A3%8E%E7%BB%A7%E7%BB%AD%E5%90%B9.mp3'
                })
                    .jPlayer('play')
                    ;
            },
            supplied: "mp3",
            wmode: "window",
            useStateClassSkin: true,
            volume:0.1
        });
    }
}
export default Index;
