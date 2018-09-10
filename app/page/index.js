import React, { Component } from 'react';
import { render } from 'react-dom';
import Header from './header';
import Player from './player'
import Progress from './progress'

let duration = null;
class Index extends Component {
   
    render() {
        return (
            <div>
                <Header />
                <Player />
            </div>
        )
    }
    componentDidMount() {
        $("#player").jPlayer({
            ready: function () {
                $(this).jPlayer("setMedia", {
                    mp3: "http://oj4t8z2d5.bkt.clouddn.com/%E9%AD%94%E9%AC%BC%E4%B8%AD%E7%9A%84%E5%A4%A9%E4%BD%BF.mp3"
                })
                    // .jPlayer('play')
                    ;
            },
            supplied: "mp3",
            wmode: "window",
            useStateClassSkin: true
        });
    }
}
export default Index;
