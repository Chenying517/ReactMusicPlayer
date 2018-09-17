import React, { Component } from 'react';
import { render } from 'react-dom';
import Header from './header';
import Player from './player'
import Progress from './progress'
import MusicList from '../../static/config'
import ListItem from './listItem'
import Pubsub from 'pubsub-js'

let duration = null;
class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            MUSIC_LIST: MusicList,
            currentMusicList: MusicList[3],
            repeatType: 'cycle'
        }
    }

    render() {
        return (
            <div>
                <Header />
                <Player
                    MusicListState={this.state.currentMusicList}
                ></Player>
                <ListItem
                    currentMusicList={this.state.currentMusicList}
                    MUSIC_LIST={this.state.MUSIC_LIST}
                >
                </ListItem>
            </div>
        )
    }
    componentDidMount() {
        // $("#player").jPlayer({
        //     ready: function () {
        //         $(this).jPlayer("setMedia", {
        //             mp3: 'http://oj4t8z2d5.bkt.clouddn.com/%E6%88%91%E8%A6%81%E4%BD%A0.mp3'
        //         })
        //             .jPlayer('play')
        //             ;
        //     },
        //     supplied: "mp3",
        //     wmode: "window",
        //     useStateClassSkin: true,
        //     volume: 0.1
        // });
        $("#player").jPlayer({
			supplied: "mp3",
            wmode: "window",
            volume: 0.1,
			useStateClassSkin: true
        });
        this.playMusic(this.state.MUSIC_LIST[0]);
        PubSub.subscribe('PLAY_MUSIC', (msg, item) => {
			this.playMusic(item);
		});
        $("#player").bind($.jPlayer.event.ended, (e) => {
            this.playWhenEnd();
        })
        Pubsub.subscribe('PLAY_NEXT', () => this.playNext('next'))
        Pubsub.subscribe('PLAY_PREV', () => this.playNext('prev'))
        Pubsub.subscribe('PLAY_MUSIC', (msg, item) => this.playMusic())
    }
    playNext(type) {
        let index = this.findMusicIndex(this.state.currentMusitItem);
        if (type == 'next') {
            index = (index + 1) % this.state.MUSIC_LIST.length;
        }else {
			index = (index + this.state.MUSIC_LIST.length - 1) % this.state.MUSIC_LIST.length;
        }
        let musicItem = this.state.MUSIC_LIST[index];
		this.setState({
			currentMusicList: musicItem
		});
		this.playMusic(musicItem);
    }
    playMusic(item){
        $("#player").jPlayer("setMedia", {
			mp3: item.file
		}).jPlayer('play');
		this.setState({
			currentMusicList: item
		});
    }
    findMusicIndex(music) {
		let index = this.state.MUSIC_LIST.indexOf(music);
		return Math.max(0, index);
    }
    playWhenEnd() {
		if (this.state.repeatType === 'random') {
			let index = this.findMusicIndex(this.state.currentMusicList);
			let randomIndex = randomRange(0, this.state.MUSIC_LIST.length - 1);
			while(randomIndex === index) {
				randomIndex = randomRange(0, this.state.MUSIC_LIST.length - 1);
			}
			this.playMusic(this.state.MUSIC_LIST[randomIndex]);
		} else if (this.state.repeatType === 'once') {
			this.playMusic(this.state.currentMusicList);
		} else {
			this.playNext();
		}
	}
}
export default App;
