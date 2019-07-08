import React,{Component} from 'react';

import Note from './Note';
import './hotnotes.css';

export default class extends Component{

    render(){
        return(<div className="hot-notes">
              <div className="colum colum-left">
                <Note/>
                <Note/>
              
              </div>
              <div className="colum colum-right">
              <Note/>
              <Note/>
              </div>
            </div>)
    }
}