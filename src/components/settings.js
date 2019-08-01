import React from 'react';
import styled from 'styled-components';

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
    }

    render(){
        return(
            <Column className="col-lg-6">
                <div className="row">
                    <div className="col-md-12">
                        <div className="btn-group">
                            <label className="btn btn-primary">
                                <input type="radio" name="options" id="turnOn" /> On 
                            </label>   

                            <label className="btn btn-primary">
                                <input type="radio" name="options" id="turnOff" /> Off 
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

            </Column>
        );
    }

}

export default Settings;