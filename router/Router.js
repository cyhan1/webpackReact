import React, { Component,PropTypes } from 'react';
import ReactDOM from 'react-dom';
// import { render } from 'react-dom';
import { HashRouter , Route, Switch,Link } from 'react-router-dom';
/**
 * HashRouter 和 BrowserRouter的区别
 * 其实从字面意思，大概已经知道，一个是url中已#的形式进行页面转跳，相当于多页面；
 * BrowserRouter，相当于页面刷新，因此，此处我们需要使用HashRouter
 * */ 

import Page1 from '../app/Page1';
import Page2 from '../app/Page2';
import Greeter from '../app/Greeter';


export default class Router extends Component {
    
    render() {
        return ( 
            <HashRouter > { /* Switcth组件作用是：只展示第一个匹配到的路由页面内容,同时这里的switch可以使用div */ } 
                <Switch>
                    {/* <Link to="/">Greeter</Link>&nbsp;
                    <Link to="/page1">Page1</Link>&nbsp;
                    <Link to="/page2">Page2</Link>&nbsp;
                    <hr/> */}
                    <Route path="/" exact component={Greeter}></Route>
                    <Route path="/page1" component={Page1}></Route>
                    <Route path="/page2" component={Page2}></Route>
                </Switch>
            </HashRouter>
        )
    }
}