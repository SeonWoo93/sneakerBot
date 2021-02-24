import React, { Component } from 'react';

import TitleContainer from "../containers/TitleContainer";
import ContentContainer from "../containers/ContentContainer";

class MainComponent extends Component {
    render() {
        return (
            /*<div>
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                </header>
            </div>*/
            <div>
                <TitleContainer/>
                <ContentContainer/>
            </div>

        )
    }
}

export default MainComponent;