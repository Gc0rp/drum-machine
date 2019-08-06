import React from 'react';
import styled from 'styled-components';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Column = styled.div`
    border: 1px solid red;
    text-align: center;
`;

const DisplaySound = styled.div`

    background-color: white;
    min-width: 80px;
    max-width: 80px;
    min-height: 50px;
    text-align: center;
    margin: auto;
    margin-top: 20px;
`;

class Settings extends React.Component {

    constructor(props){
        super(props);

        this.state = {

        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        console.log(this.props);

        this.props.turnPadOff();
    }

    render(){
        return(
            <Column className="col-lg-6">
                <div className="row">
                    <div className="col-md-12">
                        <div className="btn-group">
                            <label className="btn btn-primary">
                                <input type="radio" name="options" id="turnOn" onClick={this.handleClick}/> On 
                            </label>   

                            <label className="btn btn-primary">
                                <input type="radio" name="options" id="turnOff" onClick={this.handleClick}/> Off 
                            </label>   
                    
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                        
                        <DisplaySound>
                            <p>Test</p>
                        </DisplaySound>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                        <label htmlFor="volume-slider">volume</label>
                        <input type="range" className="custom-range" min="0" max="100" id="volume-range"/>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                        <div className="btn-group">
                            <label className="btn btn-primary">
                                <input type="radio" name="options" id="piano" /> Piano 
                            </label>   

                            <label className="btn btn-primary">
                                <input type="radio" name="options" id="drums" /> Drums 
                            </label>   
                    
                        </div>
                    </div>
                </div>

            </Column>
        );
    }

}

const connectStateToProps = (state) => {
    return {
        padOn: state.padOn
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        turnPadOff: () => {
            dispatch({type: 'TURNOFF'});
        }
    };
};
export default connect(connectStateToProps, mapDispatchToProps)(Settings);