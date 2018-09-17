import React from 'react'
import ReactDom from 'react-dom'

class ListItem extends React.Component {
    playMusic(item, e) {
		PubSub.publish('PLAY_MUSIC', item);
	}
    render() {
        let musicList = null;
        
        let list = this.props.MUSIC_LIST.map((item) => {
           
            return (
                <li className={`row components-listitem${this.props.currentMusicList===item ? ' focus' : ''}`}  onClick={this.playMusic.bind(this, item)} 
                >
                    <p><span className="bold">{item.title}</span>  -  {item.artist}</p>
                    <p className="-col-auto delete"  ></p>
                </li>
            )
        })
        return (
            <ul>
                {list}
            </ul>

        )
    }

}
export default ListItem