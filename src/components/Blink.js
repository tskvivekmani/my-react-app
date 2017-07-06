import React, {Component} from 'react';

class Blink extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            isBlinking: true
        }
        setInterval(() => {
            this.setState({
                isBlinking: !this.state.isBlinking
            });
        }
        ,1000);
    }
    
    render(){
        var show = this.state.isBlinking?'block':'none';
        return(
            <h3 style={{display: show}}>{this.props.text}</h3>
        );
    }
}

export default Blink;