import React from 'react';
import styled from 'styled-components';

import {connect} from 'react-redux';

import kick from '../audio/kick.mp3';
import clap from '../audio/clap.wav';
import snare from '../audio/snare.wav';

import {displaySound} from '../actions/displaySound';

const Column = styled.div`
    
`;

class drumMachine extends React.Component {
    
    constructor(props){
        super(props);

        this.state = {

        };
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    componentDidMount(){
        document.addEventListener("keydown", this.handleKeyPress);
    }
    
    handleKeyPress(event){

        if(this.props.padOn) {

            let audio = new Audio();
            
            audio.volume = 0.6;
            if(event.keyCode === 81 || arguments[1] === "Q"){
                audio.src = kick;
                console.log(this.props);
                this.props.displaySound("kick", this.props.adjustVolume);
            }  else if (event.keyCode === 87 || arguments[1] === "W") {
                audio.src = clap;
                this.props.displaySound("snare");
            } else if (event.keyCode === 69 || arguments[1] === "E") {
                audio.src = snare;
                this.props.displaySound("clap");
            }
            
            audio.play();
            console.log(this.props);
            setTimeout( () => {
                this.props.displaySound(" ", this.props.adjustVolume);
            }, 1000);
        }
        
    }

    render() {
    
        return (
            <Column className="col-lg-6">
                <div className="row">
                    <div className="col-md-12">
                        <button type="button" className="btn pad-button" onClick = {event => this.handleKeyPress(event, "Q")} >Q</button>
                        <button type="button" className="btn pad-button" onClick = {event => this.handleKeyPress(event, "W")}>W</button>
                        <button type="button" className="btn pad-button" onClick = {event => this.handleKeyPress(event, "E")}>E</button>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                        <button type="button" className="btn pad-button">A</button>
                        <button type="button" className="btn pad-button">S</button>
                        <button type="button" className="btn pad-button">D</button>
                    </div>
                </div>
        
                <div className="row">
                    <div className="col-md-12">
                        <button type="button" className="btn pad-button">Z</button>
                        <button type="button" className="btn pad-button">X</button>
                        <button type="button" className="btn pad-button">C</button>
                    </div>
                </div>
            </Column>
        );
    }  

}

const mapStateToProps = (state) => {
    return {
        padOn: state.turnDrumPadOn.padOn,
        soundPlayed: state.showSound.soundPlayed,
        adjustVolume: state.volumeNumber.volumeControl
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        displaySound: (message, volume) => {
            dispatch(displaySound(message, volume));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(drumMachine);
