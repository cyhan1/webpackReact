import React, { Component } from 'react';
import config_txt from '../utils/config.json';
import {Link} from 'react-router-dom';
import '../state/Greeter.css'


export default class Page2 extends Component {
    render() {
        return ( 
            <div  > 
                { config_txt.greetText } 
                <p>page2</p>
                <Link to="/">Greeter</Link>&nbsp;
                    <Link to="/page1">Page1</Link>&nbsp;
                    <Link to="/page2">Page2</Link>&nbsp;
            </div > 
        );
        }
    }