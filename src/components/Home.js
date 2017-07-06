import React, {Component} from 'react';
import Blink from "./Blink.js";

export default class Home extends Component {
    show(e){
        console.log(e.target.value);
    }
    render(){
        return(
            <div>
                <Blink text={"Home Page"}/>
            </div>
        );
    }
}