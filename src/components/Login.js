import React, {Component} from 'react';
import Blink from "./Blink.js";

export default class Login extends Component {
    show(e){
        console.log(e.target.value);
    }
    render(){
        return(
            <div>
                <Blink text={"Login Page"}/>
            </div>
        );
    }
}