import React, {Component} from 'react';
import {Jumbotron} from 'react-bootstrap';

export default class Home extends Component {
    show(e){
        console.log(e.target.value);
        
    }
    render(){
        // <a target="#blank" href="https://www.indiamart.com/tsk-india-electronics/products.html">
        return(
            <div style={{padding:10}}>
                <Jumbotron style={{padding:16, textAlign:'center'}}>
                    <h2>Site Under Construction</h2>
                    <h2>Thanks for your interest in TSK India Electronics</h2>
                    <p>Please visit our B2B page below </p>
                    <hr/>
                    <p>
                    <a style={{backgroundColor:'#00a699',color: '#FFF', padding: 20, borderRadius: 10, boxShadow: '1px 1px 10px #AFAFAF'}}
                        target="#blank"
                        href="https://www.indiamart.com/tsk-india-electronics/">
                        Explore our products!!!
                    </a>
                    </p>
                </Jumbotron>
            </div>
        );
    }
}