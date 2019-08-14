import React from 'react';
import styled from 'styled-components';

import {connect} from 'react-redux';

import kick from '../audio/kick.wav';
import clap from '../audio/clap.wav';
import snare from '../audio/snare.wav';
import hatLoop from '../audio/hat loop.wav';
import crash from '../audio/crash.wav';
import breakfill from '../audio/breakfill.wav';
import perc from '../audio/perc.wav';
import tomfill from '../audio/tomfill.wav';
import fx from '../audio/fx.wav';

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
        console.log(this.props.currentMode);
        if(this.props.padOn == true) {

            let audio = new Audio();
            
            audio.volume = this.props.adjustVolume / 100;

            if(event.keyCode === 81 || arguments[1] === "Q"){
                audio.src = kick;
                console.log(this.props);
                this.props.displaySound("Kick");
            }  else if (event.keyCode === 87 || arguments[1] === "W") {
                audio.src = clap;
                this.props.displaySound("Snare");
            } else if (event.keyCode === 69 || arguments[1] === "E") {
                audio.src = snare;
                this.props.displaySound("Clap");
            } else if (event.keyCode === 65 || arguments[1] === "A") {
                audio.src = hatLoop;
                this.props.displaySound("Hat Loop");
            } else if (event.keyCode === 83 || arguments[1] === "S") {
                audio.src = crash;
                this.props.displaySound("Crash");
            } else if (event.keyCode === 68 || arguments[1] === "D") {
                audio.src = breakfill;
                this.props.displaySound("Break-Fill");
            } else if (event.keyCode === 90 || arguments[1] === "Z") {
                audio.src = perc;
                this.props.displaySound("Perc");
            } else if (event.keyCode === 88 || arguments[1] === "X") {
                audio.src = tomfill;
                this.props.displaySound("Tom Fill");
            } else if (event.keyCode === 67 || arguments[1] === "C") {
                audio.src = fx;
                this.props.displaySound("FX");
            }
            
            audio.play();
            console.log(this.props.adjustVolume);
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
                        <button type="button" className="btn pad-button" onClick = {event => this.handleKeyPress(event, "Q")}>Q</button>
                        <button type="button" className="btn pad-button" onClick = {event => this.handleKeyPress(event, "W")}>W</button>
                        <button type="button" className="btn pad-button" onClick = {event => this.handleKeyPress(event, "E")}>E</button>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                        <button type="button" className="btn pad-button" onClick = {event => this.handleKeyPress(event, "A")}>A</button>
                        <button type="button" className="btn pad-button" onClick = {event => this.handleKeyPress(event, "S")}>S</button>
                        <button type="button" className="btn pad-button" onClick = {event => this.handleKeyPress(event, "D")}>D</button>
                    </div>
                </div>
        
                <div className="row">
                    <div className="col-md-12">
                        <button type="button" className="btn pad-button" onClick = {event => this.handleKeyPress(event, "Z")}>Z</button>
                        <button type="button" className="btn pad-button" onClick = {event => this.handleKeyPress(event, "X")}>X</button>
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
        adjustVolume: state.volumeNumber.volumeControl,
        currentMode: state.machineMode.mode
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
