import React, {Component} from 'react';
import App from './App'
import Chirp from './Chirp'

class Newpost extends Component {
    state = {
        text: ''
    }
    onInputChange = (value) => {
        this.setState({ text: value });
    }
    onButtonClick = () => {
        this.setState( {isChirped: true} );
        console.log()
    }
    newChirp = () => {
        if (this.state.isChirped === true) {
        return(
            <Chirp text='hi hi hi' username="me" avatar="https://ae01.alicdn.com/kf/HTB1hE4QQFXXXXXqXVXXq6xXFXXXq/2017-Wall-Sticker-Decal-children-room-Gaming-Gamer-Joystick-Video-Computer-Game-Home-Decor-Wallpaper-Wall.jpg"/>
        )
        }
    }
    render() {
        return(
        <div Style="height: 100px;">
            <input 
            Style="color: white; background-color: #1E1E1E;  padding: 25px; width: 70%; height: 100px; border-style: solid; boder-width: thick; border-color: black;" placeholder="What's on your mind?"
            onChange = { (event) => this.onInputChange(event.target.value)}
            ></input>
            <button
                Style="background-color: #0084b4; height: 45px; width: 105px; border-radius: 12px;"
                onClick = { (event) => this.onButtonClick()}>Chirp
            </button>
            {this.newChirp()}
        </div>
        )
    }
}

export default Newpost;