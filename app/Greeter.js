

import React, { Component } from 'react';
import config_txt from '../utils/config.json';
import { Link } from 'react-router-dom';
import '../state/Greeter.css';
import Page1 from './Page1';
import Page2 from './Page2'

export default class Greeter extends Component {
    render() {
        return (
        
              <section className='container is-vertical clear'>
                <header className='box box-between'>
                    <h1>模糊搜索</h1>
                    <div>
                        <label>  <input type='radio' value='1' name='lange' /> 中文 </label>
                        <label>  <input type='radio' value='2' name='lange'/> 英文 </label>
                        <label>  <input type='radio' value='3' name='lange'/> 其它 </label>
                    </div>
                </header>
                <main className='box'>
                    <div> <Page1 /></div>
                    <div><Page2 /></div>
                </main>
              </section>
       

        );
        }
    }