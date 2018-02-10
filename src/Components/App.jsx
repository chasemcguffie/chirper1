import React, { Component } from 'react';
import Chirp from './Chirp'


class App extends Component {
    state = {
        numChildren: 0,
        chirpText: '',
        chirps: [
        {
            id: 1351,
            text: 'this is a tweet lol what else do i say ',
            username: 'animelover',
            avatar: 'https://avatarfiles.alphacoders.com/699/69905.png',
        },
        {
            id: 1501,
            text: 'my name is tyler and this is a chirp',
            username: 'tyler',
            avatar: 'https://files.slack.com/files-pri/T5QB8JC78-F91UJ34KB/asdf.png',
        },
        {
            id: 1520,
            text: 'goodbye world',
            username: 'gothman',
            avatar: 'http://i0.kym-cdn.com/photos/images/original/001/287/960/174.jpg',
        },
        ],
        newChirps: []
    }
    onInputChange = (value) => {
        console.log(this.state.newChirps)
        this.setState({ chirpText: value });
    }
    onButtonClick = () => {
        this.setState({
            newChirps: [{
                id: 1520,
                text: this.state.chirpText,
                username: 'gothman',
                avatar: 'http://i0.kym-cdn.com/photos/images/original/001/287/960/174.jpg',
            },
            ...this.state.newChirps],
        })
        return (
            <Chirp list={this.state.chirps[3]} />
        )
    }
    newChirp = () => {
        if (this.state.isChirped === true) {
        return(
            <Chirp text={this.state.text} username="me" avatar="https://ae01.alicdn.com/kf/HTB1hE4QQFXXXXXqXVXXq6xXFXXXq/2017-Wall-Sticker-Decal-children-room-Gaming-Gamer-Joystick-Video-Computer-Game-Home-Decor-Wallpaper-Wall.jpg"/>
        )
        }
    }
    componentDidMount = () => {
        this.setState({isChirped: false})
    }
    render () {
        const chirps = this.state.chirps.map( (chirp) => {
            return (
                <div Style=" color: white; background-color: #333;  padding: 25px; width: 70%; height: 160px; border-style: solid; boder-width: 2px; border-color: black;">
                    <span Style="height: 200px; width: 100px; margin: 0px;">
                    <img className="" src={chirp.avatar} alt="avatar" Style="height: 100px; width: 100px; border-radius: 100px;"></img>
                    </span>
                    <div Style="position: relative; bottom: 70px;">
                    <div Style="position: relative; left: 124px;">
                    <span className="font-weight-bold">{chirp.username}</span>
                    <span> @{chirp.username} </span>
                    </div>
                    <p Style="padding-left: 125px;"> {chirp.text} </p>
                    <i className={this.state.active} onClick={ () => { this.toggleClass() } } Style="padding-left: 125px;"></i>
                    </div>
                    <p className="fa fa-twitter" Style="float: right"></p>
                </div>
            )
        })
        const newChirps = this.state.newChirps.map ( (chirp) => {
            return (
                <div Style=" color: white; background-color: #333;  padding: 25px; width: 70%; height: 160px; border-style: solid; boder-width: 2px; border-color: black;">
                    <span Style="height: 200px; width: 100px; margin: 0px;">
                    <img className="" src='https://avatarfiles.alphacoders.com/699/69905.png' alt="avatar" Style="height: 100px; width: 100px; border-radius: 100px;"></img>
                    </span>
                    <div Style="position: relative; bottom: 70px;">
                    <div Style="position: relative; left: 124px;">
                    <span className="font-weight-bold">me</span>
                    <span> @me </span>
                    </div>
                    <p Style="padding-left: 125px;"> {chirp.text} </p>
                    <i className={this.state.active} onClick={ () => { this.toggleClass() } } Style="padding-left: 125px;"></i>
                    </div>
                    <p className="fa fa-twitter" Style="float: right"></p>
                </div>
            )
        })
        return (
                <div Style="height: 100px;">
                    <input 
                        Style="color: white; background-color: #1E1E1E;  padding: 25px; width: 70%; height: 100px; border-style: solid; boder-width: thick; border-color: black;" placeholder="What's on your mind?"
                        onChange = { (event) => this.onInputChange(event.target.value)}
                    ></input>
                    <button
                        Style="background-color: #0084b4; height: 45px; width: 105px; border-radius: 12px;"
                        onClick = { (event) => this.onButtonClick()}>Chirp
                    </button>
                    { newChirps }
                    { chirps }
            </div>
        )
    }
}

export default App;