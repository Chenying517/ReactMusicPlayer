import React, { Component } from 'react';
import { render } from 'react-dom';
import Header from './header';
import Player from './player'
import Progress from './progress'
import MusicList from '../../static/config'
import ListItem from './listItem'


let duration = null;
class Index extends Component {

    constructor(props) {
        super(props)
        this.state = {
            MUSIC_LIST: MusicList,
            currentMusicList: MusicList[3]
        }
    }

    render() {
        return (
            <div>
                <Header />
                {/* <Player MusicListState={this.state.currentMusicList} /> */}
                <ListItem
                    MUSIC_LIST={this.state.MUSIC_LIST}
                    currentMusicList={this.state.currentMusicList}
                ></ListItem>
            </div>
        )
    }
    componentDidMount() {
        $("#player").jPlayer({
            ready: function () {
                $(this).jPlayer("setMedia", {
                    mp3: 'http://oj4t8z2d5.bkt.clouddn.com/%E6%88%91%E8%A6%81%E4%BD%A0.mp3'
                })
                    .jPlayer('play')
                    ;
            },
            supplied: "mp3",
            wmode: "window",
            useStateClassSkin: true,
            volume: 0.1
        });
    }
}
export default Index;
