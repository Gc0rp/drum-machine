import React from 'react';
import styled from 'styled-components';

import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import kick from '../audio/kick.mp3';
import clap from '../audio/clap.wav';
import snare from '../audio/snare.wav';


const Column = styled.div`
    border: 1px solid red;
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
        let audio = new Audio();

        console.log(this.props.on);
        if(event.keyCode == 81 || arguments[1] == "Q"){
            audio.src = kick;
        }  else if (event.keyCode == 87 || arguments[1] == "W") {
            audio.src = clap;
        } else if (event.keyCode == 69 || arguments[1] == "E") {
            audio.src = snare;
        }
        

        audio.play();
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
        on: state.padOn
    };
};

export default connect(mapStateToProps)(drumMachine);
