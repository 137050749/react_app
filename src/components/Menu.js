import React,{Component} from 'react';
import {NavLink} from 'react-router-dom';
import './menu.css';
export default class extends Component{

    render(){
        return (
            <div className="menu">
                <NavLink to="/rec"   activeClassName="active"> 推荐 </NavLink>
                <NavLink to="/fashion" activeClassName="active"> 时尚 </NavLink>
                <NavLink to="/makeup" activeClassName="active"> 美妆 </NavLink>
                <NavLink to="/foods" activeClassName="active"> 美食 </NavLink>
            </div>)
    }
}