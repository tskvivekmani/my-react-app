import React, {Component} from 'react';
import {Jumbotron, Button, ButtonGroup} from 'react-bootstrap';

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
                    <p>
                    <hr/>
                    <a style={{backgroundColor:'blue',color: 'yellow', padding: 20, borderRadius: 10, boxShadow: '1px 1px 10px #AFAFAF'}} target="#blank" href="https://www.tradeindia.com/Seller-7279522-TSK-INDIA-ELECTRONICS/product-services.html">
                        Explore our products!!!
                    </a>
                    </p>
                </Jumbotron>
            </div>
        );
    }
}