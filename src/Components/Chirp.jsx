import React, {Component} from 'react';

class Chirp extends Component {
    constructor (props) {
        super()
        this.state = ( {text: '', active: "fa fa-heart-o" });
    }
    toggleClass() {
        this.setState({ active: "fa fa-heart text-danger" });
    }
    
    render () {
        return (
        <div Style=" color: white; background-color: #333;  padding: 25px; width: 70%; height: 160px; border-style: solid; boder-width: 2px; border-color: black;">
            <span Style="height: 200px; width: 100px; margin: 0px;">
            <img className="" src={this.props.list.avatar} alt="avatar" Style="height: 100px; width: 100px; border-radius: 100px;"></img>
            </span>
            <div Style="position: relative; bottom: 70px;">
            <div Style="position: relative; left: 124px;">
            <span className="font-weight-bold">{this.props.list.username}</span>
            <span> @{this.props.list.username} </span>
            </div>
            <p Style="padding-left: 125px;"> {this.props.list.text} </p>
            <i className={this.state.active} onClick={ () => { this.toggleClass() } } Style="padding-left: 125px;"></i>
            </div>
            <p className="fa fa-twitter" Style="float: right"></p>
        </div>
        )
    }
}
export default Chirp;