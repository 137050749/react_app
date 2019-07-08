import React,{Component} from 'react';

export default class extends Component{

    componentDidMount(){
        console.log("id:",this.props.match.params.id);
    }
    render(){
        return(<div>
               
                <h1>详情页</h1>
            
            </div>)
    }
}