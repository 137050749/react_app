import React,{Component} from 'react';

import Menu from '../components/Menu';
import Banner from '../components/Banner';
import HotNotes from '../components/HotNotes';
export default class extends Component{

    render(){
        return(<div>
            <Menu/>
            <Banner/>
            <HotNotes/>
            </div>)
    }
}