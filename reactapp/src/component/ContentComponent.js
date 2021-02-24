import React, { Component } from 'react';
import logo from '../logo.svg';

class ContentComponent extends Component {
    render() {
        const userList = this.props.userList;
        let user = '';
        console.log(userList);

        if (userList === "no_login") {
            user = userList;
        } else {
            user = userList.map((item, key) => {
                return <p key={key}>id : {item.user_id}, pw: {item.user_pw}</p>
            });
        }

        console.log(user);

        return (
            <div>
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    {user}
                </header>
            </div>
        )
    }
}

export default ContentComponent;