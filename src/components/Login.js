import React, {Component} from 'react';

export default class Login extends Component {
    show(e){
        console.log(e.target.value);
    }
    render(){
        return(
            <div>
                <h1>{"Login Page"}</h1>
            </div>
        );
    }
}