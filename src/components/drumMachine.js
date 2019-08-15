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

import AChord from '../audio/A_01.wav';
import BChord from '../audio/B_01.wav';
import CChord from '../audio/C_01.wav';
import DChord from '../audio/D_01.wav';
import EChord from '../audio/E_01.wav';
import FChord from '../audio/F_01.wav';
import GChord from '../audio/G_01.wav';

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
                if(this.props.currentMode == 'PIANOMODE') {
                    audio.src = AChord;
                    this.props.displaySound("A");
                } else {
                    audio.src = kick;
                    this.props.displaySound("Kick");
                }

            }  else if (event.keyCode === 87 || arguments[1] === "W") {
                if(this.props.currentMode == 'PIANOMODE') {
                    audio.src = BChord;
                    this.props.displaySound("B");
                } else {
                    audio.src = clap;
                    this.props.displaySound("Snare");
                }
                
            } else if (event.keyCode === 69 || arguments[1] === "E") {
                if(this.props.currentMode == 'PIANOMODE') {
                    audio.src = CChord;
                    this.props.displaySound("C");
                } else {
                    audio.src = snare;
                    this.props.displaySound("Clap");
                }
                
            } else if (event.keyCode === 65 || arguments[1] === "A") {
                if(this.props.currentMode == 'PIANOMODE') {
                    audio.src = DChord;
                    this.props.displaySound("D");
                } else {
                    audio.src = hatLoop;
                    this.props.displaySound("Hat Loop");
                }
               
            } else if (event.keyCode === 83 || arguments[1] === "S") {
                if(this.props.currentMode == 'PIANOMODE') {
                    audio.src = EChord;
                    this.props.displaySound("E");
                } else {
                    audio.src = crash;
                    this.props.displaySound("Crash");
                }
            } else if (event.keyCode === 68 || arguments[1] === "D") {
                if(this.props.currentMode == 'PIANOMODE') {
                    audio.src = FChord;
                    this.props.displaySound("F");
                } else {
                    audio.src = breakfill;
                    this.props.displaySound("Break-Fill");
                }
            } else if (event.keyCode === 90 || arguments[1] === "Z") {
                if(this.props.currentMode == 'PIANOMODE') {
                    audio.src = GChord;
                    this.props.displaySound("G");
                } else {
                    audio.src = perc;
                    this.props.displaySound("Perc");
                }
                
            } else if (event.keyCode === 88 || arguments[1] === "X") {
                if(this.props.currentMode == 'PIANOMODE') {
                    audio.src = clap;
                    this.props.displaySound("Snare");
                } else {
                    audio.src = tomfill;
                    this.props.displaySound("Tom Fill");
                }
                
            } else if (event.keyCode === 67 || arguments[1] === "C") {
                if(this.props.currentMode == 'PIANOMODE'){
                    audio.src = snare;
                    this.props.displaySound("Clap");
                } else {
                    audio.src = fx;
                    this.props.displaySound("FX");
                }
                
            }
            
            audio.play();

            setTimeout( () => {
                this.props.displaySound(" ", this.props.adjustVolume);
            }, 1000);
        }
        
    }

    render() {
    
        return (
            <Column className="col-lg-6" id="drum-machine">
                <div className="row">
                    <div className="col-md-12">
                        <button type="button" className="btn drum-pad" id="kick-A" onClick = {event => this.handleKeyPress(event, "Q")}>Q</button>
                        <button type="button" className="btn drum-pad" id="snare-A" onClick = {event => this.handleKeyPress(event, "W")}>W</button>
                        <button type="button" className="btn drum-pad" id="clap-A" onClick = {event => this.handleKeyPress(event, "E")}>E</button>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                        <button type="button" className="btn drum-pad" id="hatLoop-D" onClick = {event => this.handleKeyPress(event, "A")}>A</button>
                        <button type="button" className="btn drum-pad" id="crash-E" onClick = {event => this.handleKeyPress(event, "S")}>S</button>
                        <button type="button" className="btn drum-pad" id="breakFill-F" onClick = {event => this.handleKeyPress(event, "D")}>D</button>
                    </div>
                </div>
        
                <div className="row">
                    <div className="col-md-12">
                        <button type="button" className="btn drum-pad" id="perc-G"onClick = {event => this.handleKeyPress(event, "Z")}>Z</button>
                        <button type="button" className="btn drum-pad" id="tomFill-Snare" onClick = {event => this.handleKeyPress(event, "X")}>X</button>
                        <button type="button" className="btn drum-pad" id="FX-Clap" onClick = {event => this.handleKeyPress(event, "C")}>C</button>
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
