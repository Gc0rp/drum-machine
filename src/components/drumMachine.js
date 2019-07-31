import React from 'react';
import styled from 'styled-components';
import kick from '../audio/kick.mp3';

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
        if(event.keyCode == 81 || event.value == "Q"){
            const k = document.getElementById("kick");
            k.play();
        }
    }



    render() {
    
        return (
            <Column className="col-lg-6">
                <div className="row">
                    <div className="col-md-12">
                        <button type="button" className="btn pad-button" onClick = {event => this.handleKeyPress(event, "Q")} >Q</button>
                        <audio id="kick" style={{display: "none"}} src={kick}></audio>
                        <button type="button" className="btn pad-button">W</button>
                        <button type="button" className="btn pad-button">E</button>
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

export default drumMachine;
