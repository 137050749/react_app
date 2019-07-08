import React,{Component} from 'react';

import {Link} from 'react-router-dom';

import './note.css';

export default class extends Component{

    render(){
        return(
            <Link to="/detail/123">
            <div className="note">
                <img src="//ci.xiaohongshu.com/633277c1-c2fa-3217-b884-a1cd970b80e0?imageView2/2/w/400/q/50/format/jpg"/>
                <div className="note-title">做了鼻子和眼，变成了混血</div>
            
            </div>
            </Link>
            )
    }
}