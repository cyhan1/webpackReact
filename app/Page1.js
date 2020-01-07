import React, { Component } from 'react';
import config_txt from '../utils/config.json';
import '../state/Greeter.css'
import { Link } from 'react-router-dom';

export default class Page1 extends Component {
    render() {
        return ( 
            <div  > 
                { config_txt.greetText } 
                <p>page1</p>
                <Link to="/">Greeter</Link>&nbsp;
                    <Link to="/page1">Page1</Link>&nbsp;
                    <Link to="/page2">Page2</Link>&nbsp;
            </div >
         );
        }
    }